import React from 'react'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Matthias = () => {

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
            <h5 className="gear-title ranger">Useful Timings</h5>
            <p>
                If you use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> right after 
                the boonstrip, it will be up for the first CC.
            </p>
            <p>
                As stated in the SC guide, place a <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> on 
                top of Matthias during the jump shards attack to prevent players taking damage from the projectiles. For reference, the jump shards always happen 
                12s after the end of the bubble phase (100%-40%).
            </p>
            <br/>
        </>
    )
}

export default Matthias;