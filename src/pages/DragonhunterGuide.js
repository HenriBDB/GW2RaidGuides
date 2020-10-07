import React from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import {Spirits, Spotter, Boons} from './Druid/BoonsAndBuffs';
import {Skirmishing, NatureMagic, Druid, Marksmanship} from './Druid/Traits';
import {
    Wrapper,
    Container,
} from './styles'

const DragonunterGuide = () => {
    return (
        <Wrapper>
            <Container>
                <GuideTitle title="Procession of Traps" footer="Average raider guide by Paula The Vicious"/>
                <p>
                    &emsp;This guide was made to help you understand how to play Dragonunter in raids <b>efficiently</b>. No speedclear strategies are covered, but even more advanced players will hopefully find some of my tips helpful to master this class.<br/>
                    If you already know the basics, you can skip straight to Boss Guides section. Enjoy!
                </p>
                <SectionTitle gameClass="dragonhunter" title="Boons and Buffs"/>
                <SectionIntro>
                    Druids are responsible for many buffs and boons for the entire squad or their sub-squad only. Listed they include:&nbsp;
                    <strong>spirits</strong>, <strong>spotter</strong>, <strong>might</strong> and <strong>fury</strong>.
                </SectionIntro>
                <NavTabs tabNames={["Spirits", "Spotter", "Boons"]} hrefs={["spirits", "spotter", "boons"]}>
                    <TabPane tabName={"spirits"} active={true}>
                        <Spirits/>
                    </TabPane>
                    <TabPane tabName={"spotter"}>
                        <Spotter/>
                    </TabPane>
                    <TabPane tabName={"boons"}>
                        <Boons/>
                    </TabPane>
                </NavTabs>

                <SectionTitle gameClass="dragonhunter" title="Traits"/>
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
                    <TabPane tabName="skirmishing" active="true">
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
            </Container>
        </Wrapper>
    );
}

export default DragonunterGuide;