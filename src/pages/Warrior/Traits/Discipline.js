import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Discipline = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="51" data-armory-51-traits="1062,978,965,964,1038"></div>
        <p>
            This trait-line is probably the strongest trait-line warrior has access to.
            It provides an insane amount of value to both power and condition damage through doubled standards along with Fast Hands.
            Both the power- and condition builds runs this trait-line because of the options they have available on top of the solid core Discipline is on its own.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1415}>
            <p>
                This Minor trait provides value to both the power- and condition build.
                The added adrenaline helps ensure that the condition build still caps out on adrenaline when
                swapping weapons, and for the power build it helps speed up the rotation quite a bit, filling in
                gaps where no weapon-skills are ready. In the context of Berserker 5 adrenaline is half a primal
                burst, which is crazy good for the fast-paced rotations.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1329}>
            <p>
                This trait is favoured for condition builds as these builds run Longbow.
                The reduced recharge on Longbow skills ensures that Longbow 2 can be used twice before
                swapping to the other weapon-set, and that Longbow 5 is available more frequently.
                The Burn on Longbow 1 helps a lot as it makes the skill viable as a filler while waiting for bursts
                or Longbow 2. The other effects of the trait are irrelevant in a raid scenario.
            </p>
        </TraitCard>
        <TraitCard traitID={1413}>
            <p>
                This is the go-to trait for the power build. A flat damage modifier is good for power and
                Swiftness is easily maintained, so it is strictly a 7% damage increase. This trait is also usable for
                the condition build, though it is worse than crack shot. The movement speed increase does not
                do much in raids along with the immobilize interaction. The great part about this trait is the 7%
                damage increase.
            </p>
        </TraitCard>
        <TraitCard traitID={1381}>
            <p>
                This trait has no value in raids as there very rarely is anything to rally from. Even if there were
                any, it still has 0 offensive capabilities which make it strictly worse than both the alternatives.
                Do not run this trait, ever.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1416}>
            <p>
                This Minor trait is amazing. As hinted at in the overall description of the trait-line this trait is
                good for both builds. For the power build, it allows for more procs of Versatile Rage which again
                helps speed up the rotation whenever it is about to slow down. For the condition build it does
                not only this, but since this build weapon-swaps nearly off cooldown it allows the build to run 2
                different on-swap sigils, activating both as they come off cooldown.
                This trait is part of why Discipline is so good.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1484}>
            <p>
                This trait is amazing, it provides 400 points worth of stats assuming 2 unique banners, which is
                an insane amount of value from one trait. Both builds benefit greatly from this trait, providing
                extra damage to both, and helping the power build reach the crit cap. Always run this trait, no
                exceptions.
            </p>
        </TraitCard>
        <TraitCard traitID={1489}>
            <p>
                This looks good on paper, but no raid boss consistently has enough boons on them to make it
                better than Doubled Standards. If a boss is released in the future with enough unremovable
                boons this could have potential, but for now, it is not worthwhile.
            </p>
        </TraitCard>
        <TraitCard traitID={1709}>
            <p>
                Another trait with 0 offensive capabilities. Even in its niche use-cases, it is still strictly worse
                than both the alternatives. Do not run this, ever.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1417}>
            <p>
                This minor trait is mostly useful for the condition build.
                Decapitate on the power build recharges itself when it hits so it does not benefit from the
                reduction, but for the condition build the reduction means that you can fit in 2/3 bursts on
                Longbow without delaying the weapon-swap too much. The Might on weapon-swap is trivial
                but can help in a pinch.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1369}>
            <p>
                This trait is what makes the power build and rotation. The ferocity is good and gives a huge
                boost to crit damage when wielding 2 Axes. The extra adrenaline on top is what allows the
                power build to be as fast-paced as it is. Since Decapitate resets its cooldown when it lands the
                power rotation is pretty much a race to fill the bar back up as quickly as possible, and the extra
                adrenaline allows this to happen very quickly along with Versatile Rage. You always run this on
                Power. ALWAYS.
            </p>
        </TraitCard>
        <TraitCard traitID={1317}>
            <p>
                This trait is bad, the quickness is lacklustre, and the threshold requirement makes it even worse.
                Never run this ever.
            </p>
        </TraitCard>
        <TraitCard traitID={1657}>
            <p>
                This help the condition build manage adrenaline with its bursts. Without this trait the condition
                build can suffer from bad luck, not getting enough adrenaline when it is needed, which overall
                hurts DPS. The increased damage is mostly cute as the condition burst skills do not get their
                damage from the skills themselves, but the conditions they apply, which this trait does not apply
                to. Run this trait on the condition build to save your sanity.
            </p>
        </TraitCard>
        </>
    );
}

export default Discipline;