import React, { useState } from "react";
import { Link } from 'react-scroll';
import GuideTitle from "../../components/GuideTitle";
import ScrollArrow from '../../components/ScrollArrowTop';
import {
    Wrapper,
    Container,
    SectionHeader,
    SectionContent,
    ArrowMoreButton,
    GuideDescription,
} from './styles'
import Arrow from '../../assets/icons/arrow-white.png';
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
                {/* Intro */}
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
                            section) was made to help you achieve it!
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
                    <DhTraits />
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