import React, { useState } from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import SectionCollapsible from '../../components/SectionCollapsible';
import {
    Wrapper,
    Container,
} from './styles'
import DhIntro from './DhIntro';
import DhTraits from './DhTraits';
import DhGear from './DhGear';
import DhWeapons from './DhWeapons';
import DhWeaponSkills from './DhWeaponSkills';
import DhUtilitySkills from './DhUtilitySkills';
import DhVirtuesSkills from './DhVirtuesSkills';
import DhCC from './DhCC';
import DhTemplates from './DhTemplates';
import DhRotation from './DhRotation';
import DhBossGuides from './DhBossGuides';

const Dragonhunter = () => {
    return (
        <Wrapper>
            <ScrollArrow background='#69CCE7' />
            <Container>
                {/* Intro */}
                <DhIntro/>
                {/* Traits */}
                <SectionCollapsible gameClass="dragonhunter" title="Traits" id="dh-section-traits">
                    <DhTraits />
                </SectionCollapsible>
                {/* Gear */}
                <SectionCollapsible gameClass="dragonhunter" title="Gear" id="dh-section-gear">
                    <DhGear />
                </SectionCollapsible>
                {/* Weapons */}
                <SectionCollapsible gameClass="dragonhunter" title="Weapon Choice" id="dh-section-weapons">
                    <DhWeapons />
                </SectionCollapsible>
                {/* Weapon Skills */}
                <SectionCollapsible gameClass="dragonhunter" title="Weapon Skills" id="dh-section-weaponskills">
                    <DhWeaponSkills />
                </SectionCollapsible>
                {/* Utility Skills */}
                <SectionCollapsible gameClass="dragonhunter" title="Utility Skills" id="dh-section-utilityskills">
                    <DhUtilitySkills />
                </SectionCollapsible>
                {/* Virtues Skills */}
                <SectionCollapsible gameClass="dragonhunter" title="Virtues" id="dh-section-virtuesskills">
                    <DhVirtuesSkills />
                </SectionCollapsible>
                {/* CC */}
                <SectionCollapsible gameClass="dragonhunter" title="CC" id="dh-section-cc">
                    <DhCC />
                </SectionCollapsible>
                {/* Templates */}
                <SectionCollapsible gameClass="dragonhunter" title="Templates" id="dh-section-templates">
                    <DhTemplates />
                </SectionCollapsible>
                {/* Rotation */}
                <SectionCollapsible gameClass="dragonhunter" title="Rotation" id="dh-section-rotation">
                    <DhRotation />
                </SectionCollapsible>
                {/* Boss guides */}
                <SectionCollapsible gameClass="dragonhunter" title="Boss Guides" id="dh-section-guides">
                    <DhBossGuides />
                </SectionCollapsible>
            </Container>
        </Wrapper>
    );
}

export default Dragonhunter;