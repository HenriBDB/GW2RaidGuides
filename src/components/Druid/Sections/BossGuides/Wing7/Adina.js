import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Adina = () => {

    return (
        <>
            <VideoWrapperMultiple>
                <YoutubePlayer textOnly="Video Guide"/>
                <YoutubePlayer textOnly="Gameplay Example"/>
            </VideoWrapperMultiple>
            <VideoWrapperMultiple className="mb-3">
                <YoutubePlayer videoId=""/>
                <YoutubePlayer videoId=""/>
            </VideoWrapperMultiple>
            <h5 className="gear-title ranger">Block Those Rocks</h5>
            <p>
                On Druid, I really like taking an axe offhand. Not only does it allow me to have better damage thanks 
                to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12639"/>, this skill 
                is also a projectile reflect which means that along with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/>&nbsp;
                and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"/> you can effectively 
                take care of all rocks throws from hands during the split phase. I start with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12639"/> and 
                quickdraw <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> for the last 
                2. If your group is slow and you don't skip the 2nd throw from the first set of hands, you can 
                use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"/> to 
                give <WikiIcon name="Stability"/> Stability for it. 
            </p>
            <p>
                Taking care of hands allows your Renegade to not need Ventari and therefore increase their damage significantly which may allow 
                your group to skip a pillar set and/or kill hands faster and thus have to deal less with their mechanics (rock throw and damage debuff).
            </p>
            <br/>
            <h5 className="gear-title ranger">Big Damage</h5>
            <p>
                If you are confident with your group, then you can go power druid for more damage. Do remember though that with 
                dps classes in your squad, maintaining scholar uptime on them is a bigger gain than you greeding dps.
            </p>
        </>
    )
}

export default Adina;