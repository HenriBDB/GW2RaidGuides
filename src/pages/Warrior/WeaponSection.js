import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import {Axe, Dagger, Greatsword, Hammer, Longbow, Mace, Rifle, Shield, Sword, Torch, Warhorn} from './Weapons';

const WeaponSection = () => {
    return (
        <>
        <NavTabs tabNames={["Axe", "Dagger", "Greatsword", "Hammer", "Longbow", "Mace", "Rifle", "Shield", "Sword", "Torch", "Warhorn"]} hrefs={["Axe", "Dagger", "Greatsword", "Hammer", "Longbow", "Mace", "Rifle", "Shield", "Sword", "Torch", "Warhorn"]} gameClass="warrior">
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
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-wb", "Condi-wb"]} gameClass="warrior">
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
                </p>
                <p className="row justify-content-center">Overall, Run the following as default:</p>
                <div className="row justify-content-center">
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,0]}></span>
                    &emsp;
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[0,46759]}></span>
                </div>
                <p className="row justify-content-center">for more damage:</p>
                <div className="row justify-content-center">
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                    &emsp;
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46762,0]}></span>
                </div>
                <p className="row justify-content-center">for CC and depending on how much CC is needed:</p>
                <div className='row justify-content-center'>
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                    &emsp;
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46766,46766]}></span>
                </div>
                <div className="row justify-content-center">
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                    &emsp;
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[0,46766]}></span>
                </div>
                <p className="row justify-content-center">or alternatively this, if you find it more enjoyable:</p>
                <div className='row justify-content-center'>
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46759,46759]}></span>
                    &emsp;
                    <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[46763,0]}></span>
                </div>
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
                </p>
                    <p className="row justify-content-center">By and large, run the following:</p>
                    <div className="row justify-content-center">
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,76271]}></span>
                        &emsp;
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0]}></span>
                    </div>
                    <p className="row justify-content-center">or if you want to make a fool of yourself you can run:</p>
                    <div className="row justify-content-center">
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70838,70838]}></span>
                        &emsp;
                        <span data-armory-embed="items" data-armory-size="75" data-armory-ids={[70504,0]}></span>
                    </div>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default WeaponSection;