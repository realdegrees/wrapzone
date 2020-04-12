import fetch from "node-fetch";
import { Platform, PlayerData } from "./@types/player";
import { Mode, ModeProperties } from "./@types/mode";
import { GlobalStatProperties } from "./@types/stat";
import { Weapon, WeaponProperties, Equip, EquipProperties, Item } from "./@types/item";
import { Streak, StreakProperties } from "./@types/streak";

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
        await this.setPlayerData(this.platform, this.userName);
    }
    /**
     * Returns the raw json that was retrieved from the cod API
     */
    public get raw(): object {
        return this.playerData;
    }

    public getModeStats(mode: Mode): ModeProperties | undefined {
        return this.playerData.lifetime.mode[mode];
    }
    public getGlobalStats(): GlobalStatProperties {
        return this.playerData.lifetime.all.properties;
    }
    public getEquipStats(equip: Equip): EquipProperties | undefined {
        return this.getItemStats(equip) as EquipProperties | undefined;
    }
    public getWeaponStats(weapon: Weapon): WeaponProperties | undefined {
        return this.getItemStats(weapon) as WeaponProperties | undefined;
    }
    public getItemStats(item: Item): EquipProperties | WeaponProperties | undefined {
        for (const itemCategory of Object.values(this.playerData.lifetime.itemData)) {
            const properties = (itemCategory as any)?.[item]?.properties;
            if (properties) {
                return properties;
            }
        }
    }
    public getStreakStats(streak: Streak): StreakProperties | undefined {
        for (const streakCategory of Object.values(this.playerData.lifetime.scorestreakData)) {
            const properties = (streakCategory as any)?.[streak]?.properties;
            if (properties) {
                return properties;
    }
    }
    }
}
const createWrapzone = async (platform: Platform, userName: string): Promise<Wrapzone> => {
    const playerData = await fetchPlayerData(platform, userName);
    return new Wrapzone(platform, userName, playerData);
}

export default createWrapzone;