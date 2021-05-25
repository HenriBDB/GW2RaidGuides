import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import Adina from './Adina'
import Sabir from './Sabir'
import QadimThePeerless from './QadimThePeerless'

const Wing7 = () => {
    return (
        <NavTabs tabNames={["Cardinal Adina", "Cardinal Sabir", "Qadim the Peerless"]} hrefs={["adina", "sabir", "qtp"]}>
            <TabPane tabName={"adina"} active={true}>
                <Adina/>
            </TabPane>
            <TabPane tabName={"sabir"}>
                <Sabir/>
            </TabPane>
            <TabPane tabName={"qtp"}>
                <QadimThePeerless/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing7