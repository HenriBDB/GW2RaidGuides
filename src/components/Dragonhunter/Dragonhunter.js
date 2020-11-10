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
import DhWeaponSkills from './DhWeaponSkills';
import DhUtilitySkills from './DhUtilitySkills';
import DhCC from './DhCC';
import DhGear from './DhGear';
import DhTemplates from './DhTemplates';
import DhRotation from './DhRotation';
import DhBossGuides from './DhBossGuides';


const Dragonhunter = () => {
    const [traitsVisible, setTraitsVisible] = useState(false)
    const [gearVisible, setGearVisible] = useState(false)
    const [weaponsVisible, setWeaponsVisible] = useState(false)
    const [weaponSkillsVisible, setWeaponSkillsVisible] = useState(false)
    const [utilitySkillsVisible, setUtilitySkillsVisible] = useState(false)
    const [ccVisible, setCCVisible] = useState(false)
    const [templatesVisible, setTemplatesVisible] = useState(false)
    const [rotationVisible, setRotationVisible] = useState(false)
    const [guidesVisible, setGuidesVisible] = useState(false)

    const variantsArrow = {
        opened: { rotate: 180 },
        closed: { rotate: 0 }
    }
    const toggleTraits = () => {
        setTraitsVisible(!traitsVisible)
    }
    const toggleGear = () => {
        setGearVisible(!gearVisible)
    }
    const toggleWeapons = () => {
        setWeaponsVisible(!weaponsVisible)
    }
    const toggleWeaponSkills = () => {
        setWeaponSkillsVisible(!weaponSkillsVisible)
    }
    const toggleUtilitySkills = () => {
        setUtilitySkillsVisible(!utilitySkillsVisible)
    }
    const toggleCC = () => {
        setCCVisible(!ccVisible)
    }
    const toggleTemplates = () => {
        setTemplatesVisible(!templatesVisible)
    }
    const toggleRotation = () => {
        setRotationVisible(!rotationVisible)
    }
    const toggleGuides = () => {
        setGuidesVisible(!guidesVisible)
    }
    const showTraits = () => {
        setTraitsVisible(true)
    }
    const showGear = () => {
        setGearVisible(true)
    }
    const showWeapons = () => {
        setWeaponsVisible(!weaponsVisible)
    }
    const showRotation = () => {
        setRotationVisible(true)
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
                {/* Weapons */}
                <Link to="dh-section-weapons" smooth={true} duration={1000} onClick={toggleWeapons}>
                    <SectionHeader id="dh-section-weapons">
                        <p>Weapons</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={weaponsVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: weaponsVisible ? 'block' : 'none' }}>
                    <DhWeapons showTraits={showTraits} />
                </SectionContent>
                {/* Weapon Skills */}
                <Link to="dh-section-weaponskills" smooth={true} duration={1000} onClick={toggleWeaponSkills}>
                    <SectionHeader id="dh-section-weaponskills">
                        <p>Weapon Skills</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={weaponSkillsVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: weaponSkillsVisible ? 'block' : 'none' }}>
                    <DhWeaponSkills showGuides={showGuides} showWeapons={showWeapons} />
                </SectionContent>
                {/* Utility Skills */}
                <Link to="dh-section-utilityskills" smooth={true} duration={1000} onClick={toggleUtilitySkills}>
                    <SectionHeader id="dh-section-utilityskills">
                        <p>Utility Skills</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={utilitySkillsVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: utilitySkillsVisible ? 'block' : 'none' }}>
                    <DhUtilitySkills />
                </SectionContent>
                {/* CC */}
                <Link to="dh-section-cc" smooth={true} duration={1000} onClick={toggleCC}>
                    <SectionHeader id="dh-section-cc">
                        <p>CC</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={ccVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: ccVisible ? 'block' : 'none' }}>
                    <DhCC/>
                </SectionContent>
                {/* Templates */}
                <Link to="dh-section-templates" smooth={true} duration={1000} onClick={toggleTemplates}>
                    <SectionHeader id="dh-section-templates">
                        <p>Templates</p>
                        <ArrowMoreButton
                            src={Arrow}
                            variants={variantsArrow}
                            animate={templatesVisible ? "opened" : "closed"}
                            transition={{ duration: "0.5" }}
                        />
                    </SectionHeader>
                </Link>
                <SectionContent style={{ display: templatesVisible ? 'block' : 'none' }}>
                    <DhTemplates />
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
                    <DhRotation showGuides={showGuides} showTraits={showTraits} />
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