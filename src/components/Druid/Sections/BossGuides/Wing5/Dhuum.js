import React from 'react'
import WikiIcon from '../../../../WikiIcon'

const Dhuum = () => {

    return (
        <>
            <h5 className="gear-title ranger">Cleansing the Torment</h5>
            <p>
                One of your most important job as a druid is to cleanse the <WikiIcon name="Torment"/> Torment applied during the Greater Death Mark 
                (commonly referred to as Soul Split). You can do this in the following ways:
            </p>
            <ul>
                <li>Using a <WikiIcon name="BrownBear" size={40}/> Brown Bear's <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12666"/> after 
                getting pushed back (5 players). Make sure to swap to your Bear after being knocked back to spawn your bear next to you as the condition 
                cleanse occurs around your pet and not around you.</li>
                <li>Using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"/> (5 players per pulse). 
                Use the heal on stack just before being knocked back so people get cleansed when trying to get their soul back.</li>
                <li>Using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="55046"/> (10 players). 
                Use the glyph on stack before being knoked back to prevent torment application on anyone within its AoE. This is advised only 
                if you have a second druid taking <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12569"/>.</li>
                <li>Using <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12596"/> (5 players).
                Use it when Dhuum dips back up before the knock-back.</li>
            </ul>
            <p>
                Don't hesitate to use several of these to be on the safe side or in case the other healer dies.
            </p>
            <br/>
            <h5 className="gear-title ranger">Pre Event Management</h5>
            <p>
                Depending on your other healer and if they are doing green 3 or not, you might need to support you squad during the pre event. 
                This is how to go about supporting your squad while kiting:
            </p>
            <p>
                First it's important to note that most of the pressure during the pre event will come from bombs exploding. Try to remember their 
                rough timing. In order to deal with the light aura damage, you can use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"/> when 
                passing by the stack, place <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> in 
                their path and use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21775"/> on stack 
                if you are taking it to give them <WikiIcon name="Regeneration"/> Regeneration.
            </p>
            <p>
                You can spawn and move your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"/> on 
                the position of the last two Enforcers if your squad is in need of <WikiIcon name="Protection"/> Protection to decrease the 
                pressure from the bombs.
            </p>
            <p>
                Lastly, remember how I told you to remember the rough timings of bomb explosions during the pre event? This is because these are the moments 
                that benefit the most from a drive-by healing so prepare you CA skills 
                and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"/> for then.
            </p>
            <br/>
            <h5 className="gear-title ranger">Catching the Medium Orb</h5>
            <p>
                On your 2nd green (6:00 on the timer), there will be a medium orb. Look around after gathering your 4th orb including big to see 
                if you can spot a medium orb. If you can, take it as it will prevent the Messenger from spawning in that phase. If you can't, 
                that's fine just take a small orb to avoid dying from the timer.
            </p>
            <p>
                If you are on stack and doing green 3, this will also be the case for you. Try to catch the medium orb on your 2nd green (7:00 
                on the timer) to prevent a Messenger from spawning during the following Greater Deathmark (Soul Split).
            </p>
            <br/>
            <h5 className="gear-title ranger">Extra Notes</h5>
            <p>
                As a kiter you are also responsible for the Reaper on Star (West Reaper - by the door). Call if spiders need to be cleaved. During 
                phase 1, after the Lesser Deathmark, you can walk slightly towards the Reaper and 
                cast <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"/> on any spider attacking Star 
                Reaper if any to heal the Reaper. 
                Placing a <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31496"/> on a Reaper 
                is also an efficient way to heal them. Send your pet to the spiders to clear them.
            </p>
            <p>
                Move your spirits after each Deathmark (lesser and greater) and place them on the next tanking spot.
            </p>
        </>
    )
}

export default Dhuum;