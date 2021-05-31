import React from 'react'
import WikiIcon from '../../../WikiIcon'

const Heal = () => {
    return(
        <>
            <p>
                There are 3 heals that a druid takes depending on the situation:
            </p>
            <div class="row mt-3">
                <div class="col-lg-2" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></div>
                <p class="col-lg-10 my-0">
                    This is your best sustained heal. It helps you provide 10-man <WikiIcon name="Regeneration"/> Regeneration 
                    which helps you get your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> back 
                    to full faster than ever. It is recommended to always take this option when you are 
                    solo-healing. For double heal scenarios, take it when you don't need the other two. Remember that the regen given from this heal 
                    skill allows you to have your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> back 
                    faster giving way more healing than the other two options.
                </p>
            </div>
            <div class="row mt-4">
                <div class="col-lg-2" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12489"></div>
                <p class="col-lg-10 my-0">
                    This is your best 5-man condi cleanse heal. It also applies long lasting 5-man <WikiIcon name="Regeneration"/> Regeneration 
                    which helps you replenish your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> faster. 
                    You should use it in double heal scenarios when you need sustained condi cleanses. 
                    Such bosses include for example <WikiIcon name="Slothasor"/> Sloth, <WikiIcon name="Matthias"/> Matthias, <WikiIcon name="SH"/> Soulless Horror, <WikiIcon name="Largos"/> Twin Largos. 
                    This heal can also prove useful on bosses with periodic conditions like <WikiIcon name="Xera"/> Xera especially if you solo heal and tank.
                </p>
            </div>
            <div class="row mt-4">
                <div class="col-lg-2" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31407"></div>
                <p class="col-lg-10 my-0">
                    This is your best 5-man burst heal. This heal is never used in solo heal scenarios as it only burst heals your own sub group and does 
                    not provide sustained healing. If you are double healing, this heal can have some niche uses where burst damage occurs including:&nbsp; 
                    <WikiIcon name="Vg"/> VG green explosions, <WikiIcon name="Gorseval"/> Gorseval CC (although I would take <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21773"></span> on 
                    this boss to help you replenish your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> in 
                    time for CC phase)... Ok I would really only take it on <WikiIcon name="Vg"/> VG for greens if you double heal. Do note that you heal allies for more if you cast it while 
                    in <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="31869"></span> and yourself for more otherwise. 
                </p>
            </div>
        </>
    )
}

export default Heal