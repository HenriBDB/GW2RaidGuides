import React from 'react';
import PropTypes from 'prop-types';

const buffLinks = {
    "Might": "https://wiki.guildwars2.com/images/thumb/7/7c/Might.png/20px-Might.png",
    "Fury": "https://wiki.guildwars2.com/images/thumb/4/46/Fury.png/20px-Fury.png",
    "Swiftness": "https://wiki.guildwars2.com/images/thumb/a/af/Swiftness.png/20px-Swiftness.png",
    "Regeneration": "https://wiki.guildwars2.com/images/thumb/5/53/Regeneration.png/20px-Regeneration.png",
    "Vigor": "https://wiki.guildwars2.com/images/thumb/f/f4/Vigor.png/20px-Vigor.png",
    "Quickness": "https://wiki.guildwars2.com/images/thumb/b/b4/Quickness.png/20px-Quickness.png",
    "Protection": "https://wiki.guildwars2.com/images/thumb/6/6c/Protection.png/20px-Protection.png",
    "Stability": "https://wiki.guildwars2.com/images/thumb/a/ae/Stability.png/20px-Stability.png",
    "Retaliation": "https://wiki.guildwars2.com/images/thumb/5/53/Retaliation.png/20px-Retaliation.png",

    "Superspeed": "https://wiki.guildwars2.com/images/thumb/1/1a/Super_Speed.png/20px-Super_Speed.png",
    "Stealth": "https://wiki.guildwars2.com/images/thumb/1/19/Stealth.png/20px-Stealth.png",

    "Vulnerability": "https://wiki.guildwars2.com/images/thumb/a/af/Vulnerability.png/20px-Vulnerability.png",
    "Immobile": "https://wiki.guildwars2.com/images/thumb/3/32/Immobile.png/20px-Immobile.png",
    "Blinded": "https://wiki.guildwars2.com/images/thumb/3/33/Blinded.png/20px-Blinded.png",
    "Bleeding": "https://wiki.guildwars2.com/images/thumb/3/33/Bleeding.png/20px-Bleeding.png",
    "Crippled": "https://wiki.guildwars2.com/images/thumb/f/fb/Crippled.png/20px-Crippled.png",
    "Chilled": "https://wiki.guildwars2.com/images/thumb/a/a6/Chilled.png/20px-Chilled.png",
    "Burning": "https://wiki.guildwars2.com/images/thumb/4/45/Burning.png/20px-Burning.png",
    "Weakness": "https://wiki.guildwars2.com/images/thumb/f/f9/Weakness.png/20px-Weakness.png",

    "Daze": "https://wiki.guildwars2.com/images/thumb/7/79/Daze.png/20px-Daze.png",

    "Power": "https://wiki.guildwars2.com/images/thumb/d/d6/Power_attribute.png/20px-Power_attribute.png",

    "Recharge": "https://wiki.guildwars2.com/images/f/f4/Tango-recharge-darker.png",
}

const WikiIcon = (props) => {
    return (
        <span><img alt={props.name+".png"} src={buffLinks[props.name]} width="20" height="20"/></span>
    );
}

export default WikiIcon;

WikiIcon.propTypes = {
    name: PropTypes.string
}