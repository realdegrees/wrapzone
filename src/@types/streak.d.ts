export declare interface StreakData {
    supportScorestreakData: SupportStreakData;
    lethalScorestreakData: LethalStreakData;
}
declare type LethalStreakData = {
    [key in Lethal]: {
        properties: StreakProperties
    };
}
declare type SupportStreakData = {
    [key in Support]: {
        properties: StreakProperties
    };
}
declare interface StreakProperties {
    awardedCount: number;
    extraStat1: number;
    uses: number;
}
declare const enum Support {
    AIRDROP = 'airdrop',
    EMERGENCY_AIRDROP = 'airdrop_multiple',
    UAV = 'uav',
    COUNTER_UAV = 'scrambler_drone_overwatch',
    PERSONAL_RADAR = 'radar_drone_overwatch',
    ORBITAL_UAV = 'directional_uav'
}
declare const enum Lethal {
    WHITE_PHOSPHORUS = 'white_phosphorus',
    CLUSTER_STRIKE = 'toma_strike',
    SENTRY_GUN = 'sentry_gun',
    PRECISION_AIRSTRIKE = 'precision_airstrike',
    NUKE = 'nuke',
    SHIELD_TURRET = 'manual_turret',
    JUGGERNAUT = 'juggernaut',
    VTOL = 'hover_jet',
    GUNSHIP = 'gunship',
    CRUISE_MISSILE = 'cruise_predator',
    SUPPORT_HELO = 'chopper_support',
    CHOPPER_GUNNER = 'chopper_gunner',
    WHEELSON = 'pac_sentry',
    TANK = 'bradley'
}