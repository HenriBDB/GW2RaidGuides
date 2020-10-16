import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';

const GearSection = () => {
    return (
        <>
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-g", "Condi-g"]} gameClass="warrior">
            <TabPane tabName="Power-g" active="true">
                <NavTabs tabNames={["Thief", "Eagle", "Strength", "Misc"]} hrefs={["Thief", "Eagle", "Strength-g", "Misc"]} gameClass="warrior">
                    <TabPane tabName="Thief">
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-g">
                <p>TEST</p>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default GearSection;