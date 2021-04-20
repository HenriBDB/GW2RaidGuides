import React from 'react';
import SkillCard from '../../../components/SkillCard';

const Shield = () => {
    return (
        <>
        <p>
            Shield is a great defensive tool, but since it provides no real offensive capabilities and its CC is
            worse than Mace on a base case, but if it can be combined with a lightning field it suddenly
            becomes better than off-hand Mace in terms of CC, but is only worthwhile if that option is
            available.
        </p>
        <SkillCard skillID={14361}>
            <p>
                As mentioned in the introduction to Shield, this has 360 breakbar damage potential if combined
                with a lightning field and a sigil of paralyzation which makes it 60 stronger than Tremor on
                Mace. It will only be used for CC.
            </p>
        </SkillCard>
        <SkillCard skillID={14362}>
            <p>
                This skill is only relevant for hand-kiting but can also be used on Slothasor to block shake
                projectiles. Outside of that it is not worth to bring a Shield to deal with mechanics.
            </p>
        </SkillCard>
        </>
    );
}

export default Shield;