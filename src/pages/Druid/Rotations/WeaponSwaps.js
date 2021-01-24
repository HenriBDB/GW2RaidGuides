import React from 'react'
import BossCard from '../../../components/BossCard';
import VG from '../../../assets/bosses/vg.png';
import Sabetha from '../../../assets/bosses/sabetha.png';
import Samarog from '../../../assets/bosses/samarog.png';
import SH from '../../../assets/bosses/sh.png';
import Sabir from '../../../assets/bosses/sabir.png';

const WeaponSwaps = () => {
    return (
        <>
        <p>
            &emsp;On certain bosses, mechanics timings allow you to have a very consistent rotation. Below you will find examples of these rotations. 
            They were created with efficiency and ease of use in mind and are a great way to improve your Druid gameplay.
        </p>
        <p>
            Controling weapon swaps is a crucial aspect of the druid gameplay and can make your life a lot easier. The idea behind controlling weapons swaps is 
            generally to maximise 1 of 3 things: healing, boon uptimes, dps. The simplest and arguably most beneficial step is entering CA in a specific weapon set 
            depending on boss. For example, on Cairn where damage can be high, you will want to enter CA while axe/warhorn to maximise heal uptime. When not healing
            with CA you will be healing with staff while still swaping to axe/warhorn for fury, regen and weakness. A simple loop during a high incoming damage 
            phase could therefore look like this (assuming <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span>): 
        </p>
        <p>
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12490"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> →
            Use CA skills based on need →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></span> →
            Swap to staff →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></span> →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></span> →
            Auto on staff →&nbsp;
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span> →
            Repeat
        </p>

        <br/>
        
        <BossCard src={VG} bossName={"Vale Guardian"} gameClass="ranger">
            
        </BossCard>
        <br/>
        <BossCard src={Sabetha} bossName={"Sabetha the Saboteur"} gameClass="ranger">
            
        </BossCard>
        <br/>
        <BossCard src={Samarog} bossName={"Samarog"} gameClass="ranger">
            
        </BossCard>
        <br/>
        <BossCard src={SH} bossName={"Soulless Horror"} gameClass="ranger">
            Since Soulless Horror (SH) applies a lot of conditions and can deal heavy damage, the goal of this rotation is to maximise first 
            your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> uptime so that 
            you can spam <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span> for condi 
            cleanse and then your staff uptime so that you can maximise healing. This assumes you are pushing with a longbow. Make sure you 
            exit <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> a few seconds before the 
            first tormented dead spawn so that it is back up once you finished pushing. Try using you spirit active skill off-cooldown and while out 
            of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>. Delay using spirits if you 
            are about to move.

            <div id="rotation-content">
                <ul class="rotation">
                    <li class="event mechanic" timestamp="0">
                        <p>Tormented dead spawns</p>
                        <p>Let it come closer to stack</p>
                    </li>
                    <li class="event ranger-skill" timestamp="3">
                        <p>Swap to Longbow and push</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30448"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="5">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p>
                            Use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span> off cooldown 
                            and fill with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"></span>.
                        </p>
                    </li>
                    <li class="event mechanic" timestamp="15">
                        <p>Tormented dead spawns</p>
                        <p>Let it come closer to stack</p>
                    </li>
                    <li class="event ranger-skill" timestamp="17">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                        <p>
                            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span> if solo-healing
                            or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> otherwise.
                        </p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30448"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="19">
                        Swap to Staff
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31710"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="24">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="27">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"></span> if out of range and off cooldown.</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="30">
                        <p>Repeat from start</p>
                    </li>
                </ul>
            </div>
        </BossCard>
        <br/>
        <BossCard src={Sabir} bossName={"Cardinal Sabir"} gameClass="ranger">
            
        </BossCard>
        </>
    )
}

export default WeaponSwaps