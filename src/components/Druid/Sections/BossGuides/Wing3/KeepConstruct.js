import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const KeepConstruct = () => {

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
            <h5 className="gear-title ranger">No More Conditions</h5>
            <p>
                I will often take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="55046"/> and use 
                it after the orb collection phase during the pizza attack to prevent players standing in the pink circle stacking confusion. You can 
                move while channeling the glyph to sidestep attacks.
            </p>
            <br/>
            <h5 className="gear-title ranger">Prestack Might</h5>
            <p>
                During orb collection phase, look at you attunement buff on your buffbar (red or white icon). When it gets to 30s, enter CA and might up 
                everyone (use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> during). 
                After KC deals damage by expelling energy gathered during the orb phase (magic blast), heal up players, exit CA, give <WikiIcon name="Fury"/> Fury, and start 
                channeling <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="55046"/>. 
            </p>
            <p>
                If doing only 1 orb, you can stack <WikiIcon name="Might"/> Might during the CC phase which will allow your squad to start the birn phase 
                at <WikiIcon name="Might"><sub>25</sub></WikiIcon> Might. Your CA should be back after the green mechanic.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                You can easily call your spirits on the center when green appear and staff 3 to a green if pone of them is missing a player.
            </p>
        </>
    )
}

export default KeepConstruct;