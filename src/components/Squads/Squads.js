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
import CommIntro from './CommIntro';
import CommBasics from './CommBasics';
import CommRoles from './CommRoles';
import CommProviders from './CommProviders';
import CommSubgroups from './CommSubgroups';
import CommClasses from './CommClasses';
import CommSummary from './CommSummary';
import CommAbbreviations from './CommAbbreviations';

const Squads = () => {
    const [basicsVisible, setBasicsVisible] = useState(false)
    const [rolesVisible, setRolesVisible] = useState(false)
    const [providersVisible, setProvidersVisible] = useState(false)
    const [subgroupsVisible, setSubgroupsVisible] = useState(false)
    const [classesVisible, setClassesVisible] = useState(false)
    const [summaryVisible, setSummaryVisible] = useState(false)
    const [abbreviationsVisible, setAbbreviationsVisible] = useState(false)

    const variantsArrow = {
        opened: { rotate: 180 },
        closed: { rotate: 0 }
    }
    const toggleBasics = () => {
        setBasicsVisible(!basicsVisible) 
    }
    const toggleRoles = () => {
        setRolesVisible(!rolesVisible)
    }
    const toggleProviders = () => {
        setProvidersVisible(!providersVisible)
    }
    const toggleSubgroups = () => {
        setSubgroupsVisible(!subgroupsVisible)
    }
    const toggleClasses = () => {
        setClassesVisible(!classesVisible)
    }
    const toggleSummary = () => {
        setSummaryVisible(!summaryVisible)
    }
    const toggleAbbreviations = () => {
        setAbbreviationsVisible(!abbreviationsVisible)
    }

    return (
        <Wrapper>
            <ScrollArrow background='#B125D3' />
            <Container>
                <div className="commander">
                    {/* Intro */}
                    <CommIntro />
                    {/* Traits */}
                    <Link to="comm-section-basics" smooth={true} duration={1000} onClick={toggleBasics}>
                        <SectionHeader id="comm-section-basics">
                            <p> What makes good team composition </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={basicsVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: basicsVisible ? 'block' : 'none' }}>
                        <CommBasics />
                    </SectionContent>
                    {/* Roles */}
                    <Link to="comm-section-roles" smooth={true} duration={1000} onClick={toggleRoles}>
                        <SectionHeader id="comm-section-roles">
                            <p> Roles in raid team </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={rolesVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: rolesVisible ? 'block' : 'none' }}>
                        <CommRoles />
                    </SectionContent>
                    {/* Providers */}
                    <Link to="comm-section-providers" smooth={true} duration={1000} onClick={toggleProviders}>
                        <SectionHeader id="comm-section-providers">
                            <p> Who provides what </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={providersVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: providersVisible ? 'block' : 'none' }}>
                        <CommProviders />
                    </SectionContent>
                    {/* Subgroups */}
                    <Link to="comm-section-subgroups" smooth={true} duration={1000} onClick={toggleSubgroups}>
                        <SectionHeader id="comm-section-subgroups">
                            <p> Subgroups </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={subgroupsVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: subgroupsVisible ? 'block' : 'none' }}>
                        <CommSubgroups />
                    </SectionContent>
                    {/* Classes */}
                    <Link to="comm-section-classes" smooth={true} duration={1000} onClick={toggleClasses}>
                        <SectionHeader id="comm-section-classes">
                            <p> Utility &amp; DPS </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={classesVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: classesVisible ? 'block' : 'none' }}>
                        <CommClasses />
                    </SectionContent>
                    {/* Summary */}
                    <Link to="comm-section-summary" smooth={true} duration={1000} onClick={toggleSummary}>
                        <SectionHeader id="comm-section-summary">
                            <p> Summary &amp; examples </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={summaryVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: summaryVisible ? 'block' : 'none' }}>
                        <CommSummary />
                    </SectionContent>
                    {/* Abbreviations */}
                    <Link to="comm-section-abbreviations" smooth={true} duration={1000} onClick={toggleAbbreviations}>
                        <SectionHeader id="comm-section-abbreviations">
                            <p> Abbreviations </p>
                            <ArrowMoreButton
                                src={Arrow}
                                variants={variantsArrow}
                                animate={abbreviationsVisible ? "opened" : "closed"}
                                transition={{ duration: "0.5" }}
                            />
                        </SectionHeader>
                    </Link>
                    <SectionContent style={{ display: abbreviationsVisible ? 'block' : 'none' }}>
                        <CommAbbreviations />
                    </SectionContent>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Squads;