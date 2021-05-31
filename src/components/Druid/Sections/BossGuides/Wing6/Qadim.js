import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Qadim = () => {

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
            <h5 className="gear-title ranger">A Spirit Sacrifice</h5>
            <p>
                At the start of the 1st and 2nd burn phases, a Greater Elemental will spawn East on 1st phase and North-East on 2nd phase of Qadim. 
                If you don't kill that Elemental before going to pyres, then it will go straight for you spirits and likely kill at least one. In order 
                to preserve your most valuable spirits, I recommend calling your water spirit between Qadim and the Elemental and the other spirits 
                slightly to th side. That way only water will die (which is fine) and your other spirits will already be in the right place for when 
                players come back from killing pyre(s).
            </p>
            <br/>
            <h5 className="gear-title ranger">Spirits for Last Phase</h5>
            <p>
                Atfer killing the Matriarch and Patriarch, place your spirits in a safe spot on a platform before the last set of blue bouncing 
                balls and they should still be alive for when you arrive on Qadim so you can call them to the stack.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Use your <WikiIcon name="Iboga" size={40}/> Iboga's <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"/> to 
                pull any Elemental that have not been pulled otherwise during the burn phases.
            </p>
        </>
    )
}

export default Qadim;