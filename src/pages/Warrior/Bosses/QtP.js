import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import QtPIMG from '../../../assets/bannerimages/QtP_banners.png';

const QtP = () => {
    return (
        <>
            <p>
                Both builds plays exceptionally well on this fight, but the condition build gets the edge on this
                boss due to being able to damage the boss as he dashes to eat pylons, and the conditions applied
                prior to the boss dashing also lingers for even more DPS. Some pug group does for some reason
                prefer the power build with Maces to deal with the anomalies, which is absurd since the druid
                can deal with them just fine on their own with little to no help from the Pylon boys, but do
                prepared for this being a likely scenario. The anomalies’ breakbar is 400 strong, so you should
                only need an offhand Mace to be able to break the bar with Head Butt + soft CC from Cripple
                alone assuming off-hand Mace with paralyzation sigil. The banner patterns are simple as well,
                and the hardest part is paying attention to boss health and remembered to pick up the banners
                as the boss phases.
            </p>
            <br/>
            <p>
                Almost all the phases are near perfect length for Outrage on the power build, so feel free to run
                it, though if you do, you should probably run 2 Maces instead of 1 if you have to deal with
                anomalies as you might not have Head Butt off cooldown as you need to CC and kill the anomaly.
                Remember to use Crushing Blow before swapping off the Maces once you have broken the bar
                on the anomaly.
            </p>
            <br/>
            <p>
                For the condition build the most important thing is as previously mentioned to continue dealing
                damage as Qadim is dashing towards the Pylon. Save Shattering Blow for the shockwave as the
                stability (and the block if timed right) will negate the knockback. For the later phases you can
                cleave the anomalies as they walk towards Qadim using Scorched Earth and Flaming Flurry to
                not only help kill them, but also to gain some addition stacks of Furious Surge.
            </p>
            <div className="row justify-content-center">
                <img src={QtPIMG} alt="Qadim the Peerless Banners"/>
            </div>
            <p>
                For banners you should keep the banners close to the group at all times such that they are easy
                to grab before the boss phases so you do not get locked out of grabbing them while dealing with
                the lava pool mechanic. You use Head Butt on the Pylon you have been assigned in the beginning
                and then run straight towards the boss to place the banners where the group is going to stack.
                At the 40% and 30% phase the group should stack opposite of the Pylon to ensure no one gets
                run over as Qadim dashes to the Pylon, so make sure to place your banners accordingly. For the
                final phase you should refresh you banners every time you get out of berserk to ensure they do
                not run out during the phase.
            </p>
        </>
    );
}

export default QtP;