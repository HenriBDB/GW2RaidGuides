import React from 'react'
import NavTabs from '../../../../NavTabs'
import TabPane from '../../../../TabPane'
import KeepConstruct from './KeepConstruct'
import Xera from './Xera'

const Wing3 = () => {
    return (
        <NavTabs tabNames={["Keep Contruct", "Xera"]} hrefs={["kc", "xera"]}>
            <TabPane tabName={"kc"} active={true}>
                <KeepConstruct/>
            </TabPane>
            <TabPane tabName={"xera"}>
                <Xera/>
            </TabPane>
        </NavTabs>
    )
}

export default Wing3