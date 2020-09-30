import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Berserker = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="18" data-armory-18-traits="2049,2039,1977,2011,2042,2002,1928,2038,2043"></div>
        <p>
            The Berserker trait-line is a DPS oriented elite specialization. This is the trait-line both the
            Power- and Condition build builds around. It has great power options and great condition
            damage options, which on top of the primal burst which the trait-line unlocks makes it the
            single best option for banner builds. The primal burst Decapitate on top of Blood Reaction and
            Bloody Roar provides a solid core for the power build, and both the burst skills on Sword and
            Longbow along with Last Blaze, Heat the Soul, and King of Fires provide a huge boost to the
            condition build, along with access to Torch as a weapon. You always run this trait-line.
        </p>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1831}>
            <p>
            Berserk is the core mechanic of the berserker. The standard burst skill is replaced by berserk
            which only can be activated with a full 30 adrenaline, but once activated you gain access to
            primal burst skills. Berserk lasts 15 seconds on its own but can be extended through various
            means, such as Smash Brawler or Rage skills. The primal burst skills only cost 10 adrenaline but
            carry power similar to level 3 bursts from the core specialization. Berserk is what makes both
            the power and condition damage rotations feel incredible fast-paced, as you are trying to get as
            much done within its duration as possible. Overall an amazing concept, that carries over super
            well from the core concepts.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={2049}>
            <p>
            </p>
        </TraitCard>
        <TraitCard traitID={2039}>
            <p>
            </p>
        </TraitCard>
        <TraitCard traitID={1977}>
            <p>
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1993}>
            <p>
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={2011}>
            <p>
            </p>
        </TraitCard>
        <TraitCard traitID={2042}>
            <p>
            </p>
        </TraitCard>
        <TraitCard traitID={2002}>
            <p>
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={2046}>
                    <p>
                    </p>
                </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1928}>
            <p>
            </p>
        </TraitCard>
        <TraitCard traitID={2038}>
            <p>
            </p>
        </TraitCard>
       <TraitCard traitID={2043}>
           <p>
           </p>
       </TraitCard>
        </>

    );
}

export default Berserker;