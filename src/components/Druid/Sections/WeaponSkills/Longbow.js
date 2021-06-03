import React, { useEffect, useState, useLayoutEffect } from 'react'
import WikiIcon from '../../../WikiIcon'

const Longbow = () => {
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
            <div class="row justify-content-center mb-3" data-armory-embed="skills" data-armory-size={armorySize} data-armory-ids="12510,12509,12573,12511,12469"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12510"></div>
                <p class="col-lg-9">
                    Simple auto attack with a very long range.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12509"></div>
                <p class="col-lg-9">
                    This skill applies <WikiIcon name="Vulnerability"><sub>10</sub></WikiIcon> Vulnerability (10s) which can be useful especially during 
                    splits where <WikiIcon name="Vulnerability"/> Vulnerability is not always covered on all split adds. It also deals heavy damage and 
                    due to the way the projectiles fly, it can also hit beyond its already insane maximum range.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12573"></div>
                <p class="col-lg-9">
                    The only use for this skill would be to give yourself <WikiIcon name="Stealth"/> Stealth (3s). Do note that you only enter 
                    stealth when the projectile successfully hit and if it is reflected then the ennemy that reflected it will be granted stealth 
                    (yes you can try that for maximum RP).
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></div>
                <p class="col-lg-9">
                    This is the skill that generally will make you take shortbow. It deals 150 CC and and does a 100-600 <WikiIcon name="Knockback"/> Knockback depending on 
                    how close you are to your target (the closer the bigger the knockback). This skill is therefore generally used for pushing 
                    whether it be pushing Rigom on Samarog or (and that's the most common) pushing the Tormented Deads on Soulless Horror. If 
                    you need this skill to pierce then you should take <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1698"></span>.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12469"></div>
                <p class="col-lg-9">
                    This skill will lock you in place. Make sure to wait for the channeling bar to blink before moving or interrupting it to profit from 
                    all its hits. This skill does high damage and inflicts <WikiIcon name="Crippled"/> Cripple on foes if you need to slow them down.
                    Make sure to use this skill only at times where you know you will be able to cast it fully. If you need to interrupt it midway to heal or 
                    do a mechanic, then it is not worth it.
                </p>
            </div>
        </>
    )
}

export default Longbow