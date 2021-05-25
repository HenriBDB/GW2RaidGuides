import React from 'react'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import Wing1 from './Wing1'
import Wing2 from './Wing2'
import Wing3 from './Wing3'
import Wing4 from './Wing4'
import Wing5 from './Wing5'
import Wing6 from './Wing6'
import Wing7 from './Wing7'


const BossGuides = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Boss Guides" id="druid-boss-guides">
            <SectionIntro>
                <p>
                    Before you read the below notes, I recommend you read the Druid guide written by Snow Crows which 
                    you can find <a href="https://snowcrows.com/raids/guides/ranger/druid/heal/" target="_blank" rel="noopener noreferrer">here</a>.
                    This is more a collection of written tips that complement the guide linked above. In addition 
                    you can find video examples of what I consider to be good Druid gameplay. Make sure to read the description of 
                    those videos as they often include valuable information. 
                    It is important to note that druid is a very versatile class that can be played in 
                    many different ways and these are therefore mere personal preferences and not a golden bible that must be followed. 
                </p>
                <p>
                    Common note about SC guides: they will often suggest taking <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"/> while 
                    also taking Warhorn which is not necessary. Only take it with Warhorn if you need the vulnerability.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Wing 1", "Wing 2", "Wing 3", "Wing 4", "Wing 5", "Wing 6", "Wing 7"]} hrefs={["wing1", "wing2", "wing3", "wing4", "wing5", "wing6", "wing7"]}>
                <TabPane tabName={"wing1"} active={true}>
                    <Wing1/>
                </TabPane>
                <TabPane tabName={"wing2"}>
                    <Wing2/>
                </TabPane>
                <TabPane tabName={"wing3"}>
                    <Wing3/>
                </TabPane>
                <TabPane tabName={"wing4"}>
                    <Wing4/>
                </TabPane>
                <TabPane tabName={"wing5"}>
                    <Wing5/>
                </TabPane>
                <TabPane tabName={"wing6"}>
                    <Wing6/>
                </TabPane>
                <TabPane tabName={"wing7"}>
                    <Wing7/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default BossGuides