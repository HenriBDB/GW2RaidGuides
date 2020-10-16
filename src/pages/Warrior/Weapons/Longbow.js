import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Longbow = () => {
    return (
        <>
        <p>
            Longbow is an incredibly strong weapon for applying a burst of conditions in a very short time,
            even more so with the Crack Shot trait. While strong on its own it still needs a supplementary
            weapon set to carry it between the bursts and outside of berserk. It has great range, but its full
            DPS potential is achieved by stacking close to the boss. An amazing weapon with amazing
            condition DPS.
        </p>
        <SkillCard skillID={14431}>
            <p>
                Both projectiles fired have a 20% chance of being a projectile finisher which is another part of
                what makes the condition build’s damage fluctuate as getting the finisher in a fire field means
                additional Burning and thus also more damage. With Crack Shot there is a potential of 4 Burning
                stacks with every attack which is amazing.
            </p>
        </SkillCard>
        <SkillCard skillID={14519}>
            <p>
                All 3 arrows can hit the same target if their hitbox is large enough or you are stacking close
                enough. 3 stacks of Burning provides not only great damage, but also great burst damage as the
                Burning is applied immediately on hit, rather than ticking in over time. 2 of these should be used
                when on Longbow.
            </p>
        </SkillCard>
        <SkillCard skillID={14381}>
            <p>
                This skill is absolutely horrible, the cast time is slow, the animation is slow, and the damage is
                low. The blast finisher is not worth it.
            </p>
        </SkillCard>
        <SkillCard skillID={14505}>
            <p>
                This skill is a guaranteed projectile finisher and can be used as a filler in the condition damage
                rotation when there is not enough time to finish an auto-attack. It should always be combined
                with a fire field when used like that, making it apply 1 stack of Burning which is alright for a
                filler skill. Not much reason to use it outside of that.
            </p>
        </SkillCard>
        <SkillCard skillID={14504}>
            <p>
                This skill is also a guaranteed projectile finisher, so once again if it is combined with a fire field it
                will also apply 1 stack of Burning. The Bleed lasts so long that it actually deals a fair bit of
                damage overall. This skill needs to be used almost as it comes off cooldown if possible.
            </p>
        </SkillCard>
        <SkillCard skillID={29923}>
            <p>
                It applies 3 stacks of Burning over its duration. What really speaks for this skill is its insanely
                short cast time which allows it to be cast in rapid succession by using Blood Reckoning. On its
                own it is worse than Fan of Fire, but because of the combo potential with Blood Reckoning you
                can fit in 3 Scorched Earth’s when on Longbow before swapping weapons, which means that it
                will overall come out on top over Fan of Fire. Still incredibly good and a core part of the
                condition damage rotation.
            </p>
        </SkillCard>
        </>
    );
}

export default Longbow;