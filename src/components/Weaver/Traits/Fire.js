import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';

const Fire = () => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="31" data-armory-31-traits="320,296,318,334,319,1510"></div>
            <p>
                The fire traitline is - surprise - related to your fire attunement. It enhances your damage, while you are attuned to fire and does modify some of your skills so they have greater impact.
            </p>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={320} gameClass="weaver">
                <p>
                    This Trait gives you a 150 extra <WikiIcon name={"Power"} /> Power while in fire attunement.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Adept</h4>
            </div>
            <TraitCard traitID={296} gameClass="weaver">
                <p>
                    This trait on the one hand enhances your burning duration by 20%, while giving you the chance to inflict <WikiIcon name="Burning" /> Burning  on critical hits.
                </p>
                <p>
                    While this trait might not be the greatest addition to your overall dps, the <WikiIcon name="Burning" /> Burning applied is a nice thing to have considering the minor grandmaster trait of fire will increase your outgoing damage against burning foes. Also the other two options you have as major adept traits are not really that useful either and just highly situational at best.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Master</h4>
            </div>
            <TraitCard traitID={318} gameClass="weaver">
                <p>
                    When you attune to fire, this trait on the hand deals a bit of damage to surrounding foes. Sadly this damage can not critical hit anymore, so it is just very little damage in the end. In addition it gives you <a href="https://wiki.guildwars2.com/wiki/Fire_Aura" target="_blank" rel="noopener noreferrer" className="weaverlink">Fire Aura</a>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Master</h4>
            </div>
            <TraitCard traitID={334} gameClass="weaver">
                <p>
                    This Trait gives you a 150 <WikiIcon name={"Power"} /> Power bonus as soon as the stacks of <WikiIcon name={"Might"} /> Might on you are 10 or more. The effect doubles while you are attuned to fire.
                </p>
                <p>
                    This is a key trait of <WikiIcon name={"Weaver"} /> pWeaver and a reason why it is crucial that your group supports you enough <WikiIcon name={"Might"} /> Might.  In case your <WikiIcon name={"Might"} /> Might drops below 10, you don’t just lose the stats from the missing might itself, but also up to 300 <WikiIcon name={"Power"} /> Power from this trait.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={319} gameClass="weaver">
                <p>
                    With the help of the minor grandmaster you reduce the <WikiIcon name={"Recharge"} /> cooldown of your fire weapon skills by 20% and on top of that you gain (as mentioned before) another 10% damage against burning foes.
                </p>
                <p>
                    The <WikiIcon name={"Recharge"} /> cooldown reduction of your fire weapon skills is very important for the weavers rotation, which we will talk about later. And the 10% modifier is basically granted, since you apply enough <WikiIcon name="Burning" /> Burning to your enemy yourself to keep it up permanently.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={1510} gameClass="weaver">
                <p>
                    This trait again has two different effects. It makes your <a href="https://wiki.guildwars2.com/wiki/Fire_field" target="_blank" rel="noopener noreferrer" className="weaverlink">fire fields</a> last longer and in addition gives you up to 10 stacks of a <b>1% damage</b> modifier with every hit of a fire field.
                </p>
                <p>
                    The first effect of the trait is very important for your skill <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="45313" className="weaverskill"></span> which is one of your main damage skills and as we will learn later, when we come to the rotation, is the skill you want to cast on cooldown whenever it is possible.
                </p>
                <p>
                    The 1% modifier is applied for every hit a <a href="https://wiki.guildwars2.com/wiki/Fire_field" target="_blank" rel="noopener noreferrer" className="weaverlink">fire field</a> does, so if you hit multiple targets the stacks go up quicker. The trait basically resembles the <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2017" className="weaverskill"></span> trait from dragonhunter. So it is very important to keep the stacks up as good as possible.
                </p>
            </TraitCard>
        </>
    );
}

export default Fire;