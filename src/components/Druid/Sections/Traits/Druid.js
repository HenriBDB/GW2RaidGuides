import React from 'react';
import TraitCard from '../../../TraitCard';
import WikiIcon from '../../../WikiIcon';

const Druid = () => {
    return (
        <>
        <div className="mb-3" data-armory-embed="specializations" data-armory-ids="5" data-armory-5-traits="2016,1935,2053,2001,2056,2057,2058"></div>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Adept</h4>
        </div>
        <TraitCard traitID={1874}>
            <p>
                This trait gives you access to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> which is the 
                core of the druid specialisation and includes 5 new skills that are discussed below in <span className="font-italic">Skills and Utilities</span>. You can enter <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> 
                only once you have fully charged your Astral Force. You gain 1.5% of Astral Force per healing you give and 0.75% per damage you deal. Your pet's attributes are decreased by 20%.
            </p>
            <p>
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> skills are one of the main toolset for a Druid. Most of your 
                healing will come from this as well as all your squad-wide <WikiIcon name="Might"/> Might generation. Other features part of it include access 
                to <WikiIcon name="Blinded"/> Blind, <WikiIcon name="Immobile"/> Immobilize and condition cleansing.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Adept</h4>
        </div>
        <TraitCard traitID={2016}>
            <p>
                Using a heal skill with this trait causes you to heal 5 allies for 1000 (0.2) in a 300 radius once around yourself and again around your pet. Note that the active ability 
                of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span> does not trigger this trait.
            </p>
            <p>
                You should take this trait whenever you have a heal skill that is not <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span> or 
                you do not have a staff equipped as it will help you provide extra healing when using a heal skill which can help during burst damage phases.
            </p>
        </TraitCard>
        <TraitCard traitID={1935}>
            <p>
                This trait reduces recharge rates on staff skills by 20% and causes you to <WikiIcon name="Daze"/> Daze (1s) up to 5 targets in a 
                300 radius when swapping to staff AND when entering Celestial Avatar form. The trigger for this trait is on an 8 seconds cooldown.
            </p>
            <p>
                The recharge on staff skills can be useful when extra healing is needed, as all staff skills apart from <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31700"></span> 
                heal, and this trait should be taken whenever you have a staff equipped and you are taking 
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span>. You can also use this trait to CC by swapping 
                to staff during breakbar phases.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Master</h4>
        </div>
        <TraitCard traitID={1862}>
            <p>
                On a 1 second internal cooldown, heal yourself for 207 (0.01) whenever you heal an allie. Note that this trait does not trigger from passive heals such 
                as <WikiIcon name="Regeneration"/> Regeneration or from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="970"></span>.
            </p>
            <p>
                This can be useful in pressure heavy fights to keep you at high health as your personal heals are much lower than your outgoing heals and it is thus much harder for you to heal yourself than it is for you to heal others.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Master</h4>
        </div>
        <TraitCard traitID={2053}>
            <p>
                Whenever you leave <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>, grant to 
                5 allies in a 300 radius <WikiIcon name="Stealth"/> Stealth (3s) and <WikiIcon name="Superspeed"/> Superspeed (3s). This trait 
                triggers whenever you manually leave <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>, it expires or you go down 
                while in <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span>.
            </p>
            <p>
                Do not take this trait if it can mess with tanking or aggroing as the stealth will change enemy targeting for example on Slothasor, KC (statues) or kiting flaks on Sabetha. 
                Otherwise, feel free to take this trait when the extra mobility comes in handly, Dhuum kiting being a prime example. As the <WikiIcon name="Superspeed"/> Superspeed 
                is also applied to allies, you can use it to help them move back to boss after split, move away from stack for a mechanic etc...
            </p>
        </TraitCard>
        <TraitCard traitID={2001}>
            <p>
                This trait reduces recharge of glyphs by 20% and causes them to cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31776"></span> which 
                if combined with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2057"></span> will also grant <WikiIcon name="Might"/><sub>2</sub> Might to the squad.
            </p>
            <p>
                Glyphs are usually taken when pushing or extra CC is needed/welcome. The reduce on glyph recharge provided by this trait often helps those glyphs align with the push/cc phases they are taken for.
                This trait is especially essential when using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30238"></span> 
                to push the Tormented Dead on Soulless Horror. Take this trait whenever you have a glyph equipped.
            </p>
        </TraitCard>
        <TraitCard traitID={2056}>
            <p>
                This trait reduces the duration of movement-impairing conditions on you by 33% and increases your movement speed by 33% as long as you do not have any such condition.
            </p>
            <p>
                This trait is not extremely useful but helps with personal mobility when it is the only option in this column. Take this trait whenever you have no use out of the 2 other options. 
                You can use it to reach mechanics slightly faster and it can help you side-step attacks through better mobility.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Minor Grandmaster</h4>
        </div>
        <TraitCard traitID={1992}>
            <p>
                Whenever you heal another ally, gain a stacking buff for 6s that increases your outgoing healing effectiveness by 2%. Stacks up to 10 times. This trait will also trigger when reviving an ally. 
                Note that using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31914"></span>, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12483"></span>, 
                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"></span> and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></span> 
                while at full health will also trigger this trait for some reason.
            </p>
            <p>
                This trait is extremely helpful for healing allies. You can gain up to 20% increased outgoing healing efficiency which is enormous. If you struggle healing players in an encounter, 
                check your <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1992"></span> stacks and make sure you keep them as high as posisble.
            </p>
        </TraitCard>
        <div className="row justify-content-center">
            <h4 className="mb-0">Major Grandmaster</h4>
        </div>
        <TraitCard traitID={2057}>
            <p>
                Using a Celestial Avatar ability grants up to 10 allies within the radius of the ability <WikiIcon name="Might"/><sub>2</sub> per tick. Details on 
                might generation through this can be found in <span className="font-italic">Boons and Buffs {'>'} Might and Fury</span>.
            </p>
            <p>
                This is the almighty trait that allows you to provide permanent <WikiIcon name="Might"/><sub>25</sub> Might to the entire squad which increases 
                everyone's power and condition damage by 750 stat points each! Upkeeping might is also important for you as the ludicrous amount of power gained, 
                combined with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="978"></span>, will increase your 
                healing efficiency by nearly 4%. Take this trait whenever you are responsible for the <WikiIcon name="Might"/> Might in your squad which will be 
                most of the time.
            </p>
        </TraitCard>
        <TraitCard traitID={2058}>
            <p>
                Your outgoing healing while in Celestial Avatar Form is increased by 50%. Going into <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> will 
                also cause your next strike to inflict <WikiIcon name="Blinded"/> Blindness (4s) and heal you for 596 (0.2).
            </p>
            <p>
                Celestial Avatar Skills being your main source of healing, this trait increases that healing even more by 50% (outgoing only) making you an extremely powerful raw healer. 
                As you sacrifice 10-man <WikiIcon name="Might"/><sub>25</sub> Might by taking this trait, it is only used when either you are not responsible 
                for <WikiIcon name="Might"/> Might or in small encounters where <WikiIcon name="Might"/> Might is not essential but healing is needed. 
                River of Grenth is a good place to use this skill as the extra healing will help keep the forward group alive.
            </p>
        </TraitCard>
        </>
    );
}

export default Druid;