import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const Longbow = () => {
    return (
        <>
        <SkillIcon skillID={[30343,30435,29923,30189,29923,14519,0]}>
            <p>
                Do not be mislead by the Headbutt into Berserk in the beginning.
                Unlike the rotations you actually run Savage Instinct for this build, meaning you use berserk to
                stun-break the self-stun. This is then followed by a swift F1, heal, F1 combo into fan of fire and swap
                in the after-cast.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14398,30851,14418,14398,30851,14421,14369,30851,14399,30851]}>
            <p>
                The Fan of Fire + Swap gives 8 adrenaline, so we start the axe section out with Throw Axe to get to 10,
                and thus also the Decapitate. From there it is rapid fire all your skills but Whirling Axes, weaving in
                Decapitates as adrenaline reaches 10, and only once everything is on cooldown it is time for Whirling Axe.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,14398,30851,14418,14369,30851,14369,14370,30851,14421,14398,30851]}>
            <p>
                With the main part of the burst done, the rest of the berserk is pretty much a carbon-copy of the No-swap
                rotation, where you fill adrenaline and use Decapitate the fastest way possible.
                It is very important that Blood Reckoning is not used outside the longbow section, even if it comes off
                cooldown while still in berserk.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,14370,14371,14399,14418,14421,0]}>
            <p>
                Berserk will run out in the middle of Double Chop so just finish the attack chain, dont even try to get
                the extra Decapitate. Everything from there is a fine order of skills that takes exactly enough time for
                Berserk to come off cooldown and ensures that you are on longbow with weaponswap ready when that happens.
                Dual Strike and Cyclone Axe will be off cooldown by the time we swap back to axes so they are free to use
                after Whirling Axe.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,14504,14381,14431,14431]}>
            <p>
               By ending the axe section on CycloneAxe you can just keep mashing the same key as you swap to cast
               Fan of Fire instantly after the swap. pin Down is cast before Arching Arrow since it is easy to interrupt
               Arching arrow if you swap the skills around due to Pin Downs priority. The 2 auto attacks acts as the last
               buffer for Berserk to come off cooldown while you cast the Headbutt to start the next loop. (YES, you do
               cast Headbutt actively to start every loop)
            </p>
        </SkillIcon>
        <p>
            Then Repeat from the start
        </p>
        </>
    );
}

export default Longbow;