import React from 'react';
import PropTypes from 'prop-types';

const buffLinks = {
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

}

const WikiIconHuge = (props) => {
    return (
        <span className="mx-1"><img alt={props.name + ".png"} src={buffLinks[props.name]} width="50" height="50" />{props.children}</span>
    );
}

export default WikiIconHuge;

WikiIconHuge.propTypes = {
    name: PropTypes.string
}