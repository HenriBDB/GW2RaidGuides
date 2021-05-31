import React, { useEffect, useState, useLayoutEffect } from 'react'
import WikiIcon from '../../../WikiIcon'

const Shortbow = () => {
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
            <div class="row justify-content-center mb-3" data-armory-embed="skills" data-armory-size={armorySize} data-armory-ids="12470,12468,12517,12507,12508"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12470"></div>
                <p class="col-lg-9">
                    Can be used to apply <WikiIcon name="Bleeding"/> Bleeding.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12468"></div>
                <p class="col-lg-9">
                    Can be used to apply <WikiIcon name="Poisoned"/> Poison.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12517"></div>
                <p class="col-lg-9">
                    Acts as an evade for 1/2 second that launches you backwards. Can be used to dodge mechanics. This attack triggers the 
                    trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1912"></span> if you have it.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12507"></div>
                <p class="col-lg-9">
                    If used while flanking, this skill will <WikiIcon name="Immobile"/> immobilise (2s) your target which can be useful for Rigom on Samarog 
                    for example or when helping out with cc or simply to add unique conditions for classes that benefit from them.
                </p>
            </div>
            <div class="row mt-2">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></div>
                <p class="col-lg-9">
                    If not playing condi druid, then this is skill is the reason to take shortbow. It deals 200 base cc (whether flanking or not, 
                    it's either stun or daze but not both) which is insane when combined with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1070"></span> or 
                    with <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"></span> for example. 
                    This skill is particularly useful on Sabir for the CC but can also be used on any other boss where you can afford having a shortbow and 
                    heavy CC is needed.
                </p>
            </div>
        </>
    )
}

export default Shortbow