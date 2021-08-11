import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Tactics = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="11" data-armory-11-traits="1469,1474,1471,1486,1479,1482,1667,1470,1711"></div>
        <p>
            Tactics is the support power line. It does not provide much in terms of strong offensive
            modifiers for the warrior, but the boost it can provide to the rest of the squad through Empower
            Allies makes it worthwhile in certain team compositions. This is assuming that the DPS players
            know how to play. In a pug scenario, it will be better to run Strength for the power build, but
            Tactics has immense value in organised groups.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1480}>
            <p>
                This is basically the concept the trait-line tries to build upon. Once the buff has been consumed
                you have to wait 10 seconds before regaining it. It is slow for a raid setting, but that does not
                matter too much since Tactics is not used for this trait. The trait is overall mediocre at best.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1469}>
            <p>
                As long as the target is suffering from at least one condition amongst Cripple <WikiIcon name="Crippled"/>, immobilize <WikiIcon name="Immobile"/> and
                chill <WikiIcon name="Chilled"/>, you will gain the damage bonus, and since these are fairly easy to come by across all the
                classes it is fairly safe to assume the damage bonus is permanent. It is a damage modifier and
                those are great. Always run this.
            </p>
        </TraitCard>
        <TraitCard traitID={1474}>
            <p>
                This trait is bad solely because of the recharge time of Soldier’s Focus. Furthermore, the build
                this trait would fit into would rather run Roaring Reveille for additional utility instead of
                additional and inconsistent healing. Do not run this.
            </p>
        </TraitCard>
        <TraitCard traitID={1471}>
            <p>
                This trait is sadly only useful for a niche full support build, but outside of that it can only be used
                for providing some mediocre boon support in a niche rotation that does not even bring that much. Do not run this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1485}>
            <p>
                This trait is amazing. What is considered realistic on most compositions in terms of unique
                boons is 7, which is already a 7% damage increase out of a potential 12%. This trait along with
                Leg Specialist is what saves Tactics from being completely terrible for personal DPS.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1486}>
            <p>
                This trait looks like a great damage increase on paper, but it is way too restrictive as to when it
                provides its bonuses. Bonus damage against barriers is useless for raids, as the only time
                barriers are present on a boss is during CC in which the barrier value is close to infinite
                anyways. Only getting the other modifier when the target is above 80% should be read as you
                only getting the bonus for 20% of the fight which is horrible. This trait is a trap, do not run it.
            </p>
        </TraitCard>
        <TraitCard traitID={1479}>
            <p>
                This trait could have potential in a support build, but even a support build would prioritize DPS
                alternatives over raw healing and condition cleanses. Put differently, even the build which
                would want to run this trait would rather run Empower Allies instead, unless it is run in a full
                condition damage composition. Do not run this.
            </p>
        </TraitCard>
        <TraitCard traitID={1482}>
            <p>
                This trait is the sole reason to run Tactics. The shared Power <WikiIcon name="Power"/> is amazing for power compositions
                and with the right subgroup management, it is possible to get decent uptimes on all the right
                people. The increased range to Soldier’s Focus is mostly cute because Soldier’s Focus is bad, but
                the Empower Allies buff is amazing. The trait sadly falls slightly flat if used with people who
                cannot make full use of the extra power, so only run Tactics along with Empower Allies in
                organized groups. Always run this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1481}>
            <p>
                This trait allows for some interesting tanking when running Tactics along with Phalanx
                Strength. The heal is very minuscule, but by generating enough Might <WikiIcon name="Might"/> the healing suddenly
                becomes very strong. Underrated for sure. Overall, nice to have.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1667}>
            <p>
                If Mending Might is underrated, Martial Cadence is overrated. Not only do you only get Soldier’s
                Focus every 15 seconds, but it also has to line up with all your weapon-skills being on cooldown,
                and since burst are a core part of your rotation, it can be very hard to manage the reduction
                such that it is used optimally. It is still a DPS increase compared to the alternatives, but it is not
                an amazing one. You can run this just fine.
            </p>
        </TraitCard>
        <TraitCard traitID={1470}>
            <p>
                This is only relevant in a support build, and the support build could in theory also run Phalanx
                Strength for some Might <WikiIcon name="Might"/> stacking. Unless you are running such a build there is no reason to take
                this trait. Do not run it.
            </p>
        </TraitCard>
        <TraitCard traitID={1711}>
            <p>
                This trait has a lot of potential in more aggressive compositions, allowing the warrior to almost
                singlehandedly stack Might <WikiIcon name="Might"/> for the entire squad while still providing Empower Allies, Banners,
                and reasonable DPS. It can be run to help the druid stack Might <WikiIcon name="Might"/> faster at the beginning of a fight.
                You can run this just fine.
            </p>
        </TraitCard>
        </>
    );
}

export default Tactics;