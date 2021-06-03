import React, { useEffect, useState, useLayoutEffect } from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const QadimThePeerless = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [armorySize, setArmorySize] = useState(0)

    useLayoutEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    useEffect(() => {
        if (width <= 500) {
            setArmorySize(35)
        } else {
            setArmorySize(60)
        }
    }, [width])

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
            <h5 className="gear-title ranger">Gazelle Solo CC</h5>
            <p>
                In order to CC Anomalies, I generally prefer using only my Gazelle instead of taking an Electric Wyvern.
            </p>
            <div className="row justify-content-center align-items-center">
                <WikiIcon name="Gazelle" size={armorySize*2}/>
            </div>
            <p>
                Keep your pet on passive. As soon as the Anomaly spawns, target it and press F1 to send your Gazelle. It's first attack will 
                already do 200cc. When the anomaly walks over the fires, press F2 to break its defiance bar. Keeping your pet on passive 
                allows you to ensure that its first attack will be the charge which does 200cc.
            </p>
            <p>
                You can swap to <WikiIcon name="Iboga" size={40}/> Iboga every other Anomaly right after CCing the Anomaly and target the boss with 
                it for more damage. Your Iboga can also be used to CC Qadim and Pylons with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"/>.
            </p>
            <p>
                This also means you do not need to take Marksmanship traitline and can provide <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"/> for 
                any player that may benefits from it.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extending Teathers</h5>
            <p>
                When linked to a pylon or extending a link from a pylon, you apply a debuff to Qadim that makes him take more damage. When pylons 
                have at least one orb collected, you can activate your Special Action Key and link yourself to the kiter to apply the debuff to 
                Qadim. Since you are the druid you don't need to be in melee. When chosing which pylon to link to, consider where the next anomaly 
                will spawn and if you still need to drop fires (above 60%), where you will need to drop yours. 
            </p>
            <p>
                If you have your Special Action Key activated, don't come back to the middle too fast between phases so that your tank can take the 
                aggro.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                The cone to little circles attack from Qadim applies a lot of <WikiIcon name="Vulnerability"/> Vulnerability on those it hits. Make sure to regularly 
                cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"/> on your 
                tank to cleanse that <WikiIcon name="Vulnerability"/> Vulnerability.
            </p>
        </>
    )
}

export default QadimThePeerless;