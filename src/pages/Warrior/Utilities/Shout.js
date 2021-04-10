import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Shout = () => {
    return (
        <>
        <p>
            Shouts are fairly long-range utility skills which affects one or more targets in their radius to
            provide a selection of effects. For warrior most of these are useless outside niche support builds,
            but “For Great Justice!” holds some value on Might warrior, but the remainder of the skills are
            not that good.
            <br/>
        </p>
        <SkillCard skillID={14403}>
            <p>
                Great for supplementary Might <WikiIcon name="Might"/> in greedy compositions, or for Phalanx Strength Might warrior.
                With Phalanx Strength it gives 12 Might <WikiIcon name="Might"/> to others on activation, since the 6 Might <WikiIcon name="Might"/> is also applied
                to yourself and is then bounced with Phalanx Strength, totalling 12 Might <WikiIcon name="Might"/>. The charges have a
                somewhat short cooldown, which makes the skill able to provide permanent 6 Might <WikiIcon name="Might"/> to a
                subgroup. Do not run it unless it is needed.
            </p>
        </SkillCard>
        <SkillCard skillID={14575}>
            <p>
                Vulnerability <WikiIcon name="Vulnerability"/> is rarely a problem in Raids, and when it is, there are better options for dealing
                with it than this skill. Do not run this.
            </p>
        </SkillCard>
        <SkillCard skillID={14372}>
            <p>
                This skill only has a use for a niche support build, and even that support build would rather run
                “For Great Justice!” instead. It is fairly bad, and other classes cleanse conditions better than this
                skill does without wasting a utility slot to do so. Do not run this.
            </p>
        </SkillCard>
        <SkillCard skillID={14409}>
            <p>
                The fear is actually somewhat impactful as CC at its highest, but the cooldown is simply way too
                long for what you get in return. It is not great.
            </p>
        </SkillCard>
        </>
    );
}

export default Shout;