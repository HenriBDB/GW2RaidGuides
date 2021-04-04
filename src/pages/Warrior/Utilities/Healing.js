import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Healing = () => {
    return (
        <>
        <p>
            The warrior has access to many great healing skills, but sadly they are all outclassed by the
            healing skill the Berserker unlocks, Blood Reckoning. This means that running any other skill
            than Blood Reckoning is borderline trolling unless the phase is short enough for Mending or
            circumstances in the fight are favourable for Defiant Stance.
        </p>
        <SkillCard skillID={14402}>
            <p>
                This would have been amazing if there were not better alternatives available. 30 Adrenaline
                instantly fills any bar, and the cooldown is not half bad either, and it heals for a lot.
            </p>
        </SkillCard>
        <SkillCard skillID={14401}>
            <p>
                This skill counts as a physical skill as well which means it activates the Peak Performance bonus.
                This is sadly only relevant on phases shorter than 20 seconds as 2 uses of Blood Reckoning
                outperforms 2 uses of Mending, and without Blood Reckoning, Berserk only lasts 20 seconds.
            </p>
        </SkillCard>
        <SkillCard skillID={14389}>
            <p>
                Mediocre healing skill even if the healing is acceptable it is just not as good as the alternatives.
            </p>
        </SkillCard>
        <SkillCard skillID={21815}>
            <p>
                Excellent healing skill which is used for hand-kiting with Spellbreaker. Turning all incoming
                damage into healing really helps dealing with hands and the damage aura from the fight and
                blocking mind crush. Can be used to negate shockwaves on Qadim and Sabir
            </p>
        </SkillCard>
        <SkillCard skillID={30189}>
            <p>
                This is the best healing skill in the game. No exceptions. It not only resets the cooldown on your
                burst skill, it also gives you the adrenaline to use it, on top of extending berserk duration and
                the insane damage to healing conversion you get. The greatness of this skill is why the other
                healing skills are not used.
            </p>
        </SkillCard>
        <SkillCard skillID={41100}>
            <p>
                The self healing is crazy good, but the skill is still dead on arrival due to the fact it strips your boons
                 too on top of cleansing conditions, which makes it overall really bad.
            </p>
        </SkillCard>
        </>
    );
}

export default Healing;