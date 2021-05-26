import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const SH = () => {

    return (
        <>
            <VideoWrapperMultiple>
                <YoutubePlayer textOnly="Video Guide"/>
                <YoutubePlayer textOnly="Gameplay Example"/>
            </VideoWrapperMultiple>
            <VideoWrapperMultiple className="mb-3">
                <YoutubePlayer videoId=""/>
                <YoutubePlayer videoId="jI4-fl7SFcM"/>
            </VideoWrapperMultiple>
            <h5 className="gear-title ranger">Optimising Your Healing</h5>
            <p>
                Soulless Horror is a heavy damage fight that puts a lot of pressure on healers so you want to optimise your healing uptime.
                When Tormented Deads start spawning every 20 seconds, swap back to staff every other push. Try to be as much as possible 
                in <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"/> between 2 pushes 
                while on Longbow. When on Staff, exit CA roughly 4s before a tormented dead appears so that it is back off cooldown after you 
                finish pushing and are stuck on Longbow. Cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> off 
                cooldown (only delay if you are about to move) and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"/> while 
                out of CA, just before pushing if possible (or when a scythe goes through the group if many players get caught in it).
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Don't hesitate to swap in some Minstrel pieces if the toughness can allow you to face tank attacks and therefore increase your 
                healing uptime since you won't need to spend time dodging.
            </p>
            <p>
                If you need to top off vulnerability once in a while, you can use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12509"/>.
            </p>
            <p>
                You can swap <WikiIcon name="ElectricWyvern" size={40}/> Electric Wyvern for <WikiIcon name="Gazelle" size={40}/> Gazelle for safer CCs that 
                only target the Soulless Horror and not the Tormented Dead as well (which the Electric Whyvern's field can do).
            </p>
        </>
    )
}

export default SH;