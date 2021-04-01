import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const Greatsword = () => {
    return (
        <>
        <SkillIcon skillID={[30343,30435,30851,30189,30851,14421,14398,30851,14418,14398,30851,14399,30851]}>
            <p>
                First bit is mostly the same as burst Axe, except Whirling Axe is used in place of swap + Chop.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,0,29852,14510,14554,29852,0]}>
            <p>
                Now comes the interesting part, Cyclone Axe is used after Decapitate to use it off-cooldown and
                get some adrenaline in the bank. Weapon swap will get the bar to 10, so Arc Divider can be used
                immediately. Here it is important to pay attention because the animation for Arc Divider does
                not match the rate at which it hits. The last hit lands before the animation finishes, meaning that
                you can save time by interrupting the animation after the 3rd hit has landed. This can be done
                either by stowing the weapon or pressing Escape. Bladetrail queues perfectly into Hundred
                Blades and once the last hit from Hundred Blades has landed, Arc Divider will be off cooldown
                again. Instead of stowing weapon to interrupt the animation of this cast, we interrupt it with
                weapon swap instead.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,30851,14418,14398,30851,14399,30851,30189,30851,14421,14398,30851,14398,0,29852]}>
            <p>
                The last Arc Divider is insanely tight to reach and requires perfect execution and cutting some
                corners to optimize the overall DPS. Even then, berserk still runs out just as you activate Arc
                Divider. This order of skills should be thought of as “Berserk A.”
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14510,14554,14356,14373,14374,0,14421,14398,14418,14399,30435]}>
            <p>
                You will find that this out of berserk sequence lines up almost exactly with berserk cooldown,
                you may or may not have to do an auto-attack after Whirling Axe, depending on when your
                berserk ends leading up to this sequence.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30851,30189,30851,14421,0,29852,14510,14554,29852,0,14421,30851,14418,14398,30851,14399,30851,14421,14398,30851,14369,0,29852,30189,29852,14510,14554,29852,0]}>
            <br/>
            <br/>
            <p>
                Again, the last Arc Divider is tight to reach if everything leading up to it is not executed
                flawlessly. This order of skills in berserk should be seen as “Berserk B.” The Arc Divider, Blood
                Reckoning, Arc Divider combo can be hard to execute quickly if you are not well established
                with stowing weapon to interrupt the animation for Arc Divider after the 3rd hit.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,14398,14418,14399,14421,14369,14370,14371,14369,14370,14371,30435]}>
            <p>
                This out of berserk sequence does not line up quite as well as the other one. Here you will find
                that berserk comes off cooldown just as you start the last part of the 2nd auto-attack chain. This
                is not great, but by keeping Cyclone Axe and Dual Strike off cooldown we can loop back to
                “Berserk A” after this, cycling through the same steps over and over.
            </p>
        </SkillIcon>
        </>
    );
}

export default Greatsword;