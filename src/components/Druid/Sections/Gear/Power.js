import React, { useEffect, useState, useLayoutEffect } from 'react'
import GearCard from '../../../GearCard'
import WikiIcon from '../../../WikiIcon'
import Weaponswap from '../../../../assets/icons/weaponswap.png'

const Power = () => {
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
            This is the most offensive build out of the three. The use cases for this build are very few and you would probably never use it in pugs.
            The diviner stats give you 100% boon duration while on Sword/Axe so you should enter CA and use spirits' active while on that weapon 
            set to ensure maximum uptimes of <WikiIcon name="Protection"/> Protection, <WikiIcon name="Regeneration"/> Regeneration, <WikiIcon name="Might"/> Might and <WikiIcon name="Fury"/> Fury. 
            Staff is your healing weapon so swap to it when extra healing is needed.
        </p>
        <p>
            I recommend the following traits when playing power druid:
        </p>
        <div data-armory-embed="specializations" data-armory-ids="30,25" data-armory-30-traits="1069,1016,1888" data-armory-25-traits="1062,965,1038"></div>
        <GearCard text={["My Squad So Good No Healing Needed"]}>
            <h5 className="gear-title ranger">Weapons &#38; Sigils</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[89566, 24554, 89632, 24618]}></span>
            </div>
            <p className="row justify-content-center text-center">
                Diviner Sword and Axe<br />
                Air and Accuracy Sigils
            </p>
            <div className="text-center mb-3">
                <img src={Weaponswap} width='40' height='40' alt="weaponswap" />
            </div>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[46982, 24551, 74326]}></span>
            </div>
            <p className="row justify-content-center text-center">
                Magi Staff<br />
                Water and Transference Sigils
            </p>
            <h5 className="gear-title ranger">Armor &#38; Runes</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[89969, 89789, 89528, 89985, 89934, 89893]}></span>
            </div>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[24785]}></span>
            </div>
            <p className="row justify-content-center text-center">Full Diviner Armour with Golemancer Runes</p>
            <h5 className="gear-title ranger">Trinkets</h5>
            <div className="row justify-content-center">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[77817, 83429, 80002, 82769, 83675, 81167]}
                data-armory-81167-stat="1538" data-armory-77817-stat="1538" data-armory-83429-stat="1538" data-armory-80002-stat="1538" 
                data-armory-82769-stat="1538" data-armory-83675-stat="1538"></span>
            </div>
            <p className="row justify-content-center">Full Diviner</p>
            <h5 className="gear-title ranger">Consumables</h5>
            <div className="row justify-content-center mb-3">
                <span data-armory-embed="items" data-armory-size={armorySize} data-armory-ids={[91801, 43451]}></span>
            </div>
        </GearCard>
        </>
    )
}

export default Power