import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Banners = () => {
    return (
        <>
        <p>
            Banners are the main reason for this guide in the first place. They are incredibly strong in the
            support they provide given that the bonuses they apply are 5-man, 10-man when traited which they practically always will be.
            For raiding all banners except of Banner of Defense are good in their own way, but only Banner of Strength and Banner
            of Discipline are worth bringing since they provide offensive stats rather than defensive or supportive stats.
            <br/>
            With the May 11 Balance patch banners where changed from a blast finisher to a light combo field.
            This was the most pointless change to date as warrior has 0 synergy with light fields, and more often than not, they do more harm than good.
            In your day to day group this change does not matter, but in high-end groups it is terrible and you might have to plan around the field.
        </p>
        <br/>
        <SkillCard skillID={14405}>
            <p>
                Both Power <WikiIcon name="Power"/> and Condition Damage <WikiIcon name="CondiDamage"/> is great for condition and power builds alike. Both types of
                builds benefits from both stats provided by this banner as any conditions applied by combo
                finishers or traits for power builds gain extra strength from the condition damage, and the base
                damage of the weapon skills are stronger due to power for the condition builds.
            </p>
        </SkillCard>
        <SkillCard skillID={14528}>
            <p>
                This banner is unplayable in raids as the toughness <WikiIcon name="Toughness"/> can mess with boss aggro. This alone make
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
                The precision <WikiIcon name="Precision"/> helps not only the warrior reach the crit cap, but also every other DPS class, who
                actively build around HAVING this 100 precision <WikiIcon name="Precision"/>, when calculating their crit chance. The
                Ferocity <WikiIcon name="Ferocity"/> is just a straight up DPS increase providing 6.66% crit damage.
            </p>
        </SkillCard>
        </>
    );
}

export default Banners;