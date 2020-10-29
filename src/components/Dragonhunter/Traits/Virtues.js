import React from 'react';
import { Link } from 'react-scroll';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Virtues = ({ showGear }) => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="46" data-armory-46-traits="621,624,604,603,620,622"></div>
            <p className="dh-trait-intro">
                This is a situational traitline which is only worth taking over Radiance if you can mantain permanent <WikiIcon name={"Aegis"} /> Aegis. If you know that your <WikiIcon name={"Aegis"} /> Aegis will be stripped and you won't be able to reapply it, play Radiance instead.
                Taking this traitline you are losing 25% Crit Chance from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1683" className="dhskill"></span>, so you need to remember to adjust your gear (see
                    <Link to="dh-section-guides" smooth={true} duration={1000} onClick={showGear}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Gear&nbsp;
                                    </span>
                    </Link>for details.)
            </p>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={621} gameClass="dragonhunter">
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
            <TraitCard traitID={624} gameClass="dragonhunter">
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
            <TraitCard traitID={604} gameClass="dragonhunter">
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
            <TraitCard traitID={603} gameClass="dragonhunter">
                <p>
                    Grants 120 additional <WikiIcon name={"Power"} /> Power (on any weaponset) and additional 120 <WikiIcon name={"Power"} /> Power while wielding a Greatsword (so 240 more <WikiIcon name={"Power"} /> Power in total) and reduces the <WikiIcon name={"Recharge"} /> cooldown of Greatsword skills by 20%. This trait is the main reason why Greatsword is the go-to weapon for a power Dragonhunter.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={620} gameClass="dragonhunter">
                <p>
                    This trait makes your Symbols deal 30% more damage and charges your <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> passive twice as fast.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={622} gameClass="dragonhunter">
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

export default Virtues;