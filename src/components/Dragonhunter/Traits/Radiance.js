import React from 'react';
import TraitCard from '../../../components/TraitCard';
import WikiIcon from '../../../components/WikiIcon';
import SectionLink from '../../../components/SectionLink';

const Radiance = () => {
    return (
        <>
            <div className="mb-3" data-armory-embed="specializations" data-armory-ids="16" data-armory-16-traits="572,574,566,571,565,568,579,1683"></div>
            <p>
                Radiance traitline centers on burning attacks, critical hits and resolution. It may impact sword and signet skills.<br />
                In certain circumstances this traitline can be replaced by Virtues traitline.
            </p>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Adept</h4>
            </div>
            <TraitCard traitID={572} gameClass="dragonhunter">
                <p>
                    Grants <a href="https://wiki.guildwars2.com/wiki/Light_Aura" target="_blank" rel="noopener noreferrer" className="dhlink">Light Aura</a> (gain <WikiIcon name={"Resolution"} /> Resolution when struck) and <WikiIcon name="Blinded" /> Blinds (3s) nearby foes when you activate <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Adept</h4>
            </div>
            <TraitCard traitID={574} gameClass="dragonhunter">
                <p>
                    Gives 8s of <WikiIcon name={"Resolution"} /> Resolution when using a heal skill. This trait is the reason to use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21664" className="dhskill"></span> to ensure good <WikiIcon name={"Resolution"} /> Resolution uptime on you.
                </p>
                <p>
                    You will always take this trait if you are playing longbow or scepter. You can use it in some situations if you start some burn phases on non-greatsword weaponset without looking for another <WikiIcon name={"Resolution"} /> Resolution source - pop <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="21664" className="dhskill"></span> when the burn phase starts to get instant <WikiIcon name={"Resolution"} /> Resolution.
                </p>
            </TraitCard>
            <TraitCard traitID={566} gameClass="dragonhunter">
                <p>
                    Grants additional 80 <WikiIcon name={"Precision"} /> Precision (on any weaponset) and additional 80 <WikiIcon name={"Power"} /> Power while wielding a one-handed weapon. Reduces the <WikiIcon name={"Recharge"} /> cooldown of sword skills by 20%.
                </p>
                <p>
                    This is the go-to trait if you are playing sword. However, you have to remember, that by taking this trait you will lose <WikiIcon name={"Resolution"} /> Resolution from your heal skill.
                </p>
                <p>
                    So, before taking this trait you have to consider if you will get enough <WikiIcon name={"Resolution"} /> Resolution from other sources (for example other Guardians, <WikiIcon name={"Thief"} /> Boonthief or <WikiIcon name={"Revenant"} /> Renegade):
                </p>
                <ol>
                    <li>
                        If yes, feel free to take this trait over <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span>.
                    </li>
                    <li>
                        If not, estimate how long your phases are gonna be:
                        <ul>
                            <li>
                                if they are fast, you will most likely not benefit from the reduced sword skills <WikiIcon name={"Recharge"} /> recharge, so in such case you can trait <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> instead;
                            </li>
                            <li>
                                if they are slow, you can still take <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> for better <WikiIcon name={"Resolution"} /> Resolution uptime, but you have to remember that your sword rotation won't line up well in such case. You can also just take this trait and suffer from missing <WikiIcon name={"Resolution"} /> Resolution. If you want to learn why <WikiIcon name={"Resolution"} /> Resolution is such an important boon for <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter, go to
                                <SectionLink sectionId="dh-section-rotation">
                                    <span
                                        style={{ color: "#69CCE7", cursor: "pointer" }}>
                                        &nbsp;Rotation
                                    </span>
                                </SectionLink>.
                            </li>
                        </ul>
                    </li>
                </ol>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Master</h4>
            </div>
            <TraitCard traitID={571} gameClass="dragonhunter">
                <p>
                    <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> gets renewed (i.e. fully <WikiIcon name={"Recharge"} /> recharged) when you kill a foe.
                </p>
                <p>
                    This will work only with enemies that give you experience after they are killed, for example Blue, Green and Red Guardians at <WikiIcon name={"Vg"} /> VG, Sappers at <WikiIcon name={"Sabetha"} /> Sabetha, Slublings at <WikiIcon name={"Slothasor"} /> Sloth. This trait allows you to use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> more often in some fights which leads to dps increase. To see how it works in practice on different bosses check out
                    <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides
                        </span>
                    </SectionLink>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Master</h4>
            </div>
            <TraitCard traitID={565} gameClass="dragonhunter">
                <p>
                    This trait makes you deal 10% more damage if you have <WikiIcon name={"Resolution"} /> Resolution and it's one of the reasons why you want to ensure high <WikiIcon name={"Resolution"} /> Resolution uptime on you. It synergizes well with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span>.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Minor Grandmaster</h4>
            </div>
            <TraitCard traitID={568} gameClass="dragonhunter">
                <p>
                    Grants additional 10% Crit Chance if you are attacking an enemy with <WikiIcon name={"Burning"} /> Burning (which you will always have on the boss) and 150 extra <WikiIcon name={"Ferocity"} /> Ferocity.
                </p>
            </TraitCard>
            <div className="row justify-content-center">
                <h4 className="mb-0">Major Grandmaster</h4>
            </div>
            <TraitCard traitID={1683} gameClass="dragonhunter">
                <p> Grants 25% Crit Chance if you have <WikiIcon name={"Resolution"} /> Resolution (which is yet another reason why you want to upkeep high <WikiIcon name={"Resolution"} /> Resolution uptime on you - without this boon you are not crit capped). It also grants 6s of <WikiIcon name={"Might"} /> Might every second.
                </p>
                <p>
                    It is your default choice, as your standard gearset assumes you are getting 25% Crit Chance from this trait.
                </p>
            </TraitCard>
            <TraitCard traitID={579} gameClass="dragonhunter">
                <p>
                    Reduces <WikiIcon name={"Recharge"} /> cooldown on Signets by 20%, improves passive effect of Signets and shares the passive effects of Signet with allies.
                </p>
                <p>
                    In case of <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9093" className="dhskill"></span>, while it's passive, it grants you +180 <WikiIcon name={"Power"} /> Power by default. With this trait, it grants you +216 <WikiIcon name={"Power"} /> Power. When you activate the signet, +216 <WikiIcon name={"Power"} /> Power buff is shared with your party for 10 seconds (max 5 targets, including you). With this trait you don't lose your passive <WikiIcon name={"Power"} /> Power increase when you activate the Signet. The <WikiIcon name={"Recharge"} /> recharge on the Signet gets reduced from 30s to 24s (without <WikiIcon name={"Alacrity"} /> Alacrity).
                </p>
                <p>
                    Taking this trait makes you lose 25% Crit Chance from <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1683" className="dhskill"></span>, this is why you need to adjust your gear to compensate for it. See
                    <SectionLink sectionId="dh-section-gear">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Gear&nbsp;
                        </span>
                    </SectionLink>for details.
                </p>
                <p>
                    So when is it worth taking over <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1683" className="dhskill"></span>? Definitely in CC heavy fights like <WikiIcon name={"Slothasor"} /> Slothasor or <WikiIcon name={"Samarog"} /> Samarog. See
                    <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides&nbsp;
                        </span>
                    </SectionLink>to see it in practice. Sometimes it will also be worth taking just to share the <WikiIcon name={"Power"} /> Power buff with your party, but I recommend doing it only in organized groups with well thought strats.
                </p>
                <p>
                    If there are few Guardians using Signet with this trait, the Signet buffs stack. After the recent fix, using the Signet doesn't make you lose all your previous stacks anymore.
                </p>
            </TraitCard>
        </>
    );
}

export default Radiance;