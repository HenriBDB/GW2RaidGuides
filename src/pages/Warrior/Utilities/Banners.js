import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Banners = () => {
    return (
        <>
        <p>
            Banners is the main reason for this guide in the first place. They are incredibly strong in the
            support they provide given that the bonuses they apply are 10-man. For raiding all banners
            except of Banner of Defense are good in their own way, but only Banner of Strength and Banner
            of Discipline are worth bringing since they provide offensive stats rather than defensive or
            supportive stats.
        </p>
        <br/>
        <SkillCard skillID={14405}>
            <p>
                Both Power and Condition Damage is great for condition and power builds alike. Both types of
                builds benefits from both stats provided by this banner as any conditions applied by combo
                finishers or traits for power builds gain extra strength from the condition damage, and the base
                damage of the weapon skills are stronger due to power for the condition builds.
            </p>
        </SkillCard>
        <SkillCard skillID={14528}>
            <p>
                This banner is unplayable in raids as the toughness can mess with boss aggro. This alone make
                the banner horrible and should never be taken for non-troll reasons.
            </p>
        </SkillCard>
        <SkillCard skillID={14408}>
            <p>
                The stats are actually good, but given that they’re non-offensive and the drop in warrior DPS
                from taking a 3rd banner is most certainly worse than the overall DPS the offensive support
                classes gets in return from having to build 100 concentration less.
            </p>
        </SkillCard>
        <SkillCard skillID={14407}>
            <p>
                The precision helps not only the warrior reach the crit cap, but also every other DPS class, who
                actively build around HAVING this 100 precision, when calculating their crit chance. The
                Ferocity is just a straight up DPS increase providing 6.66% crit damage.
            </p>
        </SkillCard>
        </>
    );
}

export default Banners;