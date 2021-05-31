import React, { useEffect, useState, useLayoutEffect } from 'react'
import WikiIcon from '../../../WikiIcon'

const Warhorn = () => {
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
            <div class="row justify-content-center mb-3" data-armory-embed="skills" data-armory-size={armorySize} data-armory-ids="-1,-1,-1,12620,12621"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></div>
                <p class="col-lg-9">
                    Sends hawks to your foe that hit 16x consecutively and apply <WikiIcon name="Vulnerability"/> Vulnerability (5s) every hit 
                    while dealing 784 (2.4) total damage.
                    <br/>
                    You should never have to use this skill for <WikiIcon name="Vulnerability"/> Vulnerability but it is a nice add-on and the 
                    damage is good so you can use this skill whenever no other skills have priority (buffs/healing). The great advantages of this 
                    skill are the <WikiIcon name="Regeneration"/> Regeneration it provides thanks to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span> and 
                    its 16(!) hits that will recharge altogether 12% of your Astral Force (just like that, I know!).
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></div>
                <p class="col-lg-9">
                    This skill grants 5 allies  <WikiIcon name="Fury"/> Fury (10s),  <WikiIcon name="Might"><sub>6</sub></WikiIcon> Might 
                    (10s),  <WikiIcon name="Swiftness"/> Swiftness (10s), and  <WikiIcon name="Regeneration"/> Regeneration (6s) if traited 
                    with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span>. 
                    It also inflicts <WikiIcon name="Weakness"/> Weakness (5s) and <WikiIcon name="Daze"/> Daze (2s).
                    <br/>
                    Always use this skill at the start of an encounter to ensure you dps players have <WikiIcon name="Fury"/> Fury. This also 
                    helps ramp up might for your sub faster. Try to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span> this 
                    skill when ever possible if it is your only source of <WikiIcon name="Fury"/> Fury to ensure 100% uptimes. Can also 
                    be used as a blast finisher to for example stealth, heal, or cleanse conditions depending on the field you blast in. Delay the use 
                    of this skill if a CC is coming except during the opener if your sub relies on it for <WikiIcon name="Fury"/> Fury.
                </p>
            </div>
        </>
    )
}

export default Warhorn