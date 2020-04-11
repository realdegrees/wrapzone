export type ModeData = {
    [key in ModeDataProperty]: Mode;
};

declare interface Mode {
    kills: number;
    score: number;
    timePlayed: number;
    kdRatio: number;
    assists: number;
    scorePerMinute: number;
    deaths: number;
}
declare type ModeDataProperty =
    'dom' |
    'war' |
    'hq' |
    'hc_dom' |
    'hc_conf' |
    'koth' |
    'conf' |
    'hc_hq' |
    'br_dmz' |
    'sd' |
    'cyber' |
    'hc_war' |
    'br_all' |
    'hc_sd' |
    'hc_cyber';