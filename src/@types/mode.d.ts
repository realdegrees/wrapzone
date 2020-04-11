export type ModeData = {
    [key in Mode]: ModeProperties;
};

declare type ModeProperties = {
    [key in ModeStat]: number;
}
declare type ModeStat =
    'kills' |
    'score' |
    'timePlayed' |
    'kdRatio' |
    'assists' |
    'scorePerMinute' |
    'deaths';
declare type Mode =
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