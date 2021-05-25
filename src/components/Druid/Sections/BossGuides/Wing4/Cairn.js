import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Cairn = () => {

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
            <h5 className="gear-title ranger">The Further The Better</h5>
            <p>
                Cairn targets the furthest player way from it. Once you finished giving <WikiIcon name="Might"/> Might 
                and <WikiIcon name="Fury"/> Fury to people, go to the opposite side of the boss and stand furthest away to kite attacks.
                Standing far away will also help you get the first <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="37775"/> at 
                7:39. You can continue giving might from far away with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="34070"/> (check Sabetha guide for why).
            </p>
            <p>
                Since you will be tanking attacks, when possible, take the greens instead of skipping thm with stability. This will increase your survivability.
            </p>
            <p>
                Even if I say further is better, try to come back once in a while to cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> and 
                give <WikiIcon name="Fury"/> Fury and <WikiIcon name="Regeneration"/> Regeneration.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                If starting on the platform, cast the active ability of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> as 
                soon as Cairn appears so that your squad has protection for the first attacks while you give might.
            </p>
            <p>
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> can block 2 
                consecutive <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="38313"/>. For 
                that you need to cast it as late as possible. This allows you to stand far away enough from Cairn to kite his attacks and be outside 
                Cain's auto-attack range while not needing to dodge the <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="38313"/>. 
                During that time you can focus more on the group.
            </p>
        </>
    )
}

export default Cairn;