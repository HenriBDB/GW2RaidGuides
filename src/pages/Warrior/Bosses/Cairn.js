import React from 'react';
import WikiIcon from '../../../components/WikiIcon';
import CairnIMG from '../../../assets/bannerimages/cairn_banners.png';

const Cairn = () => {
    return (
        <>
            <p>
                Cairn is an incredibly simple boss and is easy to pilot both with power and condition damage.
                There is not much to pay attention to throughout the fight except taking the 2nd agony which is
                applied after the 3rd set of green circles (initial set of green circles from the start of the
                encounter included). If stability is provided for the greens it is not hard to walk away and grab
                the agony and get in position outside of the group.
            </p>
            <br/>
            <p>
                The power build is fairly good here, as the boss is almost just a DPS golem. The only slightly
                challenging aspect is maximizing flanking uptime as the boss will be attacking the group for
                most of the encounter, so you will have to reposition to guarantee the flanking bonus. Outrage is
                an excellent choice here since you can ignore greens and use Outrage to break the float, but
                Signet of Might is as always, the safe and consistent option.
            </p>
            <br/>
            <p>
                Condi is the better alternative for most groups as Cairn will jump around unless the fight is fast
                enough, which is problematic for the power build, but the condition build still deals damage
                during the animation due to conditions, and the ability to still hit the boss with Longbow. Be
                very careful with Shattering Blow on this fight as it can reflect the shards from Cairn attacks
                which can melt the entire group if reflected. Shattering Blow can however also be a great asset
                as the Stability <WikiIcon name="Stability"/> it gives can be used to negate the float from not going to greens.
            </p>
            <br/>
            <p>
                Banners are very simple for this encounter. Place the banners in the middle of the arena and
                pick them up and replace them whenever you leave berserk. You will need to cast them slightly
                off the middle before you get the agony, so you can still pick up and replace the banners without
                hurting the group with agony. So, you want to place the banners slightly towards the spot you
                will stay on with the agony.
            </p>
            <div className="row justify-content-center">
                <img src={CairnIMG} alt="Cairn Banners" style={{width: "90%"}}/>
            </div>
        </>
    );
}

export default Cairn;