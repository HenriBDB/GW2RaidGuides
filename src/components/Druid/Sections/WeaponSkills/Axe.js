import React, { useEffect, useState, useLayoutEffect } from 'react'
import WikiIcon from '../../../WikiIcon'

const Axe = () => {
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
            setArmorySize(50)
        } else {
            setArmorySize(80)
        }
    }, [width])

    return(
        <>
            <div class="row justify-content-center mb-3" data-armory-embed="skills" data-armory-size={armorySize} data-armory-ids="12466,12480,12490,12638,12639"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12466"></div>
                <p class="col-lg-9">
                    Sends an axe to your target that can ricochet and hit a second foe. Deals 293 (0.8) damage and grants you <WikiIcon name="Might"><sub>1</sub></WikiIcon> Might 
                    (5s) for each foe struck.
                    <br/>
                    Note because of this skill, you should never rely on your personal <WikiIcon name="Might"/> Might stacks to decide if you 
                    need to enter <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> 
                    to grant <WikiIcon name="Might"/> Might.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12480"></div>
                <p class="col-lg-9">
                    Throws 5 axes in a fan pattern that each deal 185 (0.1) damage and apply <WikiIcon name="Bleeding"/> Bleeding (6s).
                    <br/>
                    This skill does little damage and can safely be avoided.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12490"></div>
                <p class="col-lg-9">
                    Deal 485 (1.25) damage and apply <WikiIcon name="Bleeding"><sub>3</sub></WikiIcon> Bleeding (12s) to your target while 
                    applying <WikiIcon name="Chilled"/> Chill (4s) to foes in the area around them. Your pet's next attack 
                    inflicts <WikiIcon name="Weakness"/> Weakness (10s).
                    <br/>
                    Not only does the attack deal nice burst damage, the weakness it provides is essential to: Power Daredevils due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1257"></span> 
                    and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1887"></span>, Weavers due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2177"></span>, 
                    and Power Holosmiths due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="526"></span>. It also helps reduce the 
                    pressure on the tank. You should therefore use this skill as often as possible, especially if you have in squad one of the above classes, while still prioritising boons.
                    Note that 2 Power Daredevils can cover 100% <WikiIcon name="Weakness"/> Weakness by themselves and in this scenario you don't need to use this skill.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12638"></div>
                <p class="col-lg-9">
                    Throw an axe that returns to you pulling foes 450 units on the way back. Deals 440 (1.2) damage to foes it hits each way.
                    <br/>
                    You this skill to pull adds on stack so that they can be cleaved down or to help you CC. This is often used on Slothasor to pull the 
                    slublings and on Xera to pull adds.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12639"></div>
                <p class="col-lg-9">
                    Spin your axes for 12 hits dealing 2,904 (7.92) total damage and applying <WikiIcon name="Vulnerability"><sub>1</sub></WikiIcon> Vulnerability on each hit.
                    <br/>
                    This is your highest damage skill and should be used whenever no other skills have priority. Can also be used to reflect projectiles.
                </p>
            </div>
        </>
    )
}

export default Axe