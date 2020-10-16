import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Greatsword = () => {
    return (
        <>
        <p>
            Greatsword is a pure DPS weapon but is only great in bursts. For sustained DPS Axe/Axe beats it
            easily, but when used in combination with such, Greatsword can allow for even larger bursts
            than Axe/Axe could achieve on their own.
        </p>
        <SkillCard skillID={[14356,14373,14374]}>
            <p>
                Fairly strong damage-wise but really slow in its cast times.
            </p>
        </SkillCard>
        <SkillCard skillID={14554}>
            <p>
                Strong combo, that deals a lot of damage assuming you land all hits. It can be hard to land all hits
                on bosses that moves as the hitbox for this skill is very small, so little to no movement will
                render the remainder of the cast useless.
            </p>
        </SkillCard>
        <SkillCard skillID={14447}>
            <p>
                Can hit multiple times on larger hitboxes or against “wall” hitboxes and evades for the duration
                of the cast. The damage is great if you can get the multiple hits, otherwise it is rather mediocre,
                and the movement can put you in awkward positions.
            </p>
        </SkillCard>
        <SkillCard skillID={14510}>
            <p>
                The multi-hit on this skill is great given the short cast time. It is easy to cast after a burst and can
                then be chained into Hundred Blades which roughly lines up with the cooldown of the burst.
                Fits very well into the burst playstyle.
            </p>
        </SkillCard>
        <SkillCard skillID={14446}>
            <p>
                Only good for movement. The cast time is long and awkward, and the damage just does not back
                it up. It does not have a spot in the rotation.
            </p>
        </SkillCard>
        <SkillCard skillID={29852}>
            <p>
                You can bind stow weapon and use the keybind to cancel the animation after you see the last hit
                to save some animation time. It is also possible to move while casting the skill without
                interrupting it, which can be good in case you need to reposition, you can do so without losing
                DPS.
            </p>
        </SkillCard>
        </>
    );
}

export default Greatsword;