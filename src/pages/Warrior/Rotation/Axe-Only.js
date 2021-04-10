import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const AxeOnly = () => {
    return (
        <>
        <SkillIcon skillID={[30343,30435,30851,30189,30851]}>
            <p>
                This is pretty much the same for every power build, it instantly fills out adrenaline which means we can activate berserk right after Head Butt.
                This is a combination you should get very comfortable with.
                It is the way to use the healing skill for a DPS increase.
                While Decapitate resets its own cooldown, Blood Reckoning still gives 10 adrenaline, which fuels another Decapitate.
                If timed right, this combo can be executed very quickly.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,14398,30851,14418,14398,30851]}>
            <p>
                Here is the first deviation, as previously mentioned the goal is more Decapitates faster, and to
                achieve this we need to delay Whirling Axe as it is slow in terms of casting Decapitates.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,0,30851,14421,14369,30851,14399,30851]}>
            <p>
                After the 2nd use of Cyclone Axe we reach the point of everything else being on cooldown, so
                instead of doing Chop + Double Chop we do Whirling Axe, channelling it fully to provide a
                sufficient buffer for the other skills to come off cooldown again.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14421,14398,30851,14418,14369,30851,14369,0,30851,14421,14398,30851,30189,30851,14369,14370,30851,14369,0,30851,14421,14398,30851,14418]}>
            <p>
                With the buffer finished the rotation can go on until the 2nd Blood Reckoning before it is out of
                options again, forcing us into a Chop + Double Chop scenario which we just have to accept.
                Berserk ends right around the last Dual Strike, ending the berserk section out at 15 Decapitates
                where the standard rotation ends out at 14.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14369,14370,14371,14421,14399,14369,14370,14371,14369,14370,14371]}>
            <p>
                The out of berserk rotation is fairly simple this time around, 1 full auto-attack chain followed by
                Cyclone Axe and Whirling Axe, ending out in 2 full auto-attack chains. One could have added
                Cyclone Axe, Dual Strike or Throw Axe instead of the last auto-attack chain, but we want these
                skills to be off cooldown when starting berserk such that the next berserk is exactly the same as
                the first.
            </p>
        </SkillIcon>
        </>
    );
}

export default AxeOnly;