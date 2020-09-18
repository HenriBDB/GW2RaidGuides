import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const NatureMagic = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="25" data-armory-25-traits="1062,978,965,964,1038"></div>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1055}>
            <p>
                This trait grants you <WikiIcon name="Regeneration"/> Regeneration (5s) when you receive damage while your health is 
                below 50%. The trigger is on a 10 seconds internal cooldown.
            </p>
            <p>
                You should already have permanent or near permanent <WikiIcon name="Regeneration"/> Regeneration uptime so this trait 
                is not too useful but you have to tak it as it is a minor trait.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={1062}>
            <p>
                You deal 1% more damage for each unique boon affecting you. Your pet also receives 1% more damage for each unique boon affecting them.
            </p>
            <p>
                Take this trait on very low pressure fight like Samarog to get a little more damage as you sacrifice a lot of healing power by taking it.
            </p>
        </TraitCard>
        <TraitCard traitID={978}>
            <p>
                This trait grants you <WikiIcon name="Quickness"/> Quickness (3s) 
                when your health falls below 50% on a 20 seconds internal cooldown. It also gives you additional healing power equal to 7% of your power.
            </p>
            <p>
                This trait significantly improves your healing and should be taken any time healing is required. With base power starting at 1000 
                and mostly Harrier gear, this should increase your healing power by a significant ~17% during raid encounters!
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1056}>
            <p>
                Whenever you gain a boon, it is also given to your pet.
            </p>
            <p>
                Since your pet accounts for a big portion of your damage, this trait is useful in ensuring your pet is always capped on <WikiIcon name="Might"/><sub>25</sub> Might 
                and other boons that help them deal more damage and stay alive. This trait is particularly useful when playing condition druid as pets like Jacaranda and Iboga 
                apply a lot of conditions and deal significant dps.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={965}>
            <p>
                This trait grants the 5 closest allies including yourself <WikiIcon name="Fury"/> Fury (8s) and <WikiIcon name="Vigor"/> Vigor (8s) when you swap pets.
            </p>
            <p>
                This trait is taken whenever you do not have a warhorn equipped to cover <WikiIcon name="Fury"/> Fury uptimes within your sub-group. If you are taking 
                this trait, make sure to pet swap as often as possible to upkeep <WikiIcon name="Fury"/> Fury. The extra <WikiIcon name="Vigor"/> Vigor is also very 
                beneficial for Mirages and Power Daredevils as being able to dodge more often increase their dps.
            </p>
        </TraitCard>
        <TraitCard traitID={964}>
            <p>
                This trait grants a 20% reduced recharge on warhorn skills and causes the latter to grant <WikiIcon name="Regeneration"/> Regeneration (6s) to 5 
                allies in a 600 radius around your target for <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></span> and 
                around yourself for <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span>. Note 
                that <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29449"></span> from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="986"></span> is 
                also affected by this trait. With this trait you also heal yourself for 157 (0.06) whenever you gain <WikiIcon name="Regeneration"/> Regeneration.
            </p>
            <p>
                This trait is very useful when you have a warhorn equipped as <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> will 
                be your main source of <WikiIcon name="Fury"/> Fury and the recharge reduction will help you upkeep uptimes. In addition, the 
                extra <WikiIcon name="Regeneration"/> Regeneration will provide better uptimes and in turn help you recharge your Astral Force faster. 
                Take this trait whenever you have a warhorn equipped.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1059}>
            <p>
                This trait grants you a flat 240 stat points of concentration which is also a flat 16% extra boon duration.
            </p>
            <p>
                This is very useful in helping you provide 100% uptimes in <WikiIcon name="Might"/> Might, <WikiIcon name="Fury"/> Fury 
                and <WikiIcon name="Regeneration"/> Regeneration which are the boons for which you are responsible so it essentially helps you do your job better.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={1038}>
            <p>
                With this trait, your spirits lose 33% less health per tick and their active abilities have a 50% increased radius from 240 to 360 and apply a 10-man boon depending on the spirit.
            </p>
            <p>
                This trait is very useful in ensuring your spirits stay alive and helping with buff uptimes using their active abilities. The passive buffs of your spirits are very powerful 
                and your spirits staying alive longer means that the passive buff uptimes will be better. Always aim for 100% spirit uptimes during main phases. More about spirits and the buffs 
                they provide using this trait can be found in <span class="font-italic">Boons and Buffs {'>'} Spirits</span>. A druid in raids should always have this trait.
            </p>
        </TraitCard>
        </>
    );
}

export default NatureMagic;