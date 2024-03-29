import React from "react";
import WikiIcon from '../WikiIcon';
import WikiIconHuge from '../WikiIconHuge';
import CommCard from '../../components/CommCard';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
    SquadTemplatesContainer,
    SquadRole
} from './styles'

const CommSummary = () => {
    return (
        <SectionContainer>
            <div className="comm-summary">
                <CommCard text={["Boons are mandatory"]}>
                    <p>
                        Having permanent uptimes of selected boons enables every dps class and increases squad effectiveness by a lot. Don’t underestimate their impact and make sure the most important ones are present.
                    </p>
                </CommCard>
            </div>
            <div className="comm-summary">
                <CommCard text={["Role Compression is important"]}>
                    <p>
                        The more one class can do effectively, the better. If you need another healer, let it be either <WikiIcon name={"Firebrand"} /> Quickbrand or <WikiIcon name={"Renegade"} /> Alaren instead of dedicating one whole slot for a new healer. If dps classes can cover some boons with minimal dps loss and thus giving more utility/damage to supports, let them.
                    </p>
                </CommCard>
            </div>
            <div className="comm-summary">
                <CommCard text={["Each class has its strengths"]}>
                    <p>
                        Both supports and DPS classes have access to different utilities that can help on certain encounters. Treat each build individually instead of simplifying them into the condi/power/support variant.
                    </p>
                    <p>
                        When commanding your pug group, don’t shun a dps class because it might not be the most optimal on paper - the player might end up surprising you with their performance. On the other hand, if a player chose a class that obviously doesn’t synergize well (for example a <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter on <WikiIcon name={"SH"} /> Soulless Horror whose traps cleave the golem before it gets pushed out) politely ask them to swap.
                    </p>
                </CommCard>
            </div>
            <div className="comm-summary">
                <CommCard text={["Split into subgroups correctly"]}>
                    <p>
                        Due to how boon and buff distribution work, splitting subgroups accordingly and giving buffs to classes that benefit the most from them will improve squad effectiveness with no real effort. Remember changing subgroups once combat starts won’t do anything!
                    </p>
                    <ul>
                        <li>If unsure, make 2 subgroups with 5 players each</li>
                        <li>Distribute healers and boon sources evenly across both subgroups</li>
                        <li>Give <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1786"></span> to classes that will make use of them</li>
                        <li>Group <WikiIcon name={"Dragonhunter"} /> Dragonhunters together for <WikiIcon name={"Resolution"} /> Resolution</li>
                    </ul>
                </CommCard>
            </div>
            <NavTabs tabNames={["Firebrigade", "Double Tank", "Boonthief composition"]} hrefs={["firebrigade", "double-tank", "boonthief-comps"]} gameClass="commander">
                <TabPane tabName="firebrigade" active={true}>
                    <SquadTemplatesContainer>
                        <div className="firebrigade-grid-container">
                            <div className="sub1-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Chronomancer"} />
                                    <p>STM</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-2">
                                <SquadRole>
                                    <WikiIconHuge name={"Druid"} />
                                    <p>Heal</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-3">
                                <SquadRole>
                                    <WikiIconHuge name={"Berserker"} />
                                    <p>Banners</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub1-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Renegade"} />
                                    <p>Alaren</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-2">
                                <SquadRole>
                                    <WikiIconHuge name={"Firebrand"} />
                                    <p>Quickbrand</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-3">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                        </div>
                    </SquadTemplatesContainer>
                    <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
                        Standard composition you will encounter most of the time
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        <WikiIcon name={"Chronomancer"} /> Chrono covers <WikiIcon name={"Quickness"} /> Quickness in 1st subgroup, can play inspiration variant if required<br />
                        <WikiIcon name={"Firebrand"} /> Quickbrand covers <WikiIcon name={"Quickness"} /> Quickness and <WikiIcon name={"Fury"} /> Fury in 2nd subgroup<br />
                        <WikiIcon name={"Druid"} /> Druid covers <WikiIcon name={"Might"} /> Might for whole squad, and <WikiIcon name={"Fury"} /> Fury + <WikiIcon name={"Swiftness"} /> Swiftness for subgroup<br />
                        <WikiIcon name={"Renegade"} /> Alaren covers <WikiIcon name={"Alacrity"} /> Alacrity for whole squad<br />
                        <WikiIcon name={"Berserker"} /> Warrior is in a <WikiIcon name={"Druid"} /> Druid's subgroup for both guaranteed <WikiIcon name={"Swiftness"} /> Swiftness and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span><br />
                        If you need additional healer, let it be either <WikiIcon name={"Renegade"} /> Alaren or <WikiIcon name={"Firebrand"} /> Quickbrand<br />
                        <WikiIcon name={"Chronomancer"} /> STM Chrono can be replaced by another <WikiIcon name={"Firebrand"} /> Quickbrand or <WikiIcon name={"Scrapper"} /> Scrapper, if you don’t need utility <WikiIcon name={"Chronomancer"} /> Chrono provides<br />
                        <WikiIcon name={"Firebrand"} /> Quickbrand can be replaced by <WikiIcon name={"Chronomancer"} /> STM Chrono or <WikiIcon name={"Scrapper"} /> Scrapper as well, but you need to account for the lack of <WikiIcon name={"Fury"} /> Fury<br />
                        Fill DPS slots and split them accordingly (follow the rules mentioned before)<br />
                    </p>
                </TabPane>
                <TabPane tabName="double-tank" active={false}>
                    <SquadTemplatesContainer>
                        <div className="firebrigade-grid-container">
                            <div className="sub1-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Chronomancer"} />
                                    <p>Inspiration</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-2">
                                <SquadRole>
                                    <WikiIconHuge name={"Druid"} />
                                    <p>Heal</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-3">
                                <SquadRole>
                                    <WikiIconHuge name={"Berserker"} />
                                    <p>Banners</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub1-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Chronomancer"} />
                                    <p>Inspiration</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-2">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-3">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                        </div>
                    </SquadTemplatesContainer>
                    <p style={{ fontStyle: 'italic', textAlign: 'center' }}>
                        Played only on bosses where double tank is needed (<WikiIcon name={"SH"} /> Soulless Horror, <WikiIcon name={"Largos"} /> Twin Largos)
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        As <WikiIcon name={"Chronomancer"} /> Chronos need to cover <WikiIcon name={"Alacrity"} /> Alacrity, they are most likely gonna play inspiration variant<br />
                        If you need 2nd healer, replace DPS slot in 2nd subgroup (any healer will do)<br />
                        If <WikiIcon name={"Chronomancer"} /> Chronos are condi boon variant, you need one of the DPS slots to be <WikiIcon name={"Renegade"} /> RR Renegade<br />
                        <WikiIcon name={"Firebrand"} /><WikiIcon name={"Renegade"} /> Firebrigade composition can be played instead, double <WikiIcon name={"Chronomancer"} /><WikiIcon name={"Chronomancer"} /> Chrono is better however<br />
                    </p>
                </TabPane>
                <TabPane tabName="boonthief-comps" active={false}>
                    <SquadTemplatesContainer>
                        <div className="firebrigade-grid-container">
                            <div className="sub1-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Thief"} />
                                    <p>Boon</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-2">
                                <SquadRole>
                                    <WikiIconHuge name={"Soulbeast"} />
                                    <p>Spiritbeast</p>
                                </SquadRole>
                            </div>
                            <div className="sub1-3">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub1-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub1-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-1">
                                <SquadRole>
                                    <WikiIconHuge name={"Thief"} />
                                    <p>Boon</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-2">
                                <SquadRole>
                                    <WikiIconHuge name={"Renegade"} />
                                    <p>Alaren</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-3">
                                <SquadRole>
                                    <WikiIconHuge name={"Berserker"} />
                                    <p>Banners</p>
                                </SquadRole>
                            </div>
                            <div className="sub2-4">
                                <p style={{ marginRight: 10, fontWeight: 'bold' }}>DPS</p>
                            </div>
                            <div className="sub2-5">
                                <p style={{ fontWeight: 'bold' }}>DPS</p>
                            </div>
                        </div>
                    </SquadTemplatesContainer>
                    <p style={{ textAlign: 'center' }}>
                        <WikiIcon name={"Thief"} /> Boonthief is played only on selected bosses with <WikiIcon name={"Plasma"} /> Detonate Plasma as stolen skill<br />
                        Both <WikiIcon name={"Daredevil"} /> Boon Daredevil or <WikiIcon name={"Thief"} /> Boon Thief work. <WikiIcon name={"Daredevil"} /> Daredevil provides more dps, <WikiIcon name={"Thief"} /> Core Thief more cc, utility and lower Steal <WikiIcon name={"Recharge"} /> cooldown<br />
                        <WikiIcon name={"Thief"} /> Boon thieves can cover everything except <WikiIcon name={"Alacrity"} /> Alacrity, so you need a dedicated <WikiIcon name={"Alacrity"} /> Alacrity source (doesn’t matter which one, both <WikiIcon name={"Mirage"} /> Mirages and <WikiIcon name={"Renegade"} /> Renegades work)<br />
                        <WikiIcon name={"Druid"} /> Druid tends to be a wasted slot, so we take <WikiIcon name={"Soulbeast"} /> Soulbeast with one spirit instead<br />
                        Ideally, we want to take <WikiIcon name={"Renegade"} /> Heal Renegade as our healer. If that isn’t enough, <WikiIcon name={"Thief"} /> boon thief can switch to heal as well, otherwise just switch <WikiIcon name={"Soulbeast"} /> Spiritbeast to <WikiIcon name={"Druid"} /> Druid<br />
                        It’s also perfectly possible to play <WikiIcon name={"Thief"} /> Boon thief in only one subgroup instead of traditional <WikiIcon name={"Quickness"} /> Quickness support. While they lack damage, extra boons or cc they provide may come in handy
                    </p>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommSummary