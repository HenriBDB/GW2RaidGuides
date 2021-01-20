import React from 'react'
import WikiIcon from '../../../components/WikiIcon'
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
        <BossCard src={Sabetha} bossName={"Sabetha the Saboteur"} gameClass="ranger">
            
        </BossCard>
        <BossCard src={Samarog} bossName={"Samarog"} gameClass="ranger">
            
        </BossCard>
        <BossCard src={SH} bossName={"Soulless Horror"} gameClass="ranger">
            
        </BossCard>
        <BossCard src={Sabir} bossName={"Cardinal Sabir"} gameClass="ranger">
            
        </BossCard>
        </>
    )
}

export default WeaponSwaps