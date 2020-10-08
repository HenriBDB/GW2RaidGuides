import React, { useState } from "react";
import { Link } from 'react-scroll';
import GuideTitle from "../components/GuideTitle";
import SectionIntro from '../components/SectionIntro';
import ScrollArrow from '../components/ScrollArrowTop';
import NavTabs from '../components/NavTabs';
import TabPane from '../components/TabPane';
import { Spirits, Spotter, Boons } from './Druid/BoonsAndBuffs';
import { Skirmishing, NatureMagic, Druid, Marksmanship } from './Druid/Traits';
import {
    Wrapper,
    Container,
    SectionHeader,
    SectionContent,
    ArrowMoreButton,
    GuideDescription,
} from './styles'
import Arrow from '../assets/icons/arrow-white.png';

const DragonunterGuide = () => {
    const [traitsVisible, setTraitsVisible] = useState(false)
    const [utilitiesVisible, setUtilitiesVisible] = useState(false)
    const [gearVisible, setGearVisible] = useState(false)
    const [rotationVisible, setRotationVisible] = useState(false)
    const [guidesVisible, setGuidesVisible] = useState(false)

    const variantsArrow = {
        opened: { rotate: 180 },
        closed: { rotate: 0 }
    }
    const toggleTraits = e => {
        e && e.stopPropagation()
        setTraitsVisible(!traitsVisible)
    }
    const toggleUtilities = e => {
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
            <ScrollArrow />
            <Container>
                <GuideTitle title="Procession of Traps" footer="Raid Dragonhunter Guide by Paula The Vicious" />
                <GuideDescription>
                    <p>
                        &emsp;This guide was made to help you understand how to play Dragonunter in raids <b>efficiently</b>. No speedclear strategies are covered, but even more advanced players will hopefully find some of my tips helpful to master this class.
                    </p>
                    <p>
                        Dragonhunter is constantly pretty popular on the raid scene and my all-time favorite power class to play in pugs. It can perform really well on almost every boss if played correctly. Apart from very good damage, it brings a lot of support to the group, mostly via Aegis, Stability, Signet Share, pulls and powerful CC. It has a very high burst which makes it a great choice for bosses with short phases, but its sustained damage is also very decent.
                    </p>
                    <p>
                        It is a class which I would recommend to beginners, as it is fairly easy to play, but if you expect to deal very good damage with it and compete with classes which bench higher on golem, you will need a fair amount of boss fight experience and an in-depth class understanding to shine. This guide (especially
                        <Link to="dh-section-guides" smooth={true} duration={1000}>
                            <span
                                onClick={() => setGuidesVisible(true)}
                                style={{ color: "#47b8e0", cursor: "pointer" }}>
                                &nbsp;Boss Guides&nbsp;
                            </span>
                        </Link>
                            section) was made to help you achieve it! It is based on my experience, hours of logs/povs analysis, discussions, trial and error.
                    </p>
                    <p>
                        If you already know the basics, you can skip straight to
                        <Link to="dh-section-guides" smooth={true} duration={1000}>
                            <span
                                onClick={() => setGuidesVisible(true)}
                                style={{ color: "#47b8e0", cursor: "pointer" }}>
                                &nbsp;Boss Guides&nbsp;
                            </span>
                        </Link>
                         section.
                    </p>
                    <p>
                        Enjoy!
                    </p>
                </GuideDescription>
                <SectionHeader onClick={toggleTraits}>
                    <p> Traits </p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={traitsVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: traitsVisible ? 'block' : 'none' }}>
                    <SectionIntro>
                        <p> This is your initial trait setup which you will be using in most groups on most raid encounters:</p>
                        <div data-armory-embed="specializations" data-armory-ids="42,16,27" data-armory-42-traits="634,653,2017" data-armory-16-traits="574,565,1683" data-armory-27-traits="1898,1835,1955"></div>
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


                <SectionHeader onClick={toggleUtilities}>
                    <p>Utilities</p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={utilitiesVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: utilitiesVisible ? 'block' : 'none' }}>
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

                <SectionHeader onClick={toggleGear}>
                    <p>Gear</p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={gearVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: gearVisible ? 'block' : 'none' }}>
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


                <SectionHeader onClick={toggleRotation}>
                    <p>Rotation</p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={rotationVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: rotationVisible ? 'block' : 'none' }}>
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

                <SectionHeader onClick={toggleGuides} id="dh-section-guides">
                    <p>Boss Guides</p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={guidesVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: guidesVisible ? 'block' : 'none' }}>
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
            </Container>
        </Wrapper>
    );
}

export default DragonunterGuide;