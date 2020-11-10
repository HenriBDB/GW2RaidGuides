import React from "react";
import SectionIntro from '../../components/SectionIntro';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import { SectionContainer } from './styles'

const DhUtilitySkills = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p> UTILITIES </p>
            </SectionIntro>
            <NavTabs tabNames={["Healing", "Utility 1", "Utility 2", "Utility 3", "Elite"]} hrefs={["dh-heal", "dh-utility1", "dh-utility2", "dh-utility3", "dh-elite"]} gameClass="dragonhunter">
                <TabPane tabName="dh-heal" active="true">
                    <SkillCard skillID={[9137, 9138, 9139]}>
                        <p>
                            Autoattack chain consisting of 3 strikes. Every strike hits up to 3 targets. As usually in autoattack chains, last strike deals highest damage so you usually want to finish full autoattack chain for most damage output. Last strike of this chain also applies 1 stack of <WikiIcon name={"Might"} /> Might per target (hitting 3 targets will apply 3 stacks of <WikiIcon name={"Might"} /> Might).
                        </p>
                    </SkillCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhUtilitySkills