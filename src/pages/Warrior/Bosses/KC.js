import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import KCIMG from '../../../assets/bannerimages/kc_banners.png';

const KC = () => {
    return (
        <>
            <p>
                Banners are not super important here as by the time you get to the boss at the end of the
                encounter it is almost dead already, but once you arrive you just place the banners on the group
                and leave them there until the boss is dead.
            </p>
            <br/>
            <p>
                If CC is not a problem, and you want to do quick 1 orb pushing you can bring Rifle. Combined
                with a Temporal Curtain pull from chrono you can pull and push the orb through a rift and out
                in about a second if everything is timed right. Simply have the chrono pull the orb towards one
                of the rifts, and place yourself behind the center of the curtain such that you are aligned with the
                rift so when the orb is pulled you can use Rifle Butt to push it through the rift and out, and if it
                does not go all the way out due to a short pull you can push the last bit with any other Rifle skill.
                After the burn phase and orb collection is done you can still reach Keep Construct will all your
                Axe skills, even if the indicator tells you otherwise. It will take some time getting used to the
                exact positioning where you do not get hit by the AoE and still hit the boss. Remember to make
                use of the extra adrenaline you get from cleaving the statues, by using Decapitate as soon as it is
                available. You can play Outrage on this boss, though Signet of Might will be better for the burn
                phases.
            </p>
            <br/>
            <p>
                There is not much to say for the condition build on this boss, cleave the statues with Flaming
                Flurry and Scorched Earth to gain more Furious Surge stacks and use Head Butt for CC, beyond
                that there are no worthwhile fancy tricks.
            </p>
            <br/>
            <p>
                Banners on this fight can be a bit tricky for the first phase, but after that it is fairly simple. The
                reason why the first phase is tricky is because you do not know where the first statue will
                spawn and where you will have to move, so you just have to place it close to the group for the
                beginning, and pick it up and replace it in case you have to move. Make sure you pre-cast the
                banners before the fight starts so you do not have to waste time doing it in the beginning of the
                fight.
            </p>
            <div className="row justify-content-center">
                <img src={KCIMG} alt="KC Banners"/>
            </div>
            <p>
                Once the breakbar has been broken you pick up your banners and recast them near the middle
                from the green you are positioned in. This banner should be left here until the burn phase is
                over. Then you pick up the banners and replace them at the side where you will stack while
                Keep Construct does his Pizza slices after the orb collection is complete. Once he gets ready to
                jump you pick up the banners and replace them at the next statue spawn where the group will
                stack. Once again you leave them there until the breakbar has been broken, and you repeat the
                whole process from casting the banners near the middle from your green circle.
            </p>
        </>
    );
}

export default KC;