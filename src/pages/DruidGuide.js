import React from 'react';
import GuideTitle from '../components/GuideTitle';
import SectionIntro from '../components/SectionIntro';
import SectionCollapsible from '../components/SectionCollapsible';
import ScrollArrow from '../components/ScrollArrowTop';
import {BoonsAndBuffs, SkillsAndUtilities, Traits, Rotations} from '../components/Druid/Sections'

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

                <SkillsAndUtilities/>

                <SectionCollapsible gameClass="ranger" title="Gear" id="druid-gear">
                    <SectionIntro>
                        <p>
                            A druid will most of the time take a Staff and Axe/Warhorn. However there exists a few other weapons of choice that can be very useful in 
                            specific situations.
                        </p>
                    </SectionIntro>
                </SectionCollapsible>

                <Rotations/>

                <SectionCollapsible gameClass="ranger" title="CC" id="druid-cc">
                    <SectionIntro>
                        <p>
                            
                        </p>
                    </SectionIntro>
                </SectionCollapsible>

                <SectionCollapsible gameClass="ranger" title="Pets">
                    <SectionIntro>
                        <p>

                        </p>
                    </SectionIntro>
                </SectionCollapsible>

                <SectionCollapsible gameClass="ranger" title="Boss Guides" id="druid-boss-guides">
                    <SectionIntro>
                        <p>
                            Below a collection of written and video guides that provide example Druid gameplay. 
                            Make sure to read all the notes so that you know why and when decisions are made.
                        </p>
                    </SectionIntro>
                </SectionCollapsible>

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