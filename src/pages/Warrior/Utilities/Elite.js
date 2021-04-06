import React from 'react';
import SkillCard from '../../../components/SkillCard';
import WikiIcon from '../../../components/WikiIcon';

const Elite = () => {
    return (
        <>
        <p>
            Elite skills are classified by being especially strong or effective, often accompanied with
            corresponding high cooldown on these abilities. This means many of them cannot be used more
            than once or twice throughout an encounter depending on the length of the encounter, which
            severely decreases their value depending on the effect.
        </p>
        <SkillCard skillID={14355}>
            <p>
                The passive adrenaline is not particularly good for power given that 3 hits on Axe fills the
                adrenaline bar when in berserk, and the cooldown for berserk is more than long enough to
                generate adrenaline even if only using auto-attacks. The boons provided by the active are
                usually provided from other sources in a Raid composition, so overall this skill just does not
                have a lot of value for power. Likewise, the condition build rarely struggles with adrenaline even
                considering certain worst-case scenarios in terms of luck, so it does not provide much for this
                build either.
            </p>
        </SkillCard>
        <SkillCard skillID={14419}>
            <p>
                This is a fantastic alternative on fights where Head Butt is not needed for kickstarting
                adrenaline in the start of a fight like Dhuum, or on fights where you can pre-stack adrenaline
                like Mursatt Overseer. The revival effect can come in clutch, and the boons it provides are also
                5-man, so it can help kickstart and maintain Might <WikiIcon name="Might"/> and Fury <WikiIcon name="Fury"/> for the duration it is up when
                running greedier team compositions.
            </p>
        </SkillCard>
        <SkillCard skillID={14483}>
            <p>
                The cooldown is just too long for what you get in return. The skills are great both for damage
                and CC, but no CC phases are long enough to make this worthwhile outside Sabir CC in bad
                groups, and on that fight you want Head Butt for the kickstart to Adrenaline, and Head Butt
                itself also does a fair bit of CC damage. This skill is just outclassed.
            </p>
        </SkillCard>
        <SkillCard skillID={30343}>
            <p>
                Insanely good elite skill. It has a short cooldown, great CC with 300 breakbar damage, 390 with
                sigil of paralyzation, and the self-stun synergizes well with outrage as previously mentioned.
                The Stability <WikiIcon name="Stability"/> strip is unfortunate but will not ruin your day outside of Slothasor and Cairn.
            </p>
        </SkillCard>
        <SkillCard skillID={45333}>
            <p>
                This skill has probably seen as many changes as Chrono has at this point.
                Jokes aside, what it does, it does well. The boon strip is highly relevant in high end groups for Qadim
                who skips all Pyres, though for worse groups you are better off playing Berserker and killing any missing
                pyre over playing Spellbreaker with this elite.
            </p>
        </SkillCard>
        </>
    );
}

export default Elite;