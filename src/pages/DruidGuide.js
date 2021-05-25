import React from 'react';
import GuideTitle from '../components/GuideTitle';
import SectionIntro from '../components/SectionIntro';
import SectionCollapsible from '../components/SectionCollapsible';
import ScrollArrow from '../components/ScrollArrowTop';
import {BoonsAndBuffs, 
    WeaponSkills, 
    UtilitySkills, 
    Traits, 
    Rotations, 
    Gear, 
    CC,
    Pets,
    BossGuides } from '../components/Druid/Sections'

const DruidGuide = () => {
    return (
        <div className={"druid-page py-5"}>
            <ScrollArrow background='#8ea53a'/>
            <div className="guide-content ranger">
                <GuideTitle title="The Power of Nature" footer="A Druid Guide for GW2 Raiding by Eren Bole"/>
                <p>
                    &emsp;This guide is intended to help GW2 players learn the role that druid plays within a raid encounter and how to utilise the class to it's fullest.
                    It has been written with raid clearing in mind and not speedrunning thus hardcore strategies will not be discussed. This guide will walk you through
                    everything that makes a druid good from trait and weapon variations to buff generation and mechanics strategies.
                </p>

                <BoonsAndBuffs/>

                <Traits/>

                <WeaponSkills/>

                <UtilitySkills/>

                <Gear/>

                <Rotations/>

                <CC/>

                <Pets/>

                <BossGuides/>

                <SectionCollapsible gameClass="ranger" title="Extra Resources" id="druid-extra-resources">
                <SectionIntro>
                    <p>
                        Here you will find all the crunchy data that can help you find the best setup for your druid.
                    </p>
                </SectionIntro>
                </SectionCollapsible>
            </div>
        </div>
    );
}

export default DruidGuide;