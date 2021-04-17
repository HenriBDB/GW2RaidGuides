import React from 'react'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import SectionLink from '../../../SectionLink'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import Classic from './Classic'
import Condi from './Condi'
import Power from './Power'
import Variations from './Variations'


const Gear = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Gear" id="druid-gear">
            <SectionIntro>
                <p>
                    You will pretty much always be playing the Classic build. You can look at variations if you need more toughness for tanking or 
                    less healing power because it's not needed etc... Condi and Power druids are used when you really only need to provide might and 
                    some healing. Make sure to read the introductory paragraphs for builds you want to use.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Classic", "Condi", "Power", "Variations"]} hrefs={["classic", "condi", "power", "variations"]}>
                <TabPane tabName={"classic"} active={true}>
                    <Classic/>
                </TabPane>
                <TabPane tabName={"condi"}>
                    <Condi/>
                </TabPane>
                <TabPane tabName={"power"}>
                    <Power/>
                </TabPane>
                <TabPane tabName={"variations"}>
                    <Variations/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default Gear