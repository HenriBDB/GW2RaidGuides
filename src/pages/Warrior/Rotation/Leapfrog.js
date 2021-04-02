import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';

const Leapfrog = () => {
    return (
        <>
        <SkillIcon skillID={[29940,0,14519,14504,30343,30435,29923,30189,29923,30074,14519,0,29845,14366,30682,14364,14365,14363,0]}>
            <p>
                Here is the first instance of Savage Leap, using Blaze Breaker first to ensure that the cooldown
                lines up with Flames of War and Shattering Blow. The fire aura gained from Savage Leap is
                detonated with Flaming Flurry.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,14431,14431,14431,14431,29923,14519,0,29845,29940,14366,30074,30682,0]}>
            <p>
                This Sword section is interesting because Savage Leap is not cast immediately but is instead
                delayed to not overlap the fire aura from the finisher with the fire aura gained on crit from King
                of Fires. This fire aura is detonated by any of the skills used before Savage Leap. Once again, the
                fire aura from the Savage Leap is detonated by Flaming Flurry.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,30189,29923,14504,14431,14431,14431,29923,14519,0,14366,29845,30682]}>
            <p>
                This last Sword sequence is incredibly tight, and you will have to cast Flaming Flurry the second
                the aftercast of Blaze Breaker starts to not interrupt Blaze Breaker and still get the Flaming
                Flurry cast. We need to use Blaze Breaker to detonate the fire aura from Savage Leap, to avoid
                risking the fire aura from Savage Leap overlapping with King of Fires fire aura.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30074,14364,14365,14363,14364,14365,14363,29940,14366,14364,14365,14363,14364,14365,14363,29845,0]}>
            <p>
                Savage Leap is cast after Flames of War since the fire aura will last just long enough to be
                detonated by Blaze Breaker, and the 2 skills chain together nicely.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,30435,29923,30189,29923,14504,14431,14431,14431,29923,14519,0,30074,30682,14364,14365,14363,29845,14364,14365,14363,29940,14366,0]}>
            <p>
                Here one might ask why the Sword is not opened with Savage Leap, and that is simply because
                King of Fires gives fire aura during the cast of Flaming Flurry, and Flaming Flurry does not
                detonate fire auras until it finish casting, so the fire aura from a Savage Leap would be wasted in
                that case. It is instead only used before swapping off Sword and the fire aura being detonated by
                Scorched Earth.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,14431,14431,14431,14431,29923,30189,29923,14504,14519,0]}>
            <p>
                Only interesting thing about this Longbow block is the Pin Down before the last Fan of Fire. This
                delays the weapon swap slightly in exchange for a DPS increase in the form of getting the
                Burning finisher. This makes the last Scorched Earth in the end berserk Longbow block even
                tighter than it already is.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[30074,14366,29845,30682,14497,0,29923,14519]}>
            <p>
                Opening with Shattering Blow into Leap and instantly detonating the aura with Blaze Breaker, since another
                fire aura will be gained from King of Fires during the Flaming Flurry cast. Final Thrust is cast
                now as the golem should be just below 50% health at this point.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14431,14431,14431,14431,14431,14519,0,29940,14366,29845,30074,14497,14364,14365,14363,14364,14365,0]}>
            <p>
                The order of skills here is interesting. Flames of War provides a fire field, then we use Savage
                Leap to gain fire aura from the fire field and detonate it with Blaze Breaker, and then cast Shattering Blow followed by Final
                Thrust. The ordering of the skills matter, as otherwise the fire aura will not be detonated in
                time.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,30435,29923,30189,29923,14504,14431,14431,14431,29923,14519,0,14366,29845,14497,14364,14365,14363,30074,30682,29940,14366,0]}>
            <p>
                This is what we want a Sword block to look like, opening Savage Leap, detonating the fire aura
                instantly, and then before we swap away from Sword we use Savage Leap again for another fire
                aura. It is important that Shattering Blow is cast as soon as possible, otherwise berserk will run out
                before the 2nd Shattering Blow can be cast.
            </p>
        </SkillIcon>
        <SkillIcon skillID={[14519,29923,14431,14431,14431,14431,29923,30189,29923,14504,14519,0,14366,29845,30074,14497,30682,0,29923,14519]}>
            <p>
                It is very important that the shattering blow is used as soon as possible once again, making sure
                that you get that last 3 second berserk extension, which allows the last couple of bursts to fit in.
                From here it is basically repeating what has already been laid out until the boss/golem dies. Do
                note that skills will not always line up the same for every loop, but it is mostly the same.
            </p>
        </SkillIcon>
        </>
    );
}

export default Leapfrog;