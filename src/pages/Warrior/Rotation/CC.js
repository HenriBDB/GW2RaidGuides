import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';

const CC = () => {
    return (
        <>
        <p>Starting out with Mace/Mace:</p>
        <SkillIcon skillID={[29679,14503,14415,30343,29679,14518,0]}>
            <p>
                What will be apparent for all the rotations is that we fit in 2 bursts and Head Butt, along with
                whatever other CC skills the weapons have, before swapping back to Axes. You do not
                necessarily have to be incredibly fast in casting these skills, but if cast at a reasonable speed it
                will line up with the weapon swap cooldown. Assuming sigil of paralyzation, this sequence deals
                1080 breakbar damage, not accounting for soft CC from conditions. The Crushing Blow in the
                end is just to pass time with something productive until weapon swap comes off cooldown. If
                you are slow with the prior steps, the Crushing Blow can be omitted if the 2nd Skull Grinder has
                been cast and weapon swap is off cooldown.
            </p>
        </SkillIcon>
        <p>Next is Mace/Shield:</p>
        <SkillIcon skillID={[29679,14503,14361,30343,29679,14376,0]}>
            <p>
                This is very similar to Mace/Mace, but instead of casting Tremor, we use Shield Bash.
                This sequence deals 1040 breakbar damage assuming sigil of paralyzation, and 1170 if Shield
                Bash is used at as a leap finisher in a lightning field. So worst case it is only slightly worse than
                Mace/Mace, but with access to lightning field it has the potential to be better. The Mace Smash
                in the end is once again only to spend time doing something until weapon swap comes off
                cooldown.
            </p>
        </SkillIcon>
        <p>Finally, we have Hammer:</p>
        <SkillIcon skillID={[30879,14386,14511,30343,30879,14359,0]}>
            <p>
                Hammer has the same form as the Mace sets, but it is slightly slower to execute. You will find
                that weapon swap comes off cooldown as you are about to cast Staggering Blow, but this is also
                why Staggering Blow is used last, as it is one of the skills whose animation does not line up with
                the damage. So once the damage goes through, you swap weapons instead of waiting for the
                animation to finish. Fierce Blow is cast before Backbreaker to ensure that Weakness <WikiIcon name="Weakness"/> is on the
                target, so Backbreaker hits for 400 breakbar damage instead of 300. Overall, this sequence deals
                1200 breakbar damage.
            </p>
        </SkillIcon>
        </>
    );
}

export default CC;