import React from 'react'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Largos = () => {

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
            <h5 className="gear-title ranger">Did someone say stack?</h5>
            <p>
                On Largos, inexperienced players often spread out, especially on Nikare. Try to use 
                your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"/> skills and spirits 
                when players are stacked.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Just read the SnowCrows' guide, it's good.
            </p>
            <p>
                On Nikare, you can kite her first dash each time by being the furthest player away.
            </p>
        </>
    )
}

export default Largos;