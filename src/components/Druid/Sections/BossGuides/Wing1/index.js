import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import ValeGuardian from './ValeGuardian'
import Gorseval from './Gorseval'
import Sabetha from './Sabetha'

const Wing1 = () => {
    return (
        <NavTabs tabNames={["Vale Guardian", "Gorseval the Maltifarious", "Sabetha the Saboteur"]} hrefs={["vg", "gorse", "sab"]}>
            <TabPane tabName={"vg"} active={true}>
                <ValeGuardian/>
            </TabPane>
            <TabPane tabName={"gorse"}>
                <Gorseval/>
            </TabPane>
            <TabPane tabName={"sab"}>
                <Sabetha/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing1