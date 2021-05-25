import React, { useEffect, useState, useLayoutEffect } from 'react'
import Weaponswap from '../../../../../assets/icons/weaponswap.png'
import WikiIcon from '../../../../WikiIcon'

const Samarog = () => {
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
            <h5 className="gear-title ranger">Faster CC = Less Chance Tank Gets Brutalised to Death</h5>
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
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> is really not needed 
                on this encounter so feel free to take a CC skill instead. Here are your best options:
            </p>
            <ul>
                <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30238"/> if you need 
                to supply <WikiIcon name="Fury"/> Fury / <WikiIcon name="Vulnerability"/> Vulnerability.</li>
                <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30448"/> if you need 
                to push Rigom (this can be used to CC Samarog in and out of CA).</li>
                <li>Otherwise <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31658"/>.</li>
            </ul>
            <p>
                The low healing requirement of this fight means you can take a Shortbow instead of Staff with <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="72339"/>&nbsp;
                and <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"/> for even more CC.
            </p>
            <br/>
            <h5 className="gear-title ranger">Split Phase</h5>
            <p>
                Your role in the split phase will often be to keep Rigom immobilised inside of Samarog's hitbox. You can swap 
                out <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/>&nbsp;
                for <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"/> to get extra <WikiIcon name="Immobile"/> Immobilise.
                Beware that Rigom's explosion can destroy <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"/> roots.
                I usually use wait for the first eplosion before using it.
            </p>
            <p>
                Guldhem's auto attacks deal decent damage so watch out for monkey dps players standing in front of him as they might need heals. 
                (In best case scenario only fixated person is in front of Guldhem).
            </p>
            <p>
                Make sure to call your spirits at the start of the split phase on the spot where the stack will be.
            </p>
        </>
    )
}

export default Samarog;