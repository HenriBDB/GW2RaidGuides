import React from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import {Arms, Berserker, Defense, Discipline, Spellbreaker, Strength, Tactics} from './Warrior/Traits';
import {Axe, Dagger, Greatsword, Hammer, Longbow, Mace, Rifle, Shield, Sword, Torch, Warhorn} from './Warrior/Weapons';
import {Healing, Banners, Physical, Rage, Shout, Signet, Stance, Elite, Meditations} from './Warrior/Utilities';

const WarriorGuide = (props) => {
    return (
        <div className={"warrior-page pt-5"}>
            <div className="guide-content">
                <GuideTitle title="Flames of War" footer="King of Fires Edition" footer="version 1.2 Winds of Disenchantment"/>
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
                <br/>
                <div className="row justify-content-center">
                    <h2>Builds</h2>
                </div>
                <p>
                    With all the trait-lines covered it is time to outline the optimal setups for the different builds, and why these are optimal.
                    This section will cover Power builds, Condition builds, and a few extra builds such as Spellbreaker and hand-kiter.
                </p>
                <NavTabs tabNames={["Power", "Condi", "Extra"]} hrefs={["Power-tb", "Condi-tb", "Extra-tb"]}>
                    <TabPane tabName="Power-tb" active="true">
                        <p>
                            For power you want to run:
                        </p>
                        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="4,51,18" data-armory-4-traits="1444,1338,1437" data-armory-51-traits="1413,1484,1369" data-armory-18-traits="2049,2011,1928"></div>
                        <p>
                            This combination has great synergy, allowing for huge burst with all the available modifiers and stat increases.
                            The idea is to run Axes with this build and thus filling the adrenaline bar with 3 hits + Decapitate to be able to Decapitate again as fast as possible.
                            This is possible because of Axe Mastery providing extra adrenaline on Axe crits.
                            The massive amount of Decapitates this build can dish out also helps fuel and maintain Berserker’s Power.
                            Overall, the goal with this setup is to maintain as many modifiers as you can to achieve and maintain overall high DPS.
                        </p>
                        <p>
                            For the Tactics variant you want to swap Strength for Tactics with the following setup:
                        </p>
                        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="11" data-armory-11-traits="1469,1482,1667,1711"></div>
                        <p>
                            Here the idea is still to try and maintain bonuses, but no longer have the added bonus of Decapitates fuelling Berserker’s Power.
                            This is overall weaker in terms of self DPS, but the added group DPS from Empower Allies should make up for the difference, and then some more.
                            Phalanx Strength can be run to help provide Might, and some Might generation variants will depend on the Might generated from this trait.
                            But in case that is not needed Martial Cadence will be better since it mitigates the loss from lacking Strength slightly with the cooldown reduction effect.
                        </p>
                    </TabPane>
                    <TabPane tabName="Condi-tb">
                        <p>
                            For condition damage you want to run:
                        </p>
                        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="36,51,18" data-armory-36-traits="1455,1333,1346" data-armory-51-traits="1329,1484,1657" data-armory-18-traits="2039,2042,2038"></div>
                        <p>
                            This combination provides a lot of condition damage, expertise, and flat duration increases to the main conditions Bleeding and Burning.
                            The only trait that really stands out from the rest is Burst Mastery as it provides no inherent bonus to condition damage, but the payback on adrenaline helps ensure that the build can generate the adrenaline needed to fire primal bursts off-cooldown.
                            The rest of the traits have a somewhat direct correlation to condition damage that obviously makes them better than the alternatives.
                            The only alteration to this build is Sundering Bursts instead of Blademaster for team compositions that struggle with reaching the Vulnerability cap.
                        </p>
                    </TabPane>
                    <TabPane tabName="Extra-tb">
                        <p>
                            For Spellbreaker you want to run:
                        </p>
                        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="4,51,61" data-armory-4-traits="1444,1338,1437" data-armory-51-traits="1413,1484,1369" data-armory-61-traits="2095,2060,2107"></div>
                        <p>
                            The goal here is to achieve as many offensive modifiers as possible, which is sadly lacking amongst the master traits.
                            The corresponding rotation to this setup aims to keep Attacker’s Insight stacked as much as possible while pressing big damage skills such as Whirling Axe while most modifiers are active.
                            It is as mentioned possible to run Loss Aversion over Sun and Moon Style, but it is only worthwhile on bosses where regular boon application are prominent (I.E. Qadim).
                        </p>
                        <br/>
                        <p>
                            For hand-kiting you want to run:
                        </p>
                        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="4,22,61" data-armory-4-traits="1451,1449,1454" data-armory-22-traits="1376,1368,1649" data-armory-61-traits="2153"></div>
                        <p>
                            The goal here is to maximise defensive capabilities along with access to sustain.
                            The most important part about hand kiting is either blocking the damage from hands or outhealing it, and this build attempts to do a mix of both, changing between healing through the hands and blocking them, while still having blocks leftover for mind crush.
                            The last 2 slots in Spellbreaker are since there are no real good options that especially benefit hand-kiting, so it is possible to pick whatever for those without losing out on any benefits since the trait-line is taken only for access to Full Counter.
                        </p>
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
                    <TabPane tabName="Axe" active='true'>
                        <Axe/>
                    </TabPane>
                    <TabPane tabName="Dagger">
                        <Dagger/>
                    </TabPane>
                    <TabPane tabName="Greatsword">
                        <Greatsword/>
                    </TabPane>
                    <TabPane tabName="Hammer">
                        <Hammer/>
                    </TabPane>
                    <TabPane tabName="Longbow">
                        <Longbow/>
                    </TabPane>
                    <TabPane tabName="Mace">
                        <Mace/>
                    </TabPane>
                    <TabPane tabName="Rifle">
                        <Rifle/>
                    </TabPane>
                    <TabPane tabName="Shield">
                        <Shield/>
                    </TabPane>
                    <TabPane tabName="Sword">
                        <Sword/>
                    </TabPane>
                    <TabPane tabName="Torch">
                        <Torch/>
                    </TabPane>
                    <TabPane tabName="Warhorn">
                        <Warhorn/>
                    </TabPane>
                </NavTabs>
                <br/>
                <div className="row justify-content-center">
                    <h2>Builds</h2>
                </div>
                <p>
                    All the weapons work for some build to some extent, but some weapons are just clearly better
                    than others. This section will cover the weapon setups for the power- and condition build.
                </p>
                <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-wb", "Condi-wb"]}>
                    <TabPane tabName="Power-wb" active="true">
                        <p>
                            For power there is only really 1 truth, and that truth is running Axe/Axe as the main damaging
                            weapons. This is because of how well the power traits synergizes with how the Axes play, and
                            the immense strength of Decapitate and Whirling Axe. Usually the way people go about
                            equipping the Axes is that weapon set 1 will have an Axe in the main hand, and weapon set 2
                            will have an Axe in the off-hand. The game treats this as a single weapon set with 2 Axes, but
                            with the added ability to weapon swap without needing 3 or 4 Axes. This important because it
                            gives access to the 5 adrenaline from Versatile Rage which combined with the hit from a
                            Decapitate and a single hit from an Axe skill is enough to fill out the adrenaline bar for another
                            Decapitate.
                            <br/>
                            Axes are overall the core of the power build, but you can add Greatsword to this core for
                            burstier, and overall higher DPS potential than the Axes can manage on their own. This requires
                            some finesse to be better, but, if done right, it is a decent increase in damage.
                            <br/>
                            <br/>
                            Lastly there are Maces for CC. Bringing 1 or 2 Maces on bosses which require some heavier CC is
                            always a great idea as it is not an immense loss in DPS to lose access to weapon swaps for
                            adrenaline, and the overall increase to damage the group will get in some fight due to faster CC
                            outweighs the loss many times over. Hammer is an alternative to Maces, and while it is a
                            stronger alternative in terms of CC output, it is also the slower alternative in how fast it can dish
                            out all of that CC.
                            <br/>
                            <br/>
                            Overall, Run the following as default:
                            <div className="row">
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,0]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[0,46759]}></span>
                            </div>
                            for more damage:
                            <div className="row">
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46762,0]}></span>
                            </div>
                                for CC and depending on how much CC is needed:
                            <div className='row'>
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46766,46766]}></span>
                            </div>
                            <div className="row">
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[0,46766]}></span>
                            </div>
                            or alternatively this, if you find it more enjoyable:
                            <div className='row'>
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46763,0]}></span>
                            </div>

                        </p>
                    </TabPane>
                    <TabPane tabName="Condi-wb">
                        <p>
                            For power you had options, that is not the case for the condition build.
                            For condition damage you can only really run Sword, Torch and Longbow. Sword off-hand can
                            still pull okay damage under the right circumstances, but Torch still outclass it by a large
                            margin. The main hand Sword gives access to a decent auto-attack chain and Final Thrust which
                            applies solid condition in between bursts and Torch skills while on the Sword + Torch set.
                            Longbow provides access to a great burst of Burning as well as solid Bleeds through Pin Down.
                            Both of these weapon sets are strong on their own, but with a fast-paced rotation they form a
                            strong synergy which further boosts their individual powers and push the overall DPS higher.
                            <br/>
                            <br/>
                            By and large, run the following:
                            <div className="row">
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,76271]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0]}></span>
                            </div>
                            or if you want to make a fool of yourself you can run:
                            <div className="row">
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,70838]}></span>
                                &emsp;
                                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0]}></span>
                            </div>
                        </p>
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
                <NavTabs tabNames={["Healing", "Banners", "Meditations", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]} hrefs={["Healing", "Banners", "Meditations", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]}>
                    <TabPane tabName="Healing" active='true'>
                        <Healing/>
                    </TabPane>
                    <TabPane tabName="Banners">
                        <Banners/>
                    </TabPane>
                    <TabPane tabName="Meditations">
                        <Meditations/>
                    </TabPane>
                    <TabPane tabName="Physical">
                        <Physical/>
                    </TabPane>
                    <TabPane tabName="Shout">
                        <Shout/>
                    </TabPane>
                    <TabPane tabName="Signet">
                        <Signet/>
                    </TabPane>
                    <TabPane tabName="Stance">
                        <Stance/>
                    </TabPane>
                    <TabPane tabName="Rage">
                        <Rage/>
                    </TabPane>
                    <TabPane tabName="Elite">
                        <Elite/>
                    </TabPane>
                </NavTabs>
                <br/>
                <div className="row justify-content-center">
                    <h2>Builds</h2>
                </div>
                <p>
                    As hinted at throughout the larger section there is not much room for creativity when it comes
                    to picking utility skills for banner warrior. Some skills are must haves such as Banner of
                    Strength and Banner of Discipline, and others are just so much better than the alternatives that
                    they also become a “must have” though replaceable in some circumstances. This means that the
                    builds for power and condition damage will not differ much outside 1 or 2 skills.
                    The go to core for both builds will be the following:
                </p>
                <div className="row justify-content-center">
                    <span data-armory-embed="skills" data-armory-size="75" data-armory-ids={[30189,0,14405,14407,30343]}></span>
                </div>
                <p>
                    Blood Reckoning because it is by far the best healing skill available and helps fuel the rotation.
                    Banners because that is the whole point of these builds.
                    Head Butt because once again it is the best option available and helps kick start the rotation at
                    30 adrenaline.
                </p>
                <SectionTitle gameClass="warrior" title="Gear"/>
                <SectionIntro>
                <p>
                    With the traits, weapons, and skills covered it is time to cover the gear the different builds run.
                    While there is a “main” set of armour for both builds, the power build has a few variations depending on the circumstances and what it tries to do.
                    Though the core build works perfectly fine on every encounter, these variations are mostly to fine-tune the gear for optimal chances of successor rather to avoid pitfalls the standard gear variant could fall into.
                </p>
                </SectionIntro>
                <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-g", "Condi-g"]}>
                    <TabPane tabName="Power-g" active="true">
                        <NavTabs tabNames={["Thief", "Eagle", "Strength", "Misc"]} hrefs={["Thief", "Eagle", "Strength-g", "Misc"]}>
                            <TabPane tabName="Thief">
                            </TabPane>
                        </NavTabs>
                    </TabPane>
                    <TabPane tabName="Condi-g">
                        <p>TEST</p>
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
                <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-r", "Condi-r"]}>
                    <TabPane tabName="Power-r" active="true">
                        <NavTabs tabNames={["Axe-only", "No-swap axe", "Greatsword", "CC"]} hrefs={["Axe-only", "No-swap axe", "Greatsword-r", "CC"]}>
                            <TabPane tabName="Axe-only" active="true">
                                <p>TEST</p>
                            </TabPane>
                            <TabPane tabName="No-swap axe">
                            </TabPane>
                            <TabPane tabName="Greatsword-r">
                            </TabPane>
                            <TabPane tabName="CC">
                            </TabPane>
                        </NavTabs>
                    </TabPane>
                    <TabPane tabName="Condi-r">
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