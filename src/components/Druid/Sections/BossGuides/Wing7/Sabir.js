import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Sabir = () => {

    return (
        <>
            <VideoWrapperMultiple>
                <YoutubePlayer textOnly="Video Guide"/>
                <YoutubePlayer textOnly="Gameplay Example"/>
            </VideoWrapperMultiple>
            <VideoWrapperMultiple className="mb-3">
                <YoutubePlayer videoId=""/>
                <YoutubePlayer videoId="nchUZqVXD8M"/>
            </VideoWrapperMultiple>
            <h5 className="gear-title ranger">Some CC Management</h5>
            <p>
                If you take <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="965"/> along 
                with  <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"/>, you can 
                cover <WikiIcon name="Fury"/> Fury for your sub simply by pet swapping off cooldown. This allows you to save 
                your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> for the CC phases 
                which makes it a little easier to coordinate. If uncoordinate CC bars tend to last however, I would recommend 
                taking <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"/> instead as it 
                provides extra <WikiIcon name="Regeneration"/> Regeneration and increases your chances of being able to 
                use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> twice within an 
                uncoordinate CC phase.
            </p>
            <p>
                Having a <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"/> on your 
                Warhorn is a great addition for this fight. Swap out <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="72339"/> for it.
            </p>
            <br/>
            <h5 className="gear-title ranger">Spirit Management</h5>
            <p>
                When coming back to Sabir, the pressure will be high. Try to weave in some Staff heal skills while calling your spirits to the new 
                platform to avoid players going down. This is especially important if you are solo healing.
            </p>
        </>
    )
}

export default Sabir;