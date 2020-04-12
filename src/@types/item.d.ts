export declare type ItemData = {
    weapon_sniper: Weapons<Item.Weapon.Sniper>;
    weapon_lmg: Weapons<Item.Weapon.Lmg>;
    weapon_launcher: Weapons<Item.Weapon.Launcher>;
    weapon_pistol: Weapons<Item.Weapon.Pistol>;
    weapon_assault_rifle: Weapons<Item.Weapon.AussaultRifle>;
    weapon_other: Weapons<Item.Weapon.Other>;
    weapon_shotgun: Weapons<Item.Weapon.Shotgun>;
    weapon_smg: Weapons<Item.Weapon.Smg>;
    weapon_marksman: Weapons<Item.Weapon.Marksman>;
    weapon_melee: Weapons<Item.Weapon.Meele>;
    tacticals: Equips<Item.Equip.Tactical>;
    lethals: Equips<Item.Equip.Lethal>;
};
export declare type Equips<T extends Equip> = {
    [key in T]: { properties: EquipProperties };
}
export declare type Weapons<T extends Weapon> = {
    [key in T]: { properties: WeaponProperties };
}
export namespace Item {
    namespace Weapon {
        const enum Sniper {
            HDR = 'iw8_sn_hdromeo',
            AX_50 = 'iw8_sn_alpha50',
            DRAGUNOV = 'iw8_sn_delta'
        }
        const enum Lmg {
            HOLGER_26 = 'iw8_lm_mgolf36',
            M91 = 'iw8_lm_kilo121',
            MG34 = 'iw8_lm_mgolf34',
            PKM = 'iw8_lm_pkilo',
            SA_87 = 'iw8_lm_lima86'
        }
        const enum Launcher {
            JOKR = 'iw8_la_juliet',
            PILA = 'iw8_la_gromeo',
            RPG = 'iw8_la_rpapa7',
            STRELA = 'iw8_la_kgolf'
        }
        const enum Pistol {
            REVOLVER = 'iw8_pi_cpapa',
            DEAGLE = 'iw8_pi_decho',
            M1911 = 'iw8_pi_mike1911',
            M19 = 'iw8_pi_papa320',
            RENETTI = 'iw8_pi_mike9',
            X16 = 'iw8_pi_golf21'
        }
        const enum AussaultRifle {
            AK_47 = 'iw8_ar_akilo47',
            FAL = 'iw8_ar_falima',
            SCAR = 'iw8_ar_scharlie',
            FR_556 = 'iw8_ar_falpha',
            GRAU_556 = 'iw8_ar_sierra552',
            KILO = 'iw8_ar_kilo433',
            M13 = 'iw8_ar_mcharlie',
            M4A1 = 'iw8_ar_mike4',
            ODEN = 'iw8_ar_asierra12',
            RAM_7 = 'iw8_ar_tango21'
        }
        const enum Shotgun {
            DOUBLE_BARREL_725 = 'iw8_sh_charlie725',
            MODEL_680 = 'iw8_sh_romeo870',
            ORIGIN_12 = 'iw8_sh_oscar12',
            R9_0 = 'iw8_sh_dpapa12'
        }
        const enum Smg {
            AUG = 'iw8_sm_augolf',
            MP5 = 'iw8_sm_mpapa5',
            MP7 = 'iw8_sm_mpapa7',
            P90 = 'iw8_sm_papa90',
            PP19_BIZON = 'iw8_sm_beta',
            STRIKER_45 = 'iw8_sm_smgolf45',
            UZI = 'iw8_sm_uzulu'
        }
        const enum Marksman {
            EBR_14 = 'iw8_sn_mike14',
            KAR98 = 'iw8_sn_kilo98',
            MK2 = 'iw8_sn_sbeta',
            SKS = 'iw8_sn_sksierra'
        }
        const enum Meele {
            KNIFE = 'iw8_knife',
        }
        const enum Other {
            RIOT_SHIELD = 'iw8_me_riotshield',
        }
    }
    namespace Equip {
        const enum Tactical {
            DECOY = 'equip_decoy',
            FLASH = 'equip_flash',
            GAS = 'equip_gas_grenade',
            HEARTBEAT = 'equip_hb_sensor',
            SMOKE = 'equip_smoke',
            SNAPSHOT = 'equip_snapshot_grenade',
            STIM = 'equip_adrenaline',
            STUN = 'equip_concussion'
        }
        const enum Lethal {
            C4 = 'equip_c4',
            CLAYMORE = 'equip_claymore',
            FRAG = 'equip_frag',
            MOLOTOV = 'equip_molotov',
            PROXIMITY_MINE = 'equip_at_mine',
            SEMTEX = 'equip_semtex',
            THERMITE = 'equip_thermite',
            THROWING_KNIFE = 'equip_throwing_knife'
        }
    }
}
export declare type Weapon =
    Item.Weapon.Sniper |
    Item.Weapon.Lmg |
    Item.Weapon.Launcher |
    Item.Weapon.Pistol |
    Item.Weapon.AussaultRifle |
    Item.Weapon.Other |
    Item.Weapon.Shotgun |
    Item.Weapon.Smg |
    Item.Weapon.Marksman |
    Item.Weapon.Meele;

export declare type Equip =
    Item.Equip.Tactical |
    Item.Equip.Lethal;
declare type Item = Equip | Weapon;

export declare type WeaponProperties = {
    [key in WeaponProperty]: number;
}
export declare type EquipProperties = {
    [key in EquipProperty]: number;
}
declare type EquipProperty =
    'hits' |
    'kills' |
    'shots' |
    'deaths' |
    'headShots';
declare type WeaponProperty =
    'accuracy' |
    'deaths' |
    'headshots' |
    'hits' |
    'kdRatio' |
    'kills' |
    'shots';