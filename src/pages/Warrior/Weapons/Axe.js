import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Axe = () => {
    return (
        <>
        <p>
            Axe is the strongest weapon for power. All the skills are great, and Axe Mastery makes them
            even greater. The short cooldown and multi-hit skills makes the weapon exceptionally fast-
            paced when used with Decapitate. That fact that 2 Axes can produce numbers well above 30k
            speaks to the greatness of this weapon as well as how well they fit into the power build.
        </p>
        <SkillCard skillID={[14369,14370,14371]}>
            <p>
                A great chain of skills, every single part of it has a part in the rotation and can be used to achieve
                enough adrenaline for Decapitate. The only outside is Triple Chop which is only useful outside of
                berserk since too much adrenaline is wasted if the full chain is completed in berserk.
            </p>
        </SkillCard>
        <SkillCard skillID={14421}>
            <p>
                The magic number for the power rotation is 3 when it comes to amount of hits, and this skill
                hitting twice in its short cast time is amazing for quickly generating adrenaline. The
                Vulnerability is an added bonus, the Fury is great, but the most important thing for this skill is
                that it hits twice.
            </p>
        </SkillCard>
        <SkillCard skillID={14398}>
            <p>
                This skill chains very well into and from Cyclone Axe and Dual Strike. This means that you
                almost always have access to a quick 3-hit combo which will immediately put you at enough
                adrenaline for another Decapitate. The added damage as the fight progresses is great.
            </p>
        </SkillCard>
        <SkillCard skillID={14418}>
            <p>
                Just like Cyclone Axe it is mainly great because it hits twice, but here we also have the added
                benefit of Quickness for every hit, which over the course of an encounter generates a fair bit of
                overall quickness along with Burst of Aggression.
            </p>
        </SkillCard>
        <SkillCard skillID={14399}>
            <p>
                The important part of this skill is not the increased movement speed, but the fact that it hits 15
                times over a very short span of time. It is incredibly strong power-wise, and it is powerful in and
                out of berserk.
            </p>
        </SkillCard>
        <SkillCard skillID={30851}>
            <p>
                The bread and butter of the power rotation. The fact that this skill recharges itself when it lands
                means in theory if you could generate 10 adrenaline on the Decapitate hit you could endlessly
                chain Decapitates. This is not possible, so we will take the second best options, which is doing
                Decapitate+3 Axe hits to generate 10 adrenaline for another Decapitate as quickly as possible.
                Amazing skill and amazing damage.
            </p>
        </SkillCard>
        </>
    );
}

export default Axe;