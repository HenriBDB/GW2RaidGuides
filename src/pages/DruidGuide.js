import React from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import {Spirits, Spotter, Boons} from './Druid/BoonsAndBuffs';
import {Skirmishing, NatureMagic, Druid, Marksmanship} from './Druid/Traits';

const DruidGuide = (props) => {
    return (
        <div className={"druid-page pt-5"}>
            <div className="container">
                <GuideTitle title="The Power of Nature" footer="A Druid Guide for GW2 Raiding by Eren Bole"/>
                <br />
                <p>
                    &emsp;This guide is intended to help GW2 players learn the role that druid plays within a raid encounter and how to utilise the class to it's fullest.
                    It has been written with raid clearing in mind and not speedrunning thus hardcore strategies will not be discussed. This guide will walk you through
                    everything that makes a druid good from trait and weapon variations to buff generation and mechanics strategies.
                </p>

                <SectionTitle gameClass="ranger" title="Boons and Buffs"/>
                <SectionIntro>
                    Druids are responsible for many buffs and boons for the entire squad or their sub-squad only. Listed they include:&nbsp;
                    <strong>spirits</strong>, <strong>spotter</strong>, <strong>might</strong> and <strong>fury</strong>.
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

                <SectionTitle gameClass="ranger" title="Traits"/>
                <SectionIntro>
                <p>
                    Druid is a very situational class. Even though your general build will look like this:
                </p>
                <div class="mb-3" data-armory-embed="specializations" data-armory-ids="30,25,5" data-armory-30-traits="1069,1016,1064" data-armory-25-traits="978,964,1038" data-armory-5-traits="1935,2053,2057"></div>
                <p class="font-italic">
                    You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used. 
                    Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Skirmishing", "Nature Magic", "Druid", "Marksmanship"]} hrefs={["skirmishing", "nature-magic", "druid-trait", "marksmanship"]}>
                    <TabPane tabName="skirmishing" active="true">
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
            </div>
        </div>
    );
}

export default DruidGuide;