import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const DragonhunterTrait = () => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="16" data-armory-16-traits="572,574,566,571,565,568,579,1683"></div>
            <p>
                Zeal traitline is strictly related to Symbols (which are unique area effects of a Guardian), increasing damage to enemies caught in them. It also enhances your Greatsword skills.
                This is the go-to traitline in all raid power Guardian builds, which you should never swap out. The below breakdown should help you understand why Symbols play such an important part in Dragonhunter's rotation.
            </p>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={648} gameClass="dragonhunter">
                <p>
                    Casts a <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="13677" className="dhskill"></span> when you are struck while below 75% health.
                </p>
                <p>
                    Grants <WikiIcon name={"Retaliation"} /> Retaliation (2s) to you and your allies standing in the symbol (5 targets). It's also a <a href="https://wiki.guildwars2.com/wiki/Light_field" target="_blank" className="dhlink">Light Field</a>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Adept</h4>
            </div>
            <TraitCard traitID={634} gameClass="dragonhunter">
                <p>
                    Increases direct damage dealt to enemies with <WikiIcon name="Burning"/> Burning by 7%.
                </p>

                <p>
                    You should always have <WikiIcon name={"Burning"} /> Burning on the boss, for example from your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>, from druid's Sun Spirit, firebrand's Flame Mantra, etc. This trait is a pure damage increase and it's the most worth taking from Major Adept set.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Master</h4>
            </div>
            <TraitCard traitID={646} gameClass="dragonhunter">
                <p>
                    This trait makes your Symbols inflict <WikiIcon name={"Vulnerability"} /> Vulnerability on foes. Damage to vulnerable enemies is increased by 5%.
                </p>
                <p>
                    You should always have <WikiIcon name={"Vulnerability"} /> Vulnerability on the boss, for example from your Symbols, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9168" className="dhskill"></span> and from multiple skills from other classes.
               </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Master</h4>
            </div>
            <TraitCard traitID={653} gameClass="dragonhunter">
                <p>
                    Grants 120 additional <WikiIcon name={"Power"} /> Power (on any weaponset) and additional 120 <WikiIcon name={"Power"} /> Power while wielding a Greatsword (so 240 more <WikiIcon name={"Power"} /> Power in total) and reduces the <WikiIcon name={"Recharge"} /> cooldown of Greatsword skills by 20%. This trait is the main reason why Greatsword is the go-to weapon for a power Dragonhunter.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={649} gameClass="dragonhunter">
                <p>
                    This trait makes your Symbols deal 30% more damage and charges your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> passive twice as fast.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={2017} gameClass="dragonhunter">
                <p>
                    Increases your damage by 2% for 15s whenever your Symbol hits a foe - you can have max 5 stacks, which results in 10% damage increase.
                </p>
                <p>
                    You should be using Symbols as much as possible in your rotation to upkeep the 5 stacks of <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2017" className="dhskill"></span> for the permanent 10% damage increase.
                </p>
            </TraitCard>
        </>
    );
}

export default DragonhunterTrait;