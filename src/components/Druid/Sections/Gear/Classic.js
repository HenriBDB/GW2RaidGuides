import React, { useEffect, useState, useLayoutEffect } from 'react'
import GearCard from '../../../GearCard'
import WikiIcon from '../../../WikiIcon'
import Weaponswap from '../../../../assets/icons/weaponswap.png'

const Classic = () => {
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

    return(
        <>
        <p>
            This is the first build you will want to get. You can play it on every single enounter and it is the one that pug groups expect you
            to bring if you join as druid. You have 100% boon duration to ensure maximum uptimes on <WikiIcon name="Protection"/> Protection,&nbsp;
            <WikiIcon name="Regeneration"/> Regeneration, <WikiIcon name="Might"/> Might and <WikiIcon name="Fury"/> Fury.
        </p>
        <GearCard text={["Full Healing"]}>
            <h5 className="gear-title ranger">Weapons &#38; Sigils</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[85047, 72339, 84973, 74326]}></span>
            </div>
            <p className="row justify-content-center text-center">
                Harrier Axe and Warhorn<br />
                Concentration and Transference Sigils
            </p>
            <div className="text-center mb-3">
                <img src={Weaponswap} width='40' height='40' alt="weaponswap" />
            </div>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[85112, 72339, 74326]}></span>
            </div>
            <p className="row justify-content-center text-center">
                Harrier Staff<br />
                Concentration and Transference Sigils
            </p>
            <h5 className="gear-title ranger">Armor &#38; Runes</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[85172, 85183, 84923, 84983, 85149, 85343]}></span>
            </div>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24842]}></span>
            </div>
            <p className="row justify-content-center text-center">Full Harrier Armour with Monk Runes</p>
            <h5 className="gear-title ranger">Trinkets</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[77817, 83429, 80002, 82769, 83675, 81167]}
                data-armory-81167-stat="1037" data-armory-77817-stat="1363" data-armory-83429-stat="1363" data-armory-80002-stat="1363" 
                data-armory-82769-stat="1363" data-armory-83675-stat="1363"></span>
            </div>
            <p className="row justify-content-center">Full Harrier with Magi Ring</p>
            <h5 className="gear-title ranger">Consumables</h5>
            <div className="row justify-content-center mb-3">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[68634, 67528]}></span>
            </div>
        </GearCard>
        </>
    )
}

export default Classic