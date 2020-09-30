import React from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import {Arms, Berserker, Defense, Discipline, Spellbreaker, Strength} from './Warrior/Traits';

const WarriorGuide = (props) => {
    return (
        <div className={"warrior-page pt-5"}>
            <div className="container">
                <GuideTitle title="Flames of War" footer="King of Fires Edition"/>
                <br />
                <p>
                    Warrior is brought in practically every raid comp because of the support they provide through Banner of Strength and Banner of Discipline (and Empower Allies for certain Power Comps).
                    These banners bring 400 points worth of offensive stats to everyone in the squad, which is an immense boost to group DPS.
                    The banner warrior build is split into 2 categories, power and condition damage.
                    The added support these builds provide has some people label banner warrior as a support class, even if its DPS capabilities is on par with many other pure DPS classes.
                    The label of support also changes the general approach to banner warrior.
                    Given the mentality of “Oh I’m just support” some make do with subpar DPS and at times even subpar banner uptime as well.
                    The goal with this guide is to provide greater insight into how warrior operates at a basic level and then building on top of that foundation of knowledge to provide a more complete understanding of how and why warrior plays out as it does.

                    This will be done by going in depth with the traits of the different trait-lines, explaining each of them and their uses thoroughly.
                    The same will then be done for all the weapon-skills, followed by utility skills.
                    After covering the fundamental knowledge, the gear and gear variations will be covered for the power and condition builds.
                    With gear and fundamental knowledge in check, the corresponding rotations to these gear sets will be described and explained, along with variations to these.
                    Lastly, a somewhat complete guide to every boss will be provided, describing tricks and tips on how to approach the bosses as well as bannering on these.
                    Some additional notes will be added throughout the guide to outline certain problems the class can face, as well as how to best tackle these problems to face a minimal loss in banner uptime and/or DPS.
                </p>
                <SectionTitle gameClass="ranger" title="Traits"/>
                <SectionIntro>
                <p>
                    Druid is a very situational class. Even though your general build will look like this:
                </p>
                <div class="mb-3" data-armory-embed="specializations" data-armory-ids="4,11,36,22,51,18" data-armory-4-traits="1444,1338,1437" data-armory-51-traits="1413,1484,1369" data-armory-18-traits="2049,2039,1977,2011,1928"></div>
                <p class="font-italic">
                    You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used. 
                    Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength"]} hrefs={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength"]}>
                    <TabPane tabName="Arms" active="true">
                        <Arms/>
                    </TabPane>
                    <TabPane tabName="Berserker">
                        <Berserker/>
                    </TabPane>
                    <TabPane tabName="Defense">
                        <Defense/>
                    </TabPane>
                    <TabPane tabName="Discipline">
                        <Discipline/>
                    </TabPane>
                    <TabPane tabName="Spellbreaker">
                        <Spellbreaker/>
                    </TabPane>
                    <TabPane tabName="Strength">
                        <Strength/>
                    </TabPane>
                </NavTabs>
            </div>
        </div>
    );
}

export default WarriorGuide;