import React from 'react';
import SkillCard from '../../../components/SkillCard';

const Rifle = () => {
    return (
        <>
        <p>
            Rifle is a weapon that is never used outside of a niche push strategy on Keep Construct where
            Rifle Butt is used for pushing the orb into a rift and out after a chrono has pulled it closer to the
            rift, which allows for a single orb to be done in a second if timed right. Outside of that riffle is
            just bad, not holding enough raw damage to be worthwhile for power builds and almost no
            damaging conditions to speak of for a condition build.
        </p>
        <SkillCard skillID={14432}>
            <p>
                Mediocre damage, and the adrenaline is really unnecessary, and even more so with Crack Shot,
                at least for berserker, maybe on a core warrior this would not be half bad, but on Berserker you
                are getting more than enough adrenaline before burst is available again so what is the point?
            </p>
        </SkillCard>
        <SkillCard skillID={14416}>
            <p>
                The only great thing about this skill is its cast time, everything else sucks. It is very easy to
                weave in between auto-attacks, but the damage is mediocre at best.
            </p>
        </SkillCard>
        <SkillCard skillID={14472}>
            <p>
                Does respectable damage, the recharge is just way too slow, and it takes too long to fire, so it
                ends up being no better than mediocre as well.
            </p>
        </SkillCard>
        <SkillCard skillID={14395}>
            <p>
                The evade ends up being a curse more often than a blessing. You are locked out of doing
                anything for its duration which destroy any potential for this skill. The damage is way too low
                for the time you lose during the evade.
            </p>
        </SkillCard>
        <SkillCard skillID={14360}>
            <p>
                The only save and grace on Rifle. The knockback is amazing, the recharge is good, and it does
                respectable damage for its cast time as well. The main problem with the recharge is that even if
                the other skills have charges, you still have to wait 5 seconds between casts so it just seems
                pointless to have the charges in the first place as you’ll eventually get stuck auto-attacking
                anyways.
            </p>
        </SkillCard>
        <SkillCard skillID={29644}>
            <p>
                Very good damage for its cast time, though it has a slightly long aftercast which cannot be
                ignored, which overall makes it feel slow even if it is supposed to be rather fast. Still not good
                enough to warrant any closer remarks.
            </p>
        </SkillCard>
        </>
    );
}

export default Rifle;