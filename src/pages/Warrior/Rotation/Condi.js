import React from 'react';
import SkillIcon from '../../../components/SkillIcon';

const Condi = () => {
    return (
        <>
        <SkillIcon skillID={[29940,0,14519,14504,30343,30435,29923,30189,29923,30074,14519,0]}>
            <p>
                You cast Flames of War and weapon swap the instance it is done casting, starting combat for you
                and thus giving you the effect of the weapon swap sigil on the Longbow.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29845,30682,14364,14365,14363,14364,14365,0]}>
            <p>
                The only skill which off cooldown for this Sword block outside of Final Thrust is Blaze Breaker,
                and since the target is not at 50% health at this point, Final Thrust is not relevant, so only Blaze
                Breaker is used.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,14431,14431,14431,14431,29923,14519,0]}>
            <p>
                Standard Longbow block, not much to say.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29845,29940,30074,30682,14364,14365,14363,0]}>
            <p>
                Standard Sword block, this time everything is off cooldown, so we use the relevant skills Blaze
                Breaker, Flames of War, and Shattering Blow, before using Flaming Flurry. This is followed by
                one auto-attack chain to fill time for weapon swap.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,30189,29923,14504,14431,14431,14431,29923,14519,0,29845,30682]}>
            <p>
                Early heal Longbow block, followed by a weapon swap into a quick Blaze Breaker into Flaming
                Flurry. If everything has been done right berserk should run out while casting Flaming Flurry,
                but it can get tight with slow execution of the burst.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30074,14364,14365,14363,14364,14365,14363,29940,14364,14365,14363,14364,14365,14363,14364,14365,14363,29845,0]}>
            <p>
                This leadup to the next berserk is basically just auto-attack chains and casting important skills
                that come off cooldown while doing so. If you have landed the Blaze Breaker before Flaming
                Flurry, you can end the leadup off with Blaze Breaker into weapon swap.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,30435,29923,30189,29923,14504,14431,14431,14431,30074,29923,14519,0]}>
            <p>
                Early heal Longbow block, though with berserk activation weaved into it.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30682,14364,14365,14363,29845,14364,14365,14363,29940,0]}>
            <p>
                Standard Sword block, Blaze Breaker comes off cooldown slightly after casting Flaming Flurry,
                and we delay weapon swap to cast Flames of War before swapping.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,14431,14431,14431,14431,14431,30074,29923,30189,29923,14519,0]}>
            <p>
                Late heal Longbow block, not much else.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29845,30682,14364,14365,14363,14364,14365,0,29923,14519]}>
            <p>
                Blaze Breaker is barely off cooldown for this, so you may have to do a Sever Artery first to make
                things line up. It is very important that you swap the second you can, because otherwise you will
                not make it to the last Scorched Earth. You will not get to cast the Scorched Earth if you are slow
                with the rest of the rotation either.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14504,14431,14431,14431,14431,14519,0,30074,29940,29845,14497,14364,14365,14363,14364,14365,14363,0]}>
            <p>
                This out of berserk sequence is basically casting skills that are ready and auto-attacking for the
                rest, simple and easy. Once you weapon swap it is back to an early heal Longbow block followed
                by a Sword block, a late heal Longbow block, a Sword block, and then an end berserk Longbow
                block. Do an out-of-berserk rotation similar to this one, rinse and repeat. Do note that you will
                have to weave in Final Thrust in the Sword blocks from here on out.
            </p>
        </SkillIcon>
        </>
    );
}

export default Condi;