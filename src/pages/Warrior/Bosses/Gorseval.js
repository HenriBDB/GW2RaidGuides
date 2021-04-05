import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import GorseIMG from '../../../assets/bannerimages/gorsebanners.png';

const Gorseval = () => {
    return (
        <>
            <p>
                On Gorseval many groups want the warrior to help out with the massive 4500 breakbar
                Gorseval gets during its rampage. This means that the power build is favoured for this fight as it
                can bring Maces for the CC without losing much in terms of DPS. The condition build does
                however still hold some value on this fight as the ability to cleave and clear multiple orbs
                quickly is great for orb control throughout the fight.
                There are 2 approaches to the CC on Gorseval, fast CC and slow CC.
                For fast CC you want to bring both Maces to have access to the full 1080 breakbar damage the
                Maces provide together. The goal with fast CC is to end the rampage as soon as possible so DPS
                can continue unhindered without putting extra pressure on the healer(s).
                For slow CC you can make it with a single offhand Mace with paralyzation sigil for 690 breakbar
                damage. The goal with slow CC is to extend the phase a bit in case DPS is too low, such that it is
                still possible to phase the boss without doing updrafts, by delaying breaking the bar until the
                very end of the rampage.
            </p>
            <br/>
            <p>
                This is a fight where effective use of Outrage is possible, as the phases can drag out quite a bit in
                most groups, and having Outrage for breaking out of slams is great, but both Signet of Might and
                Outrage will provide similar results in the end. Just like with VG you want to play Tactics on this
                boss to provide a boost to the other power DPS classes, but in pugs this is not relevant.
                When playing Mace/Mace it is possible to get the Severance buff when starting the fight by
                starting on Maces and doing Head Butt, and then while self-stunned you swap to Axes where if
                Head Butt was timed right, you’ll have 3 seconds of Severance buff to work with once the self-
                stun wears off. Something to pay attention to during the fight is flanking, and while it is fairly
                free for the main phases, some forget to flank the spirits during the split phases, so remember to
                pay attention to flanking at all times.
            </p>
            <br/>
            <p>
                For the condition build the main concern is lining oneself up to cleave not only the adds
                Gorseval spawns, but also the orbs, not only during the main phases, but also the split phases.
                Flaming Flurry and Scorched Earth have incredibly long ranges, so hitting multiple targets with
                those skills is fairly free when paying attention to positioning. This helps not only with keeping
                the orbs under control, but also provides additional stacks of Furious Surge.
                Shattering Blow gives stability and blocks for half a second, which can be used to protect against
                the knockback on the slams from Gorseval.
            </p>
            <br/>
            <p>
                Managing banners on this fight is exceptionally simple. Place the banners near the middle, but
                slightly towards whatever spirit you go to first during the splits, which in the example provided
                is arrow. The goal is to pick up the banners as you run to the spirit and replacing them right
                away in the same position. If the phases and splits are slow you might want to delay replacing
                the banners until the last spirit is about to be killed.
            </p>
            <div className="row justify-content-center">
                <img src={GorseIMG} alt="Gorse Banners"/>
            </div>
        </>
    );
}

export default Gorseval;