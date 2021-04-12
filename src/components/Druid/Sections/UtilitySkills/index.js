import React from 'react'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import SectionLink from '../../../SectionLink'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import Heals from './Heal'
import Utilities from './Utility'
import Elites from './Elite'

const UtilitySkills = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Utility Skills" id="druid-utility-skills">
            <SectionIntro>
                <p>
                    Druid is a very situational class which will bring you to often swap around utility skills. The most important will be for 
                    you to cover all the necessary spirits. Use of spirits is described in <SectionLink sectionId="druid-boons-and-buffs"><strong>Boons and Buffs &#62; Spirits</strong></SectionLink>.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Heals", "Utilities", "Elites"]} hrefs={["heals", "utilities", "elites"]}>
                <TabPane tabName={"heals"} active={true}>
                    <Heals/>
                </TabPane>
                <TabPane tabName={"utilities"}>
                    <Utilities/>
                </TabPane>
                <TabPane tabName={"elites"}>
                    <Elites/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default UtilitySkills