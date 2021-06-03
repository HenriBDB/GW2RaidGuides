import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';
import SectionLink from '../../../components/SectionLink';

const Virtues = () => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="46" data-armory-46-traits="621,624,604,603,620,622"></div>
            <p className="dh-trait-intro">
                This is a situational traitline which is only worth taking over Radiance if you can mantain permanent <WikiIcon name={"Aegis"} /> Aegis. If you know that your <WikiIcon name={"Aegis"} /> Aegis will be stripped and you won't be able to reapply it, play Radiance instead.
                Taking this traitline you are losing 25% Crit Chance from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1683" className="dhskill"></span> and 10% from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="568" className="dhskill"></span>, so you need to remember to <b>adjust your gear</b> (see
                <SectionLink sectionId="dh-section-gear">
                    <span
                        style={{ color: "#69CCE7", cursor: "pointer" }}>
                        &nbsp;Gear&nbsp;
                        </span>
                </SectionLink>for details).
            </p>
            <p className="dh-trait-intro">
                Most common scenarios where it will be beneficial to take this traitline would be either having a <WikiIcon name={"Thief"} /> Boonthief in your subgroup, who can provide permanent 11 boons (including very important <WikiIcon name={"Aegis"} /> Aegis), or having another Guardian in your party who will bring <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9084" className="dhskill"></span> to provide <WikiIcon name={"Aegis"} /> Aegis for you. If you don't have any of those in your squad, you will most likely not be able to maintain permanent <WikiIcon name={"Aegis"} /> Aegis on yourself, as you are only able to apply it on yourself via <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30039" className="dhskill"></span>. Remember that you will lose <WikiIcon name={"Aegis"} /> Aegis everytime you get hit by a mechanic, for example autoattack from the boss or mechanics like <WikiIcon name={"Gorseval"} /> Gorseval's slam, Mind Crush on <WikiIcon name={"Deimos"} /> Deimos (even if standing in the bubble), purple orbs on <WikiIcon name={"CA"} /> CA and many more. <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30039" className="dhskill"></span> has a very long <WikiIcon name={"Recharge"} /> cooldown so it's not a reliabile <WikiIcon name={"Aegis"} /> Aegis source. I would also not advise you to swap any of your utility skills as a Dragohunter to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9084" className="dhskill"></span> as the damage loss resulting from that is just not worth it in my opinion and you will probably be better off just playing Radiance traitline (or playing <WikiIcon name={"Guardian"} /> Core Guardian with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9084" className="dhskill"></span> at this point, as you won't lose as much damage by taking it unlike <WikiIcon name={"Dragonhunter"} /> Dragonhunter).
            </p>
            <p className="dh-trait-intro">
                Given the above, in pugs or less organized groups it will usually be only worth taking with a <WikiIcon name={"Thief"} /> Boonthief present, so on bosses like <WikiIcon name={"MO"} /> MO, <WikiIcon name={"Adina"} /> Adina. However, due to the recent <WikiIcon name={"Thief"} /> Boonthief nerf (boons are now applied to 5 targets instead of 10), you may not see it in pugs often.
            </p>

            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={621} gameClass="dragonhunter">
                <p>
                    Increases direct damage dealt to enemies by 1% per boon on you. So if you have all 12 boons on you, your damage will be increased by 12%. This is the reason why this traitline works well with a <WikiIcon name={"Thief"} /> Boonthief who provides all boons except <WikiIcon name={"Alacrity"} /> Alacrity (which will be covered by <WikiIcon name={"Renegade"} /> Alacren anyway). It's one of the 2 main reasons why this traitline will perform better than Radiance in certain situations.
                </p>
                <p>
                    Applies 5s of <WikiIcon name={"Might"} /> Might, <WikiIcon name={"Regeneration"} /> Regeneration and <WikiIcon name={"Protection"} /> Protection to allies (max 5 targets) after activating a <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtue</a>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Adept</h4>
            </div>
            <TraitCard traitID={624} gameClass="dragonhunter">
                <p>
                    Increases power damage dealt to enemies by 20% if you have <WikiIcon name={"Aegis"} /> Aegis. This trait is the second of 2 main reasons why this traitline will outperform Radiance traitline in certain situations. It is also the reason why upkeeping permanent <WikiIcon name={"Aegis"} /> Aegis is so important when taking Virtues traitline.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Master</h4>
            </div>
            <TraitCard traitID={604} gameClass="dragonhunter">
                <p>
                    Applies <WikiIcon name={"Resolution"} /> Resolution after activating a <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtue</a>. Duration of <WikiIcon name={"Resolution"} /> Resolution is increased by 25%.
               </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Master</h4>
            </div>
            <TraitCard traitID={603} gameClass="dragonhunter">
                <p>
                    Grants you 10% strike damage increase for 6s after activating a <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtue</a>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={620} gameClass="dragonhunter">
                <p>
                    Reduces <WikiIcon name={"Recharge"} /> recharge of <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtues</a> by 15%.
                </p>
                <p>
                    Increases condition damage by 13% of your vitality.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={622} gameClass="dragonhunter">
                <p>
                    Passive effect of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> triggers more quickly and applies additional <WikiIcon name={"Burning"} /> Burning to enemies. It synergizes very well with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="634" className="dhskill"></span> from Zeal traitline.
                </p>
            </TraitCard>
        </>
    );
}

export default Virtues;