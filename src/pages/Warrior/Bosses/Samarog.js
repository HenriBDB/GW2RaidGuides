import React from 'react';
import SkillIcon from '../../../components/SkillIcon';
import WikiIcon from '../../../components/WikiIcon';
import SamaIMG from '../../../assets/bannerimages/sama_banners.png';

const Samarog = () => {
    return (
        <>
            <p>
                This boss is very heavily power favored because of the large and frequent breakbars. It is mainly
                because of the CC load that power is heavily favored here as you can still stack conditions while
                Samarog has his breakbar up even if they deal no damage. The breakbars are 4500 each. The
                banner pattern here is a lot simpler than one would first think.
            </p>
            <br/>
            <p>
                You want to bring Maces for CC, since it allows you to break almost 25% of every bar on your
                own, which is fantastic. You can take Wild Blow instead of Signet of Might to provide a bit of
                extra CC and help knock Rigom into Samarog during the splits. Outrage do not have any value
                here as you want to save Head Butt for CC and not use it to extend berserk. You can play tactics
                here if you are with an organized group, otherwise play Strength as always. You can do the
                Severance opener here, starting on Maces for the opening Head Butt and then swapping
                weapons during the self-stun. If timed right, you have 3 seconds of the Severance buff for the
                first 3 seconds of your Axe rotation.
            </p>
            <br/>
            <p>
                The condition build is fairly lacklustre here, but if you have to play it you should pay attention to
                cleaving the spears for Furious Surge stacks, and use your Head Butt to provide the slight bit of
                CC you can. Use Pin Down to help lock Rigom up once he has been pushed on top of Samarog.
            </p>
            <div className="row justify-content-center">
                <img src={SamaIMG} alt="Samarog Banners"/>
            </div>
            <p>
                The Bannering here is split into 2 phases, the main phases and the split phases. If the main
                phase is fast enough you only need to put down the banners where the group is stacking and
                pick them up for the split phase. If the main phase is more than a minute long you should pick
                up the banners after the 2nd CC during the main phase and recast them on the group. For the
                split phases you put down the banners near where you will tank and kill Guldhem, but place the
                banners such that they are easy to pick up and replace while moving to the tanking spot for the
                next main phase.
            </p>
        </>
    );
}

export default Samarog;