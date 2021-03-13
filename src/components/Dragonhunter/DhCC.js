import React from "react";
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import SectionIntro from '../../components/SectionIntro';
import { SectionContainer } from './styles'

const DhCC = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    Below you can find CC skills which are easily accesible without the need to change weapons or utility skills.
                </p>
                <p>
                    Remember that not all of the below CCs will be effective on every boss. For example, Samarog doesn't take any new conditions when breakbar appears, so trying to CC it with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9099" className="dhskill"></span> will have no result, unless you manage to cast it right before the breakbar.
                </p>
            </SectionIntro>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Skills
            </p>
            <SkillCard skillID={[9093]}>
                <p>
                    <WikiIcon name={"Knockdown"} /> Knockback - 300 breakbar damage (instant)
                </p>
            </SkillCard>
            <SkillCard skillID={[30273]}>
                <p>
                    <WikiIcon name={"Pull"} /> Pull - 150 breakbar damage (instant)
                </p>
                <p>
                    <WikiIcon name={"Slow"} /> Slow (4s) - 50 breakbar damage per second (over time - 200 total breakbar after 4s)
                </p>
            </SkillCard>
            <SkillCard skillID={[9226]}>
                <p>
                    <WikiIcon name={"Pull"} /> Pull - 150 breakbar damage (instant)
                </p>
            </SkillCard>
            <SkillCard skillID={[33134]}>
                <p>
                    <WikiIcon name={"Pull"} /> Pull - 150 breakbar damage (instant)
                </p>
            </SkillCard>
            <SkillCard skillID={[9099]}>
                <p>
                    <WikiIcon name={"Immobile"} /> Immobilize (5s) - 50 breakbar damage per second (over time - 250 total breakbar after 5s)
                </p>
            </SkillCard>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
                <a href="https://wiki.guildwars2.com/wiki/Leap_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Leap finishers</a> into <a href="https://wiki.guildwars2.com/wiki/Lightning_field" target="_blank" rel="noopener noreferrer" className="dhlink">Lightning fields</a>
            </p>
            <SkillCard skillID={[9080]}>
                <p>
                    <WikiIcon name={"Daze"} /> Daze (1s) - 100 breakbar damage (instant)
                </p>
            </SkillCard>
            <SkillCard skillID={[30225]}>
                <p>
                    <WikiIcon name={"Daze"} /> Daze (1s) - 100 breakbar damage (instant)
                </p>
            </SkillCard>
        </SectionContainer>
    )
}
export default DhCC