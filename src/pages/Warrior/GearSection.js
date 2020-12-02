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
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24818,46759,24615,46759,24868]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075,48131,48073,48074,48076,48072]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Assassins shoulders, the rest as Berserkers</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273,37086,37075,49391,39233,39232]} className="row justify-content-center"></span>
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
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24723,46759,24615,46759,24618]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075,48077,48073,48074,48076,48072]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Full Berserkers armor</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273,37086,37075,49391,39233,39232]} className="row justify-content-center"></span>
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
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[24714,46759,24562,46759,24618]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Weapons with Berserkers stats</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[48075,48131,48073,48074,48076,48072]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Assassins shoulders, the rest as Berserkers</p>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[39273,37086,37075,49391,67302,67298]} className="row justify-content-center"></span>
                        <p className="row justify-content-center">Assassins ring and accessories, rest Berserkers</p>
                        <p>
                            This build is for Might generation only, it is significantly weaker than the alternatives, but can generate heaps of Might with Phalanx Strength.
                            It is built to cap on crit, generate Might, and deal some damage in the process.
                            You need Bowl of Curry Butternut Squash Soup to reach crit cap if you do not have access to spotter.
                        </p>
                    </TabPane>
                    <TabPane tabName="Misc">
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46762,24615,24597]} className="row justify-content-center"></span>
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46763,46766,46770,24639,84505]} className="row justify-content-center"></span>
                        <p>
                            The sigils in the previous sections are reserved for the Axes. This section aims to cover the sigils
                            on the other weapons used on power. Greatsword is interesting because it uses Hydromancy
                            sigil instead of Impact, to maximize the burst Greatsword provides. The idea is to not stay on
                            Greatsword for long, swapping away from it as soon as possible and remaining on the Axe set
                            until all the Axe skills are on cooldown again. Just like weapon swaps are used on the pure Axe
                            rotation to delay that point, Greatsword is used to negate it completely.
                            For the CC weapons there is one truth, and this truth is Severance and Paralyzation sigils.
                            Severance provides a short boost to precision and ferocity on interrupts, and paralyzation
                            increased the CC power of dazes and stuns, increasing overall breakbar damage. It does not
                            matter which sigil is on the Shield, just ensure that the sigil on the Mace is the opposite of the
                            one on the Shield.
                        </p>
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-g">
                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,76271,24560,24605]} className="row justify-content-center"></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0,24560,24609]} className="row justify-content-center"></span>
                <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[83502,74412,72557,76377,76776,77143,72548]} className="row justify-content-center"></span>
                <p>
                    Like many other condition builds, Viper’s stats are by far the best option. The renegade runes
                    however are fairly unique, and are possible due to King of Fires and Bloodlust granting 33% of
                    the duration needed to cap on Burning and Bleeding duration which are the condition build’s
                    main damaging conditions. Viper’s stats, Wounding Precision, and Blademaster cover almost
                    everything needed to get to 100% duration, with 7 expertise infusions closing the last missing
                    gap. This means that the build can get away with running anything it wants for runes and sigils
                    since it does not need to concern itself with duration, and best in slot for condition damage is
                    Renegade runes. The sigils are fairly unique as well in that there are 2 different on swap sigils,
                    but because of Fast Hands it is possible to activate both sigils almost as soon as they come off
                    their 9 seconds cooldown. Both of these are again the strongest condition damage on swap sigils
                    we can choose, which is the sole reason we run them.
                    Lastly the Earth sigils provide a steady stream of Bleeds from crits which is more consistent
                    than Bloodlust, but still relies on crits at the right times.
                </p>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default GearSection;