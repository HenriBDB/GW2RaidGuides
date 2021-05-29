import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Defense = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="22" data-armory-22-traits="1376,1488,1372,1368,1379,1367,1375,1649,1708"></div>
        <p>
            The Defense trait-line is never run in any relevant builds for raids.
            This is because it is largely defensive oriented which is not what is sought after in raids, unless it can be achieved along with other offensive or supportive options.
            The trait-line is only really used for hand-kiting builds on Deimos, and nowhere else. Do not run this trait-line, ever.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1350}>
            <p>
                This is part of what allows the trait-line to be used for hand-kiting. It is fairly simple to remain
                above 75% to get the bonus and the trait itself helps you not dropping below that threshold too
                quickly. Overall, pretty good.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1376}>
            <p>
                Not that useful for Raids, and Shield is very rarely used and when it is used the abilities are not
                required often enough to warrant a reduction on recharge time. This is only useful for the hand-
                kiting build.
            </p>
        </TraitCard>
        <TraitCard traitID={1488}>
            <p>
                Pretty much a useless trait, there is no inherent value in it as you would be better off running a
                different trait-line which have condition cleanse or overall better options available. Do not run
                this, ever.
            </p>
        </TraitCard>
        <TraitCard traitID={1372}>
            <p>
                A most welcome damage increase. Weakness <WikiIcon name="Weakness"/> is not completely unrealistic on a boss so it should
                be seen as a flat 7% modifier. Being able to help with the Weakness <WikiIcon name="Weakness"/> uptime post 50% is also a
                nice addition, overall a worthwhile trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1348}>
            <p>
                Another trait that helps the hand-kiting build. The idea behind the hand-kiting build is to waste
                adrenaline to gain stacks of this buff to help outheal the aura damage, hand damage, and penalty
                from blocking Mind Crush. Every little bit helps towards this goal. Overall, okay.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1368}>
            <p>
                This is also used for the hand-kiting build as endure pain negates all damage from the hands
                while active, allowing you to stack the hands for its duration (as well as heal up).
                It is good for what it is used for, but outside that it is bad.
            </p>
        </TraitCard>
        <TraitCard traitID={1379}>
            <p>
                Without any toughness <WikiIcon name="Toughness"/> gear this trait still gives 100 power <WikiIcon name="Power"/>, which is respectable. It is the better
                option when trying to build offensively with Defense, though at that point it is worth
                questioning if one should run Strength or Tactics instead. Overall, pretty good.
            </p>
        </TraitCard>
        <TraitCard traitID={1367}>
            <p>
                This trait is only really useful for a pure CC core warrior, outside that Maces have more than
                enough CC for raid purposes as they are un-traited. Not good enough, do not take this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1380}>
            <p>
                Given the lack of access to Resolution <WikiIcon name="Resolution"/> in the warrior kit, this trait is not as great as it could be,
                the trait has a rather lengthy internal cooldown given the amount of Resolution <WikiIcon name="Resolution"/> you get in
                return. With the bit of self-sufficient mitigation you do get, it is however still fairly good.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1375}>
            <p>
                Sadly stances are not that good and are rarely used, which in turn makes this trait obsolete.
                Could be used with the hand-kiting build, but Cleansing Ire is better for that one since the build
                struggles with adrenaline generation. Overall, not very good.
            </p>
        </TraitCard>
        <TraitCard traitID={1649}>
            <p>
                The condition cleanse on this trait is irrelevant, the important factor here is the adrenaline
                gained on hit. This helps the hand-kiting build get adrenaline which it can waste to get Adrenal
                Health stacks. For that purpose, it is good, but outside that it is bad.
            </p>
        </TraitCard>
        <TraitCard traitID={1708}>
            <p>
                This trait is trolling incarnate. The 1000 toughness <WikiIcon name="Toughness"/> spike is likely to draw boss aggro away from
                the tank if the trait is activated. Do not run this trait, ever.
            </p>
        </TraitCard>
        </>
    );
}

export default Defense;