import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Mace = () => {
    return (
        <>
        <p>
            Mace is the go-to CC tool for warrior. The animations for the CC skills are short and rather
            impactful as well and the other skills are not bad either for passing the 5 seconds weapon swap
            cooldown, though this is by no means a comparable DPS weapon. The block on Counterblow can
            be used to block various mechanics which is amazing.
        </p>
        <SkillCard skillID={[14376,14377,14378]}>
            <p>
                The first 2 attacks in this chain are rather fast, but the final attack is so slow that it is rarely worth
                completing the chain over casting something else to get more hits in.
            </p>
        </SkillCard>
        <SkillCard skillID={[14507,14548]}>
            <p>
                As mentioned in the Mace introduction, this skill can be used to block mechanics. An example of
                this is the fear on Slothasor which can otherwise be problematic in case Headbutt strips your
                Stability <WikiIcon name="Stability"/>. The adrenaline and Vulnerability <WikiIcon name="Vulnerability"/> are not super relevant for how Maces play out.
            </p>
        </SkillCard>
        <SkillCard skillID={14503}>
            <p>
                Is technically an instacast skill, but it has an animation, so it is not. Luckily, the animation is
                fairly short and easy to combine with Tremor and Skull Grinder in rapid succession. Does 130
                breakbar damage with sigil of paralyzation.
            </p>
        </SkillCard>
        <SkillCard skillID={14518}>
            <p>
                Decent damage, but the conditions and Might are mostly irrelevant, and the restrictions for the
                bonus is harsh for Raids, but again, we do not really care about the Might <WikiIcon name="Might"/> or Vulnerability <WikiIcon name="Vulnerability"/>. It is
                mostly used as a filler skill while waiting for weapon swap.
            </p>
        </SkillCard>
        <SkillCard skillID={14415}>
            <p>
                This is a fantastic CC skill. It deals 300 breakbar damage but sadly it is not affected by sigil of
                paralyzation. This skill is the main reason that you can get away with running only off-hand
                Mace on less CC heavy bosses such as Keep Construct.
            </p>
        </SkillCard>
        <SkillCard skillID={29679}>
            <p>
                Mostly great because it can be cast twice in succession by using Blood Reckoning, but even
                without that the 100 breakbar damage is welcome, or 130 breakbar damage with sigil of
                paralyzation. The conditions are mostly just additional damage, but nothing greater than that.
            </p>
        </SkillCard>
        </>
    );
}

export default Mace;