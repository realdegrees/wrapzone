export type ModeData = {
    [key in Mode]: ModeProperties;
};

declare type ModeProperties = {
    [key in BaseProperty]: number;
}

export namespace Mode {
    export const enum Warzone {
        BATTLE_ROYALE = 'br',
        PLUNDER = 'br_dmz',
        ALL = 'br_all'
    }
    export const enum Hardcore {
        TEAM_DEATHMATCH = 'hc_war',
        HARDPOINT = 'hc_koth',
        HEADQUARTERS = 'hc_hq',
        SEARCH_AND_DESTROY = 'hc_sd',
        CYBER_ATTACK = 'hc_cyber',
        KILL_CONFIRMED = 'hc_conf',
        DOMINATION = 'hc_dom'
    }
    export const enum Core {
        TEAM_DEATHMATCH = 'war',
        HARDPOINT = 'koth',
        HEADQUARTERS = 'hq',
        SEARCH_AND_DESTROY = 'sd',
        CYBER_ATTACK = 'cyber',
        KILL_CONFIRMED = 'conf',
        DOMINATION = 'dom'
    }
}
export declare type Mode =
    Mode.Warzone |
    Mode.Core |
    Mode.Hardcore;

export declare type BaseProperties = {
    [key in BaseProperty]: number;
}
export declare type TeamDeathMatchProperties = BaseProperties & {
    [key in TeamDeathMatchProperty]: number;
}
export declare type HardpointProperties = BaseProperties & {
    [key in HardpointProperty]: number;
}
export declare type HeadquartersProperties = BaseProperties & {
    [key in HeadquarterProperty]: number;
}
export declare type SearchAndDestroyProperties = BaseProperties & {
    [key in SearchAndDestroyProperty]: number;
}
export declare type CyberAttackProperties = BaseProperties & {
    [key in CyberAttackProperty]: number;
}
export declare type KillConfirmedProperties = BaseProperties & {
    [key in KillConfirmedProperty]: number;
}
export declare type DominationProperties = BaseProperties & {
    [key in DominationProperty]: number;
}
declare type BaseProperty =
    'kills' |
    'deaths' |
    'kdRatio' |
    'score' |
    'scorePerMinute' |
    'timePlayed';
declare type KillConfirmedProperty =
    'confirms' |
    'denies';
declare type TeamDeathMatchProperty =
    'assists';
declare type HardpointProperty =
    'defends' |
    'objTime';
declare type HeadquarterProperty =
    'captures' |
    'defends';
declare type SearchAndDestroyProperty =
    'defuses' |
    'plants';
declare type CyberAttackProperty =
    'plants' |
    'revives';
declare type DominationProperty =
    'captures' |
    'defends';