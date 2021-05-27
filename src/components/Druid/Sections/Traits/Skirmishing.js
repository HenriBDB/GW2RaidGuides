import React from 'react';
import TraitCard from '../../../TraitCard';
import WikiIcon from '../../../WikiIcon';

const Skirmishing = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="30" data-armory-30-traits="1069,1075,1016,1846,1064,1912,1888"></div>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1080}>
            <p>
                Grants you <WikiIcon name={"Swiftness"}/> Swiftness (9s) 
                on weapon swap on a 9 seconds internal cooldown.
            </p>
            <p>
                This trait allows you to upkeep permanent <WikiIcon name={"Swiftness"}/> Swiftness on yourself which can be useful to side-step 
                mechanics or travel faster if needed.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1069}>
            <p>This trait gives you and your pet a 33% chance of applying <WikiIcon name={"Bleeding"}/> Bleeding (3s) on critical hit.</p>
            <p>Gives you increased dps through bleeding. Take this trait whenever you are not using any trap. This benefits your pet too so don't leave 
            them on passive unless you have a reason to. Our pets carry our damage!</p>
        </TraitCard>
        <TraitCard traitID={1075}>
            <p>This trait reduces trap recharge rate by 20%, increases base duration of buffs and conditions applied by traps by 60% 
            and makes offensive traps apply <WikiIcon name={"Crippled"}/> Cripple (3s) on trigger.</p>
            <p>
                This trait is particularly useful when combined with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> as 
                it allows you to heal more often, cleanse conditions more often, and ensures permanent <WikiIcon name={"Regeneration"}/> Regeneration for your 
                sub-squad. Take this trait when you are taking <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> for 
                all the above reasons. Particularly useful on condition heavy bosses like Largos and Soulless Horror or to remove torment on Dhuum after the Greater Death Mark.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1083}>
            <p>This trait grants you <WikiIcon name={"Fury"}/> Fury (5s) on weapon swap. Entering and leaving <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> will 
            also proc this effect. It has a 9s internal cooldown.</p>
            <p>Ensures 100% <WikiIcon name={"Fury"}/> Fury uptime on yourself granted you have 100% boon duration. The trait in itself is not very useful as 
            you already have other sources of fury.</p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1016}>
            <p>This trait grants 5 allies including yourself a buff that increases precision by 100 stat points. The buff is applied every 3 seconds and lasts for 
            9 seconds with a max stack of 1.</p>
            <p>This trait is very useful for most power dps players as it helps them achieve 100% critical hit chance. 
            See <span className="font-italic">Boons and Buffs {'>'} Spotter</span> above for when to take this trait (should be most of the time).</p>
        </TraitCard>
        <TraitCard traitID={1846}>
            <p>This trait increases your <WikiIcon name={"Bleeding"}/> Bleeding damage by 33%.</p>
            <p>Although useful on Condi Soulbeast, the uses on Druid are more scarce as <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> more 
            than often has priority. If you have no use for <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>, this 
            trait can help you get a higher personal dps as bleeding is your primary condition.</p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1068}>
            <p>Your physical damage and critical chance are increased by 10% each while flanking.</p>
            <p>It is therefore recommended to flank whenever possible for increased dps. It not only increases your power damage by providing you a higher crit-chance but also your condi damage 
            if you have <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1069"></span>.</p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1064}>
            <p>When you weapon swap, gain a 5s buff that reduces the recharge of your next weapon skill by 66%. The buff is not consumed by auto attacks, interrupted attacks 
            (except if they are interruptes by entering or leaving <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>, yes this is a bug). 
            Interrupted channelled skills like <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12469"></span> will 
            consume the buff however and benefit from the reduced cooldown. The 5s buff must still be active by the end of the skill cast for the skill to benefit from the reduced cooldown. 
            The trait itself can be triggered by weapon swapping, entering or leaving <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>, swapping 
            with bundle items or going underwater and swapping to an aquatic weapon.</p>
            <p>The trait allows you to cast certain skills more often which can often have its benefits like 
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> for better <WikiIcon name={"Fury"}/> Fury, 
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="32364"></span> for better CC, or even 
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="34070"></span> for more <WikiIcon name={"Immobile"}/> Immobilize (Deimos prides, Rigom and Gorseval Spirits are example use cases).
            These benefits give you a larger margin of error which makes this trait a comfortable choice in all scenarios. I myself always have it when I don't use Shortbow.</p>
        </TraitCard>
        <TraitCard traitID={1912}>
            <p>When dodging with endurance or using Shortbow 3 skill <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12517"></span>, 
            gain a 4s buff that increases your physical damage and condition durations by 10% each. Additionally, your Shortbow skill inflict more or longer conditions when flanking, pierce, and gain a 20% recharge reduction.</p>
            <p>This trait is used whenever you have a Shortbow equipped as the cooldown recharges are simply great. Shortbow is often taken for one of two reasons: CC with 
            <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span> or in simply better condition 
            damage (on a Seraph Druid for example). The reduced recharge usual helps you align <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span> better 
            for each CC phase in the first case or for the second case, allows you to use your condition damage shortbow skills more often in addition to providing you with 
            a damage buff when dodging which improves your personal dps.</p>
        </TraitCard>
        <TraitCard traitID={1888}>
            <p>Increases your critical hit chance by 10%, your Ferocity by 250 stat points, and grants <WikiIcon name={"Fury"}/> Fury (4s) 
            whenever you get hit on a 2 second internal cooldown.</p>
            <p>This trait can be useful to increase your power damage through increased critical damage and critical hit chance whenever you have no use out of 
            <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span>. 
            Using it is also a preference; I usually get more use out of <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span> so I never take this trait.</p>
        </TraitCard>
        </>
    );
}

export default Skirmishing;