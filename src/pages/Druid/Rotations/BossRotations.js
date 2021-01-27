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
            They were created with efficiency and ease of use in mind and are a great way to improve your Druid gameplay. The following rotations are destined 
            for pug kills and may not be suitable for speedclears.
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
            <p>
                &emsp;Since Soulless Horror (SH) applies a lot of conditions and can deal heavy damage, the goal of this rotation is to maximise first 
                your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> uptime so that 
                you can spam <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span> for condi 
                cleanse and then your staff uptime so that you can maximise healing. This assumes you are pushing with a longbow. Make sure you 
                exit <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> a few seconds before the 
                first tormented dead spawn so that it is back up once you finished pushing. Try using you spirit active skill off-cooldown and while out 
                of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>. Delay using spirits if you 
                are about to move.
            </p>

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
                            Use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span> off cooldown until CA runs out 
                            and fill with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"></span>.
                        </p>
                        <p>Use spirits if off cooldown once CA is depleted.</p>
                    </li>
                    <li class="event mechanic" timestamp="20">
                        <p>Tormented dead spawns</p>
                        <p>Let it come closer to stack</p>
                    </li>
                    <li class="event ranger-skill" timestamp="21">
                        <p>
                            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span> if solo-healing
                            or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> otherwise.
                        </p>
                    </li>
                    <li class="event ranger-skill" timestamp="23">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30448"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="25">
                        <p>Swap to Staff</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31710"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="29">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                    </li>
                    <li class="event ranger-skill" timestamp="37">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                        <p>Use spirits if off cooldown</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="40">
                        <p>Repeat from start</p>
                    </li>
                </ul>
            </div>
        </BossCard>
        <br/>
        <BossCard src={Sabir} bossName={"Cardinal Sabir"} gameClass="ranger">
            <p>
                &emsp;Sabir is a hard hitter and if players want to get the sweet damage modifier and special action key, they will need to face-tank attacks.
                Fortunately, all attacks happen in a pre-defined order and a rotation can therefore be drafted to handle them best. This rotation assumes a shortbow for CC 
                and a staff in the other weapon set. It also assumes coordinated CC is completed 15s after the breakbar appears which should accurately represent a pug scenario.
            </p>
            <p>Platform 3: </p>
            <div id="rotation-content">
                <ul class="rotation">
                    <li class="event ranger-skill" timestamp="-1">
                        <p>Prestack might just before arriving on big platform.</p>
                        <p>Start on staff</p>
                    </li>
                    <li class="event ranger-skill" timestamp="0">
                        <p>While moving to boss:</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                        <p>Offensive spirits</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12595"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"></span> (only on first loop)</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31710"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="12">
                        <p>Go to tornado or use SAK to skip shockwave.</p>
                    </li>
                    <li class="event ranger-skill" timestamp="15">
                        <p>Swap to Shortbow</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"></span> repeat.</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="30">
                        <p>CC</p>
                    </li>
                    <li class="event ranger-skill" timestamp="30">
                        <p>When CC is called by commander, do as much as needed of:</p>
                        <p>Flash Discharge (SAK)</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"></span></p>
                        <p>Swap to staff for primal echoes and swap pets</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="43636"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="32">
                        <p>Move out with bomb</p>
                    </li>
                    <li class="event mechanic" timestamp="42">
                        <p>Bubbles Spawn</p>
                    </li>
                    <li class="event ranger-skill" timestamp="42">
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31503"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span> while moving to bubble</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                    </li>
                    <li class="event mechanic" timestamp="48">
                        <p>Repeat from Step 0 until 30%</p>
                        <p>Note that after first loop, step 0 is only 7 seconds long instead of 12 seconds.</p>
                        <p>For the loop after 30%, replace seconds 12-32 with the below:</p>
                    </li>
                </ul>
            </div>
            <div id="rotation-content">
                <ul class="rotation">
                    <li class="event mechanic" timestamp="12">
                        <p>Uncoordinated CC</p>
                    </li>
                    <li class="event ranger-skill" timestamp="12">
                        <p>Swap to Shortbow</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span></p>
                        <p>Flash Discharge (SAK)</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"></span></p>
                        <p>Swap pets</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="43636"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32253"></span></p>
                        <p>Use Flash Discharge (SAK) off cooldown</p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32242"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31411"></span></p>
                        <p><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span></p>
                        <p>Swap to staff for primal echoes</p>
                        <p>Use Flash Discharge (SAK) off cooldown</p>
                    </li>
                    <li class="event mechanic" timestamp="32">
                        <p>Move out with bomb</p>
                    </li>
                </ul>
            </div>
        </BossCard>
        </>
    )
}

export default WeaponSwaps