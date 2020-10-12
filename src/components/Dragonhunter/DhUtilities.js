import React from "react";
import SectionIntro from '../../components/SectionIntro';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';


const DhUtilities = () => {
    return (
        <>
            <SectionIntro>
                <p> This is your initial trait setup which you will be using in most groups on most raid encounters:</p>
                <div data-armory-embed="specializations" data-armory-ids="42,16,27" data-armory-42-traits="634,653,2017" data-armory-16-traits="574,565,1683" data-armory-27-traits="1898,1835,1955"></div>
                <br />
                <p>
                    You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used.
                    Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
            </p>
            </SectionIntro>
            <NavTabs tabNames={["Zeal", "Radiance", "Dragonhunter", "Virtues"]} hrefs={["zeal", "radiance", "dragonhunter", "virtues"]}>
                <TabPane tabName="zeal" active="true">
                </TabPane>
                <TabPane tabName="radiance">
                </TabPane>
                <TabPane tabName="dragonhunter">
                </TabPane>
                <TabPane tabName="virtues">
                </TabPane>
            </NavTabs>
        </>
    )
}
export default DhUtilities