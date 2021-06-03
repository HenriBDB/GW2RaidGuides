import React from 'react'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import WikiIcon from '../../../WikiIcon'
import DpsPets from './DpsPets'
import CcPets from './CcPets'
import UtilityPets from './UtilityPets'


const Pets = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Pets" id="druid-pets">
            <SectionIntro>
                <p>
                    Pets are your best allies. They contribute towards most of your dps and provide you with useful abilities. Most of the time 
                    you will be running <WikiIcon name="Iboga"/> Iboga and <WikiIcon name="ElectricWyvern"/> Electric Wyvern however certain situations 
                    will require you to take different pets. Make sure to check <strong>Boss Guides</strong> for my suggestion for each boss. Below 
                    you can find a list by category of all pets that are of use to a druid.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Dps", "CC", "Utility"]} hrefs={["dps-pets", "cc-pets", "utility-pets"]}>
                <TabPane tabName={"dps-pets"} active={true}>
                    <DpsPets/>
                </TabPane>
                <TabPane tabName={"cc-pets"}>
                    <CcPets/>
                </TabPane>
                <TabPane tabName={"utility-pets"}>
                    <UtilityPets/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default Pets