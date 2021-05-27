import React from 'react'
import WikiIcon from '../../../WikiIcon'
import GearCard from '../../../GearCard'

const CcPets = () => {
    return (
        <>
            <GearCard text={[<WikiIcon name="ElectricWyvern" size={40}/>, "ElectricWyvern"]}>
                <p>
                    <WikiIcon name="Launch"/> Launch 232cc available through <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31639"></span>. 
                    <br/>
                    <WikiIcon name="Launch"/> Launch 232cc available through its AI skill Wing Buffet.
                </p>
            </GearCard>
            <GearCard text={[<WikiIcon name="Gazelle" size={40}/>, "Gazelle"]}>
                <p>
                    <WikiIcon name="Launch"/> Launch 232cc available through <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="43636"></span>. 
                    <br/>
                    <WikiIcon name="Daze"/> Daze (2s) 200cc available through its AI skill Charge.
                </p>
            </GearCard>
            <GearCard text={[<WikiIcon name="PinkMoa" size={40}/>, "Pink Moa"]}>
                <p>
                    <WikiIcon name="Daze"/> Daze (2s) 200cc available through <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12708"></span>. 
                    <br/>
                    Pink moa is practically never taken as a cc pet since its cc is cast slowly (1s cast) and on a longer recharge than that of the Rock Gazelle (30s vs 20s).
                </p>
            </GearCard>
        </>
    )
}

export default CcPets