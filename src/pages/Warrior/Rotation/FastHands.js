import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const FastHands = () => {
    return (
        <>
        <p>
            The entirety of the first berserk is the same as the standard rotation, so this section will start out from
            the last Flaming Flurry of the first berserk.
        </p>
        <SkillIcon skillID={[30074,14364,14365,14363,14364,14365,14363,29940,0]}>
            <p>
                Notice the swap right after Flames of War, rather than staying on sword until Blaze Breaker is off cooldown.
                From here the order of things changes slightly from the regular rotation, but the principle behind the "blocks"
                remains.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,14431,14431,14431,14431,14431,14431,30435,29923,30189,29923,14504,14519,0]}>
            <p>
                It might seem counterintuitive to auto attack this much on longbow, but with the fire field from Flames of War
                the potential finishers from longbow and the general luck aspect that applies to both weaponsets in terms of
                crits and and bloodlust procs from crits, both end up about the same on average in this short a span of time.
                We then do 2 quick bursts, and the standard exit from longbow to swap back to sword.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29845,30074,30682,14364,14365,14363,14364,0,14519,29923,14431,14431,14431,14431,29923,14519,0]}>
            <p>
                The rest of the berserk is fairly uneventful, use burst skills, swap off cooldown, not much else.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29845,29940,30682,30074,14364,14365,14363,0,14519,29923,30189,29923,14504,14431,14431,14431,29923,14519,0,29845,30682]}>
            <p>
                The last bit of the berserk is fairly tight. Berserk will run out shortly after you cast Flaming Flurry,
                so you cannot delay the rotation too much if you want to fit in all the bursts.
                This should feel very familiar as this is just how the opening Berserk ends.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14497,14364,14365,14363,14364,14365,14363,30074,29940,0,14519,14431,14431,14431,14431,14431,30435]}>
            <p>
                This time around we use what we can while we wait for Flames of War to come off cooldown, and once activated
                we swap back to bow  and from there its practically a repeat of the previous loop.
                The only thing that changes is that you now have to weave in Final Thrust, and Shattering Blow will not line
                 up exactly the same, but should still be used off cooldown.
            </p>
        </SkillIcon>
        </>
    );
}

export default FastHands;