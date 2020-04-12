export declare interface StreakData {
    supportScorestreakData: Streaks<Streak.Support>;
    lethalScorestreakData: Streaks<Streak.Lethal>;
}
declare type Streaks<T extends Streak> = {
    [key in T]: {
        properties: StreakProperties
    };
}
declare interface StreakProperties {
    awardedCount: number;
    extraStat1: number;
    uses: number;
}
declare type Streak = Streak.Support | Streak.Lethal;
export namespace Streak {
    const enum Support {
        AIRDROP = 'airdrop',
        EMERGENCY_AIRDROP = 'airdrop_multiple',
        UAV = 'uav',
        COUNTER_UAV = 'scrambler_drone_overwatch',
        PERSONAL_RADAR = 'radar_drone_overwatch',
        ORBITAL_UAV = 'directional_uav'
    }
    const enum Lethal {
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
}