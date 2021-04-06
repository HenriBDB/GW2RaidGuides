import React from 'react';
import GuideTitle from '../components/GuideTitle';
import SectionIntro from '../components/SectionIntro';
import SectionCollapsible from '../components/SectionCollapsible';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import ScrollArrow from '../components/ScrollArrowTop';
import {Spirits, Spotter, Boons} from './Druid/BoonsAndBuffs';
import {Skirmishing, NatureMagic, Druid, Marksmanship} from './Druid/Traits';
import {Openers, WeaponSwaps, BossRotations} from './Druid/Rotations';

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
                <SectionCollapsible gameClass="ranger" title="Boons and Buffs" id="druid-boons-and-buffs">
                    <SectionIntro>
                        <p>
                            Druids are responsible for many buffs and boons for the entire squad or their sub-squad only. Listed they include:&nbsp;
                            <strong>spirits</strong>, <strong>spotter</strong>, <strong>might</strong> and <strong>fury</strong>.
                        </p>
                    </SectionIntro>
                    <NavTabs tabNames={["Spirits", "Spotter", "Boons"]} hrefs={["spirits", "spotter", "boons"]}>
                        <TabPane tabName={"spirits"} active={true}>
                            <Spirits/>
                        </TabPane>
                        <TabPane tabName={"spotter"}>
                            <Spotter/>
                        </TabPane>
                        <TabPane tabName={"boons"}>
                            <Boons/>
                        </TabPane>
                    </NavTabs>
                </SectionCollapsible>

                <SectionCollapsible gameClass="ranger" title="Traits" id="druid-traits">
                    <SectionIntro>
                    <p>
                        Druid is a very situational class. Even though your general build will look like this:
                    </p>
                    <div data-armory-embed="specializations" data-armory-ids="30,25,5" data-armory-30-traits="1069,1016,1064" data-armory-25-traits="978,964,1038" data-armory-5-traits="1935,2053,2057"></div>
                    <br />
                    <p>
                        You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used. 
                        Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
                    </p>
                    </SectionIntro>
                    <NavTabs tabNames={["Skirmishing", "Nature Magic", "Druid", "Marksmanship"]} hrefs={["skirmishing", "nature-magic", "druid-trait", "marksmanship"]}>
                        <TabPane tabName="skirmishing" active={true}>
                            <Skirmishing/>
                        </TabPane>
                        <TabPane tabName="nature-magic">
                            <NatureMagic/>
                        </TabPane>
                        <TabPane tabName="druid-trait">
                            <Druid/>
                        </TabPane>
                        <TabPane tabName="marksmanship">
                            <Marksmanship/>
                        </TabPane>
                    </NavTabs>
                </SectionCollapsible>

                <SectionCollapsible gameClass="ranger" title="Gear" id="druid-gear">
                    <SectionIntro>
                        <p>
                            A druid will most of the time take a Staff and Axe/Warhorn. However there exists a few other weapons of choice that can be very useful in 
                            specific situations.
                        </p>
                    </SectionIntro>
                </SectionCollapsible>

                <SectionCollapsible gameClass="ranger" title="Rotations" id="druid-rotas">
                    <SectionIntro>
                        <p>
                            Many people believe that Druids don't have any rotations and that all skills are casted dependent on the current state of the fight.
                            However, this is simply not true. There are plenty rotations that you can easily follow to ensure efficient healing and boon uptimes.
                            Many of them will depend on the boss and adapt to mechanics timings while others can be used on every boss.
                        </p>
                    </SectionIntro>
                    <NavTabs tabNames={["Explosive Openers", "Magical Weapon Swaps", "Boss Examples"]} hrefs={["opener", "weapon-swap", "boss-rotations"]}>
                        <TabPane tabName="opener" active={true}>
                            <Openers/>
                        </TabPane>
                        <TabPane tabName="weapon-swap">
                            <WeaponSwaps/>
                        </TabPane>
                        <TabPane tabName="boss-rotations">
                            <BossRotations/>
                        </TabPane>
                    </NavTabs>
                </SectionCollapsible>

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