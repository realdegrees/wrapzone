import { GlobalStatProperties } from "./stat";
import { AccoladeData } from "./accolade";
import { ItemData } from "./item";
import { StreakData } from "./streak";
import { ModeData } from "./mode";

export declare type Platform = 'psn' | 'xbl' | 'battle';

export interface PlayerData {
    platform: string;
    username: string;
    level: number;
    maxLevel: number;
    levelXpRemainder: number;
    levelXpGained: number;
    totalXp: number;
    lifetime: LifetimeData;
    weekly: WeeklyData;
}
export interface WeeklyData {
    all: GlobalStatProperties;
    mode: ModeData;
}
export interface LifetimeData {
    itemData: ItemData;
    scorestreakData: StreakData;
    accoladeData: {
        properties: AccoladeData
    };
    all: {
        properties: GlobalStatProperties
    };
    mode: ModeData;
}
