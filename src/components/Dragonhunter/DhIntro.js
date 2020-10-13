import React from "react";
import { Link } from 'react-scroll';
import GuideTitle from "../../components/GuideTitle";
import { GuideDescription } from './styles';

const DhIntro = ({ showGuides }) => {
    return (
        <>
            <GuideTitle title="Procession of Traps" footer="Raid Dragonhunter Guide by Paula The Vicious" />
            <GuideDescription>
                <p>&emsp;This guide was made to help you understand how to play Dragonunter in raids <b>efficiently</b>. No speedclear strategies are covered, but even more advanced players will hopefully find some of my tips helpful to master this class. </p>
                <p>Dragonhunter is constantly pretty popular on the raid scene and my all-time favorite power class to play in pugs. It can perform really well on almost every boss if played correctly. Apart from very good damage, it brings a lot of support to the group, mostly via Aegis, Stability, Signet Share, pulls and powerful CC. It has a very high burst which makes it a great choice for bosses with short phases, but its sustained damage is also very decent.</p>
                <p>It is a class which I would recommend to beginners, as it is fairly easy to play, but if you expect to deal very good damage with it and compete with classes which bench higher on golem, you will need a fair amount of boss fight experience and an in-depth class understanding to shine. This guide (especially
                    <Link to="dh-section-guides" smooth={true} duration={1000} onClick={showGuides}>
                        <span
                            style={{ color: "#47b8e0", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </Link>
                section) was made to help you achieve it!</p>
                <p>If you already know the basics, you can skip straight to
                    <Link to="dh-section-guides" smooth={true} duration={1000} onClick={showGuides}>
                        <span
                            style={{ color: "#47b8e0", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </Link>
                section.</p>
                <p>Enjoy!</p>
            </GuideDescription>
        </>
    )
}
export default DhIntro