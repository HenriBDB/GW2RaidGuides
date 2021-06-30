import React from "react"
import WikiIcon from '../../../WikiIcon'

const Boons = () => {
    return (
        <>
        <dl className="row">
            <dt className="col-12 d-flex justify-content-center mb-2"><WikiIcon name="Might"/>&nbsp;Might</dt>
            <dd className="col-11">
                <p>
                    As a Druid, you are responsible to upkeep <WikiIcon name="Might"><sub>25</sub></WikiIcon> Might on the whole squad. This is done using 
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
            </dd>
        </dl>
        <dl className="row">
            <dt className="col-12 d-flex justify-content-center mb-2"><WikiIcon name="Fury"/>&nbsp;Fury</dt>
            <dd className="col-11">
                <p>
                    You are also responsible for your sub's <WikiIcon name="Fury"/> Fury and potentially also that of the entire squad. Your main source 
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
                    In scenarios where you are using the Marksmanship trait-line instead of Skirmishing, you can also use the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"/>&nbsp; 
                    to help upkeep <WikiIcon name="Fury"/> Fury.
                </p>
            </dd>
        </dl>
        <dl className="row">
            <dt className="col-12 d-flex justify-content-center mb-2"><WikiIcon name="Regeneration"/>&nbsp;Regeneration</dt>
            <dd className="col-11">
                <p>
                    We also have <WikiIcon name="Regeneration"/> Regeneration. If you factor 
                    in <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1992"></span>, <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24842"></span>,&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="74326"></span>, <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="68634"></span> and&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="67528"></span>, your outgoing healing is increased by around 77% making your regeneration extremely effective. 
                    This allows all your power dps players to maintain solid scholar uptimes which increases their damage. In addition to that, this boon is your number one ally when it comes to charging up your Astral Force 
                    to have your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> up as often as possible. At 1 tick per second, if your whole squad 
                    has <WikiIcon name="Regeneration"/> Regeneration, you will recharge 15% of your Astral Force every second which means it fully recharges in a mere 7 seconds. 
                    <br/>
                    If other players also provide <WikiIcon name="Regeneration"/> Regeneration, the stacks that provide the highest healing will be consumed first 
                    so make sure you upkeep your <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1992"></span> and&nbsp;
                    <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24842"></span> stacks so that 
                    your stacks of <WikiIcon name="Regeneration"/> Regeneration are the one ticking on the squad.
                </p>
                <p>Your skills that grant <WikiIcon name="Regeneration"/> Regeneration:</p>
                <ul>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> (no target limit)</li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></span> and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span>&nbsp;
                        when traited with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span> (5 players).
                    </li>
                    <li>
                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span> when traited 
                        with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1038"></span> (10 players).
                    </li>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> (5 players)</li>
                    <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="34309"></span> (5 players)</li>
                    <li>
                        Swapping pets when traited with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"></span>&nbsp;
                        and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span> (5 players).
                    </li>
                </ul>
            </dd>
        </dl>
        <dl className="row">
            <dt className="col-12 d-flex justify-content-center mb-2"><WikiIcon name="Protection"/>&nbsp;Protection</dt>
            <dd className="col-11">
                <p>
                    "Reduces strike damage by 33%" -Wiki. I believe that says it all. The damage reduction is huge and really helps players 
                    maintain scholar and avoid death from damage. It's also highly beneficial for the tank for obvious reasons. When players take 
                    less damage, you also need to give less healing so you can focus more on mechanics/personal dps. The dependency of your squad 
                    on <WikiIcon name="Protection"/> Protection will depend on their skill level. More experienced groups often rely less on protection 
                    allowing them to even ignore it on certain encounters.
                </p>
                <p>
                    Your source of <WikiIcon name="Protection"/> Protection for your squad is <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/>&nbsp;
                    (<span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12595"/>). 
                    Using it off cooldown grants your dps players at best 67% uptime with 100% boon duration although 60% is considered good 
                    (this is because the protection gained on hit scales with the boon duration of the player that triggers it so dps players 
                    with 0% boon duration will only gain <WikiIcon name="Protection"/> Protection (3s) from it). If you need more then you 
                    can have a chrono taking inspiration or in more niche cases, a tempest overloading Earth once in a while.
                </p>
            </dd>
        </dl>
        <dl className="row">
            <dt className="col-12 d-flex justify-content-center mb-2"><WikiIcon name="Swiftness"/>&nbsp;Swiftness</dt>
            <dd className="col-11">
                <p>
                    Your main source of <WikiIcon name="Swiftness"/> Swiftness for your subgroup is <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/>. 
                    Power Berserkers (incl. Bannerslaves) already rely on it for 10% bonus damage (<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1413"/>) 
                    which is why they are often placed in the Druid's subgroup even when the other subgroup also has access 
                    to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"/>. 
                    In addition, <WikiIcon name="Swiftness"/> Swiftness allows players to more quickly and better position themselves and it therefore helps 
                    them to: side-step mechanics, move faster to a mechanic (Dhuum greens, Sabetha canons etc..). Swiftness is often key to good positioning and 
                    good positioning is key to a swift and clean kill.
                </p>
            </dd>
        </dl>
        </>
    );
}

export default Boons;