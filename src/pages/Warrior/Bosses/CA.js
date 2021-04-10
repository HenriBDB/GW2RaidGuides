import React from 'react';
import CAIMG from '../../../assets/bannerimages/ca_banners.png';

const CA = () => {
    return (
        <>
            <p>
                This boss is heavily power favoured given its bursty nature. This boss is technically nothing, but
                a series of bursts timed with the debuff applied by the Swords. The banner patterns are simple,
                and the fight is overall not too challenging even for the mechanics you might have to deal with.
                Many groups want the warrior to collect the first 5 Swords during the burn phases.
            </p>
            <br/>
            <p>
                It is a great idea to play Greatsword here as it helps cleaving Swords and Shields, and it provides
                some added movement which can help you get to the Swords in time while still being able to
                attack easily. You want to skip using Hundred Blades while collecting though, as the animation
                locks you in place. Instead you want to do Whirlwind Attack, a full auto-attack chain and 1 auto-
                attack to fill adrenaline for Arc Divider. Remember to use Whirlwind Attack along the boss’
                hitbox to get all 4 hits from the skill. All other skills you can use while moving, and you should
                do so while collecting the Swords, to minimize the DPS loss from doing so.
                A pattern for collecting with Greatsword could be starting out with Whirlwind Attack along the
                hitbox to get to the first Sword, then use Hundred Blades as it moves towards you. Then you
                active Berserk and Arc Divider as you move towards the 2nd Sword, swapping to Axes after the
                final hit of Arc Divider. Use Cyclone Axe first thing when you swap to Axes and then Decapitate,
                Blood Reckoning, Decapitate as you move towards the 3rd Sword, and then Whirling Axe after as
                you collect the 4th and 5th Swords. Use the special action key and continue your rotation the best
                you can from there.
                There is not much point in playing Outrage here, so stick to Signet of Might for a steeper burst.
                You can bring Maces to help break the Shields if they are problematic, but otherwise the
                Greatsword is the better choice.
            </p>
            <br/>
            <p>
                The condition build is highly suboptimal here as you gain no benefit from conditions sticking to
                the targets and you do not have time to ramp up conditions either. You can cleave Swords and
                Shields with Flaming Flurry and Scorched Earth to gain additional Furious Surge stacks. You can
                block the slams from the hands with Shattering Blow, but it is not recommended to do so as you
                get neither damage nor berserk extension by doing so since you hit nothing (unless Swords or
                Shields are nearby). When collecting Swords with the condition build you should be careful with
                Shattering Blow as it locks you in place for the duration of its animation, which is short, but can
                cause you to miss a Sword. Remember Final Thrust for the hands as the extra damage helps
                quite a bit.
            </p>
            <br/>
            <p>
                Banners are quite easy to manage for this fight since the phases have the perfect length for
                refreshing banners. The goal with the first banner is to cover both hands, which supports
                whatever strategy you might be running.
                This position also makes it easy to pick up the banners and recast them as you move to collect
                Swords. The remainder of the banners should be placed close to where the group will stack
                during the burn, but not so close that it does not cover most of the area for the remaining
                hand(s). Pick up and recast banners whenever you move to collect Swords, and when a burn
                phase ends.
            </p>
            <div className="row justify-content-center">
                <img src={CAIMG} alt="Conjured Amalgamate Banners" style={{width: "90%"}}/>
            </div>
        </>
    );
}

export default CA;