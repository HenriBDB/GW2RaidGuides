import React from 'react'
import SectionIntro from '../../../SectionIntro';
import SectionCollapsible from '../../../SectionCollapsible';
import NavTabs from '../../../NavTabs';
import TabPane from '../../../TabPane';
import Skirmishing from './Skirmishing';
import NatureMagic from './NatureMagic';
import Druid from './Druid';
import Marksmanship from './Marksmanship';

const Traits = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Traits" id="druid-traits">
            <SectionIntro>
            <p>
                Druid is a very situational class. Even though your general build will look like this:
            </p>
            <div data-armory-embed="specializations" data-armory-ids="30,25,5" data-armory-30-traits="1069,1016,1064" data-armory-25-traits="978,964,1038" data-armory-5-traits="1935,2053,2057"></div>
            <br />
            <p>
                You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used. 
                Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
            </p>
            </SectionIntro>
            <NavTabs tabNames={["Skirmishing", "Nature Magic", "Druid", "Marksmanship"]} hrefs={["skirmishing", "nature-magic", "druid-trait", "marksmanship"]}>
                <TabPane tabName="skirmishing" active={true}>
                    <Skirmishing/>
                </TabPane>
                <TabPane tabName="nature-magic">
                    <NatureMagic/>
                </TabPane>
                <TabPane tabName="druid-trait">
                    <Druid/>
                </TabPane>
                <TabPane tabName="marksmanship">
                    <Marksmanship/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default Traits