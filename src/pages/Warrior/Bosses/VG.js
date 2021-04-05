import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import VGIMG from '../../../assets/bannerimages/vg_banners.png';

const VG = () => {
    return (
        <>
            <p>
                What you bring as warrior for Vale Guardian outside of damage both directly and indirectly
                through banners, is CC, or filling a condition damage slot to deal with the red guardian. Power is
                usually favoured for this boss as the lower boss toughness amplifies all power damage. While
                the condition build works for doing damage and dealing with the red guardian, other condition
                classes does that job better and faster with better ramp up times.
            </p>
            <br/>
            <p>
                The breakbars on Vale Guardian is 2000 during the phases, and 1000 for the guardians during
                the splits. With Head Butt alone you are already providing 300 breakbar damage, and with a
                single off-hand Mace with paralyzation sigil you’re providing 690 breakbar damage which
                should be plenty given that the rest of the group also contributes. So, no more than a single off-
                hand Mace should be necessary for this boss while playing power.
            </p>
            <br/>
            <p>
                The phases on Vale Guardian are too short for effective use of Outrage so stick to Signet of Might
                for this one. The phases should roughly line up with 1 berserk of 24 seconds, so extending it
                further than that does nothing but delay the next berserk more than necessary.
                Tactics traitline is favoured when playing with a capable or organized group given how power
                favoured Vale Guardian is, but it is not worthwhile to play for most PUGs (see Tactics section).
                It is important to remember that with the power build you can move while casting all your skills
                except Head Butt. This means that there is no DPS loss from moving slightly to the side to avoid
                a teleport or get out of a mechanic, as long as you do not have to dodge. The key to this
                movement is to make sure that even when moving, you are always flanking to boss to get the
                10% damage bonus from Thief runes, this also applies for the guardians during the split.
            </p>
            <br/>
            <p>
                If you do end up playing the condition build, there are other things you should pay attention to.
                First of which is lining yourself up with any seekers whenever possible, so you can get multiple
                hits on Scorched Earth and Flaming Flurry, and thus potentially get more stacks of Furious
                Surge and faster. This can be hard to achieve when tanking near the edge of the arena but is
                fairly easy to do mid tanking and while at the red guardian.
            </p>
            <br/>
            <p>
                For placing banners I am assuming the most common pug strategy which is wall tanking.
                This is because for mid tanking it is fairly trivial placing banners, as you only put down banners
                for the phases in the middle, assuming that the splits will be too fast for banners to fully
                recharge before the next phase.
                For the wall tanking strategy the group starts at position 1 on the following graph.
            </p>
            <div className="row justify-content-center">
                <img src={VGIMG} alt="VG Banners"/>
            </div>
            <p>
                Position 1 is roughly where the group will be for all of phase 1, and likewise the banners should
                be just slightly behind the stacks such that the banners are easy to pick up when moving to
                position 2. Position 2 will be at the southern Pylon instead if you are playing the condition build.
                Here you again want the banners close to where you are stacking so they are easy to pick up
                before moving to the next position. Position 3 and 4 are the same as 1 and 2.
                For position 5 we begin the last phase, and the banners should be placed somewhere in between
                current position and next position such that the banners can be replaced while moving. If DPS is
                good enough position 6 will be right next to position 5 across the dotted line instead, but this
                does not change the 5th banner position as that will still cover the alternative 6th position.
            </p>
            <br/>
            <p>
                The short version of how to do banners on Vale Guardian is, place the banners close to the
                group and slightly towards the next spot you will move towards, such that you can easily pick
                them up and replace them at the new position.
            </p>
        </>
    );
}

export default VG;