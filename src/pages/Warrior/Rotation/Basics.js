import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';

const Basics = () => {
    return (
        <>
        <p>
            Starting with the <b>Sword Block</b>.
        </p>
        <SkillIcon skillID={[29845,29940,30074,14497]}>
            <p>
                Whenever you swap to Sword you want to use any of these skills that are off cooldown <br/>
                (Final Thrust only if the target is below 50% health)
            </p>
        </SkillIcon>
        <p>
            These are high priority skills, where the burst Flaming Flurry is not as high priority, which is
            why it is not cast before any of the high priority skills are on cooldown.
        </p>
        <SkillIcon skillID={[30682]}>
            <p>
                Once Flaming Flurry completes its cast, it is once again important to cast any of previously
                mentioned skills that might not have been off cooldown when you swapped to Sword, but has
                come off cooldown while casting Flaming Flurry.
            </p>
        </SkillIcon>
        <p>
            If weapon swap is ready, but Flames of War is
            around 2 seconds from being off cooldown you, delay the weapon swap until you have cast
            Flames of War. If Flames of War is on a longer cooldown, it is not worth delaying the weapon
            swap.
            <br/>
            A few comments for the Sword Block are that Final Thrust will always be available at some
            point while on Sword, depending on when you cast it last time while on Sword, same goes for
            Blaze Breaker. Flames of War will only be available every other time you swap to Sword after
            the opening berserk. Sword while out of berserk plays by the same rules as in berserk, if any of
            the mentioned skills comes off cooldown while waiting for berserk cooldown, you use them.
        </p>
        <br/>
        <p>
            The <b>Longbow Block</b> has 4 variations which all hold the same core structure, but with slight
            alterations depending on the circumstances and the point of the rotation.
        </p>
        <SkillIcon skillID={[0,14519,29923]}>
            <p>
                The standard Longbow Block opening
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30074,14504,14431]}>
            <p>
                Then casting whatever is off cooldown amongst these with auto-attacking at lowest priority.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[29923,14519,0]}>
            <p>
                And then, once Scorched Earth is off cooldown again, you close out with this sequence.
            </p>
        </SkillIcon>
        <p>
            All other Longbow variations will resemble this sequence.
        </p><br/>
        <p>
            First variation is the <b>early heal</b>, here Blood Reckoning is used in combination with the first cast
            of Scorched Earth
        </p>
        <SkillIcon skillID={[0,14519,29923,30189,29923]}>
                    <p>
                        with the rest of the block being the same as the standard form.
                    </p>
        </SkillIcon>
        <p>
            The second variation is <b>late heal</b>, where Blood Reckoning is used in combination with the
            second cast of Scorched Earth
        </p>
        <SkillIcon skillID={[29923,30189,29923,14519,0]}>
            <p>
                with the first part of the block being the same as the standard form.
            </p>
        </SkillIcon>
        <p>
            The third variation is <b>end berserk</b>, this is for the Longbow section just before berserk ends
            while in the loop part of the rotation. Here there is only time for 1 Scorched Earth, but the form
            is still the same as the standard sequence minus a Scorched Earth.
        </p>
        <SkillIcon skillID={[0,29923,14519]}>
            <p>
                Berserk runs out just as Scorched Earth is cast, but now instead of using Pin Down, Shattering
                Blow or auto-attacks until Scorched Earth is off cooldown, you are waiting for Fan of Fire
                coming of cooldown
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,0]}>
            <p>
                The block is then ended with this sequence.
            </p>
        </SkillIcon>
        <p>
            Understanding these blocks and their variations is key to understanding the condition rotation,
            as it can otherwise seem more complicated than it really is. With this out of the way it is time to
            describe the opener, the leadup to the loop, and the loop itself.
        </p>
        </>
    );
}

export default Basics;