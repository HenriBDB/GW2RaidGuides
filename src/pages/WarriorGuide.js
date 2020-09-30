import React from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import {Arms, Berserker, Defense, Discipline, Spellbreaker, Strength, Tactics} from './Warrior/Traits';

const WarriorGuide = (props) => {
    return (
        <div className={"warrior-page pt-5"}>
            <div className="container">
                <GuideTitle title="Flames of War" footer="King of Fires Edition"/>
                <br/>
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
                <SectionTitle gameClass="warrior" title="Traits"/>
                <SectionIntro>
                <p>
                    The traits outline the core workings of a class and makes them stand out from the other classes.
                    Depending on which traits that are chosen, the playstyle for the class changes.
                    Certain traits are very impactful in niche situations while others are overall very strong.
                    This section aims to cover the different warrior traits and their uses, explaining why some are favoured while others are ignored.
                    Ending out the section, the optimal trait combinations for power- and condition damage banner warrior will be outlined along with a quick explanation as to why this is the optimal setup.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength", "Tactics"]} hrefs={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength", "Tactics"]}>
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
                    <TabPane tabName="Tactics">
                        <Tactics/>
                    </TabPane>
                </NavTabs>
            </div>
        </div>
    );
}

export default WarriorGuide;