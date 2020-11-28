import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';

const GearSection = () => {
    return (
        <>
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-g", "Condi-g"]} gameClass="warrior">
            <TabPane tabName="Power-g" active="true">
                <NavTabs tabNames={["Thief", "Eagle", "Strength", "Misc"]} hrefs={["Thief", "Eagle", "Strength-g", "Misc"]} gameClass="warrior">
                    <TabPane tabName="Thief" active="true">
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24818,46759,24615,46759,24868]}></span>
                        </div>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48131]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48073]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48074]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48076]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48072]}></span>
                        </div>
                        <p className="row justify-content-center">Assassins shoulders, the rest as Berserkers</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37086]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[49391]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39233]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39232]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserkers trinkets</p>
                        <p>
                            The main build is running thief runes. This is to get easy access to a lot of precision as well as a hefty 10% damage modifier.
                            This is because warrior gets no additional precision or crit chance from its traits outside of the 100 precision from doubled standards.
                            Even with 300 precision from the Thief runes, we are still not capped on crit chance with just Berserker armour.
                            To get as close to the crit cap as we can, we then add 1 assassin piece amongst Gloves/Shoulders/Boots which, with all buffs and boons applied, results in a 99.95% crit chance.
                            The sigils are the go-to for damage since both Force and Impact have a damage modifier which is great for Power DPS.
                            This setup is best in slot for almost every power favoured boss if played competently, except for Sabir where Eagle runes are the better option.
                            So, you can never go super wrong with this if you play to its strengths, or rather, if you pay attention to flanking.
                            You need Bowl of Curry Butternut Squash Soup to reach crit cap if you do not have access to spotter.
                        </p>
                    </TabPane>
                    <TabPane tabName="Eagle">
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24723,46759,24615,46759,24618]}></span>
                        </div>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48077]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48073]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48074]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48076]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48072]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserkers armor</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37086]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[49391]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39233]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39232]}></span>
                        </div>
                        <p className="row justify-content-center">Full Berserkers trinkets</p>
                        <p>
                            This build works great if you cannot maintain 90%+ flanking uptime (or if it is problematic to do so).
                            While only providing 175 precision and no assassin’s pieces whatsoever, the difference is evened out with the accuracy sigil.
                            It overcaps slightly on crit chance, but not enough for a huge amount of stats to have been wasted (the wasted stats equates to roughly 1 precision).
                            The main downside to eagle runes is that the 10% bonus only applies to targets below 50% health, making it noticeable worse than thief runes with high flanking uptimes.
                            It is able to compete up to roughly 90% flanking uptime on thief runes before thief runes are the better option.
                            You need Bowl of Curry Butternut Squash Soup to reach crit cap if you do not have access to spotter.
                        </p>
                    </TabPane>
                    <TabPane tabName="Strength-g">
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24714,46759,24562,46759,24618]}></span>
                        </div>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48131]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48073]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48074]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48076]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48072]}></span>
                        </div>
                        <p className="row justify-content-center">Assassins shoulders, the rest as Berserkers</p>
                        <div className="row justify-content-center">
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37086]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[37075]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[49391]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[67302]}></span>
                            <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[67298]}></span>
                        </div>
                        <p className="row justify-content-center">Assassins ring and accessories, rest Berserkers</p>
                        <p>
                            This build is for Might generation only, it is significantly weaker than the alternatives, but can generate heaps of Might with Phalanx Strength.
                            It is built to cap on crit, generate Might, and deal some damage in the process.
                            You need Bowl of Curry Butternut Squash Soup to reach crit cap if you do not have access to spotter.
                        </p>
                    </TabPane>
                    <TabPane tabName="Misc">
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46762,24615,24597]}></span>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46763,46766,46770,24639,84505]}></span>
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-g">
                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,76271,24560,24605]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0,24560,24609]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[83502]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[74412]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[76377]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[76776]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[77143]}></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-inline-text="wiki" data-armory-ids={[72548]}></span>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default GearSection;