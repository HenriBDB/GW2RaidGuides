import React from 'react';

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
            <span class="font-italic">(Effects occur around the spirit roughly 2.8 seconds after the ability was casted)</span>
        </p>
        <dl class="row">
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span>
            </dt>
            <dd class="col-10">Heal on striking a foe. Has a 10 seconds internal cooldown. Heals for 863 (0.125).</dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span>
            </dt>
            <dd class="col-10">Apply <span><img alt="Burning.png" src="https://wiki.guildwars2.com/images/thumb/4/45/Burning.png/20px-Burning.png" width="20" height="20"/><sub>2</sub></span> 
                Burning (2½s) on striking a foe. Has an 8 seconds internal cooldown.</dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span>
            </dt>
            <dd class="col-10">Apply <span><img alt="Vulnerability.png" src="https://wiki.guildwars2.com/images/thumb/a/af/Vulnerability.png/20px-Vulnerability.png" width="20" height="20"/><sub>3</sub></span> 
                Vulnerability (6s) on striking a foe. Has a 10 seconds internal cooldown.</dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span>
            </dt>
            <dd class="col-10">Permanent 5% physical damage modifier.</dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"></span>
            </dt>
            <dd class="col-10">Gain <span><img alt="Protection.png" src="https://wiki.guildwars2.com/images/thumb/6/6c/Protection.png/20px-Protection.png" width="20" height="20"/></span> 
                Protection (3s) on striking a foe. Has a 10 seconds internal cooldown.</dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span>
            </dt>
            <dd class="col-10">Does not apply a passive buff but instead heals 10 allies for 101 (0.035) every second. Scales with the Druid's healing power.</dd>
        </dl>

        <p><strong>Spirits-Activated Skills:</strong></p>
        <dl class="row">
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span>
            </dt>
            <dd class="col-10">
                Heal yourself and your pet immediately for 3,865 (0.35). Then heals 5 allies for 1,940.<br/>
                Grant <span><img alt="Regeneration.png" src="https://wiki.guildwars2.com/images/thumb/5/53/Regeneration.png/20px-Regeneration.png" width="20" height="20"/></span> 
                Regeneration (5s) to 10 allies.
            </dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12592"></span>
            </dt>
            <dd class="col-10">
                Apply <span><img alt="Burning.png" src="https://wiki.guildwars2.com/images/thumb/4/45/Burning.png/20px-Burning.png" width="20" height="20"/><sub>2</sub></span>
                Burning (4s) and <span><img alt="Blinded.png" src="https://wiki.guildwars2.com/images/thumb/3/33/Blinded.png/20px-Blinded.png" width="20" height="20"/></span> 
                Blindness (5s) to 5 foes. <br/>
                Grant <span><img alt="Vigor.png" src="https://wiki.guildwars2.com/images/thumb/f/f4/Vigor.png/20px-Vigor.png" width="20" height="20"/></span> 
                Vigor (3s) to 10 allies.
            </dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12594"></span>
            </dt>
            <dd class="col-10">
                Deal 2,232 (1.275) damage to and <span><img alt="Daze.png" src="https://wiki.guildwars2.com/images/thumb/7/79/Daze.png/20px-Daze.png" width="20" height="20"/></span> 
                Daze (1s) 5 foes. <br/>
                Grant <span><img alt="Fury.png" src="https://wiki.guildwars2.com/images/thumb/4/46/Fury.png/20px-Fury.png" width="20" height="20"/></span> 
                Fury (5s) to 10 allies.
            </dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12593"></span>
            </dt>
            <dd class="col-10">
                For 5 targets: apply <span><img alt="Chilled.png" src="https://wiki.guildwars2.com/images/thumb/a/a6/Chilled.png/20px-Chilled.png" width="20" height="20"/></span> 
                Chill (3s) then pulse 5x for the next 5 seconds <span><img alt="Chilled.png" src="https://wiki.guildwars2.com/images/thumb/a/a6/Chilled.png/20px-Chilled.png" width="20" height="20"/></span> 
                Chill per pulse (1s). <br/>
                Grant <span><img alt="Might.png" src="https://wiki.guildwars2.com/images/thumb/7/7c/Might.png/20px-Might.png" width="20" height="20"/><sub>3</sub></span> 
                Might (8s) to 10 allies.
            </dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12595"></span>
            </dt>
            <dd class="col-10">
                For 5 targets: apply <span><img alt="Immobile.png" src="https://wiki.guildwars2.com/images/thumb/3/32/Immobile.png/20px-Immobile.png" width="20" height="20"/></span> 
                Immobilise (2s) and after pulse 4x for the next 4 seconds <span><img alt="Crippled.png" src="https://wiki.guildwars2.com/images/thumb/f/fb/Crippled.png/20px-Crippled.png" width="20" height="20"/></span> 
                Cripple per pulse (1s). <br/>
                Grant <span><img alt="Protection.png" src="https://wiki.guildwars2.com/images/thumb/6/6c/Protection.png/20px-Protection.png" width="20" height="20"/></span> 
                Protection (3s) to 10 allies.
            </dd>
            <dt class="col-2 font-weight-normal">
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"></span>
            </dt>
            <dd class="col-10">
                Clear conditions on 5 allies and revive up to 5 allies sacrificing 30% of the spirit's health for each revived ally. <br/>
                Grant <span><img alt="Stability.png" src="https://wiki.guildwars2.com/images/thumb/a/ae/Stability.png/20px-Stability.png" width="20" height="20"/></span> 
                Stability (3s) to 10 allies.
            </dd>
        </dl>

        <p><strong>When To Take Which:</strong></p>
        <ul>
            <li>On fights that are condition heavy; Slothasor, Matthias without 90%+ <span><img alt="Resistance.png" src="https://wiki.guildwars2.com/images/thumb/4/4b/Resistance.png/20px-Resistance.png" width="20" height="20"/></span> 
            Resistance uptime, Xera, Soulless Horror, Largos, you should take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> 
            otherwise take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span>.</li>
            <li>Whenever you have power dps classes, you should always take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span>.</li>
            <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span> should be taken 
            on condition favoured bosses or if you have an available utility spot and have condition classes in your squad.</li>
            <li>You should take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span> 
            if ever your squad is lacking fury or missing vulnerability uptime. Fury and vulnerability uptimes can be found in <span class="font-italic">Extra Resources</span>.</li>
            <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"></span> is taken to provide <span><img alt="Protection.png" src="https://wiki.guildwars2.com/images/thumb/6/6c/Protection.png/20px-Protection.png" width="20" height="20"/></span> 
            Protection. It should always be taken except if protection is covered by a Boon Thief or if protection is not needed such as on Samarog.</li>
            <li>For your elite skill, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"></span> 
            is taken on most fights. Few cases with condition bursts allow you to take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31677"></span> 
            instead like KC after orb collection phase and Trio during Zane pulsing blind field. Finally, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"></span> 
            is taken on fights that require <span><img alt="Immobile.png" src="https://wiki.guildwars2.com/images/thumb/3/32/Immobile.png/20px-Immobile.png" width="20" height="20"/></span> 
            Immobilise such as Vale Guardian and Escort.</li>
        </ul>
        </>
    );
}

export default Spirits;