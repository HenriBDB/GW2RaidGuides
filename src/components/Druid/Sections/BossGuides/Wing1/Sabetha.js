import React from 'react'
import WikiIcon from '../../../../WikiIcon'

const Sabetha = () => {

    return (
        <>
            <h5 className="gear-title ranger">A Mighty Raid Squad is a Happy Raid Squad</h5>
            <p>
                Even though you will spend considerable time away from stack since you will likely be kiting flaks, don't forget to give might. 
                Here's a useful tip for you: <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31503"/> will 
                generate might around your target if you have one! That means you can give might to your squad while away by making sure you have Sabetha 
                targeted. I use this for my opener (here it is written as an example):
            </p>
            <ol>
                <li>Make sure to enter the arena first.</li>
                <li>As soon as boon strip happens: <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> for <WikiIcon name="Fury"/> Fury.</li>
                <li>On your way to the boss call your offensive spirits</li>
                <li>Get the timed bomb (closest to the boss) and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"/> away with it.</li>
                <li>Stay away from stack to kite the next flak and use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31503"/> with
                Sabetha targeted to give might to stack.</li>
                <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31796"/> until Sabetha throws the next 
                flak on you.</li>
                <li>Return to stack and use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31894"/> to finish giving might.</li>
                <li><span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31406"/>, exit <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"/>, call remaining spirits and done!</li>
            </ol>
            <p>
                Sabetha's Flamewall mechanic is a great time to stay on stack and give <WikiIcon name="Might"/> Might, activate spirits and more. It 
                occurs every 45 seconds so with 100% boon duration you can get by entering <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"/> once during flamewall 
                and once between 2 flamewalls.
            </p>
            <br/>
            <h5 className="gear-title ranger">Get those bombs</h5>
            <p>
                This is noted on the SC guide but I really want to emphasize on it: bait the sapper bombs! You can do this by being the western-most 
                player when the sapper spawns at xx:30 and xx:00 (beware sappers have limited range so don't stand too far West when the eastern sapper 
                spawns). Your dps players will often be focused on their rotation or other so you baiting the bombs can be of great help. FYI: they 
                will chose a target before providing the sapper bomb (usually 3-5 seconds after spawning), you only need to be the western-most player 
                when they chose their target.
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                Many players will adopt an agressive kiting strategy and kite flaks close to the group, I find that often provide less benefits than 
                it produces inconveniances. I prefer druids who kite flaks just inside the border between the metal and wooden part of the platform.
            </p>
            <p>
                If you see adds lingering around, pull them to the stack using your <WikiIcon name="Iboga" size={40}/> Iboga's 
                F2 (<span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"/>).
            </p>
        </>
    )
}

export default Sabetha;