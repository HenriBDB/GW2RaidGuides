import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIcon from '../WikiIcon';
import WikiIconBig from '../WikiIconBig';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
    BoonRow,
    BoonColumn,
    BoonColumnDesc,
    BoonOnDemand,
    CondiRow,
    CondiColumn,
    CondiColumnDesc,
    SquadRole
} from './styles'

const CommBasics = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal" }}>
                    Every squad <b>needs boons</b>. Squad with good boon uptime is twice as effective as the one without. That being said, not every boon is equal and there are some that are stronger than others.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    Alongside boons there are class specific <b>buffs</b> - which will either purely boost stats of other squad members, or enhance their effectiveness in other ways. Similar to boons, their impact is <b>huge</b> and should not be underestimated.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    On the opposite spectrum we have <b>conditions</b>. While a lot of classes will benefit from specific ones or just from the sheer number of them, we mainly care about <b>25x&nbsp;<WikiIcon name={"Vulnerability"} />&nbsp;Vulnerability</b>, as everyone will benefit from it and having permanent uptime is essential.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    These are the fundamentals behind every raid squad. <b>The goal is to achieve close to permanent boon uptime with the least amount of supports possible</b>. The more dps, the better. That also goes for support players - just because they’re providing boons, doesn’t mean they are unable to deal damage (or heal for that matter). In other words, <b>role compression</b> is important. There are limited spots in a squad and you want to make each one count.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    We can see a lot of high-end groups <b>utilizing kits</b> of DPS classes in a way that allows them to bypass the requirement of support class and reduce them to bare minimum - <WikiIcon name={"Chronomancer"} /> Chronomancer/<WikiIcon name={"Guardian"} /> Guardian stacking for <WikiIcon name={"Quickness"} /> Quickness, <WikiIcon name={"Soulbeast"} /> Soulbeasts taking <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="45970"></span>, <WikiIcon name={"Renegade"} /> Renegades supplying <WikiIcon name={"Alacrity"} /> Alacrity and so on.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    This kind of optimization should transfer to pug groups too. Much more lightly of course and mainly focused around supports. If squad requires additional healer, then it should be either <WikiIcon name={"Firebrand"} /> Firebrand or <WikiIcon name={"Renegade"} /> Renegade - they are already in the group to provide their respective boons, so it’s much better for one of them to take on the role of a healing instead of dedicating whole new slot for ‘just’ a healer.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Boons", "Buffs", "Conditions"]} hrefs={["squad-boons", "squad-buffs", "squad-conditions"]} gameClass="commander">
                <TabPane tabName="squad-boons" active={true}>
                    <p style={{ fontStyle: 'italic' }}>
                        As mentioned before, not all boons are made equal and there’s no need to have every single one (although it definitely has benefits).
                    </p>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Essential</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <WikiIconBig name={"Might"} />
                                    <WikiIconBig name={"Fury"} />
                                    <WikiIconBig name={"Alacrity"} />
                                    <WikiIconBig name={"Quickness"} />
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Might, fury, alacrity, quickness - offensive boons that boost damage output significantly. Must have.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Important</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <WikiIconBig name={"Protection"} />
                                    <WikiIconBig name={"Regeneration"} />
                                    <WikiIconBig name={"Swiftness"} />
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Protection, regeneration, swiftness - not ‘essential’, however every squad should have access to those. Only difference is that some are not mandatory on selected bosses.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Extra</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <WikiIconBig name={"Vigor"} />
                                    <WikiIconBig name={"Resolution"} />
                                    <WikiIconBig name={"Resistance"} />
                                    <WikiIconBig name={"Stability"} />
                                    <WikiIconBig name={"Aegis"} />
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Vigor, resolution, resistance, stability, aegis - while great, not necessary or needed only for specific situations.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <div style={{ width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0' }}></div>
                    <p className="text-center mb-0 mt-4">
                        For reference, here are boons your everyday squad should have with respective uptimes
                    </p>
                    <p className="text-center" style={{ fontStyle: "italic", fontSize: 12 }}>
                        Please note this is only for reference and these uptimes can and will differ depending on composition and boss encounter
                    </p>
                    <div className="row justify-content-center mt-2 font-weight-bold">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>23+</p>
                            <WikiIconBig name={"Might"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>90% - 100%</p>
                            <div>
                                <WikiIconBig name={"Fury"} />
                                <WikiIconBig name={"Alacrity"} />
                                <WikiIconBig name={"Quickness"} />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>90%</p>
                            <WikiIconBig name={"Swiftness"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>75%</p>
                            <WikiIconBig name={"Regeneration"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>55%</p>
                            <WikiIconBig name={"Protection"} />
                        </div>
                        <BoonOnDemand>
                            <p className="mb-0" style={{fontFamily: "Noto Serif"}}>On demand</p>
                            <div>
                                <WikiIconBig name={"Aegis"} />
                                <WikiIconBig name={"Stability"} />
                            </div>
                        </BoonOnDemand>
                    </div>
                </TabPane>
                <TabPane tabName="squad-buffs" active={false}>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Druid (Soulbeast)</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="mr-3">
                                        <SquadRole>
                                            <WikiIconBig name={"Spotter"} />
                                            <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }}>Spotter</p>
                                        </SquadRole>
                                    </div>
                                    <SquadRole>
                                        <div className="d-flex flex-row justify-content-center">
                                            <WikiIconBig name={"Frost"} />
                                            <WikiIconBig name={"Sun"} />
                                            <WikiIconBig name={"Stone"} />
                                            <WikiIconBig name={"Storm"} />
                                        </div>
                                        <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }}>Spirits</p>
                                    </SquadRole>
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p>
                                <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> is a trait that passively gives +100 <WikiIcon name={"Precision"} /> Precision to 4 nearby players and spirits give extra on hit effect for everyone.
                            </p>
                            <p>
                                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span> increases damage by 5%, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span> applies <WikiIcon name={"Burning"} />Burning, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"></span> applies <WikiIcon name={"Vulnerability"} /> Vulnerability and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12495"></span> applies <WikiIcon name={"Protection"} />Protection to players. These will be commonly taken by <WikiIcon name={"Druid"} /> Druid, however <WikiIcon name={"Soulbeast"} /> Soulbeast can take one spirit of choice if needed (and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> if he’s power)
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Alaren</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <SquadRole>
                                        <WikiIconBig name={"AP"} />
                                        <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }} className="mb-0">AP</p>
                                    </SquadRole>
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1786"></span> is a trait taken by every <WikiIcon name={"Renegade"} /> alacrity renegade - be it power or heal version. It passively gives 150 <WikiIcon name={"Ferocity"} /> Ferocity to 4 nearby players, therefore power classes will benefit the most from it.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Warrior</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <SquadRole>
                                        <div className="d-flex flex-row justify-content-center">
                                            <WikiIconBig name={"Strength"} />
                                            <WikiIconBig name={"Discipline"} />
                                        </div>
                                        <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }} className="mb-0">Banners</p>
                                    </SquadRole>
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Banners are pure stat boosts and once placed, they improve stats of everyone in the squad.<br />
                                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="14405"></span> increases <WikiIcon name={"Power"} /> Power and <WikiIcon name={"CondiDamage"} /> Condition damage by 100.<br />
                                <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="14407"></span> increases <WikiIcon name={"Precision"} /> Precision and <WikiIcon name={"Ferocity"} /> Ferocity by 100
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <p style={{ fontStyle: 'italic', textAlign: 'center', marginTop: 45, marginBottom: 45 }}>
                        The above buffs you will encounter in pretty much every squad. All are really powerful, and they can be either easily picked (i.e. traitline is already taken for different reasons/there are no better skill options), or the benefits they give to the squad simply outweighs personal dps loss one will suffer.
                    </p>
                    <BoonRow>
                        <BoonColumn>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="mr-3">
                                        <SquadRole>
                                            <h4 className="mb-2 text-center">Warrior</h4>
                                            <WikiIconBig name={"EA"} />
                                            <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }}>Empower Allies</p>
                                        </SquadRole>
                                    </div>
                                    <SquadRole>
                                        <h4 className="mb-2 text-center">Engineer</h4>
                                        <WikiIconBig name={"PD"} />
                                        <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }}>Pinpoint Distribution</p>
                                    </SquadRole>
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Both <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1482"></span> (+100 <WikiIcon name={"Power"} /> Power to 4 nearby players) and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1984"></span> (+100 <WikiIcon name={"CondiDamage"} /> Condition damage to 4 nearby players) are good, however the cost for taking them is too big and is only worth it in specific scenarios/groups.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <BoonRow>
                        <BoonColumn>
                            <h4 className="mb-0 text-center">Guardian</h4>
                            <div className="row justify-content-center mt-2">
                                <div className="d-flex flex-row justify-content-center">
                                    <div className="mr-3">
                                        <SquadRole>
                                            <WikiIconBig name={"BaneSignet"} />
                                            <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }} className="mb-0">Bane Signet</p>
                                        </SquadRole>
                                    </div>
                                    <SquadRole>
                                        <WikiIconBig name={"WrathSignet"} />
                                        <p style={{ textTransform: 'capitalize', fontSize: '0.7rem' }} className="mb-0">Signet of Wrath</p>
                                    </SquadRole>
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                <a href="https://wiki.guildwars2.com/wiki/Signet#Guardian" target="_blank" rel="noopener noreferrer" className="commlink">Signets</a> are not permanent - if traited, they share their effects (+216 <WikiIcon name={"Power"} /> Power/<WikiIcon name={"CondiDamage"} /> Condition damage respectively) to 4 nearby players for 10 seconds upon activation. They’re somewhat common even in pugs, but treat them as extra bonus only.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                </TabPane>
                <TabPane tabName="squad-conditions" active={false}>
                    <p style={{ fontStyle: 'normal' }}>
                        Upkeeping 25 stacks of <WikiIcon name={"Vulnerability"} /> Vulnerability is mandatory for every squad, no matter the composition, as everyone will benefit from it. This is either achieved passively, as a majority of classes will provide enough just by following their rotations, or it will be covered by bringing a <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12493"> </span>.
                    </p>
                    <p style={{ fontStyle: 'normal' }}>
                        What other conditions you will need depends, as different classes benefit from different conditions. Most of these will be upkept easily as they’re common, but there are two that need mentioning
                    </p>
                    <br />
                    <CondiRow>
                        <CondiColumnDesc>
                            <p className="mb-0">
                                Both <WikiIcon name={"Weaver"} /><b>Weaver</b> and <WikiIcon name={"Chronomancer"} /> <b>Chrono</b> rely on these respective conditions in order to be <b>crit capped</b>, making them more important than the rest:
                                <br /><br />
                                <WikiIcon name={"Weakness"} /> WEAKNESS - easily supplied by <WikiIcon name={"Druid"} /> <b>Druid</b>, however keep an eye on uptime.
                                <br /><br />
                                <WikiIcon name={"Slow"} /> SLOW - harder to come by than other conditions. <WikiIcon name={"Renegade"} /> Condi renegades and <WikiIcon name={"Chronomancer"} /> Chronomancers are best sources, <WikiIcon name={"Dragonhunter"} /> Dragonhunters and <WikiIcon name={"Druid"} /> Druids help too.
                            </p>
                        </CondiColumnDesc>
                        <CondiColumn>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                                <WikiIconBig name={"Slow"} />
                                <div style={{ display: 'block' }}>
                                    <p className="my-0" style={{ fontSize: '1.2rem', lineHeight: 1 }}>Slow</p>
                                    <p className="my-0" style={{ fontSize: '0.8rem' }}>Power Chrono</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                                <WikiIconBig name={"Weakness"} />
                                <div style={{ display: 'block' }}>
                                    <p className="my-0" style={{ fontSize: '1.2rem', lineHeight: 1 }}>Weakness</p>
                                    <p className="my-0" style={{ fontSize: '0.8rem' }}>Power Weaver</p>
                                </div>
                            </div>
                        </CondiColumn>
                    </CondiRow>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommBasics