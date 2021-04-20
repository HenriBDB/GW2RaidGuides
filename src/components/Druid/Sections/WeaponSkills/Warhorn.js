import React from 'react'
import WikiIcon from '../../../WikiIcon'

const Warhorn = () => {
    return(
        <>
            <div class="row justify-content-center mb-3" data-armory-embed="skills" data-armory-size="80" data-armory-ids="-1,-1,-1,12620,12621"></div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12620"></div>
                <p class="col-lg-9">
                    Sends hawks to your foe that hit 16x consecutively and apply <WikiIcon name="Vulnerability"/> Vulnerability (5s) every hit 
                    while dealing 784 (2.4) total damage.
                    <br/>
                    You should never have to use this skill for <WikiIcon name="Vulnerability"/> Vulnerability but it is a nice add-on and the 
                    damage is good so you can use this skill whenever no other skills have priority (buffs/healing).
                </p>
            </div>
            <div class="row mt-3">
                <div class="col-lg-3" data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12621"></div>
                <p class="col-lg-9">
                    This skill grants 5 allies  <WikiIcon name="Fury"/> Fury (10s),  <WikiIcon name="Might"><sub>6</sub></WikiIcon> Might 
                    (10s),  <WikiIcon name="Swiftness"/> Swiftness (10s), and  <WikiIcon name="Regeneration"/> Regeneration (6s) if traited 
                    with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="964"></span>.
                    <br/>
                    Always use this skill at the start of an encounter to ensure you dps players have <WikiIcon name="Fury"/> Fury. This also 
                    helps ramp up might for your sub faster. Try to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1064"></span> this 
                    skill when ever possible if it is your only source of <WikiIcon name="Fury"/> Fury to ensure 100% uptimes. Can also 
                    be used as a blast finisher to for example stealth, heal, or cleanse conditions depending on the field you blast in.
                </p>
            </div>
        </>
    )
}

export default Warhorn