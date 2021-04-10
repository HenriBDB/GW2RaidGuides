import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Hammer = () => {
    return (
        <>
        <p>
            Hammers only real strength is its CC capabilities, having access to multiple strong instances of
            CC. Sadly the weapon is very slow in how it plays, and all the bonuses it gives access to are
            either locked behind CC or conditions, of which only the conditions is the reliable part. Hammer
            has a lot of potential, but Maces are favoured over it because they are faster to use and have
            similar CC capabilities. It can replace Maces as a CC option though it is not recommended to do
            so.
        </p>
        <SkillCard skillID={[14358,14384,14385]}>
            <p>
                A Fairly strong auto-attack chain, but the cast times are too slow for greatness.
            </p>
        </SkillCard>
        <SkillCard skillID={14386}>
            <p>
                The damage is great for its short cast time, and it is clearly intended to combo together with
                backbreaker, in a 2-5-2 style of combo, for optimal CC and damage. The only sad part is that it is
                near impossible to get damage bonus against disabled foes anywhere outside of Keep Construct.
            </p>
        </SkillCard>
        <SkillCard skillID={14482}>
            <p>
                Another skill that deals great damage for its cast time. The Cripple <WikiIcon name="Crippled"/> is a nice source of soft CC.
            </p>
        </SkillCard>
        <SkillCard skillID={14359}>
            <p>
                Decent CC option, though it does not provide as much CC as Backbreaker. It chains fairly well
                into the other Hammer skills which is nice, and it is also great for rounding out a Hammer
                section as you can weapons-swap after the hit lands to save some animation time.
            </p>
        </SkillCard>
        <SkillCard skillID={14511}>
            <p>
                The potential 4 seconds of knockdown is an insane amount of CC in one skill, and as mentioned
                earlier this combos well to and from Fierce Blow, with Fierce blow setting up the Weakness <WikiIcon name="Weakness"/>
                required for the added knockdown duration and Backbreaker resetting the cooldown of Fierce
                Blow.
            </p>
        </SkillCard>
        <SkillCard skillID={30879}>
            <p>
                The daze on this skill would be much better if it could hit multiple times, but sadly it cannot.
                Otherwise Hammer would by far be the best weapon for CC as you would be able to get a
                potential 5 seconds of daze from this skill alone. In the end it is fairly lackluster as it is due to the
                long cast time.
            </p>
        </SkillCard>
        </>
    );
}

export default Hammer;