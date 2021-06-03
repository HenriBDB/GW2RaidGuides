import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import Cairn from './Cairn'
import MursaatOverseer from './MursaatOverseer'
import Samarog from './Samarog'
import Deimos from './Deimos'

const Wing4 = () => {
    return (
        <NavTabs tabNames={["Cairn", "Mursaat Overseer", "Samarog", "Deimos"]} hrefs={["cairn", "mo", "sama", "deimos"]}>
            <TabPane tabName={"cairn"} active={true}>
                <Cairn/>
            </TabPane>
            <TabPane tabName={"mo"}>
                <MursaatOverseer/>
            </TabPane>
            <TabPane tabName={"sama"}>
                <Samarog/>
            </TabPane>
            <TabPane tabName={"deimos"}>
                <Deimos/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing4