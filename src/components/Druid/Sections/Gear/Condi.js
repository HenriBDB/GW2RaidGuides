import React, { useEffect, useState, useLayoutEffect } from 'react'
import GearCard from '../../../GearCard'
import WikiIcon from '../../../WikiIcon'
import Weaponswap from '../../../../assets/icons/weaponswap.png'

const Condi = () => {
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
            This is a build you can start playing if your group does not need that many heals because you either have another healer or the 
            pressure is low. Your Shortbow is there for the damage and your Staff for support. This build is more suited for fights where burst healing 
            is not needed. You can swap weapons off-cooldown and enter CA while in Staff, the higher boon duration and healing on Staff will allow 
            you to maintain <WikiIcon name="Might"/> Might and Scholar uptimes.
        </p>
        <p>
            I recommend the following traits when playing condi druid:
        </p>
        <div data-armory-embed="specializations" data-armory-ids="30,25" data-armory-30-traits="1069,1016,1912" data-armory-25-traits="1062,965,1038"></div>
        <GearCard text={["My Iboga Goes Brr"]}>
            <h5 className="gear-title ranger">Weapons &#38; Sigils</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[74569, 24612, 24560]}></span>
            </div>
            <p className="row justify-content-center text-center">
                Viper Shortbow<br />
                Agony and Earth Sigils
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
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[80370, 80137, 80280, 80588, 80637, 80300]}></span>
            </div>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24762]}></span>
            </div>
            <p className="row justify-content-center text-center">Full Seraph Armour with Krait Runes</p>
            <h5 className="gear-title ranger">Trinkets</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[77817, 83429, 80002, 82769, 83675, 81167]}
                data-armory-81167-stat="1230" data-armory-77817-stat="1230" data-armory-83429-stat="1230" data-armory-80002-stat="1230" 
                data-armory-82769-stat="1230" data-armory-83675-stat="1230"></span>
            </div>
            <p className="row justify-content-center">Full Seraph</p>
            <h5 className="gear-title ranger">Consumables</h5>
            <div className="row justify-content-center mb-3">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[43361, 48917]}></span>
            </div>
        </GearCard>
        </>
    )
}

export default Condi