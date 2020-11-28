import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Torch = () => {
    return (
        <>
        <p>
            Torch is an insane tool for condition damage. The short cooldowns combined with the massive
            amount of Burning the skills can dish out makes this weapon a must have for the condition
            build.
        </p>
        <SkillCard skillID={29845}>
            <p>
                This skill has a very short cast time, but a lengthy after-cast which can be cancelled by chaining
                another skill out of Blaze Breaker, I.E Flames of War or Final Thrust. It has a short cooldown and
                the Burning is solid.
            </p>
        </SkillCard>
        <SkillCard skillID={29940}>
            <p>
                Applies 6 stacks of Burning before detonating for another 2 stacks, which is a huge amount of
                damage for one skill alone. The fire field and condition cleanse are just added bonuses.
            </p>
        </SkillCard>
        </>
    );
}

export default Torch;