import React from 'react';
import WikiIcon from '../../../components/WikiIcon';
import SabirIMG from '../../../assets/bannerimages/sabir_banners.png';

const Sabir = () => {
    return (
        <>
        <p>
            This encounter is also simplistic in nature, and same goes for the banner patterns. It is very
            straight forward in how it plays out, and there are not a lot of mechanics to deal with. Both
            builds have clear strengths and Weaknesses on this encounter, but the power build pulls ahead
            since most pug groups expect the warrior to deal with the Wisps which spawn during the last
            phase, which is easily done with a set of Maces and burst damage. Furthermore, the Maces are a
            great help for breaking the various breakbars on the boss faster. The larger breakbar is 15000
            strong, with the regenerating breakbar being 2500 strong, and the Wisps breakbar being 600.
            The paralyzation sigil on the Maces affects the special action key, making it deal a whopping 650
            breakbar damage while you are on Maces. The condition build instead have an easier time
            dealing damage to the boss as mechanic during the last phase forces you away from the boss
            which the power build does not handle very well.
        </p>
        <br/>
        <p>
            For the power build you want the Maces as mentioned as shorter CC phases means a shorter
            fight overall. Outrage is technically playable on this encounter, but you want to save the Head
            Butt for breakbars instead of using it to extend berserk with Outrage, and the power from Signet
            of Might help you kill the Wisps faster when you go to clear them. Make sure that you are on
            Maces and use the special action key to jump to Wisps. This will instantly break their bar and
            allow you to swap to Axes right after to kill them faster. Do use Crushing Blow on the Maces
            before swapping to Axes to apply 20 Vulnerability <WikiIcon name="Vulnerability"/> to the Wisp which ensures that you will melt
            it with the Axe attacks. You can run Defiant Stance here to ignore the shockwaves if you are
            struggling with staying alive, without losing much as it will help you maintain your static charge
            stacks.
        </p>
        <br/>
        <p>
            The condition build can reflect the Wisps attacks, but outside of that the only real trick to
            piloting the condition build on this encounter is camp Longbow when you have to go to the
            corners during the floor covering attack. Beyond that it is pretty much just cookie cutter
            condition gameplay and following the rotation as per usual.
        </p>
        <br/>
        <p>
            The banner pattern for this boss is very simple, put down banners where the group stacks for
            the first 2 phases. In case the first the phases draw out you should replace banners during the
            CC (90% / 70%). Once you phase the boss you need to pick up your banners but wait with
            replacing them until you reach the next platform where you will start the next phase. For the
            last phase the idea is the same, but here you will have to cast you banners in a clockwise
            patterns as you are forced to move around the boss, due to the tornado which spawns at 50%
            boss health. This is mostly to ensure that you can access the banners when you need to recast
            them. Aim to recast banners every time you get out of berserk or when you return from clearing
            Wisps, to ensure that the banners are steadily refreshed.
        </p>
        <div className="row justify-content-center">
            <img src={SabirIMG} alt="Sabir Banners" style={{width: "90%"}}/>
        </div>
        </>
    );
}

export default Sabir;