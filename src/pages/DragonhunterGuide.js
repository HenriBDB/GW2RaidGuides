import React, { useState } from "react";
import GuideTitle from "../components/GuideTitle";
import SectionTitle from "../components/SectionTitle";
import SectionIntro from '../components/SectionIntro';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import { Spirits, Spotter, Boons } from './Druid/BoonsAndBuffs';
import { Skirmishing, NatureMagic, Druid, Marksmanship } from './Druid/Traits';
import {
    Wrapper,
    Container,
    SectionHeader,
    SectionContent,
} from './styles'

const DragonunterGuide = () => {
    const [traitsVisible, setTraitsVisible] = useState(false)
    const [utilitiesVisible, setUtilitiesVisible] = useState(false)
    const [gearVisible, setGearVisible] = useState(false)
    const [rotationVisible, setRotationVisible] = useState(false)
    const [guidesVisible, setGuidesVisible] = useState(false)
    const toggleTraits = e => {
        e && e.stopPropagation()
        setTraitsVisible(!traitsVisible)
    }
    const toggleUtilities= e => {
        e && e.stopPropagation()
        setUtilitiesVisible(!utilitiesVisible)
    }
    const toggleGear = e => {
        e && e.stopPropagation()
        setGearVisible(!gearVisible)
    }
    const toggleRotation = e => {
        e && e.stopPropagation()
        setRotationVisible(!rotationVisible)
    }
    const toggleGuides = e => {
        e && e.stopPropagation()
        setGuidesVisible(!guidesVisible)
    }

    return (
        <Wrapper>
            <Container>
                <GuideTitle title="Procession of Traps" footer="Raid Dragonhunter Guide by Paula The Vicious" />
                <p>
                    &emsp;This guide was made to help you understand how to play Dragonunter in raids <b>efficiently</b>. No speedclear strategies are covered, but even more advanced players will hopefully find some of my tips helpful to master this class.<br />
                    If you already know the basics, you can skip straight to Boss Guides section. Enjoy!
                </p>
                <SectionHeader onClick={toggleTraits}>
                    Traits
                </SectionHeader>
                {traitsVisible &&
                    <SectionContent>
                        <SectionIntro>
                            <p> Druid is a very situational class. Even though your general build will look like this:</p>
                            <div data-armory-embed="specializations" data-armory-ids="30,25,5" data-armory-30-traits="1069,1016,1064" data-armory-25-traits="978,964,1038" data-armory-5-traits="1935,2053,2057"></div>
                            <br />
                            <p>
                                You will find yourself changing traits between most encounters and sometimes even trait line. Below will be explained all the used traits from used traitlines, what they bring and in which situations they are used.
                                Only the used traits have been highlighted so that you don't need to spend time learning about unused traits but feel free to look at the other traits/trait-lines too.
                </p>
                        </SectionIntro>
                        <NavTabs tabNames={["Skirmishing", "Nature Magic", "Druid", "Marksmanship"]} hrefs={["skirmishing", "nature-magic", "druid-trait", "marksmanship"]}>
                            <TabPane tabName="skirmishing" active="true">
                                <Skirmishing />
                            </TabPane>
                            <TabPane tabName="nature-magic">
                                <NatureMagic />
                            </TabPane>
                            <TabPane tabName="druid-trait">
                                <Druid />
                            </TabPane>
                            <TabPane tabName="marksmanship">
                                <Marksmanship />
                            </TabPane>
                        </NavTabs>
                    </SectionContent>
                }

                <SectionHeader onClick={toggleUtilities}>
                    Utilities
                </SectionHeader>
                {utilitiesVisible &&
                    <SectionContent>
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
                                <Skirmishing />
                            </TabPane>
                            <TabPane tabName="nature-magic">
                                <NatureMagic />
                            </TabPane>
                            <TabPane tabName="druid-trait">
                                <Druid />
                            </TabPane>
                            <TabPane tabName="marksmanship">
                                <Marksmanship />
                            </TabPane>
                        </NavTabs>
                    </SectionContent>
                }

                <SectionHeader onClick={toggleGear}>
                    Gear
                </SectionHeader>
                {gearVisible &&
                    <SectionContent>
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
                                <Skirmishing />
                            </TabPane>
                            <TabPane tabName="nature-magic">
                                <NatureMagic />
                            </TabPane>
                            <TabPane tabName="druid-trait">
                                <Druid />
                            </TabPane>
                            <TabPane tabName="marksmanship">
                                <Marksmanship />
                            </TabPane>
                        </NavTabs>
                    </SectionContent>
                }


                <SectionHeader onClick={toggleRotation}>
                    Rotation
                </SectionHeader>
                {rotationVisible &&
                    <SectionContent>
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
                                <Skirmishing />
                            </TabPane>
                            <TabPane tabName="nature-magic">
                                <NatureMagic />
                            </TabPane>
                            <TabPane tabName="druid-trait">
                                <Druid />
                            </TabPane>
                            <TabPane tabName="marksmanship">
                                <Marksmanship />
                            </TabPane>
                        </NavTabs>
                    </SectionContent>
                }


                <SectionHeader onClick={toggleGuides}>
                    Boss Guides
                </SectionHeader>
                {guidesVisible &&
                    <SectionContent>
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
                                <Skirmishing />
                            </TabPane>
                            <TabPane tabName="nature-magic">
                                <NatureMagic />
                            </TabPane>
                            <TabPane tabName="druid-trait">
                                <Druid />
                            </TabPane>
                            <TabPane tabName="marksmanship">
                                <Marksmanship />
                            </TabPane>
                        </NavTabs>
                    </SectionContent>
                }
            </Container>
        </Wrapper>
    );
}

export default DragonunterGuide;