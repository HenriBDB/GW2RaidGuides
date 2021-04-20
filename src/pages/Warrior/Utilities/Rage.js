import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Rage = () => {
    return (
        <>
        <p>
            These are the Berserker specific skills, and they all interact with berserk in some way, as well as
            Last Blaze and King of Fires. All the skills are fairly good because of these interactions, which
            mean they all have their place in different builds, though for banners, only a few are viable.
        </p>
        <SkillCard skillID={29613}>
            <p>
                This is only used in the pure DPS variant of the condition build because it can help sustain
                berserk near endlessly. It not only extends berserk by 5 seconds, since it is a leap finisher and a
                rage skill, using it in a fire field gives fire aura and instantly detonates it with King of Fires. For
                the banner builds it is however a sub-optimal choice given the alternatives being stronger
                individually.
            </p>
        </SkillCard>
        <SkillCard skillID={30258}>
            <p>
                This skill synergizes well with Head Butt, not only removing its downside of self-stun, but also
                gaining a huge increase to berserk duration in doing so. Normally Head Butt is rarely outside the
                opener of either rotation, but with outrage it can be used to further extend berserk duration
                without much punishment. Mostly great on power as there are no inherent conditions to find on
                the skill outside of what Last Blaze provides.
            </p>
        </SkillCard>
        <SkillCard skillID={30074}>
            <p>
                This is what fills the last utility slot on the condition build. This is only really because of the
                Bleeding <WikiIcon name="Bleeding"/> it applies on top of the Last Blaze Burning <WikiIcon name="Burning"/>. The stability <WikiIcon name="Stability"/> can be used in a clutch to block
                things like spatial manipulation on Cairn, but the block holds more utility for blocking
                mechanics though it can be hard to time as it is only half a second it blocks for. The reflect can be
                problematic on Cairn if the skill is not used carefully, but other than that it is nothing to speak of.
            </p>
        </SkillCard>
        <SkillCard skillID={29941}>
            <p>
                This skill does decent damage, and the Fury <WikiIcon name="Fury"/> it provides is a nice addition. The crit insurance is
                nothing big as it is only power build that runs this skill, and it is at the crit cap already. The CC is
                also rather strong, launching the target far and knocking back other enemies hit by the launched
                target. Lastly 4 seconds increase to berserk is a solid increase and is very worthwhile.
            </p>
        </SkillCard>
        </>
    );
}

export default Rage;