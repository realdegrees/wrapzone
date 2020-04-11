import { Platform, PlayerData } from "./@types/player";
import fetch from "node-fetch";
import { Mode, ModeStat, ModeProperties } from "mode";
import { GlobalStat, GlobalStatProperties } from "stat";
import { WeaponProperties, EquipProperties, Weapon, Equip, EquipProperty, WeaponProperty } from "item";

const API_ROUTE = 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/%PLATFORM%/gamer/%USER%/profile/type/br'

const fetchPlayerData = (platform: Platform, userName: string): Promise<PlayerData> => {
    const target = API_ROUTE
        .replace(/%PLATFORM%/, platform)
        .replace(/%USER%/, userName)
        .replace(/#/, '%23');

    return fetch(target)
        .then((res) => res.json())
        .then((json) => json.data);
}

class Wrapzone {
    public constructor(private platform: Platform, private userName: string, private playerData: PlayerData) {
    }
    /**
     * Fetches the playerdata and saves it in the instance
     * @param platform The platform the player is on
     * @param userName The name of the user (battle.net also requires id, e.g. name#12345)
     */
    public async setPlayerData(platform: Platform, userName: string) {
        this.playerData = await fetchPlayerData(platform, userName);
    }
    /**
     * Re-runs the initial request in order to get updated data
     */
    public async updatePlayerData() {
        this.setPlayerData(this.platform, this.userName);
    }
    /**
     * Returns the raw json that was retrieved from the cod API
     */
    public get raw(): PlayerData {
        return this.playerData;
    }

    public getModeStats(mode: Mode): ModeProperties | undefined {
        return this.playerData.lifetime.mode[mode];
    }
    public getGlobalStats(): GlobalStatProperties {
        return this.playerData.lifetime.all.properties;
    }
    public getGlobalStat(stat: GlobalStat): number |undefined {
        return this.getGlobalStats()[stat];
    }
    public getModeStat(stat: ModeStat, mode: Mode): number | undefined {
        return this.getModeStats(mode)?.[stat];
    }
    public getWeaponStats(weapon: Weapon): WeaponProperties | undefined {
        Object.values(this.playerData.lifetime.itemData).forEach((itemCategory) => {
            return itemCategory?.[weapon];
        });
        throw new Error('No stats for this weapon');
    }
    public getEquipStats(equip: Equip): EquipProperties | undefined {
        Object.values(this.playerData.lifetime.itemData).forEach((itemCategory) => {
            return itemCategory?.[equip];
        });
        throw new Error('No stats for this weapon');
    }
    public getWeaponStat(stat: WeaponProperty, weapon: Weapon): number | undefined {
        return this.getWeaponStats(weapon)?.[stat];
    }
    public getEquipStat(stat: EquipProperty, equip: Equip): number | undefined {
        return this.getEquipStats(equip)?.[stat];
    }
}
const createWrapzone = async (platform: Platform, userName: string): Promise<Wrapzone> => {
    const playerData = await fetchPlayerData(platform, userName);
    return new Wrapzone(platform, userName, playerData);
}

export default createWrapzone;