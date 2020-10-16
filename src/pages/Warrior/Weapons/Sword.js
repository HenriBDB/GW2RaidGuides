import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Sword = () => {
    return (
        <>
        <p>
            Sword has a lot of capabilities in terms of condition damage as most of the skills applies a fair
            portion of Bleeding or other conditions. With the July 7th patch the off-hand Sword saw buffs
            which sadly do not change much, as Torch is just so incredibly strong that even with the minor
            buffs Sword 5 got to its Bleeding output, it is still worse than Torch 5.
        </p>
        <SkillCard skillID={[14364,14365,14363]}>
            <p>
                The Bleeding is the same for all parts of the attack chain, but the skill damage is higher on
                Hamstring than the skills leading up to it. Though this is played on the condition build, the skill
                damage is nigh important, what we care about is the Bleeding which is the same overall, which
                means that it is acceptable to interrupt the chain at any point to prioritize more important skills.
                You will not miss out on exceptional Bleed or Burn on the final attack as it is literally the same.
            </p>
        </SkillCard>
        <SkillCard skillID={14366}>
            <p>
                It is fairly mediocre on its own, but if used with a fire field you will gain fire aura which can then
                be detonated thanks to King of Fires, using any Rage-, Torch-, or burst skill for a decent DPS
                increase. But if that is not possible it is fairly mediocre.
            </p>
        </SkillCard>
        <SkillCard skillID={14497}>
            <p>
                Fairly useless until you get to the threshold for the added damage and Bleed, then this skill
                becomes amazing. It is up every time you get to Sword and with the lengthy Bleed it applies you
                have up to 3 different instances of Bleed applied by this skill active at once for periods of time.
            </p>
        </SkillCard>
        <SkillCard skillID={[14498,14501]}>
            <p>
                The short cast time combined with the ticking Torment is great, but it could have been so much
                better if Rip had applied some sort of damaging conditions as well instead of just dealing
                damage and giving Might.
            </p>
        </SkillCard>
        <SkillCard skillID={[14400,14557]}>
            <p>
                The counter is amazing, but the requirement of having to block something is awkward to do
                consistently even while tanking, since we want to waste the minimum amount of time casting
                this, and it can be rough timing it perfectly with incoming strikes. The Adrenaline is a joke.
            </p>
        </SkillCard>
        <SkillCard skillID={30682}>
            <p>
                Sadly has a very lengthy channel for casting which makes this less great than it could be. Still it
                applies 8 stacks of Burning over its duration which is really strong, even if it takes a while. The
                lengthy cast time is also why Blood Reckoning is not used with this skill, as doing so would delay
                swapping weapons too much.
            </p>
        </SkillCard>
        </>
    );
}

export default Sword;