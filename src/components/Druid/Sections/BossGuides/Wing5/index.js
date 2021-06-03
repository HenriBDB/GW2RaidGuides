import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import SH from './SH'
import Dhuum from './Dhuum'

const Wing5 = () => {
    return (
        <NavTabs tabNames={["Soulless Horror", "Dhuum"]} hrefs={["sh", "dhuum"]}>
            <TabPane tabName={"sh"} active={true}>
                <SH/>
            </TabPane>
            <TabPane tabName={"dhuum"}>
                <Dhuum/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing5