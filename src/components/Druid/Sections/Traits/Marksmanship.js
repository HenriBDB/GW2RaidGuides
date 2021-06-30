import React from 'react';
import TraitCard from '../../../TraitCard';
import WikiIcon from '../../../WikiIcon';

const Marksmanship = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="8" data-armory-8-traits="986,1000,1070,1698,996"></div>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1010}>
            <p>
                Apply <WikiIcon name="Vulnerability"><sub>5</sub></WikiIcon> Vulnerability (5s) on your first strike when entering combat.
            </p>
            <p>
                Nothing to really add here, this is useful to help ramp up <WikiIcon name="Vulnerability"/> quickly.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={986}>
            <p>
                Casts <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29449"></span> when you swap pets.
            </p>
            <p>
                This trait is very useful and should be utilised whenever you do not have a warhorn equipped as it provides <WikiIcon name="Fury"/> Fury and 
                <WikiIcon name="Swiftness"/> Swiftness on pet swap. Bosses where you often utilise this trait for boons include Soulless Horror and Sabir.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1009}>
            <p>
                Your opening strike inflicts <WikiIcon name="Crippled"/> Crippled (2s).
            </p>
            <p>
                This helps stack unique conditions at the start of the fight which is useful for classes that benefit from unique conditions like Daredevil and Holosmith.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={1000}>
            <p>
                Weapon skills deal 5% increased damage below 600 range and 10% above 600 range.
            </p>
            <p>
                This is a nice dps boost when you are using skirmishing and a ranged weapon and do not need <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1070"></span>. 
                This trait is mostly used for Soulless Horror.
            </p>
        </TraitCard>
        <TraitCard traitID={1070}>
            <p>
                Next attack after interrupting a foe deals 50% more damage. Daze and stun durations you apply increase by 50%.
            </p>
            <p>
                50% increased daze / stun duration is huge on some bosses. It impacts Flash Discharge (SAK on Sabir), Flare (orb skill 2 on Statues of Darkness in Hall of Chains), 
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12508"></span>, <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1935"></span>, 
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31318"></span>, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31658"></span>, 
                and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12594"></span>.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1011}>
            <p>
                Opening strikes are guaranteed to critically hit.
            </p>
            <p>
                You will gain at least 1 dps thanks to this trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={996}>
            <p>
                Deal 15% increased damage to disabled or movement-impaired foes.
            </p>
            <p>
                Since bosses often have high uptimes of cripple, this is close to a 15% power dps increase and is the highest dps option of the column. 
                Use it just for the dps.
            </p>
        </TraitCard>
        <TraitCard traitID={1698}>
            <p>
                Your longbow skills pierce and recharge 20% faster.
            </p>
            <p>
                This trait is extrelemly useful if you require to push a mob while other enemies are around. An example is Soulless Horror where this trait 
                allows you to push the torented dead with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></span> through
                the boss.
            </p>
        </TraitCard>
        </>
    );
}

export default Marksmanship;