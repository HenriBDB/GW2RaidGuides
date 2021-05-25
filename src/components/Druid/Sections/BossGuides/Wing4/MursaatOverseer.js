import React from 'react'
import WikiIcon from '../../../../WikiIcon'
import YoutubePlayer from '../../../../YoutubePlayer'
import {
    VideoWrapperMultiple
} from '../../../../styles'

const MursaatOverseer = () => {

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
            <h5 className="gear-title ranger">Scout Management</h5>
            <p>
                There are multiple techniques for Scout Management on this encounter:
            </p>
            <ol>
                <li>Let all of them though and use protection after they transform, once they are all on stack, to cleave them all down quickly and safely.</li>
                <li>Have the BS go condi and use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29923"/> to cleave the scouts before they transform to prevent them from reaching the end.</li>
                <li>Have a scourge with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10606"/> so they can cleave the scouts before and after they transform.</li>
                <li>Last but not least have the druid kill the scouts before they transform.</li>
            </ol>
            <p>
                Although the first option is the preferred one in many groups (3rd option is preferred for CM), you may sometimes feel like your group needs more 
                scout management and that's when you can step in. As a starters, you can send your <WikiIcon name="Iboga" size={40}/> Iboga to any scout and 
                they should be able alone to cleave it down before it reaches the end. If you need even more control, you can go condi 
                Druid with a Shortbow (see build in Gear). If you control the scouts, they will not transform so you won't need that much healing and condi druid is 
                therefore perfect. With the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1912"/>, 
                your Shortbow attacks pierce so if you target a scout in range and stand opposite the boss from that scout, you can hit both MO and the scout 
                so you can continue dealing damage to the boss while cleaving scouts. Don't tunnel vision on scouts and remember your initial jobs (boons, dispel maybe?, etc...).
            </p>
            <br/>
            <h5 className="gear-title ranger">Spirit Management</h5>
            <p>
                You can precast all your spirits. Save the active <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"/> for 
                if people go down. I recommend spawning your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/> off-centered 
                from the stack so that you can easily heal it with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"/>. 
                Aura ticks hurt quite a bit on this encounter the regular healing from <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"/> can 
                help keep players topped up on health so make sure to keep it alive!
            </p>
        </>
    )
}

export default MursaatOverseer;