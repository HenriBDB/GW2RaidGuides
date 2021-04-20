import React from 'react'
import SectionIntro from '../../../SectionIntro';
import SectionCollapsible from '../../../SectionCollapsible';
import NavTabs from '../../../NavTabs';
import TabPane from '../../../TabPane';
import Openers from './Openers'
import WeaponSwaps from './WeaponSwaps'
import BossRotations from './BossRotations'

const Rotations = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Rotations" id="druid-rotas">
                    <SectionIntro>
                        <p>
                            Many people believe that Druids don't have any rotations and that all skills are casted dependent on the current state of the fight.
                            However, this is simply not true. There are plenty rotations that you can easily follow to ensure efficient healing and boon uptimes.
                            Many of them will depend on the boss and adapt to mechanics timings while others can be used on every boss.
                        </p>
                    </SectionIntro>
                    <NavTabs tabNames={["Explosive Openers", "Magical Weapon Swaps", "Boss Examples"]} hrefs={["opener", "weapon-swap", "boss-rotations"]} gameClass="ranger">
                        <TabPane tabName="opener" active={true}>
                            <Openers/>
                        </TabPane>
                        <TabPane tabName="weapon-swap">
                            <WeaponSwaps/>
                        </TabPane>
                        <TabPane tabName="boss-rotations">
                            <BossRotations/>
                        </TabPane>
                    </NavTabs>
                </SectionCollapsible>
    )
}

export default Rotations