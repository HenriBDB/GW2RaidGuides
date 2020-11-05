import React, { useState } from "react";
import { Link } from 'react-scroll';
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
import DhWeapons from './DhWeapons';
import DhUtilities from './DhUtilities';
import DhGear from './DhGear';
import DhRotation from './DhRotation';
import DhBossGuides from './DhBossGuides';


const Dragonhunter = () => {
    const [traitsVisible, setTraitsVisible] = useState(false)
    const [weaponsVisible, setWeaponsVisible] = useState(false)
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
    const toggleWeapons = () => {
        setWeaponsVisible(!weaponsVisible)
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
    const showRotation = () => {
        setRotationVisible(true)
    }
    const showTraits = () => {
        setTraitsVisible(true)
    }

    return (
        <Wrapper>
            <ScrollArrow />
            <Container>
                {/* Intro */}
                <DhIntro showGuides={showGuides} />
                {/* Traits */}
                <Link to="dh-section-traits" smooth={true} duration={1000} onClick={toggleTraits}>
                    <SectionHeader id="dh-section-traits">
                        <p> Traits </p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={traitsVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: traitsVisible ? 'block' : 'none' }}>
                    <DhTraits showGear={showGear} showRotation={showRotation} showGuides={showGuides} />
                </SectionContent>
                 {/* Weapons */}
                 <Link to="dh-section-weapons" smooth={true} duration={1000} onClick={toggleWeapons}>
                    <SectionHeader id="dh-section-weapons">
                        <p> Weapons</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={traitsVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: weaponsVisible ? 'block' : 'none' }}>
                    <DhWeapons showTraits={showTraits} />
                </SectionContent>
                {/* Utilities */}
                <Link to="dh-section-utilities" smooth={true} duration={1000} onClick={toggleUtilities}>
                    <SectionHeader id="dh-section-utilities">
                        <p>Utilities</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={utilitiesVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: utilitiesVisible ? 'block' : 'none' }}>
                    <DhUtilities />
                </SectionContent>
                {/* Gear */}
                <Link to="dh-section-gear" smooth={true} duration={1000} onClick={toggleGear}>
                    <SectionHeader id="dh-section-gear">
                        <p>Gear</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={gearVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: gearVisible ? 'block' : 'none' }}>
                    <DhGear />
                </SectionContent>
                {/* Rotation */}
                <Link to="dh-section-rotation" smooth={true} duration={1000} onClick={toggleRotation}>
                    <SectionHeader id="dh-section-rotation">
                        <p>Rotation</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={rotationVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: rotationVisible ? 'block' : 'none' }}>
                    <DhRotation showGuides={showGuides} showTraits={showTraits}/>
                </SectionContent>
                {/* Boss guides */}
                <Link to="dh-section-guides" smooth={true} duration={1000} onClick={toggleGuides}>
                    <SectionHeader id="dh-section-guides">
                        <p>Boss Guides</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={guidesVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: guidesVisible ? 'block' : 'none' }}>
                    <DhBossGuides />
                </SectionContent>
            </Container>
        </Wrapper>
    );
}

export default Dragonhunter;