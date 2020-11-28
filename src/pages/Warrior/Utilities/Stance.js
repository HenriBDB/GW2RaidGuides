import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Stance = () => {
    return (
        <>
        <p>
            Stances provides a bonus on an interval for a short duration. These bonuses are alright, but their
            cooldowns are lengthy. None of these skills are used outside niche builds, and they have no real
            potential for the main builds. Most of the skills will not get too much commentary in this guide.
        </p>
        <SkillCard skillID={14368}>
            <p>
                Both of these boons are accessible elsewhere, especially for power, and even if that was not the
                case it is the responsibility of other roles in the team composition to provide these boons so in
                the end this skill is obsolete in what it does.
            </p>
        </SkillCard>
        <SkillCard skillID={14412}>
            <p>
                Highly irrelevant in raids, there are better sources for stability, the Swiftness is also easily found
                elsewhere and the crit immunity does nothing. Never run this.
            </p>
        </SkillCard>
        <SkillCard skillID={14392}>
            <p>
                This only ignores damage instances from attacks and not condition damage and CC from these
                attacks. Still a really strong effect to have for 4 seconds and it can be used to ignore damage
                from hands on Deimos on the hand-kiting build. Other than that, not that good.
            </p>
        </SkillCard>
        <SkillCard skillID={14406}>
            <p>
                The 7 adrenaline is actually huge but neither build needs the added adrenaline so the skill itself
                becomes obsolete. The resistance is nice, but not enough to make it worth taking.
            </p>
        </SkillCard>
        </>
    );
}

export default Stance;