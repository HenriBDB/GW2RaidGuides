import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Signet = () => {
    return (
        <>
        <p>
            Signets provides passive abilities which can be expended for a while by activating them for a
            stronger, but temporary bonuses. Most of the signets warrior has access to have either mediocre
            active effects or mediocre passives, but 2 of the signets are still fairly strong.
        </p>
        <SkillCard skillID={14404}>
            <p>
                The passive is great, the active not so much. The passive alone is good enough to take up the last
                utility slot on the power build over a physical skill for Peak Performance uptime, at least on
                longer fights and phases, and even then you do not want to replace the extra power but rather
                the Blood Reckoning.
            </p>
        </SkillCard>
        <SkillCard skillID={14410}>
            <p>
                The passive precision is neat, but the active is amazing. 360 Ferocity is 24% crit damage which
                is insane, the precision is not so great for power, but is alright but not good enough for condition
                damage, even if that build really wants to crit as well. The only sad part about this skill is that
                the active effect only lasts 4 seconds.
            </p>
        </SkillCard>
        <SkillCard skillID={14479}>
            <p>
                Another useless signet, both the active and passive are horrible for Raids, with the only saving
                grace being that the active cleanses all conditions affecting you. Do not run this, ever.
            </p>
        </SkillCard>
        <SkillCard skillID={14413}>
            <p>
                Useless solely because of the toughness it provides. The healing and stability are neat but
                overall the signet is just bad for Raids.
            </p>
        </SkillCard>
        </>
    );
}

export default Signet;