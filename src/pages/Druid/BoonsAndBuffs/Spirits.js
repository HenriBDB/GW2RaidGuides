import React from 'react'
import WikiIcon from '../../../components/WikiIcon'

const Spirits = () => {
    return (
        <>
        <p>
            &emsp;Rangers have access to 5 spirits detailed below. Each spirit applies a passive buff to 10 players every 3 seconds that lasts for 6
            seconds and have a max stack of 1. Some spirits proc an effect when a player hit's an enemy. These effects have an internal cooldown that
            varies between spirits and scale with the stats of the player that procs the effect and <strong>not</strong> the owner of the spirit (apart 
            from <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span>). <br/>
            Spirits lose health every second and must be managed so that they do not die and are not forgotten out of range of the stack. 
            The range for the passive effect of any spirit is fairly large at 600 range. <br/>
            Additionally, spirits can be used actively once spawned to provide 10-player buffs scaled with the druid's boon duration thanks to the following trait which all druids should have: 
            <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1038"></span>. 
            This trait additionally increases spirit-activated skills' radius of effect from 240 to 360 and reduces the rate at which spirits lose health. 
            Using spirit-activated skills teleports the spirit to your location and can be used to keep spirits on the stack.
        </p>

        <p>
            <strong>Spirits' Passive Effects: </strong><br/>
            <span className="font-italic">(Effects occur around the spirit roughly 2.8 seconds after the ability was casted)</span>
        </p>
        <dl className="row">
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span>
            </dt>
            <dd className="col-10">Heal on striking a foe. Has a 10 seconds internal cooldown. Heals for 863 (0.125).</dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span>
            </dt>
            <dd className="col-10">Apply <WikiIcon name="Burning"/> Burning (2½s) on striking a foe. Has an 8 seconds internal cooldown.</dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span>
            </dt>
            <dd className="col-10">Apply <WikiIcon name="Vulnerability"/> Vulnerability (6s) on striking a foe. Has a 10 seconds internal cooldown.</dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span>
            </dt>
            <dd className="col-10">Permanent 5% physical damage modifier.</dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"></span>
            </dt>
            <dd className="col-10">Gain <WikiIcon name="Protection"/> Protection (3s) on striking a foe. Has a 10 seconds internal cooldown.</dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span>
            </dt>
            <dd className="col-10">Does not apply a passive buff but instead heals 10 allies for 101 (0.035) every second. Scales with the Druid's healing power.</dd>
        </dl>

        <p><strong>Spirits-Activated Skills:</strong></p>
        <dl className="row">
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span>
            </dt>
            <dd className="col-10">
                Heal yourself and your pet immediately for 3,865 (0.35). Then heals 5 allies for 1,940.<br/>
                Grant <WikiIcon name="Regeneration"/> Regeneration (5s) to 10 allies.
            </dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12592"></span>
            </dt>
            <dd className="col-10">
                Apply <WikiIcon name="Burning"/> Burning (4s) and <WikiIcon name="Blinded"/> Blindness (5s) to 5 foes. <br/>
                Grant <WikiIcon name="Vigor"/> Vigor (3s) to 10 allies.
            </dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12594"></span>
            </dt>
            <dd className="col-10">
                Deal 2,232 (1.275) damage to and <WikiIcon name="Daze"/> Daze (1s) 5 foes. <br/>
                Grant <WikiIcon name="Fury"/> Fury (5s) to 10 allies.
            </dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12593"></span>
            </dt>
            <dd className="col-10">
                For 5 targets: apply <WikiIcon name="Chilled"/> Chill (3s) then pulse 5x for the next 5 seconds <WikiIcon name="Chilled"/> Chill per pulse (1s). <br/>
                Grant <WikiIcon name="Might"/> Might (8s) to 10 allies.
            </dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12595"></span>
            </dt>
            <dd className="col-10">
                For 5 targets: apply <WikiIcon name="Immobile"/> Immobilise (2s) and after pulse 4x for the next 4 
                seconds <WikiIcon name="Crippled"/> Cripple per pulse (1s). <br/>
                Grant <WikiIcon name="Protection"/> Protection (3s) to 10 allies.
            </dd>
            <dt className="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"></span>
            </dt>
            <dd className="col-10">
                Clear conditions on 5 allies and revive up to 5 allies sacrificing 30% of the spirit's health for each revived ally. <br/>
                Grant <WikiIcon name="Stability"/> Stability (3s) to 10 allies.
            </dd>
        </dl>

        <p><strong>When To Take Which:</strong></p>
        <ul>
            <li>On fights that are condition heavy; Slothasor, Matthias without 90%+ <WikiIcon name="Resistance"/> Resistance uptime, Xera, 
            Soulless Horror, Largos, you should take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> otherwise 
            take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span>.</li>
            <li>Whenever you have power dps classes, you should always take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span>.</li>
            <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span> should be taken 
            on condition favoured bosses or if you have an available utility spot and have condition classes in your squad.</li>
            <li>You should take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span> if 
            ever your squad is lacking fury or missing vulnerability uptime. Fury and vulnerability uptimes can be found in <span className="font-italic">Extra Resources</span>.</li>
            <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"></span> is taken to provide <WikiIcon name="Protection"/> Protection. 
            It should always be taken except if protection is covered by a Boon Thief or if protection is not needed such as on Samarog.</li>
            <li>For your elite skill, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span> is 
            taken on most fights. Few cases with condition bursts allow you to take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31677"></span> instead 
            like KC after orb collection phase and Trio during Zane pulsing blind field. Finally, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"></span> is 
            taken on fights that require <WikiIcon name="Immobile"/> Immobilise such as Vale Guardian and Escort.</li>
        </ul>
        </>
    );
}

export default Spirits;