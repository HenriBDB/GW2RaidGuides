import React from 'react'
import WikiIcon from '../../../WikiIcon'
import GearCard from '../../../GearCard'

const UtilityPets = () => {
    return (
        <>
            <h5>Condi Cleanse: </h5>
            <GearCard text={[<WikiIcon name="BrownBear" size={40}/>, "BrownBear"]}>
                <p>
                    5-player condi cleanse (2 conditions) with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12666"></span>. 
                    <br/>
                    Has a 600 radius so quite wide range. 
                    <br/>
                    Useful on <WikiIcon name="Dhuum"/> Dhuum to clean torment after greater soulsplit (make sure o swap to bear after the knockback so your 
                    pet spawns next to you as the area of effect of his cleanse is around your pet and not around you).
                </p>
            </GearCard>
            <h5>Stealth:</h5>
            <GearCard text={[<WikiIcon name="Smokescale" size={40}/>, "Smokescale"]}>
                <p>
                    Creates a smoke combo field with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31568"></span>. 
                    <br/>
                    The field can then be blasted with combo finishers for stealth like <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31535"></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span>.
                    <br/>
                    This pet is often used before fights in more coordinated groups to stealth in without triggring the boss like for mid <WikiIcon name="Vg"/> Vale 
                    Guardian, <WikiIcon name="Gorseval"/> Gorseval or <WikiIcon name="Samarog"/> Samarog.
                </p>
            </GearCard>
            <h5>Fury:</h5>
            These pets are great help when you don't have access to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></span> and&nbsp;
            <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="965"></span> just isn't enough for your sub. It also allows 
            you to stay longer on your dps pet if you have one and thus increase your own dps.
            <GearCard text={[<WikiIcon name="RedMoa" size={40}/>, "Red Moa"]}>
                <p>
                    Grants <WikiIcon name="Fury"/> Fury (17s) with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12712"></span>. 
                    <br/>
                    The base duration is 15s but the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1059"></span> increases 
                    it by ~2s.
                    <br/>
                    This is my favourite <WikiIcon name="Fury"/> Fury pet as the fury lasts the longest out of all pets so I can spend more time on my other pet.
                </p>
            </GearCard>
            <GearCard text={[<WikiIcon name="Tiger" size={40}/>, "Tiger"]}>
                <p>
                    Grants <WikiIcon name="Fury"/> Fury (11.25s) with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31451"></span>. 
                    <br/>
                    The base duration is 10s but the trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1059"></span> increases 
                    it by ~1.25s.
                    <br/>
                    The advantages of this <WikiIcon name="Fury"/> Fury pet are that it's beast ability has a very short cooldown and it does more damage than the Red Moa.
                </p>
            </GearCard>
        </>
    )
}

export default UtilityPets