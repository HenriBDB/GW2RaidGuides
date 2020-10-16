import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import {Arms, Berserker, Defense, Discipline, Spellbreaker, Strength, Tactics} from './Traits';

const TraitSection = () => {
    return (
        <>
        <NavTabs tabNames={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength", "Tactics"]} hrefs={["Arms", "Berserker", "Defense", "Discipline", "Spellbreaker", "Strength", "Tactics"]} gameClass="warrior">
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
        <NavTabs tabNames={["Power", "Condi", "Extra"]} hrefs={["Power-tb", "Condi-tb", "Extra-tb"]} gameClass="warrior">
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
        </>
    );
}

export default TraitSection;