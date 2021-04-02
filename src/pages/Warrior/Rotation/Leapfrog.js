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
        //TODO 
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        <SkillIcon skillID={[0]}>
            <p>
                Temp
            </p>
        </SkillIcon>
        </>
    );
}

export default Leapfrog;