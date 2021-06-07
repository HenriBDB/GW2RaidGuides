import React from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import SectionCollapsible from '../../components/SectionCollapsible';
import {
    Wrapper,
    Container,
} from './styles'
import WeaverIntro from './WeaverIntro';
import WeaverTraits from './WeaverTraits';


const Weaver = () => {
    return (
        <Wrapper>
            <ScrollArrow background='#f04646' />
            <Container>
                {/* Intro */}
                <WeaverIntro/>
                {/* Traits */}
                <SectionCollapsible gameClass="weaver" title="Traits and Attunements" id="weaver-section-traits">
                    <WeaverTraits />
                </SectionCollapsible>
            </Container>
        </Wrapper>
    );
}

export default Weaver;