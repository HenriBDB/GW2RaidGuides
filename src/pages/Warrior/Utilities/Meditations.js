import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Meditations = () => {
    return (
        <>
        <p>
            These are the Spellbreaker specific utilities. Most of them are mediocre at best, but there are a few gold nuggets
            here and there. Overall you will find that most of these skills are very lacklustre and not worth bringing to
            any encounter.
        </p>
        <SkillCard skillID={45380}>
            <p>
                Decent Superspeed <WikiIcon name="Superspeed"/> and Resistance <WikiIcon name="Resistance"/> duration, but the cooldown and usability of the skill makes it overall bad
                for most, if not all, raid scenarios.
            </p>
        </SkillCard>
        <SkillCard skillID={43745}>
            <p>
                If you are playing Spellbreaker you are likely capped on crit anyways, so the guaranteed crit is useless.
                The Blind <WikiIcon name="Blind"/> is also fairly useless, and the reveal does not help much either outside of Largos, and you would not
                want to play Spellbreaker on largos.
            </p>
        </SkillCard>
        <SkillCard skillID={41919}>
            <p>
                Taunt <WikiIcon name="Taunt"/> is always respectable since it can help out chronomancers, but the cooldown is way too long for how
                little taunt you are getting, and the same goes for the self Resolution <WikiIcon name="Resolution"/> and adrenaline. Pretty much useless
                in a raid setting.
            </p>
        </SkillCard>
        <SkillCard skillID={43123}>
            <p>
                The saving grace for Spellbreaker. This skill is immensely powerful when stripping boons, but sadly it is
                a utility skill, meaning it uses unequipped weaponstrength for its damage calculation, otherwise it could have been
                even stronger. It deals decent damage even without the boonstrip, but if this were to be truly viable in raids
                the bosses would need more frequent boon application. The cooldown is short, the radius fairly big, and it can
                hit multiple targets at once. Great skill.
            </p>
        </SkillCard>
        </>
    );
}

export default Meditations;