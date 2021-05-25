import React from 'react'
import GearCard from '../../../../GearCard'

const ValeGuardian = () => {
    return (
        <>
            <h5 className="gear-title ranger">Gameplay Advice</h5>
            <GearCard text={["Main phases"]}>
                <strong>CA Management:</strong>
                <ul>
                    <li>Greens appear every 15 seconds and your CA takes ~8s to come backk off cooldown</li> 
                    <li>That means you should exit CA at least 8s before the next green or at most 7s after the previous green to have it up for very green.</li>
                    <li>I recommend casting a CA3 just before greens explode to ensure people are full health before the explosion. 
                    That means exciting CA at most 5-6s after a green explodes to have it up for the next one.</li>
                    <li>The first green explodes 18s after the start of the fight so you can safely do a 25might 
                    opener but you should leave CA as soon as possible to have it up for the fist green.</li>
                    <li>Make sure to top people off with might before Vale Guardian phases for the split.</li>
                </ul>
                <strong>Seeker Management:</strong>
                <p className="my-1">One of your roles as Druid on Vale Guardian is to make sure that seekers (the red balls walking towards the stack) do not reach the group.</p>
                <ul>
                    <li>Use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"/> for the first wave of each phase.</li>
                    <li>Use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30238"/> out of CA to push away any next wave that gets close.</li>
                </ul>
                <strong>Extras:</strong>
                <ul>
                    <li>Make sure to reach your tank with your CA heals. (Otherwise <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31889"/> can also do wonders.)</li>
                    <li>Stick to Gazelle for the main phases.</li>
                    <li>You can use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31700"/> for extra Seeker control.</li>
                </ul>
            </GearCard>
            <GearCard text={["Split phases"]}>
                <strong>Pulling:</strong>
                <p className="my-1">It is often expected of the druid to aggro the Green Guardian with staff autos and bring it the the Blue Guardian. 
                You can use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"/> after having hit the Green Guardian 
                to get back to the group faster.</p>
                <strong>Healing:</strong>
                <p className="my-1">
                    If you pull green onto blue, players with a blue attunement will take a lot of damage from the green guardian's aura ticks. Make sure to 
                    focus on healing during the split phases to avoid player downing from the aura ticks. Try to make sure CA is off cooldown by the end 
                    of the split phase to give might to those who went to red at the start of the next boss phase.
                </p>
                <strong>Spirits</strong>
                <p className="my-1">
                    If you split 3 ways then leave your spirits on mid but otherwise (and that will be for most groups) bring your spirits to the Blue Guardian 
                    where most of the squad will be.
                </p>
                <strong>CC:</strong>
                <p>I like to swap to Rock Gazelle for the split since the CC from <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="43636"/> is very quick to cast 
                but you can also use Electric Wyvern.</p>
            </GearCard>
        </>
    )
}

export default ValeGuardian