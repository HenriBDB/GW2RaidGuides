import React from 'react';
import WikiIcon from '../../../components/WikiIcon';
import SlothIMG from '../../../assets/bannerimages/sloth_banners.png';

const Sloth = () => {
    return (
        <>
            <p>
                This encounter is very heavily power favoured because of the amount of CC which is required
                throughout the fight. On top of that Slothasor cleanses all conditions from itself every time he
                goes to sleep, which removes the possibility to ramp up on condition damage. Only bring the
                condition build for this encounter if you do not have access to the power build. Some groups
                might want you to eat shrooms for this fight, but you should only do so if no one else can or
                want to do it, because while you are eating your banners will buff Slothasor and the slublings
                instead of buffing the group, as you are an enemy while eating. If you get forced to eat make sure
                to bring Banner of Defense as well to give Slothasor and the slublings a sweet 100 toughness <WikiIcon name="Toughness"/>
                and vitality boost while eating. You can prestack adrenaline before the fight starts by using the
                poison from the arena to get into combat, and then stacking adrenaline by weapon swaps.
            </p>
            <br/>
            <p>
                It is very important that you bring both Maces to this encounter. Every breakbar is 4000 strong,
                so being able to tick off 1080 of that on your own for every bar is a huge asset to the group. Just
                like Gorseval you can start the fight on Maces to get the severance sigil buff for the first bit of the
                fight by swapping to Axes during the self-stun from Head Butt. The slublings which spawns
                throughout the fight can provide additional adrenaline which should of course be spent on
                additional Decapitates. You should not play Outrage here as it is too important to have Head
                Butt off cooldown for the breakbars to gamble on it lining up with your rotation for a berserk
                extension you hardly can make use of anyways since you deal no damage while the breakbar is
                up. Head Butt can mess with any stability <WikiIcon name="Stability"/> you might have gotten in preparation for the fear <WikiIcon name="Fear"/>, so
                stick on Maces and block the fear with Counterblow just to make sure you are safe.
            </p>
            <br/>
            <p>
                While the condition build is not recommended for this encounter, there a still a few tips if you
                do end up playing it here. First and foremost, as always, remember to cleave when possible with
                Flaming Flurry and Scorched Earth. You should however be careful with these skills as well to
                not cleave any transformed allies who are currently eating. Shattering Blow is also a great tool
                for this fight as the block can be used for the fear as well shake projectiles if timed right, but if
                slubling control is poor, the stability <WikiIcon name="Stability"/> could get corrupted into fear <WikiIcon name="Fear"/> instead.
            </p>
            <br/>
            <p>
                Managing banners can be tricky on this encounter as the accessible flooring moves as the fight
                progresses, and if you are not careful, banners can get stuck in poison. It is therefore important
                to think ahead when placing banners and picking up the banners when you move past them.
                The corresponding graph showcases roughly how the group will position and move, and how
                banners should be placed accordingly for the mid strategy, but for other eating patterns the idea
                will be similar in how you want to place the banners.
            </p>
            <div className="row justify-content-center">
                <img src={SlothIMG} alt="Slothasor Banners"/>
            </div>
            <p>
                When Starting the fight you want to place the banners behind where Slothasor will be
                positioned first, such that when moving after the first breakbar, the banners can easily be
                picked up and replaced slightly towards the next tanking position which after the 2nd shroom
                has been eaten. (3rd position). You want to make sure that the banners cover both the area you
                are currently positioned at, and most of the path towards the next location to minimize
                downtime while moving and replacing the banners.
            </p>
        </>
    );
}

export default Sloth;