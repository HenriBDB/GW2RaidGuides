import React from 'react';
import SabIMG from '../../../assets/bannerimages/sab_banners.png'

const Sabetha = () => {
    return (
        <>
            <p>
                On Sabetha most groups want the warrior to either do cannons and/or cleave adds, though
                doing both at once can prove challenging if things start going wrong. One of the mini bosses,
                Knuckles, periodically gets a 1000 breakbar, but given this low value it is not worth bringing
                additional CC for dealing with it as Head Butt in combination with some help from the supports
                should break the bar immediately.
            </p>
            <br/>
            <p>
                For the power build it is important to pay careful attention to adrenaline as there are multiple
                adds to cleave which means you will get additional hits from your skills which will in turn
                generate more adrenaline. Here it is important to not skip a beat and use Decapitate as soon as
                possible, to not waste any adrenaline. This means the rotation can deviate from the standard, so
                this can be a test to your improvisation skills. You can play Outrage here since the phases are
                rather lengthy, though if you have to do cannons it will be better not to, to have the extra power
                available to kill the cannons faster.
            </p>
            <br/>
            <p>
                The condition build is fairly straight forward for this encounter. Pay attention to cleave with
                Flaming Flurry and Scorched Earth, to get additional stacks of Furious Surge and to help control
                the adds on the arena as well as the flame cannons which spawn during the mini-boss Karde.
                You can use Shattering Blow to block bombs which are not carried out of the group, if timed
                right, but this should only be done as a clutch. Remember that you can use Final Thrust on the
                mini bosses as they drop below 50% as well as Sabetha, this also applies to the cannons if you
                end up having to deal with those with the condition build.
            </p>
            <br/>
            <p>
                Banners on this boss are ultra-simple. Put down banners near the middle and pick them up and
                replace them when the boss phases. Unless the mini boss and boss phases are too long this
                should guarantee good uptimes. The phases are too long for this if it takes longer than 60
                seconds to kill the mini-boss and phase Sabetha the next time. With longer phases you want to
                replace banners after the mini boss dies as well. Another fail-safe approach to banners on this
                fight is replacing banners every time berserk ends.
            </p>
            <div className="row justify-content-center">
                <img src={SabIMG} alt="Sabetha Banners"/>
            </div>
        </>
    );
}

export default Sabetha;