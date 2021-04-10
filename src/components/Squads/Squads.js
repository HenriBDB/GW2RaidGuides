import React from "react";
import SectionCollapsible from '../../components/SectionCollapsible';
import ScrollArrow from '../../components/ScrollArrowTop';
import {
    Wrapper,
    Container,
} from './styles'
import CommIntro from './CommIntro';
import CommBasics from './CommBasics';
import CommRoles from './CommRoles';
import CommProviders from './CommProviders';
import CommSubgroups from './CommSubgroups';
import CommClasses from './CommClasses';
import CommSummary from './CommSummary';
import CommAbbreviations from './CommAbbreviations';

const Squads = () => {

    return (
        <Wrapper>
            <ScrollArrow background='#B125D3' />
            <Container>
                <div className="commander">
                    {/* Intro */}
                    <CommIntro />
                    {/* Traits */}
                    <SectionCollapsible gameClass="commander" title="What makes good team composition" id="comm-section-basics">
                        <CommBasics />
                    </SectionCollapsible>
                    {/* Roles */}
                    <SectionCollapsible gameClass="commander" title="Roles in raid team" id="comm-section-roles">
                        <CommRoles />
                    </SectionCollapsible>
                    {/* Providers */}
                    <SectionCollapsible gameClass="commander" title="Who provides what" id="comm-section-providers">
                        <CommProviders />
                    </SectionCollapsible>
                    {/* Subgroups */}
                    <SectionCollapsible gameClass="commander" title="Subgroups" id="comm-section-subgroups">
                        <CommSubgroups />
                    </SectionCollapsible>
                    {/* Classes */}
                    <SectionCollapsible gameClass="commander" title="Utility &amp; DPS" id="comm-section-classes">
                        <CommClasses />
                    </SectionCollapsible>
                    {/* Summary */}
                    <SectionCollapsible gameClass="commander" title="Summary &amp; examples" id="comm-section-summary">
                        <CommSummary />
                    </SectionCollapsible>
                    {/* Abbreviations */}
                    <SectionCollapsible gameClass="commander" title="Abbreviations" id="comm-section-abbreviations">
                        <CommAbbreviations />
                    </SectionCollapsible>
                </div>
            </Container>
        </Wrapper>
    );
}

export default Squads;