import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';

const Statues = () => {
    return (
        <>
            <p>
                All 3 parts of this encounter is power favoured. Condition still works fine, but power just works
                better. There is nothing specific to banner warrior for this encounter in terms of mechanics, and
                banners can technically be neglected without impacting the success of the encounter.
            </p>
            <br/>
            <p>
                For the Broken King you want to cast banners near the boss and replace them in between doing
                greens. It might be an idea to bring Rifle for the power build to deal damage while covering
                greens out of range of the boss.
            </p>
            <br/>
            <p>
                For the Eater of Souls, you want to cast banners where you want to burn through the boss to
                release the souls and picking them up when moving to the next one. As power you can bring
                Maces to help break the 2500 strength breakbar in case you are not sacrificing a person for the
                soul collecting.
            </p>
            <br/>
            <p>
                For the eyes want to precast the banners near the first eye such that when the burn phase is
                over and you port over to the next eye, you can pick up the banners and recast them at the next
                eye as well. Likewise, when you port back to finish off the first eye you pick up the banners and
                recast them if they are off cooldown.
            </p>
        </>
    );
}

export default Statues;