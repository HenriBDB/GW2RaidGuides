import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Arms = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="36" data-armory-36-traits="1455,1344,1334,1315,1316,1333,1336,1346,1707"></div>
        <p>
            Arms is currently the go-to condition damage trait-line.
            Traits like Wounding Precision and Blademaster gives a fair bit of expertise, and traits like Deep Strikes and Furious provides a lot of flat condition damage.
            The trait-line holds some potential for an eventual power build in the future, but currently,it is lacking in Power related options outside of Signet Mastery.
            You always run this trait-line for the condition build.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1342}>
            <p>
                In itself this trait is not that good, but in the context of what is in the rest of the trait-line, it is actually pretty good.
                It allows the condition build to get Fury <WikiIcon name="Fury"/> whenever they begin their berserk in case they have no Fury <WikiIcon name="Fury"/> already.
                Overall, pretty good
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1455}>
            <p>
                This helps the condition build a lot.
                This trait along with Blademaster, Bloodlust, and King of Fires (Berserker)
                allows the condition build to run renegade runes and still be able to cap on condition duration
                for Burning <WikiIcon name="Burning"/> and Bleeding <WikiIcon name="Bleeding"/> which is its main damaging conditions for the build.
                You take this, always.
            </p>
        </TraitCard>
        <TraitCard traitID={1344}>
            <p>
                This trait has some potential for power in the future. There are sadly no other decent power options in this trait-line which makes this pretty bad.
                But a few power additions to the trait-line, along with a buff to Signet of Precision, could make Arms a viable alternative for power.
                For now, it is bad, do not run it.
            </p>
        </TraitCard>
        <TraitCard traitID={1334}>
            <p>
                While Fury <WikiIcon name="Fury"/> is great, it is not that great.
                Immobilizes <WikiIcon name="Immobile"/> are not that common and gaining adrenaline and Fury <WikiIcon name="Fury"/> when landing one is not game-breaking.
                It is very far from being better than Wounding Precision.
                Do not run it.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1343}>
            <p>
                This is amazing given that Fury <WikiIcon name="Fury"/> is one of the more realistic buffs to always have in a raid.
                180 Condition damage <WikiIcon name="CondiDamage"/> is a huge boost given that the stat starts at 0 and is only increased by stats, traits and buffs.
                This is part of what allows the condition build to have as much damage as it does.
                This is amazing.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1315}>
            <p>
                The bonus is amazing, but the restriction makes it horrible.
                Had it been a worse bonus but with flanking restriction it would already be many times better than what it currently is.
                Do not run this, ever.
            </p>
        </TraitCard>
        <TraitCard traitID={1316}>
            <p>
                This trait is usable in case your composition needs a source of Vulnerability <WikiIcon name="Vulnerability"/>, otherwise, it is not worth running.
                Run this if absolutely needed.
            </p>
        </TraitCard>
        <TraitCard traitID={1333}>
            <p>
                Another great trait.
                As mentioned at Wounding Precision, this is part of what allows the warrior to run a greedy rune-set and still
                cap duration on the important conditions.
                The reduced recharge does not do much in terms of impacting the rotation, but the added condition damage <WikiIcon name="CondiDamage"/>
                 while on Sword gives the Sword set some much-needed power.
                Run this whenever you can.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1337}>
            <p>
                This is a huge gain for the condition build.
                33% is well, one-third of all the duration you need, and it is for one of your main conditions.
                This is a huge bonus, and it is truly great.
                The RNG Bleed <WikiIcon name="Bleeding"/> on crit is one of many factors that makes the DPS of the condition build fluctuate a lot, as
                not only do you need to hit the crits, you also need the crits to apply Bleed <WikiIcon name="Bleeding"/>.
                Overall, still an excellent trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1336}>
            <p>
                This trait is god awful for Raids, the condition build does not want to run it, and the power build is capped on crit chance already, so overall the trait is just bad.
                Never run this, ever.
            </p>
        </TraitCard>
        <TraitCard traitID={1346}>
            <p>
                The final great trait of the trait-line.
                This is also a factor that impacts your DPS on the condition build.
                If you are lucky and/or land enough crits often enough you can get up to 250 extra condition damage <WikiIcon name="CondiDamage"/> which is huge.
                Though with average luck you only get 25 stacks for the peak of your bursts and remain around 18-20 for the rest of the rotation.
                The bonus adrenaline also helps the condition build fill out the bars before the bursts come off cooldown again.
                You always take this, always.
            </p>
        </TraitCard>
        <TraitCard traitID={1707}>
            <p>
                This could be great, but it does not stack with quickness <WikiIcon name="Quickness"/>, which means that it is horrible.
                Never run this, ever.
            </p>
        </TraitCard>
        </>
    );
}

export default Arms;