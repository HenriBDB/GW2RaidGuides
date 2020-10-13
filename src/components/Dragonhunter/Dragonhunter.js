import React, { useState } from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import {
    Wrapper,
    Container,
    SectionHeader,
    SectionContent,
    ArrowMoreButton,
} from './styles'
import Arrow from '../../assets/icons/arrow-white.png';
import DhIntro from './DhIntro';
import DhTraits from './DhTraits';
import DhUtilities from './DhUtilities';
import DhGear from './DhGear';
import DhRotation from './DhRotation';
import DhBossGuides from './DhBossGuides';


const Dragonhunter = () => {
    const [traitsVisible, setTraitsVisible] = useState(false)
    const [utilitiesVisible, setUtilitiesVisible] = useState(false)
    const [gearVisible, setGearVisible] = useState(false)
    const [rotationVisible, setRotationVisible] = useState(false)
    const [guidesVisible, setGuidesVisible] = useState(false)

    const variantsArrow = {
        opened: { rotate: 180 },
        closed: { rotate: 0 }
    }
    const toggleTraits = () => {
        setTraitsVisible(!traitsVisible)
    }
    const toggleUtilities = () => {
        setUtilitiesVisible(!utilitiesVisible)
    }
    const toggleGear = () => {
        setGearVisible(!gearVisible)
    }
    const toggleRotation = () => {
        setRotationVisible(!rotationVisible)
    }
    const toggleGuides = () => {
        setGuidesVisible(!guidesVisible)
    }
    const showGear = () => {
        setGearVisible(true)
    }
    const showGuides = () => {
        setGuidesVisible(true)
    }

    return (
        <Wrapper>
            <ScrollArrow />
            <Container>
                {/* Intro */}
                <DhIntro showGuides={showGuides} />
                {/* Traits */}
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
                    <DhTraits showGear={showGear}/>
                </SectionContent>
                {/* Utilities */}
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
                    <DhUtilities />
                </SectionContent>
                {/* Gear */}
                <SectionHeader onClick={toggleGear} id="dh-section-gear">
                    <p>Gear</p>
                    <ArrowMoreButton
                        src={Arrow}
                        variants={variantsArrow}
                        animate={gearVisible ? "opened" : "closed"}
                        transition={{ duration: "0.5" }}
                    />
                </SectionHeader>
                <SectionContent style={{ display: gearVisible ? 'block' : 'none' }}>
                    <DhGear />
                </SectionContent>
                {/* Rotation */}
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
                    <DhRotation />
                </SectionContent>
                {/* Boss guides */}
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
                    <DhBossGuides />
                </SectionContent>
            </Container>
        </Wrapper>
    );
}

export default Dragonhunter;