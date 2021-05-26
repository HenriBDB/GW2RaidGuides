import React from 'react'
import WikiIcon from '../../../WikiIcon'

const PetCC = () => {
    return (
        <>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="Gazelle" pet={true}/> Rock Gazelle</div>
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="43636"></div>
                <div class="col-lg-2">232cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Launch"/> Launch
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="ElectricWyvern" pet={true}/> Electric Wyvern</div>
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31639"></div>
                <div class="col-lg-2">232cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Launch"/> Launch
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="ElectricWyvern" pet={true}/> Any Wyvern (AI skill)</div>
                <div class="col-lg-3">Wing Buffet</div>
                <div class="col-lg-2">232cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Launch"/> Launch
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="Gazelle" pet={true}/> Rock Gazelle (AI skill)</div>
                <div class="col-lg-3">Charge</div>
                <div class="col-lg-2">200cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Daze"/> Daze (2s)
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="Smokescale" pet={true}/> Smokescale (AI skill)</div>
                <div class="col-lg-3">Takedown</div>
                <div class="col-lg-2">200cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Knockdown"/> Knockdown (2s)
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="Iboga" pet={true}/> Iboga</div>
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="41156"></div>
                <div class="col-lg-2">150cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Pull"/> Pull
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-12"><WikiIcon name="BlackMoa" pet={true}/> Black Moa</div>
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12709"></div>
                <div class="col-lg-2">100cc</div>
                <p class="col-lg-7">
                    <WikiIcon name="Daze"/> Daze (1s)
                </p>
            </div>
        </>
    )
}

export default PetCC