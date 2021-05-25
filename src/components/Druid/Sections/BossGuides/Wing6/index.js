import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import CA from './CA'
import Largos from './Largos'
import Qadim from './Qadim'

const Wing6 = () => {
    return (
        <NavTabs tabNames={["Conjured Amalgamate", "Twin Largos", "Qadim"]} hrefs={["ca", "largos", "qadim"]}>
            <TabPane tabName={"ca"} active={true}>
                <CA/>
            </TabPane>
            <TabPane tabName={"largos"}>
                <Largos/>
            </TabPane>
            <TabPane tabName={"qadim"}>
                <Qadim/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing6