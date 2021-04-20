import React from 'react';
import WikiIcon from '../../../components/WikiIcon';
import DhuumIMG from '../../../assets/bannerimages/dhuum_banners.png';

const Dhuum = () => {
    return (
        <>
            <p>
                Both the power and condition build are playable here, though the condition build is better here
                because of the duration of the encounter. Given the lengthy phases you have time to ramp up
                conditions on the boss, and when you leave to do greens the conditions still stick and deal
                damage while you are away. The usual job for banner warrior on this boss is going green 1. You
                will have to deal with this mechanic starting from 9:30 on the timer, and every 1min30sec after
                that, until you reach 10% boss health. The diagram for banners also shows green order and
                times for the first 5 greens. When you return from the 2nd and 3rd green you should go kill the
                spiders near the reaper at star (the one closest to the entrance) to make sure the reaper is not
                killed. Banners can be rough to manage during this encounter given that not only is the boss
                moved throughout the encounter, but you are also leaving the group behind at times which can
                cause your banners to run out or get left behind.
            </p>
            <br/>
            <p>
                While power is suboptimal for most groups, the strength of the Greatsword burst along with the
                mobility it provides makes it more and more relevant the shorter the encounter is. While the
                condition can ramp up conditions throughout most of the fight, it struggles with ramping fast
                enough for the last 10%. The power build does not have this problem as the nature of the
                rotation is to spike in damage right away, and then the damage drops off from there. The power
                Greatsword build also wins some ground in that it can get you to and from the greens very
                quickly using Whirlwind Attack and Rush, which when used together can cover an immense
                amount of ground in a few seconds. Greatsword can also be used to carry out bombs and get
                back to the boss again quickly. Since the phases in between greens are fairly long, you can bring
                Outrage to extend berserk, though this can be complicated with the Greatsword rotation, so
                stick to Signet of Might if you bring the Greatsword.
            </p>
            <br/>
            <p>
                The condition build is not so creative in what it can do as the power build for this encounter.
                You can use Savage Leap to get to and from the greens, and for other movement around the
                arena. King of Fires can be used to cleanse the Torment <WikiIcon name="Torment"/> applied during the Soul Suck. Stay on
                Longbow when you carry out bombs or break chains so you can still damage the boss while
                dealing with the mechanic.
            </p>
            <br/>
            <p>
                For banners on this boss I am assuming a no-throne tanking pattern.
            </p>
            <div className="row justify-content-center">
                <img src={DhuumIMG} alt="Dhuum Banners" style={{width: "90%"}}/>
            </div>
            <p>
                Before doing your second green you want to put down banners such that they are in place
                before the boss spawns (banner position “a”) and is moved to the first position. When you get
                back to the group after your 2nd green, you recast the banners at position “a” and then picking
                them up and replacing them at position “b” when Dhuum dives into the ground.
                You need to pick up your banners before going to your third green, and you can replace them at
                position “g”, but I would wait until you return from the green and replace them at position “c” so
                they are easy to pick up and replace when you need to move to position 4. Once again you pick
                up the banners at location “c” when Dhuum dives into the ground and replace them at position
                “d”. You should pick up these banners right after the Soul Suck and quickly replace them at
                position “e” before going to green 4. If this is too tight for you, just wait until you have done
                green 4 before replacing banners at position “e”. The pattern of replacing banners after Dhuum
                dives and after Soul Sucks and/or greens continues until you phase the boss at 10%. For the last
                10% you just put down banners in the middle before running to a seal (if you are doing a seal).
            </p>
        </>
    );
}

export default Dhuum;