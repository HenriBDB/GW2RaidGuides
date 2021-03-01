import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIconBig from '../WikiIconBig';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
    BoonRow,
    BoonColumn,
    BoonColumnDesc,
    BoonOnDemand
} from './styles'

const CommBasics = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal" }}>
                    Every squad <b>needs boons</b>. Squad with good boon uptime is thrice as effective as the one without. That being said, not every boon is equal and there are some that are stronger than others.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    Alongside boons there are class specific <b>buffs</b> - which will either purely boost stats of other squad members, or enhance their effectiveness in other ways. Similar to boons, their impact is <b>huge</b> and should not be underestimated.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    On the opposite spectrum we have <b>conditions</b>. While a lot of classes will benefit from specific ones or just from the sheer number of them, we mainly care about <b>25x Vulnerability</b>, as everyone will benefit from it and having permanent uptime is essential.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    These are the fundamentals behind every raid squad. <b>The goal is to achieve close to permanent boon uptime with the least amount of supports possible</b>. The more dps, the better. That also goes for support players - just because they’re providing boons, doesn’t mean they are unable to deal damage (or heal for that matter). In other words, <b>role compression</b> is important. There are limited spots in a squad and you want to make each one count.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    We can see a lot of high-end groups <b>utilizing kits</b> of DPS classes in a way that allows them to bypass the requirement of support class and reduce them to bare minimum - Chronomancer/Guardian stacking for quickness, Soulbeasts taking Moa stance, Renegades supplying alacrity and so on.
                </p>
                <p style={{ fontStyle: "normal" }}>
                    This kind of optimization should transfer to pug groups too. Much more lightly of course and mainly focused around supports. If squad requires additional healer, then it should be either Firebrand or Renegade - they are already in the group to provide their respective boons, so it’s much better for one of them to take on the role of a healing instead of dedicating whole new slot for ‘just’ a healer.
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
                                    <WikiIconBig name={"Retaliation"} />
                                    <WikiIconBig name={"Resistance"} />
                                    <WikiIconBig name={"Stability"} />
                                    <WikiIconBig name={"Aegis"} />
                                </div>
                            </div>
                        </BoonColumn>
                        <BoonColumnDesc>
                            <p className="mb-0">
                                Vigor, retaliation, resistance, stability, aegis - while great, not necessary or needed only for specific situations.
                            </p>
                        </BoonColumnDesc>
                    </BoonRow>
                    <div style={{width: '60%', height: 1, borderBottom: '1px solid white', margin: '40px auto 0'}}></div>
                    <p className="text-center mb-0 mt-4">
                        For reference, here are boons your everyday squad should have with respective uptimes
                    </p>
                    <p className="text-center" style={{ fontStyle: "italic", fontSize: 12 }}>
                        Please note this is only for reference and these uptimes can and will differ depending on composition and boss encounter
                    </p>
                    <div className="row justify-content-center mt-2 font-weight-bold">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0">23+</p>
                            <WikiIconBig name={"Might"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0">90% - 100%</p>
                            <div>
                                <WikiIconBig name={"Fury"} />
                                <WikiIconBig name={"Alacrity"} />
                                <WikiIconBig name={"Quickness"} />
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0">90%</p>
                            <WikiIconBig name={"Swiftness"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0">75%</p>
                            <WikiIconBig name={"Regeneration"} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="mb-0">55%</p>
                            <WikiIconBig name={"Protection"} />
                        </div>
                        <BoonOnDemand>
                            <p className="mb-0">On demand</p>
                            <div>
                                <WikiIconBig name={"Aegis"} />
                                <WikiIconBig name={"Stability"} />
                            </div>
                        </BoonOnDemand>
                    </div>
                </TabPane>
                <TabPane tabName="squad-buffs" active={false}>
                    <p>
                        Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> you will gain <WikiIconBig name={"Retaliation"} /> Retaliation when you use a heal skill, so on fights where you don't need to save it for certain mechanics to heal up, you can use it as a <WikiIconBig name={"Retaliation"} /> Retaliation source.
                    </p>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                </TabPane>
                <TabPane tabName="squad-conditions" active={false}>
                    <p>
                        Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> you will gain <WikiIconBig name={"Retaliation"} /> Retaliation when you use a heal skill, so on fights where you don't need to save it for certain mechanics to heal up, you can use it as a <WikiIconBig name={"Retaliation"} /> Retaliation source.
                    </p>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommBasics