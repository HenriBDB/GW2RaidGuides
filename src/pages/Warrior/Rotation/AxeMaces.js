import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const NoSwap = () => {
    return (
        <>
        <SkillIcon skillID={[30343,30435,30851,30189,30851]}>
            <p>
                Standard opener, not much to say.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14399,30851]}>
            <p>
                Whirling Axe deals an insane amount of damage when all modifiers are active, which is why we
                want to use it early so we can fit in 2 casts during the berserk. Delay casting Decapitate until
                Whirling Axe has finished casting, as Whirling Axe is the only Axe skill which you cannot queue
                from, so any skills cast during it will stop the channelling.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,14398,30851,14418,14398,30851]}>
            <p>
                This is another combo you should get very familiar with. Here is 2 of 8 main ways to fill
                adrenaline during berserk, Whirling Axe and Blood Reckoning also being ways of doing so.
                They are both quick 3-hit combos which is the magic number on Axe to fill adrenaline for Decapitate.
                Here all skills queue into each other so make sure to practice this so you nail it every time.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,14370,30851,14421,14398,30851]}>
            <p>
                At this point we are out of weaponskills to use, so we have to make do with chop + double chop.
                Since we used Cyclone Axe first in the previous combo,it will be off cooldown again after the chop+double chop combo.
                This time it is instead combined with chop since Throw Axe is still on cooldown.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,14370,30851,14369,14370,30851,14399,30851,30189,30851,14421,14398,30851,14418,14398,30851]}>
            <p>
                The remainder of the berserk is just a combination of things already discussed and if executed
                right berserk should run out just as you press the last Decapitate.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,14370,14371,14421,14369,14370,14371,14369,14370,14371,14421,14398,14369,14370,14371,30435]}>
            <p>
                This is not the optimal out of berserk sequence, but with it the rotation loops perfectly and you can just
                start over from the top with Decapitate, heal, Decapitate.
                The reason why Cyclone Axe is used, and Dual Strike is not, is because it has a much shorter cooldown
                and will thus always be off cooldown after the opening combo of Berserk, where Dual Strike have a longer
                cooldown that does not line up as well.
            </p>
        </SkillIcon>
        </>
    );
}

export default NoSwap;