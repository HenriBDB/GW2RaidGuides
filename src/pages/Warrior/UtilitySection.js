import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import {Healing, Banners, Physical, Rage, Shout, Signet, Stance, Elite, Meditations} from './Utilities';

const UtilitySection = () => {
    return (
        <>
        <NavTabs tabNames={["Healing", "Banners", "Meditations", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]} hrefs={["Healing", "Banners", "Meditations", "Physical", "Shout", "Signet", "Stance", "Rage", "Elite"]} gameClass="warrior">
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
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-ub", "Condi-ub"]} gameClass="warrior">
            <TabPane tabName="Power-ub" active={true}>
                <SkillCard skillID={14404}>
                    <p>
                        For power we primarily fill the remaining slot with Signet of Might.
                        The increased damage from the 180 power <WikiIcon name="Power"/> is overall solid, and you can never go wrong with
                        this.
                    </p>
                </SkillCard>
                <SkillCard skillID={30258}>
                    <p>
                        An alternative to this which I personally like is Outrage.
                        Outrage allows for longer periods of berserk and works best on fights where berserk
                        runs out before phasing or if the fight is without phases but is long in itself. You want to be able
                        to make use of the added berserk duration so bringing it for VG phases around 24-25 seconds is
                        not worthwhile, but phases closer to 30-35 seconds could benefit from running Outrage.
                    </p>
                </SkillCard>
                <SkillCard skillID={29941}>
                    <p>
                        Wild Blow can be an option for compositions that lacks CC but is not great for anything
                        else than that.
                    </p>
                </SkillCard>
                <p>Overall, these are your most viable options.</p>
            </TabPane>
            <TabPane tabName="Condi-ub">
                <SkillCard skillID={30074}>
                    <p>
                        For condition there is only one worthwhile choice and that is Shattering Blow.
                        The Bleed <WikiIcon name="Bleeding"/> last a really long time and combined with the Burning <WikiIcon name="Burning"/> from Last Blaze it deals
                        amazing damage for the condition build. There simply are no alternatives which
                        provides the same amount of damage and extends berserk as well.
                    </p>
                </SkillCard>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default UtilitySection;