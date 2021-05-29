import React from "react";
import GuideTitle from "../../components/GuideTitle";
import SectionLink from '../../components/SectionLink';
import WikiIcon from '../../components/WikiIcon';
import { GuideDescription, SectionContainer } from './styles';

const DhIntro = () => {
    return (
        <SectionContainer>
            <GuideTitle title="Procession of Traps" footer="Raid Dragonhunter Guide by Paula The Vicious" />
            <GuideDescription>
                <p>&emsp;This guide was made to help you understand how to play <WikiIcon name={"Dragonhunter"} /> Dragonhunter in raids <b>efficiently</b>. No speedclear strategies are covered, but even more advanced players will hopefully find some of my tips helpful to master this class. </p>
                <p><WikiIcon name={"Dragonhunter"} /> Dragonhunter is constantly pretty popular on the raid scene and my all-time favorite power class to play in pugs. It can perform really well on almost every boss if played correctly. Apart from very good damage, it brings a lot of support to the group, mostly via <WikiIcon name={"Aegis"} /> Aegis, <WikiIcon name={"Stability"} /> Stability, <WikiIcon name={"Signet"} /> Signet Share, <WikiIcon name={"Pull"} /> pulls and <WikiIcon name={"Exposed"} /> powerful CC. It has a very high burst which makes it a great choice for bosses with short phases, but its sustained damage is also very decent.</p>
                <p>It is a class which I would recommend to beginners, as it is fairly easy to play, but if you expect to deal very good damage with it and compete with classes which bench higher on golem, you will need a fair amount of boss fight experience and an in-depth class understanding to shine. This guide (especially
                    <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </SectionLink>
                section) was made to help you achieve it!</p>
                <p>Enjoy!</p>
                <p style={{fontSize: '1.5rem', textAlign: 'center', fontFamily: "Noto serif"}}>Guide is <span style={{color: 'green', fontFamily: "Noto serif"}}>up to date</span> as of MAY 25th 2021 balance patch.</p>
            </GuideDescription>
        </SectionContainer>
    )
}
export default DhIntro