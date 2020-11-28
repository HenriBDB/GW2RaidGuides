import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Strength = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="4" data-armory-4-traits="1062,978,965,964,1038"></div>
        <p>
            This trait-line is strictly power related. All these traits will only really be relevant to power, so
            the context for all information will be power. The reason this is the case is due to the bonuses
            provided will either only give power or the modifier it gives only affects power damage.
            Examples of this is Berserker’s Power and Pinnacle of Strength. This is the go-to trait-line for
            power.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1446}>
            <p>
                Ideally you never want to dodge, which makes this bonus obsolete, but in case you do have to
                dodge the damage is quite nice. The trait is not amazing, but it is okay.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1447}>
            <p>
                After the July 7th patch this skill is sadly no longer useful for Raids.
                The stability gained from Headbutt is gained before Headbutt strips stability, which means it no
                longer negates the self-stun like it used to. Sadly, very bad now.
            </p>
        </TraitCard>
        <TraitCard traitID={1451}>
            <p>
                This trait is completely useless, even when running some niche Might share build this is
                obsolete. There are 0 reasons to run this over any of the other traits in Raids.
            </p>
        </TraitCard>
        <TraitCard traitID={1444}>
            <p>
                The permanent modifier of 5% alone makes this trait miles better than both the alternatives.
                The added bonus from physical skills is insane for your burst but is not great enough for
                sustained DPS to warrant taking a physical skill over Signet of Might on most fights, though on
                fights with very short phases it is possible to find success with a physical skill, though this
                requires less than 20s phases.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1448}>
            <p>
                Once again, we ideally do not want to dodge, which makes this skill obsolete. This time however
                there is no damage or other benefits at all, which makes this bad, but it is mandatory since it is a
                minor trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={2000}>
            <p>
                This is the closest thing we have to a condition-based trait in Strength, not that it is any good.
                The limiting factor of it only happening on Disables makes this very bad, and the Bleeding and
                Weakness it applies are not even that good. Horrible Trait.
            </p>
        </TraitCard>
        <TraitCard traitID={1338}>
            <p>
                The flat power is great since it is a DPS increase. The Greatsword clause only really comes into
                effect when running the Greatsword power build, which is a burstier variant of the regular
                power build. The trait is still great without the added bonuses though, and the trait is the best
                amongst the options available.
            </p>
        </TraitCard>
        <TraitCard traitID={1449}>
            <p>
                Sadly the increase is not provided to an offensive stat like precision or ferocity, which in turn
                makes this trait worse than Forceful Greatsword. Do not run this.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1453}>
            <p>
                Assuming 25 Might, which is more than realistic with the power build in any team composition,
                this trait gives 250 extra Power, which is amazing. This is a huge boost to DPS and is part of
                what makes Strength strong for power.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1437}>
            <p>
                This is what makes Strength insanely good on power. 3 stacks are basically free on berserker,
                which makes this trait provide a 21% damage increase almost all the time. It cannot be stressed
                enough how strong an almost permanent 21% modifier is, so always run this trait if you are
                running Strength, as this is almost the sole reason to run Strength.
            </p>
        </TraitCard>
        <TraitCard traitID={1454}>
            <p>
                This trait is outright horrible, there is some niche interaction with Restorative Strength, but that
                does not make it any good. There is just no way it can compete with Berserker’s Power, so never
                run this, ever.
            </p>
        </TraitCard>
        <TraitCard traitID={1440}>
            <p>
                Even if Hammer were meta you would not run this trait, just because of how strong Berserker’s
                Power is. The reduced recharge is nice, but the fact that the increased damage only applies to
                Hammer skills, AND the target has to be disabled, makes this super awkward. Even the bonus
                adrenaline is mediocre. Never run this over Berserker’s Power.
            </p>
        </TraitCard>
        </>
    );
}

export default Strength;