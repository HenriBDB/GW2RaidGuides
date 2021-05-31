import React, { useEffect, useState, useLayoutEffect } from 'react'
import Weaponswap from '../../../../../assets/icons/weaponswap.png'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const Deimos = () => {
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
            <h5 className="gear-title ranger">Black Kiting</h5>
            <p>
                Even when doing melee, oils still spawn on the closest player to Deimos excluding the tank. After 60%, try to kite the blacks behind Deimos 
                by being closer than your dps players. If an oil will spawn during Mind Crush, ask your tank for <WikiIcon name="Aegis"/> Aegis 
                so you can stay next to Deimos and spawn the oil there (again behind the boss or towards the outside of the arena if possible). If 
                they can't give you <WikiIcon name="Aegis"/> Aegis reliably then you can take a Greatsword and block the Mind Crush 
                with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12522"/>.
            </p>
            <p>
                During splits at 75%, 50% and 25%, if you need to stay up to heal your tank (although that really shouldn't be necessary as Deimos 
                doesn't hurt that much and they can just go to the bubble during Mind Crush to avoid the debuff as the HK will be kiting blacks then), 
                then try to spawn oils on the edge so that your tank does not need to move Deimos and other players don't have to worry about oils 
                when coming back down.
            </p>
            <br/>
            <h5 className="gear-title ranger">Pet Variations</h5>
            <p>
                I like to take the following pets.
            </p>
            <div className="row justify-content-center align-items-center">
                <WikiIcon name="Jacaranda" size={armorySize*2}/>
                <img className="mx-2" src={Weaponswap} width='40' height='40' alt="weaponswap" />
                <WikiIcon name="Gazelle" size={armorySize*2}/>
            </div>
            <p>
                I use the fast cc from the Gazelle to help quickly CC Sauls (very useful in last 10% if you sacrificed the last green and TP soul is still alive). 
                The Jacaranda shines when you need to immobilise Prides. Being able to send your pet from a distance means you can stay on stack. You should 
                also use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="44980"/> on Deimos when Unnatural 
                Signet is up to provide unique conditions if you have classes that benefit from them (pHolo, pDaredevil). Having a Jacaranda just 
                makes it a lot more comfy to <WikiIcon name="Immobile"/> immobilise Prides.
            </p>
            <br/>
            <h5 className="gear-title ranger">Spirit of Nature Management</h5>
            <p>
                There are 2 main strategies for using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/>. 
                The first is to have it up on the main platform until 10%; if you are going up with greens then spawn it after coming back down 
                from 50% split and avoid 25% green so that you have your spirit up for 50%-10% since spirits despawn and go on cooldown when you 
                teleport between realms. The other strategy is to keep your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/> for 
                the last 10% and use it to give stability for one of the slams. The recommended timing for this it to 
                use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"/> when 
                Deimos grabs the pillars to his side with each hand (just before the first slam). The passive of your spirit will also help 
                heal players who take increasing damage from the stacking debuff that you get in the Demonic Realm.
            </p>
        </>
    )
}

export default Deimos;