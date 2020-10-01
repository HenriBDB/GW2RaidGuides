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
                </p>
                <p>
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
                <SectionTitle gameClass="warrior" title="Weapons"/>
                <SectionIntro>
                <p>
                    Since the most common builds for banner warrior all run the berserker trait-line the burst skills listed with every weapon will be the primal burst skills the berserker give access to.
                    All main-hand or two-handed weapons have an associated burst skill.
                    This list will not contain underwater weapons,such as Spear andHarpoon Gun, nor Spellbreaker Daggers.
                    The section will be rounded off with a quick overview of which weapons are good for which builds and why.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Axe", "Dagger", "Greatsword", "Hammer", "Longbow", "Mace", "Rifle", "Shield", "Sword", "Torch", "Warhorn"]} hrefs={["Axe", "Dagger", "Greatsword", "Hammer", "Longbow", "Mace", "Rifle", "Shield", "Sword", "Torch", "Warhorn"]}>
                    <TabPane tabName="Axe">
                    </TabPane>
                </NavTabs>
                <SectionTitle gameClass="warrior" title="Utilities"/>
                <SectionIntro>
                <p>
                    Warrior has a huge arsenal of utility skills available, but sadly most of them are outright useless in raids or outclassed by better options.
                    It does not help that the context of this guide is for banner warrior, which means that we are locked into running Banner of Strength and Banner of Discipline, leaving only the healing skill, elite skill and 1 utility skill open for creativity.
                    Just like the weapons the skills will be in Berserker context, so Spellbreaker Meditations will not be present.
                    The section will be rounded out with skill setups for the different builds.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Healing", "Banner", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]} hrefs={["Healing", "Banner", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]}>
                    <TabPane tabName="Healing">
                    </TabPane>
                </NavTabs>
                <SectionTitle gameClass="warrior" title="Gear"/>
                <SectionIntro>
                <p>
                    With the traits, weapons, and skills covered it is time to cover the gear the different builds run.
                    While there is a “main” set of armour for both builds, the power build has a few variations depending on the circumstances and what it tries to do.
                    Though the core build works perfectly fine on every encounter, these variations are mostly to fine-tune the gear for optimal chances of successor rather to avoid pitfalls the standard gear variant could fall into.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power", "Condi"]}>
                    <TabPane tabName="Power" active="true">
                        <NavTabs tabNames={["Thief", "Eagle", "Strength", "Misc"]} hrefs={["Thief", "Eagle", "Strength", "Misc"]}>
                            <TabPane tabName="Thief">
                            </TabPane>
                        </NavTabs>
                    </TabPane>
                    <TabPane tabName="Condi">
                    </TabPane>
                </NavTabs>
                <SectionTitle gameClass="warrior" title="Rotation"/>
                <SectionIntro>
                <p>
                    A rotation is the ideal order of skills to achieve the highest DPS under general circumstances.
                    These rotations should be seen as the core you try to work around, but for some bosses,alterations to the rotation can yield higher DPS.
                    These boss specific adaptations will be covered under the bosses section when relevant.
                    This section will instead cover the overall rotations for the Power and Condition build.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power", "Condi-r"]}>
                    <TabPane tabName="Power" active="true">
                        <NavTabs tabNames={["Axe-only", "No-swap axe", "Greatsword", "CC"]} hrefs={["Axe-only", "No-swap axe", "Greatsword", "CC"]}>
                            <TabPane tabName="Axe-only">
                            </TabPane>
                            <TabPane tabName="No-swap axe">
                            </TabPane>
                            <TabPane tabName="Greatsword">
                            </TabPane>
                            <TabPane tabName="CC">
                            </TabPane>
                        </NavTabs>
                    </TabPane>
                    <TabPane tabName="Condi">
                        <NavTabs tabNames={["Standard", "Leapfrog"]} hrefs={["Standard", "Leapfrog"]}>
                            <TabPane tabName="Standard">
                            </TabPane>
                            <TabPane tabName="Leapfrog">
                            </TabPane>
                        </NavTabs>
                    </TabPane>
                </NavTabs>
                <SectionTitle gameClass="warrior" title="Boss Guides"/>
                <SectionIntro>
                <p>
                    This section will aim to describe how a banner warrior plays out on the different bosses, ordered by wings.
                    Every boss will include an overall approach along with listing some pitfalls which should be avoided, and shortcuts which can be abused.
                    A guide on how to best manage banners for every boss will also be laid out.
                    There will also be some remarks regarding the different builds and rotations covering which are most optimal to use, and which should be avoided for the encounter.
                </p>
                </SectionIntro>
            </div>
        </div>
    );
}

export default WarriorGuide;