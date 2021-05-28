import React, { useEffect, useState, useLayoutEffect } from 'react'
import Weaponswap from '../../../../../assets/icons/weaponswap.png'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Gorseval = () => {
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
                <YoutubePlayer/>
                <YoutubePlayer videoId=""/>
            </VideoWrapperMultiple>
            <h5 className="gear-title ranger">Fast CC = Less Rampage Damage</h5>
            <p>
                Don't hesitate to use double CC pets if more CC is needed, this will help hasten the CC phase and therefore reduce the damage players 
                take from Rampage:
            </p>
            <div className="row justify-content-center align-items-center">
                <WikiIcon name="ElectricWyvern" size={armorySize*2}/>
                <img className="mx-2" src={Weaponswap} width='40' height='40' alt="weaponswap" />
                <WikiIcon name="Gazelle" size={armorySize*2}/>
            </div>
            <p>
                You may feel tempted to take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> if 
                you feel you need more <WikiIcon name="Protection"/> Protection however it is generally useless since most damage taken occurs during the CC phase 
                and the 'retaliation' effect and black goo explosions are not affected by protection. It is better to take CC skills instead to reduce the 
                length of Rampage (CC Phase) as that is when most of the damage occurs. You can take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"/> but 
                if the <WikiIcon name="Fury"/> Fury / <WikiIcon name="Vulnerability"/> Vuln from it is not needed then I would 
                recommend <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31658"/> for 
                better CC.
            </p>
            <p>
                I often replace the <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="72339"/> on my 
                staff with <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"/> and swap to staff 
                during the CC phase especially when using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31658"/>.
            </p>
            <br/>
            <h5 className="gear-title ranger">Ghost Spirits Management</h5>
            <p>
                In most if not all groups, you can easily control the spirits by using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31700"/> with 
                double <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31503"/> thanks 
                to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"/>. This allows you to 
                drop <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"/> and 
                take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/> instead to help with scholar 
                uptimes and provide backup (or main if you only have 1 Slam per phase) <WikiIcon name="Stability"/> Stability for the Slams.
            </p>
            <p>
                In general, I would recommend sending one sub group North and the other South during the split phase. It makes split phases alot easier 
                and faster than having ll players together during one split.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Remember to make sure everyone is at <WikiIcon name="Might"><sub>25</sub></WikiIcon> Might by the end of the split for the start of 
                the next boss phase.
            </p>
            <p>
                During Rampage, the goo on the ground not only damages players when it explodes but it also applies <WikiIcon name="Vulnerability"><sub>25</sub></WikiIcon> Vulnerability. 
                Try to spam <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31406"/> when that happens and 
                blast it with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31318"/> for example to cleanse 
                the <WikiIcon name="Vulnerability"/> Vulnerability asap.
            </p>
            <p>
                In slower groups, you can send your pet to clear the orbs that spawn around the arena. They are very effective at that and it will help 
                your dps players to focus on the boss.
            </p>
        </>
    )
}

export default Gorseval;