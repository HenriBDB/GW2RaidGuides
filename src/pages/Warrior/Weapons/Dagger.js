import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Dagger = () => {
    return (
        <>
        <p>
            The dagger skills have a lot going for them, but they fall flat due to them being associated with Spellbreaker,
            and Spellbreaker not being the best in terms of modifiers and thus also damage.
        </p>
        <SkillCard skillID={[42745,40560,40275]}>
            <p>
                The auto attack chain has Anet certified consistency. With increased critical damage on the first 2 attacks,
                and Might <WikiIcon name="Might"/> on the last hit. The whole chain would make much more sense and be a lot better if the final hit
                had even more critical damage, say 25% instead of 15% like the first 2. This would not make dagger amazing,
                but certainly make it better in terms of damage.
            </p>
        </SkillCard>
        <SkillCard skillID={46233}>
            <p>
                Actually a decent source of Slow <WikiIcon name="Slow"/>, but should not be used in the rotation as the animation is too long as is
                the case with many leap skills. Do use it for CC if you have Winds of Disenchantment up since it's a lightning field
                and the leap finisher would be a dazing strike for some added CC.
            </p>
        </SkillCard>
        <SkillCard skillID={44937}>
            <p>
                This skill is listed as an instant cast, but it still has a small animation which can be cancelled, so be careful
                to not be too fast when using it. It should however be used in any Spellbreaker rotation that would run dagger
                main-hand as the daze gives a stack of Attackers Insight, which is key for decent Spellbreaker damage.

            </p>
        </SkillCard>
        <SkillCard skillID={44004}>
            <p>
                This skill deals amazing damage if used while the target is not attacking, but it required you to pay attention
                to the bosses attack patterns so you know exactly when to use it to get the damage increase, as it is otherwise
                a fairly mediocre skill.
            </p>
        </SkillCard>
        <SkillCard skillID={45160}>
            <p>
                Can dish out a decent amount of Vulnerability <WikiIcon name="Vulnerability"/> as it applies 2 Vulnerability <WikiIcon name="Vulnerability"/> per hit, and it hits 7 times total.
                That is however the greatest thing to be said about the skill as the damage is very low for a channeled skill,
                and the other effects are not that great either, though the reflect can come in clutch.
            </p>
        </SkillCard>
        <SkillCard skillID={45252}>
            <p>
                Another leap skill that takes too long to cast for what you get in return in terms of damage and utility.
                Yes it can be used to boonstrip, which gives some stacks of Attackers Insight, but other than that it is no
                better than a leap finisher in terms of what it is good for.
            </p>
        </SkillCard>
        <SkillCard skillID={44165}>
            <p>
                This is a fantastic skill if used right. While it is not dagger specific, it is Spellbreaker specific, and so are daggers,
                which is why the skill is listed here. If you time it right it is a block, daze, damage, and an evade, in less than a second.
                The damage is not even half bad, and the daze gives a stack of Attackers Insight. The stability <WikiIcon name="Stability"/> is mostly a novelty
                as the block takes precedence over the Stability <WikiIcon name="Stability"/>. Fantastic skill.
            </p>
        </SkillCard>
        </>
    );
}

export default Dagger;