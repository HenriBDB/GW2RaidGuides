import React from "react";
import SectionIntro from '../../components/SectionIntro';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import Fire from './Traits/Fire';
import { SectionContainer } from './styles'


const WeaverTraits = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p> Traits and Attunements intro</p>
            </SectionIntro>
            <NavTabs tabNames={["Fire",]} hrefs={["fire",]} gameClass="weaver">
                <TabPane tabName="fire" active={true}>
                    <Fire />
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default WeaverTraits