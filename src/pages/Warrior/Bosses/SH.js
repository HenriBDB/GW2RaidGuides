import React from 'react';
import WikiIcon from '../../../components/WikiIcon';
import SHIMG from '../../../assets/bannerimages/sh_banners.png';

const SH = () => {
    return (
        <>
            <p>
                This is the worst encounter to manage banners on. The random walls can force you to move
                longer distances, faster than your banners can recharge, which means uptimes can be spotty.
                This, at times erratic, movement is also why condition damage is favoured for this encounter, as
                the conditions sticks while the boss moves, while the power build is practically locked out of
                dealing damage at times. Even with the 3000 strength breakbars they are not frequent enough
                to warrant bringing the power build with Maces, especially given that the boss is not
                invulnerable during the bar. Perhaps further down the line it will be relevant, but currently it is
                not.
            </p>
            <br/>
            <p>
                If you do play power on this boss you should bring the Maces to help break the bar faster, since
                the boss is not casting any other skills while the bar is up, which greatly hurt confusion <WikiIcon name="Confusion"/> DPS.
                Outrage is playable for this boss, but keep in mind that Head Butt should be available for the
                breakbars. The extension to berserk can be a great asset once again with the boss movement in
                mind. Signet of Might is however the safe and consistent choice.
            </p>
            <br/>
            <p>
                For the condition build you should help cleaving wurms at the beginning of the encounter to
                quickly ramp up on Furious Surge stacks and help the group and tanks out by minimizing the
                incoming DPS threat. Shattering Blow can be used to block all the attacks of the boss if timed
                right, which can help mitigate incoming damage. If you do get hit by the spin or any scythes or
                red pools, you can cleanse some of the conditions with Flames of War. You should remember to
                use Head Butt for CC, and Sundering Leap for movement over open area. Depending on the
                group setup you Might have to run Sundering Bursts to help cover Vulnerability <WikiIcon name="Vulnerability"/> uptime.
            </p>
            <div className="row justify-content-center">
                <img src={SHIMG} alt="Soulless Horror Banners"/>
            </div>
            <p>
                Given the nature of the encounter it is very hard to outline a clear pattern of how banners
                should be approached. So instead a set of guidelines will be outlined rather than a definite
                pattern. Most importantly for banner management on this encounter is to always keep the
                banners close so they can be picked up without putting you at risk in case a red pool is about to
                drop close, or a wall is coming, which forces you to move. 2nd thing to keep track of is not placing
                banner prematurely. If you place the banners and then have the pick them back up right away
                you are locked out of any banner buffs for up to 30 seconds, which is much worse than waiting
                ~5 seconds, to orient oneself and then placing the banners. Lastly, in case luck is on your side
                and you do not have to move for a while, you should recast banners as you get out of berserk.
                Put shortly, keep banners close, do not recast too quickly, and replace banners out of berserk if
                it has been a while since they were cast.
            </p>
        </>
    );
}

export default SH;