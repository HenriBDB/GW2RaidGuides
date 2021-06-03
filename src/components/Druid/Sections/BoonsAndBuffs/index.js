import React from 'react'
import SectionIntro from '../../../SectionIntro';
import SectionCollapsible from '../../../SectionCollapsible';
import NavTabs from '../../../NavTabs';
import TabPane from '../../../TabPane';
import Boons from './Boons'
import Spirits from './Spirits'
import Spotter from './Spotter'

const BoonsAndBuffs = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Boons and Buffs" id="druid-boons-and-buffs" >
            <SectionIntro>
                <p>
                    Druids are responsible for many buffs and boons for the entire squad or their sub-squad only including:&nbsp;
                    <strong>spirits</strong>, <strong>spotter</strong>, <strong>might</strong>, <strong>fury</strong> and many more.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Spirits", "Spotter", "Boons"]} hrefs={["spirits", "spotter", "boons"]} gameClass="ranger">
                <TabPane tabName={"spirits"} active={true}>
                    <Spirits/>
                </TabPane>
                <TabPane tabName={"spotter"}>
                    <Spotter/>
                </TabPane>
                <TabPane tabName={"boons"}>
                    <Boons/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default BoonsAndBuffs