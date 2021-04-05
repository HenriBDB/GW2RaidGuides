import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import DeimosIMG from '../../../assets/bannerimages/deimos_banners.png';

const Deimos = () => {
    return (
        <>
            <p>
                This boss is power favoured because of the unnatural signet debuff applied to Deimos. While
                both builds can make use of the signet, power can do so more efficiently, which is why it is
                preferred. The Saul at 75% and 25% both have a breakbar of 300 which Head Butt on its own is
                enough to deal with. Banners can be quite tricky here due to the constant repositioning and
                displacements due to the phase teleports, but with the right approach it becomes slightly more
                manageable.
            </p>
            <br/>
            <p>
                For power you want to use the burst Axe rotation rather than the standard Axe to make the
                most out of the unnatural signet. The huge focus on bursts also means that phases easily can get
                too short to make Outrage worthwhile, so stick to Signet of Might for this encounter. When
                prides and greeds start spawning you should remember to make full use of the additional
                adrenaline gained from cleaving these.
            </p>
            <br/>
            <p>
                The condition build plays as it normally would, cleaving the prides and greeds when they begin
                to spawn for more Furious Surge stacks, and otherwise just pulling a standard rotation. You can
                use Shattering Blow to block the mind crush if timed right, but the exact timing can be tricky due
                to the short duration of the block.
            </p>
            <br/>
            <p>
                The banners can be quite tricky for this encounter. Depending on the speed of the pre-phase you
                want to start out the encounter differently. If all the statues are killed at the same time you want
                to place the banners before going down with the first green. If this is not the case, you want to
                wait until you get back up from the statues the first time. Make sure you stay up after the first
                green so you can pick them up and recast them in case additional rounds down is needed.
                The important aspect is that the banners are already in place when the fight starts.
                The first 25% of the fight is fairly simple as the pre-placed banners should last through all of it,
                so you only need to pick them up before going down to face Saul. When facing Saul it is only
                worthwhile to put down banners if the phase is longer than 30 seconds such that you have time
                for picking up the banners again, and refreshing the cooldown completely in doing so, otherwise
                wait until you return.
            </p>
            <div className="row justify-content-center">
                <img src={DeimosIMG} alt="Deimos Banners"/>
            </div>
            <p>
                Upon returning place your banners slightly towards the side where Deimos will be tanked from
                60% and towards the direction you rotate around the arena.
                In the example the stack will tank west of the middle and rotate clockwise around the arena, and
                the banners are placed such that it covers most of the movement. This also minimizes the risk of
                the banners getting stuck in the black pools. Make sure you pick up the banners before going
                down with the group at 50%.
                Once again, the same rules apply to placing banners while down, that is should only be done if
                the phase is long enough, and otherwise waiting with the banners until you get back up.
                Most groups choose to sacrifice the person who gets the green at 25% which means that 50% to
                25% is not exactly the same as the previous phase. Here you will have to pay attention to
                picking up your banners and replacing them as you run out of berserk, and the boss moves
                around the arena. This continues until the last 10% of the fight. For the last 10% you want to
                place the banners near Deimos and let them stay there until Deimos dies. If the phase is too long
                you might have to replace the banners.
            </p>
        </>
    );
}

export default Deimos;