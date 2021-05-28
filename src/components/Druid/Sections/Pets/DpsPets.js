import React from 'react'
import WikiIcon from '../../../WikiIcon'
import GearCard from '../../../GearCard'

const DpsPets = () => {
    return (
        <>
            <GearCard text={[<WikiIcon name="Iboga" size={40}/>, "Iboga"]}>
                <p>
                    This is your highest dps pet and it mainly deals condi damage. Use it whenever you don't need other pets for CC or utility. 
                    Be wary of using it on <WikiIcon name="Xera"/> Xera though as the confusion it applies will be transformed into retal if 
                    the boss tands in the shard AoEs. The <WikiIcon name="Pull"/> Pull available 
                    through <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"></span> can 
                    also come in quite handy at times like to pull in adds on various bosses.
                </p>
            </GearCard>
            <GearCard text={[<WikiIcon name="Jacaranda" size={40}/>, "Jacaranda"]}>
                <p>
                    This is your second highest dps pet. Most of its damage comes in th form of power damage. This pet is mostly taken for 
                    the <WikiIcon name="Immobile"/> Immobilise available 
                    through <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="44980"></span> which 
                    acts similar to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12580"></span>.
                    Most of this pet's damage comes in the form of strike damage.
                </p>
            </GearCard>
            <GearCard text={[<WikiIcon name="FireWyvern" size={40}/>, "Fire Wyvern"]}>
                <p>
                    This is not a pet you will often take. It is mostly used on <WikiIcon name="Dhuum"/> Dhuum to kill the spiders on the reapers. 
                    As the spiders there are more vulnerable to condition damage, the Fire Wyvern's 
                    attack: <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31459"></span> is 
                    particularly effective to clear a whole group at once.
                </p>
            </GearCard>
        </>
    )
}

export default DpsPets