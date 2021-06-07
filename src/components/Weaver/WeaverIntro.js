import React from "react";
import GuideTitle from "../../components/GuideTitle";
import SectionLink from '../../components/SectionLink';
import WikiIcon from '../../components/WikiIcon';
import { GuideDescription, SectionContainer } from './styles';

const WeaverIntro = () => {
    return (
        <SectionContainer>
            <GuideTitle title="Attuning is Love" footer="a Power Weaver Guide by Attuned To Love" />
            <GuideDescription>
                <p>
                    &emsp;This Elementalist guide aims to introduce you to the way how to play <WikiIcon name={"Weaver"} />Weaver to its maximum destructive potential in Raids. While the Guide itself does not necessarily include speedrunning strategies and mostly covers the <b>Bolt To The Heart</b> variant of the power builds of <WikiIcon name={"Weaver"} />Weaver, still a lot of things apply to speedruns, as well as the <b>Fresh Air</b> variant.
                    </p>
                <p>
                    While <WikiIcon name={"Weaver"} />Weaver is slightly underrepresented in Raids lately, it is still a great pick and probably a candidate for the highest dps on quite a few bosses. That being said, you somewhat want a good group surrounding yourself, to be able to unleash its maximum potential. Alongside with the mentioned dps you bring as <WikiIcon name={"Weaver"} />Weaver, you can help your group with a good amount of <WikiIcon name={"Exposed"} /> CC and a bit of healing in specific situations.
                </p>
                <p>
                    Elementalist has the lowest health pool and barely any passive support. And while the rotation itself might seem rather easy to learn at start, it is really hard to master it. So all in all I don't recommend this to be played by beginners, since you need to know your positioning (which is your key to survive on bosses) and your rotations very well in order to survive and deal great damage.
                </p>
                <p style={{ fontSize: '1.5rem', textAlign: 'center', fontFamily: "Noto serif" }}>Guide is <span style={{ color: 'green', fontFamily: "Noto serif" }}>up to date</span> as of MAY 11th 2021 balance patch.</p>
            </GuideDescription>
        </SectionContainer>
    )
}
export default WeaverIntro