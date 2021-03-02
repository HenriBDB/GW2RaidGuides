import React from 'react';
import PropTypes from 'prop-types';

const buffLinks = {
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

    // "Superspeed": "https://wiki.guildwars2.com/images/thumb/1/1a/Super_Speed.png/20px-Super_Speed.png",
    // "Stealth": "https://wiki.guildwars2.com/images/thumb/1/19/Stealth.png/20px-Stealth.png",

    // "Vulnerability": "https://wiki.guildwars2.com/images/thumb/a/af/Vulnerability.png/20px-Vulnerability.png",
    // "Immobile": "https://wiki.guildwars2.com/images/thumb/3/32/Immobile.png/20px-Immobile.png",
    // "Blinded": "https://wiki.guildwars2.com/images/thumb/3/33/Blinded.png/20px-Blinded.png",
    // "Bleeding": "https://wiki.guildwars2.com/images/thumb/3/33/Bleeding.png/20px-Bleeding.png",
    // "Crippled": "https://wiki.guildwars2.com/images/thumb/f/fb/Crippled.png/20px-Crippled.png",
    // "Chilled": "https://wiki.guildwars2.com/images/thumb/a/a6/Chilled.png/20px-Chilled.png",
    // "Burning": "https://wiki.guildwars2.com/images/thumb/4/45/Burning.png/20px-Burning.png",
    "Weakness": "https://wiki.guildwars2.com/images/f/f9/Weakness.png",
    "Slow": "https://wiki.guildwars2.com/images/f/f5/Slow.png",

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