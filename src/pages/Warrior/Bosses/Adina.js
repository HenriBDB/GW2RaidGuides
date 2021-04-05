import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import AdinaPhaseIMG from '../../../assets/bannerimages/adina_banners_phases.png';
import AdinaSplit1IMG from '../../../assets/bannerimages/adina_banners_split1.png';
import AdinaSplit2IMG from '../../../assets/bannerimages/adina_banners_split2.png';
import AdinaSplit3IMG from '../../../assets/bannerimages/adina_banners_split3.png';

const Adina = () => {
    return (
        <>
            <p>
                This boss is really easy to do well, the mechanics are easy to deal with, and banners are
                exceptionally easy to manage for the burn phases, but the splits can be tricky depending on how
                you approach the later splits. Both builds are technically playable here, but the burstier nature
                of the power build suits the encounter better than the condition build does. You want the hands
                to die quickly during the splits which the condition build is not exceptionally good at, but the
                power build on the other hand is very good at.
            </p>
            <br/>
            <p>
                For the power build you can start the fight out by walking slightly towards the boss and then
                doing Head Butt, but if you hug the pillar tightly and slightly to the side of the pillar you should
                be in range for Head Butt, but check the indicator on the skill icon to make sure. It is very
                important that you do not get the pillar mechanic as you have no ranged options whatsoever, so
                your DPS is basically 0 while carrying out the pillar, so stay as close to the center of the boss
                hitbox as you can. There is not much point in bring Outrage here as you roughly get natural
                breaks in the fight as berserk runs out, so extending the berserk duration nets you nothing.
            </p>
            <br/>
            <p>
                The condition build does not struggle with being unable to deal damage while carrying out
                pillars, and if the burn phases are lengthier and you have to hide behind the pillars your
                conditions will still stick and deal damage, but you will still struggle with helping out during the
                splits. You can hit multiple hands with your burst skills by positioning yourself near one of the
                hands and shooting at the other, but it will still be hard to compete with the power damage.
                You can use Shattering Blow to reflect rocks from hands during the splits.
            </p>
            <img src={AdinaPhaseIMG} alt="Adina Phases Banners" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
            <p style={{textAlign: "center"}}>Phases (Phase 1 specifically), a & b representing north/south tanking positions.</p>
            <p>
                The banner patterns on this boss is fairly easy. Before you start the fight make sure to precast
                banners in the middle, this is to save you the time of doing so when the fight has already begun
                so you can start doing damage sooner. Likewise, you will want to place banners in the middle
                for the other burn phases, no matter the floor pattern. The splits are also similar in how you
                want to approach them. You want to place down the banners such that it covers both hands on
                the side you are currently on. While you run around the boss in the post-phase you should put
                down the banners such that when you pick them, they will be off cooldown and can instantly be
                put down again. If you are doing all the hands as a group for split 2 and 3 you should aim to
                place the banners closer to the boss when putting them down for the second set of hands. This is
                to ensure that you still get the banner buff for the hands with some careful positioning, but also
                for the boss, as the banners will not be fully recharged once you finish the 2nd set of hands and
                you were to pick up the banners. With closer to the boss I mean 3 hexagons away instead of 4
                (one closer than what is displayed on Split 3 illustration)
            </p>
            <img src={AdinaSplit1IMG} alt="Adina Split 1 Banners" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
            <p style={{textAlign: "center"}}>Split 1</p>
            <img src={AdinaSplit2IMG} alt="Adina Split 2 Banners" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
            <p style={{textAlign: "center"}}>Split 2</p>
            <img src={AdinaSplit3IMG} alt="Adina Split 3 Banners" style={{display: "block", marginLeft: "auto", marginRight: "auto"}}/>
            <p style={{textAlign: "center"}}>Split 3</p>
        </>
    );
}

export default Adina;