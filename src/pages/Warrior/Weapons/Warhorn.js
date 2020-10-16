import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Warhorn = () => {
    return (
        <>
        <p>
            Warhorn is very rarely used outside niche support or for mediocre precasting. It simply does
            not have enough consistent power to be worth a weapon slot for an entire fight.
        </p>
        <SkillCard skillID={14393}>
            <p>
                The buff can be really strong if timed right, but the main problem is that Warhorn is not
                worthwhile long-term which makes the possibility of timing it with strong single hit abilities
                very slim as it can only really be cast before starting a fight. It has a lot of potential, but overall
                falls flat on the buff not being stackable and overall mediocre in that it is for 2 hits only.
            </p>
        </SkillCard>
        <SkillCard skillID={14394}>
            <p>
                The barrier and condition cleanse are nice, but beyond that it is not that good. The cooldown is
                too long, and even while traited it still does not get a recharge reduction. Overall, not great.
            </p>
        </SkillCard>
        </>
    );
}

export default Warhorn;