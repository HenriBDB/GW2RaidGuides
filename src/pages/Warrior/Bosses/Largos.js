import React from 'react';
import LargosIMG from '../../../assets/bannerimages/largos_banners.png';

const Largos = () => {
    return (
        <>
            <p>
                This fight is probably the single worst warrior encounter. Everything feels bad to play, due to
                the boss movements. The dashes and teleports make the boss move out of your fire fields for the
                condition build, and out of reach for the power build. There is only playing around this the best
                you can by knowing the boss patterns and adjusting the rotation accordingly. Both builds work
                fairly well as they both gets screwed roughly equally, but the condition build has the upper edge
                as the conditions sticks while the boss is dashing or teleporting away from you. The banner
                pattern for this boss is incredibly simple, and the hardest part is remembering the banners in
                between the anguish of doing a rotation on this boss. Remember that Head Butt is a stun break
                as there are multiple disables on this boss.
            </p>
            <br/>
            <p>
                When you play power on this boss you should consider bringing Maces to help break the bars
                post 50% boss health and you can use Counterblow to block a hit in a pinch. You can also
                consider running Outrage as it breaks you out of the bubbles and the knockback from
                shockwaves, extending your berserk on top of that.
            </p>
            <br/>
            <p>
                For the condition build you want to stick to bow during the dashes so you can attack the boss as
                it moves around, but save your burst and Fan of Fire until you can guarantee that all hits will
                land on the boss. You can use Shattering Blow to block every single mechanic on this encounter,
                though be careful with the timing. Shattering Blow can also be used to reflect projectiles during
                the CC phases.
            </p>
            <br/>
            <p>
                For banners you just want to keep them in the middle of the arena and pick them up before
                moving to the next platform. You might have to recast on the same platform if it takes too long
                to phase the boss.
            </p>
            <div className="row justify-content-center">
                <img src={LargosIMG} alt="Largos Banners" style={{width: "90%"}}/>
            </div>
        </>
    );
}

export default Largos;