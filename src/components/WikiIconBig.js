import React from 'react';
import PropTypes from 'prop-types';

const buffLinks = {
    //Buffs
    "Might": "https://wiki.guildwars2.com/images/7/7c/Might.png",
    "Fury": "https://wiki.guildwars2.com/images/4/46/Fury.png",
    "Swiftness": "https://wiki.guildwars2.com/images/a/af/Swiftness.png",
    "Regeneration": "https://wiki.guildwars2.com/images/5/53/Regeneration.png",
    "Vigor": "https://wiki.guildwars2.com/images/f/f4/Vigor.png",
    "Quickness": "https://wiki.guildwars2.com/images/b/b4/Quickness.png",
    "Protection": "https://wiki.guildwars2.com/images/6/6c/Protection.png",
    "Stability": "https://wiki.guildwars2.com/images/a/ae/Stability.png",
    "Resolution": "https://wiki.guildwars2.com/images/0/06/Resolution.png",
    "Alacrity": "https://wiki.guildwars2.com/images/4/4c/Alacrity.png",
    "Aegis": "https://wiki.guildwars2.com/images/e/e5/Aegis.png",
    "Resistance": "https://wiki.guildwars2.com/images/4/4b/Resistance.png",
    "Spotter": "https://wiki.guildwars2.com/images/b/b0/Spotter.png",
    "Frost": "https://wiki.guildwars2.com/images/c/c6/Frost_Spirit.png",
    "Sun": "https://wiki.guildwars2.com/images/d/dd/Sun_Spirit.png",
    "Stone": "https://wiki.guildwars2.com/images/3/35/Stone_Spirit.png",
    "Storm": "https://wiki.guildwars2.com/images/2/25/Storm_Spirit.png",
    "AP": "https://wiki.guildwars2.com/images/5/54/Assassin%27s_Presence.png",
    "Strength": "https://wiki.guildwars2.com/images/e/e1/Banner_of_Strength.png",
    "Discipline": "https://wiki.guildwars2.com/images/5/5f/Banner_of_Discipline.png",
    "EA": "https://wiki.guildwars2.com/images/4/4c/Empower_Allies.png",
    "PD": "https://wiki.guildwars2.com/images/b/bf/Pinpoint_Distribution.png",
    "BaneSignet": "https://wiki.guildwars2.com/images/5/56/Bane_Signet.png",
    "WrathSignet": "https://wiki.guildwars2.com/images/1/18/Signet_of_Wrath.png",
    "Superspeed": "https://wiki.guildwars2.com/images/1/1a/Super_Speed.png",
    //Condis
    "Weakness": "https://wiki.guildwars2.com/images/f/f9/Weakness.png",
    "Slow": "https://wiki.guildwars2.com/images/f/f5/Slow.png",
    //Other
    "BannerDiscipline": "https://wiki.guildwars2.com/images/5/5f/Banner_of_Discipline.png",
    "BannerStrength": "https://wiki.guildwars2.com/images/e/e1/Banner_of_Strength.png",
}

const WikiIconBig = (props) => {
    return (
        <span className="mx-1"><img alt={props.name+".png"} src={buffLinks[props.name]} width="40" height="40"/>{props.children}</span>
    );
}

export default WikiIconBig;

WikiIconBig.propTypes = {
    name: PropTypes.string
}