import React, { useEffect, useState, useLayoutEffect } from 'react'
import Weaponswap from '../../../../../assets/icons/weaponswap.png'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Slothasor = () => {
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
            <h5 className="gear-title ranger">Just CC</h5>
            <p>
                Don't hesitate to use double CC pets for more CC. This can be useful if Slothasor is stuck in poison during a CC phase and 
                your squad needs to rely on ranged CCs.
            </p>
            <div className="row justify-content-center align-items-center">
                <WikiIcon name="ElectricWyvern" size={armorySize*2}/>
                <img className="mx-2" src={Weaponswap} width='40' height='40' alt="weaponswap" />
                <WikiIcon name="Gazelle" size={armorySize*2}/>
            </div>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Don't take <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2053"/> here as it can mess up the tanking.
            </p>
            <p>
                Watch out for people leaving stack to drop poisons. They might need some healing along the way.
            </p>
            <p>
                Many players like to take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="55046"/> to deal 
                with the spore release mechanic. Although this is a valid option, spores also deal significant power damage and can still down players with 
                glyph up. I prefer to precast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"/> and 
                hope a chrono blocks or invulns the spores with shield or distortion 
                as <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/> can help keep players topped up on 
                health (and its active ability also cleanses conditions!).
            </p>
        </>
    )
}

export default Slothasor;