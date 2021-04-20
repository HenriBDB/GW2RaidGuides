import React from 'react'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import WikiIcon from '../../../WikiIcon'
import PetCC from './PetCC'
import TraitCC from './TraitCC'
import UtilityCC from './UtilityCC'
import WeaponCC from './WeaponCC'


const CC = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Crowd Control (CC)" id="druid-cc">
            <SectionIntro>
                <p>
                    CC is important in many fights. Druids have access to plenty CC skills accross their toolbelt. On fights where you 
                    use a lot of <WikiIcon name="Daze"/> Dazes and <WikiIcon name="Stun"/> Stuns, you can 
                    take <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"></span> and 
                    further, <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1070"></span> for 
                    amazing amounts of CC (particularly useful on Sabir). Below you will find a list of all hard CCs available to a druid.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Weapon", "Utility", "Pet", "Trait"]} hrefs={["weapons-cc", "utility-cc", "pet-cc", "trait-cc"]}>
                <TabPane tabName={"weapons-cc"} active={true}>
                    <WeaponCC/>
                </TabPane>
                <TabPane tabName={"utility-cc"}>
                    <UtilityCC/>
                </TabPane>
                <TabPane tabName={"pet-cc"}>
                    <PetCC/>
                </TabPane>
                <TabPane tabName={"trait-cc"}>
                    <TraitCC/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default CC