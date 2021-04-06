import React from 'react';
import SkillCard from '../../../components/SkillCard';

const Physical = () => {
    return (
        <>
        <p>
            All these skills provide the Peak Performance buff when used (and if traited) which is a huge
            short-term damage modifier which is easier to maintain based on which physical skills you take
            and how many. Most of these skills are good, but some are better than others since the main
            purpose of these skills is provide Peak Performance, so shorter cooldowns are favoured over
            high skill damage or utility.
        </p>
        <SkillCard skillID={14502}>
            <p>
                Usable for Peak Performance uptime since it has 3 charges, but what holds this back is its
                awkward cast time and animation makes it feel really bad and overall slow when chaining it in
                between weapon skills of the rotation. It is still decent though.
            </p>
        </SkillCard>
        <SkillCard skillID={14354}>
            <p>
                Usable for Peak Performance uptime. even if it only has 2 charges, they recharge fairly quickly. It
                deals less damage than Kick and have no hard CC, but the cast time and animation is much
                smoother than Kick which makes it seemingly weave better into the weapon skills.
            </p>
        </SkillCard>
        <SkillCard skillID={14516}>
           <p>
                This skill deals decent damage and has really good CC in form of the knockdown, sadly the
                cooldown is just too long to warrant any real use, as it cannot provide enough Peak Performance
                uptime on its own.
            </p>
        </SkillCard>
        <SkillCard skillID={14388}>
            <p>
                Probably the worst of the Physical skills. It has the same problems as Bull’s Charge, but worse
                with an even longer cooldown and worse damage, it is outright horrible.
            </p>
        </SkillCard>
        </>
    );
}

export default Physical;