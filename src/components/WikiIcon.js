import React from 'react';
import PropTypes from 'prop-types';

const icons = {
    //Boons
    "Might": "https://wiki.guildwars2.com/images/7/7c/Might.png",
    "Fury": "https://wiki.guildwars2.com/images/4/46/Fury.png",
    "Swiftness": "https://wiki.guildwars2.com/images/a/af/Swiftness.png",
    "Regeneration": "https://wiki.guildwars2.com/images/5/53/Regeneration.png",
    "Vigor": "https://wiki.guildwars2.com/images/f/f4/Vigor.png",
    "Quickness": "https://wiki.guildwars2.com/images/b/b4/Quickness.png",
    "Protection": "https://wiki.guildwars2.com/images/6/6c/Protection.png",
    "Stability": "https://wiki.guildwars2.com/images/a/ae/Stability.png",
    "Retaliation": "https://wiki.guildwars2.com/images/5/53/Retaliation.png",
    "Alacrity": "https://wiki.guildwars2.com/images/4/4c/Alacrity.png",
    "Aegis": "https://wiki.guildwars2.com/images/e/e5/Aegis.png",
    "Resistance": "https://wiki.guildwars2.com/images/4/4b/Resistance.png",
    //Buffs
    "Superspeed": "https://wiki.guildwars2.com/images/1/1a/Super_Speed.png",
    "Stealth": "https://wiki.guildwars2.com/images/1/19/Stealth.png",
    //Conditions
    "Vulnerability": "https://wiki.guildwars2.com/images/a/af/Vulnerability.png",
    "Immobile": "https://wiki.guildwars2.com/images/3/32/Immobile.png",
    "Blinded": "https://wiki.guildwars2.com/images/3/33/Blinded.png",
    "Bleeding": "https://wiki.guildwars2.com/images/3/33/Bleeding.png",
    "Crippled": "https://wiki.guildwars2.com/images/f/fb/Crippled.png",
    "Chilled": "https://wiki.guildwars2.com/images/a/a6/Chilled.png",
    "Burning": "https://wiki.guildwars2.com/images/4/45/Burning.png",
    "Poisoned": "https://wiki.guildwars2.com/images/1/11/Poisoned.png",
    "Weakness": "https://wiki.guildwars2.com/images/f/f9/Weakness.png",
    "Slow": "https://wiki.guildwars2.com/images/f/f5/Slow.png",
    "Torment": "https://wiki.guildwars2.com/images/0/08/Torment.png",
    "Confusion": "https://wiki.guildwars2.com/images/e/e6/Confusion.png",
    //CC
    "Daze": "https://wiki.guildwars2.com/images/7/79/Daze.png",
    "Knockdown": "https://wiki.guildwars2.com/images/3/36/Knockdown.png",
    "Pull": "https://wiki.guildwars2.com/images/a/a4/Radius.png",
    "Exposed": "https://wiki.guildwars2.com/images/6/6b/Exposed.png",
    "Knockback": "https://wiki.guildwars2.com/images/c/ca/Knockback.png",
    //Attributes
    "Power": "https://wiki.guildwars2.com/images/2/23/Power.png",
    "Precision": "https://wiki.guildwars2.com/images/e/ee/Precision.png",
    "Ferocity": "https://wiki.guildwars2.com/images/f/f1/Ferocity.png",
    "Toughness": "https://wiki.guildwars2.com/images/1/12/Toughness.png",
    "CondiDamage": "https://wiki.guildwars2.com/images/5/54/Condition_Damage.png",
    //Bosses
    "Vg": "https://wiki.guildwars2.com/images/f/fb/Mini_Vale_Guardian.png",
    "Gorseval": "https://wiki.guildwars2.com/images/d/d1/Mini_Gorseval_the_Multifarious.png",
    "Sabetha": "https://wiki.guildwars2.com/images/5/54/Mini_Sabetha.png",
    "Slothasor": "https://wiki.guildwars2.com/images/1/12/Mini_Slothasor.png",
    "Matthias": "https://wiki.guildwars2.com/images/5/5d/Mini_Matthias_Abomination.png",
    "Escort": "https://wiki.guildwars2.com/images/b/b5/Mini_McLeod_the_Silent.png",
    "KC": "https://wiki.guildwars2.com/images/e/ea/Mini_Keep_Construct.png",
    "Xera": "https://wiki.guildwars2.com/images/4/4b/Mini_Xera.png",
    "Cairn": "https://wiki.guildwars2.com/images/b/b8/Mini_Cairn_the_Indomitable.png",
    "MO": "https://wiki.guildwars2.com/images/c/c8/Mini_Mursaat_Overseer.png",
    "Samarog": "https://wiki.guildwars2.com/images/f/f0/Mini_Samarog.png",
    "Deimos": "https://i.imgur.com/S42DqS4.png",
    "SH": "https://wiki.guildwars2.com/images/d/d4/Mini_Desmina.png",
    "Eater": "https://i.imgur.com/YjWhv6q.png",
    "Dhuum": "https://wiki.guildwars2.com/images/e/e4/Mini_Dhuum.png",
    "CA": "https://i.imgur.com/deYk1Q2.png",
    "Largos": "https://wiki.guildwars2.com/images/4/4b/Mini_Largos.png",
    "Qadim": "https://wiki.guildwars2.com/images/f/f2/Mini_Qadim.png",
    "Adina": "https://i.imgur.com/xenhase.png",
    "Sabir": "https://i.imgur.com/CWBTimq.png",
    "QTP": "https://wiki.guildwars2.com/images/8/8b/Mini_Qadim_the_Peerless.png",
    //Professions
    "Guardian": "https://wiki.guildwars2.com/images/6/6c/Guardian_tango_icon_200px.png",
    "Dragonhunter": "https://wiki.guildwars2.com/images/1/1f/Dragonhunter_tango_icon_200px.png",
    "Firebrand": "https://wiki.guildwars2.com/images/7/73/Firebrand_tango_icon_200px.png",
    "Revenant": "https://wiki.guildwars2.com/images/a/a8/Revenant_tango_icon_200px.png",
    "Herald": "https://wiki.guildwars2.com/images/c/c7/Herald_tango_icon_200px.png",
    "Renegade": "https://wiki.guildwars2.com/images/b/bc/Renegade_tango_icon_200px.png",
    "Warrior": "https://wiki.guildwars2.com/images/d/db/Warrior_tango_icon_200px.png",
    "Berserker": "https://wiki.guildwars2.com/images/8/80/Berserker_tango_icon_200px.png",
    "Spellbreaker": "https://wiki.guildwars2.com/images/7/78/Spellbreaker_tango_icon_200px.png",
    "Engineer": "https://wiki.guildwars2.com/images/2/2f/Engineer_tango_icon_200px.png",
    "Scrapper": "https://wiki.guildwars2.com/images/3/3a/Scrapper_tango_icon_200px.png",
    "Holosmith": "https://wiki.guildwars2.com/images/a/ae/Holosmith_tango_icon_200px.png",
    "Ranger": "https://wiki.guildwars2.com/images/5/51/Ranger_tango_icon_200px.png",
    "Druid": "https://wiki.guildwars2.com/images/6/6d/Druid_tango_icon_200px.png",
    "Soulbeast": "https://wiki.guildwars2.com/images/f/f6/Soulbeast_tango_icon_200px.png",
    "Thief": "https://wiki.guildwars2.com/images/1/19/Thief_tango_icon_200px.png",
    "Daredevil": "https://wiki.guildwars2.com/images/c/ca/Daredevil_tango_icon_200px.png",
    "Deadeye": "https://wiki.guildwars2.com/images/b/b0/Deadeye_tango_icon_200px.png",
    "Elementalist": "https://wiki.guildwars2.com/images/a/aa/Elementalist_tango_icon_20px.png",
    "Tempest": "https://wiki.guildwars2.com/images/9/90/Tempest_tango_icon_200px.png",
    "Weaver": "https://wiki.guildwars2.com/images/3/31/Weaver_tango_icon_200px.png",
    "Mesmer": "https://wiki.guildwars2.com/images/7/73/Mesmer_tango_icon_200px.png",
    "Chronomancer": "https://wiki.guildwars2.com/images/8/8b/Chronomancer_tango_icon_200px.png",
    "Mirage": "https://wiki.guildwars2.com/images/a/a9/Mirage_tango_icon_200px.png",
    "Necromancer": "https://wiki.guildwars2.com/images/c/cd/Necromancer_tango_icon_200px.png",
    "Reaper": "https://wiki.guildwars2.com/images/9/95/Reaper_tango_icon_200px.png",
    "Scourge": "https://wiki.guildwars2.com/images/8/8a/Scourge_tango_icon_200px.png",
    //Other
    "Recharge": "https://wiki.guildwars2.com/images/f/f4/Tango-recharge-darker.png",
    "Signet": "https://wiki.guildwars2.com/images/5/56/Bane_Signet.png",
    "Plasma": "https://wiki.guildwars2.com/images/3/3d/Detonate_Plasma.png",
    "Invuln": "https://wiki.guildwars2.com/images/e/eb/Determined.png",
    "UnnaturalSignet": "https://wiki.guildwars2.com/images/2/20/Unnatural_Signet.png",
    "Fractured": "https://wiki.guildwars2.com/images/7/78/Branded_Aura.png",
    "Commander": "https://wiki.guildwars2.com/images/c/cb/Commander_tag_%28purple%29.png",
}

const WikiIcon = (props) => {
    return (
        <span><img alt={props.name + ".png"} src={icons[props.name]} width="20" height="20" />{props.children}</span>
    );
}

export default WikiIcon;

WikiIcon.propTypes = {
    name: PropTypes.string
}