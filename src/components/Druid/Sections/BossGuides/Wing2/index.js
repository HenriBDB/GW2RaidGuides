import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import Matthias from './Matthias'
import Slothasor from './Slothasor'

const Wing2 = () => {
    return (
        <NavTabs tabNames={["Slothasor", "Matthias Gabrel"]} hrefs={["sloth", "matth"]}>
            <TabPane tabName={"sloth"} active={true}>
                <Slothasor/>
            </TabPane>
            <TabPane tabName={"matth"}>
                <Matthias/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing2