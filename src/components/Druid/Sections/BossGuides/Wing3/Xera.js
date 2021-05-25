import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Xera = () => {
    return (
        <>
            <VideoWrapperMultiple>
                <YoutubePlayer textOnly="Video Guide"/>
                <YoutubePlayer textOnly="Gameplay Example"/>
            </VideoWrapperMultiple>
            <VideoWrapperMultiple className="mb-3">
                <YoutubePlayer videoId="9_j2mpunrl8"/>
                <YoutubePlayer videoId=""/>
            </VideoWrapperMultiple>
            <h5 className="gear-title ranger">Shard Clearing</h5>
            <p>
                You can send your pet to clear shards when needed in p2 so you can continue to focus on healing the squad.
            </p>
            <br/>
            <h5 className="gear-title ranger">CC, Again More CC...</h5>
            <p>
                Xera takes 80% reduced power and condi damage while her CC bar is active. It is therefore important to CC hr as fast as possible 
                to increase dps uptime which will give you less mechanics to deal with and therefore an easier kill. You can swap out 
                your <WikiIcon name="Iboga" size={40}/> Iboga for a <WikiIcon name="RockGazelle" size={40}/> Gazelle or 
                an <WikiIcon name="ElectricWyvern" size={40}/> Electric Wyvern if you need extra CC.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                During split, give as much regen as you can to your spirits on the first platform to help them survive until you're back. 
            </p>
            <p>
                Avoid <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2053"/> as the superspeed 
                can confuse players during the split causing them to miss the ley-line and fall to their death. Do continue giving <WikiIcon name="Might"/> Might 
                and <WikiIcon name="Swiftness"/> Swiftness during the split but keep some astral force at the end of the split so that you can pre-stack <WikiIcon name="Might"/> Might 
                before gliding back to Xera's platform.
            </p>
        </>
    )
}

export default Xera;