import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';

const RotationSection = () => {
    return (
        <>
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-r", "Condi-r"]} gameClass="warrior">
            <TabPane tabName="Power-r" active="true">
                <NavTabs tabNames={["Axe-only", "No-swap axe", "Greatsword", "CC"]} hrefs={["Axe-only", "No-swap axe", "Greatsword-r", "CC"]} gameClass="warrior">
                    <TabPane tabName="Axe-only" active="true">
                        <p>TEST</p>
                    </TabPane>
                    <TabPane tabName="No-swap axe">
                    </TabPane>
                    <TabPane tabName="Greatsword-r">
                    </TabPane>
                    <TabPane tabName="CC">
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-r">
                <NavTabs tabNames={["Standard", "Leapfrog"]} hrefs={["Standard", "Leapfrog"]} gameClass="warrior">
                    <TabPane tabName="Standard">
                    </TabPane>
                    <TabPane tabName="Leapfrog">
                    </TabPane>
                </NavTabs>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default RotationSection;