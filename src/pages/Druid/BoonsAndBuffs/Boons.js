import React from "react"
import WikiIcon from '../../../components/WikiIcon'

const Boons = () => {
    return (
        <>
        <div className="row">
            <div className="col-1 my-auto"><p className="vertical-text flip"><span><img className="clockwise" alt="Might.png" src="https://wiki.guildwars2.com/images/thumb/7/7c/Might.png/20px-Might.png" width="20" height="20"/></span> Might</p></div>
            <div className="col-11">
                <p>
                    &emsp;As a Druid, you are responsible to upkeep <WikiIcon name="Might"><sub>25</sub></WikiIcon> Might on the whole squad. This is done using 
                    the Druid trait: <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2057"></span>. 
                    This causes your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> skills 
                    to generate 10-man might when used affected by the Druid's boon duration. Fully channelled, 
                </p>
                <ul className="mt-0">
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"></span>,&nbsp;
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span>,&nbsp;
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span> generate 
                        each <WikiIcon name="Might"><sub>2</sub></WikiIcon> Might (12s).
                    </li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span> generates <WikiIcon name="Might"><sub>10</sub></WikiIcon> Might (12s).
                    </li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="34070"></span> generates <WikiIcon name="Might"><sub>8</sub></WikiIcon> Might (12s).
                    </li>
                </ul>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-1 my-auto"><p className="vertical-text flip"><span><img className="clockwise" alt="Fury.png" src="https://wiki.guildwars2.com/images/thumb/4/46/Fury.png/20px-Fury.png" width="20" height="20"/></span> Fury</p></div>
            <div className="col-11">
                <p>
                    &emsp;You are also responsible for your sub's <WikiIcon name="Fury"/> Fury and potentially also that of the squad. Your main source 
                    of <WikiIcon name="Fury"/> Fury is <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> which 
                    with the traits <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span>&nbsp;
                    and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span> allow you to 
                    upkeep <WikiIcon name="Fury"/> Fury for your sub-squad. <br/>
                    If you are not running warhorn, then you should take the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="965"></span> instead 
                    of <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span> which allows 
                    you to generate 80% <WikiIcon name="Fury"/> Fury uptime by swapping pets off-cooldown. In this scenario, a fury pet like Red Moa 
                    with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12712"></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span> can 
                    be used to cover the gaps if no-one else in your sub is generating <WikiIcon name="Fury"/> Fury.
                    Once again refer to <span className="font-italic">Extra Resources</span> for Fury uptimes. <br/>
                    In scnearios where you are using the Marksmanship trait-line instead of Skirmishing, you can also use the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"></span> 
                    to help upkeep <WikiIcon name="Fury"/> Fury.
                </p>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-1 my-auto"><p className="vertical-text flip"><span><img className="clockwise" alt="Regeneration.png" src="https://wiki.guildwars2.com/images/thumb/5/53/Regeneration.png/20px-Regeneration.png" width="20" height="20"/></span> Regeneration</p></div>
            <div className="col-11">
                <p>
                    &emsp;Last but not least, we have <WikiIcon name="Regeneration"/> Regeneration. If you factor 
                    in <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1992"></span>, <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24842"></span>,&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="74326"></span>, <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="68634"></span> and&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="67528"></span>, your outgoing healing is increased by around 77% making your regeneration extremely effective. 
                    This allows all your power dps players to maintain solid scholar uptimes which increases their damage. In addition to that, this boon is your number one ally when it comes to charging up your Astral Force 
                    to have your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> up as often as possible. At 1 tick per second, if your whole squad 
                    has <WikiIcon name="Regeneration"/> Regeneration, you will recharge 15% of your Astral Force every second which means it fully recharges in a mere 7 seconds. <br/>
                    If other players also provide <WikiIcon name="Regeneration"/> Regeneration, the stacks that provide the highest healing will be consumed first 
                    so make sure you upkeep your <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1992"></span> and&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24842"></span> stacks so that 
                    your stacks of <WikiIcon name="Regeneration"/> Regeneration are the one ticking on the squad.
                </p>
                <p>Your skills that grant <WikiIcon name="Regeneration"/> Regeneration:</p>
                <ul>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></span></li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></span> and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span>&nbsp;
                        when traited with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span>.
                    </li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span> when traited with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1038"></span>.
                    </li>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span></li>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="34309"></span></li>
                    <li>
                        Swapping pets when traited with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"></span>, and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span>.
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Boons;