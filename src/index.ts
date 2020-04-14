import fetch from "node-fetch";
import { Platform, PlayerData } from "./@types/player";
import { Mode, ModeProperties } from "./@types/mode";
import { GlobalStatProperties } from "./@types/stat";
import { Weapon, WeaponProperties, Equip, EquipProperties, Item } from "./@types/item";
import { Streak, StreakProperties } from "./@types/streak";
import Cookies from "./network/cookie";

const ROUTES = {
    api: 'https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/%PLATFORM%/gamer/%USER%/profile/type/mw',
    register: 'https://profile.callofduty.com/cod/mapp/registerDevice',
    auth: 'https://profile.callofduty.com/cod/mapp/login'
}
const cookies = new Cookies();

namespace Wrapzone {

    const fetchPlayerData = (platform: Platform, userName: string): Promise<PlayerData> => {
        const target = ROUTES.api
            .replace(/%PLATFORM%/, platform)
            .replace(/%USER%/, userName)
            .replace(/#/, '%23');

        return fetch(target, {
            headers: {
                Cookie: cookies.toString()
            }
        })
            .then((res) => {
                return res;
            })
            .then((res) => res.json())
            .then((json) => json.data);
    }
    export const authenticate = (email: string, password: string): Promise<void> => {
        const deviceId = Math.random().toString();
        return fetch(ROUTES.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                deviceId
            })
        })
            .then((res) => res.json())
            .then((json) => {
                if (json.status !== 'success' || !json.data) {
                    throw new Error('Error registering at the CoD API, please retry.');
                }
                return fetch(ROUTES.auth, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${json.data.authHeader}`,
                        'x_cod_device_id': deviceId
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
            })
            .then((res) => res.json())
            .then((json) => {
                if (!json.success) {
                    throw new Error('Authentication failed! Please retry and confirm your login data.');
                }
                cookies.set('atkn', json.atkn);
                cookies.set('rtkn', json.rtkn);
                cookies.set('ACT_SSO_COOKIE', json.s_ACT_SSO_COOKIE);
                return;
            });
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
    export const get = async (platform: Platform, userName: string): Promise<Wrapzone> => {
        const playerData = await fetchPlayerData(platform, userName);
        return new Wrapzone(platform, userName, playerData);
    }
}
export default Wrapzone;