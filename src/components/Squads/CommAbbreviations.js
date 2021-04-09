import React from "react";
import WikiIcon from '../WikiIcon';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
} from './styles'

const CommAbbreviations = () => {
    return (
        <SectionContainer>
            <NavTabs tabNames={["Roles, builds, traits and skills", "Bosses, wings"]} hrefs={["abbreviations-roles", "abbreviations-bosses"]} gameClass="commander">
                <TabPane tabName="abbreviations-roles" active={true}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>alac<br />alaren<br />alacren</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Renegade"} /> Alacrity renegade build; supplies <WikiIcon name={"Alacrity"} /> Alacrity for whole squad
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>ap</b>
                                    </td>
                                    <td>
                                        <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1786"></span>; <WikiIcon name={"Revenant"} /> Revenant trait that increases <WikiIcon name={"Ferocity"} /> Ferocity of nearby players
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>bk</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Black kiting; used on <WikiIcon name={"Deimos"} /> Deimos to force black circle mechanic to spawn under the boss
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>bs</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Berserker"} /> Warrior with banners
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>bt</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Thief"} /> Boonthief; either <WikiIcon name={"Thief"} /> Core Thief or <WikiIcon name={"Daredevil"} /> Daredevil, specific boon build played on select bosses only
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>dd</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Daredevil"} /> Daredevil
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>de</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Deadeye"} /> Deadeye
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>dh<br />dgh</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Dragonhunter"} /> Dragonhunter
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>ea</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1482"></span>, <WikiIcon name={"Berserker"} /> trait that increases <WikiIcon name={"Power"} /> Power of nearby allies
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>epi</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10606"></span>; <WikiIcon name={"Necromancer"} /> Necromancer’s utility skill, will refer to <WikiIcon name={"Scourge"} /> Scourge dps build playing it 95% of the time
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>healalac<br />healren</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Renegade"} /> Heal Alacrity renegade build; supplies <WikiIcon name={"Alacrity"} /> Alacrity for whole squad on top of heals
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>hb/hfb<br />hqfb<br />healbrand</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Firebrand"} /> Heal Firebrand build; it is expected to cover <WikiIcon name={"Quickness"} /> Quickness for its subgroup
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>hk</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Handkiter; special role and build played only on <WikiIcon name={"Deimos"} /> Deimos to deal with the hand mechanic
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>hscg</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Scourge"} /> Healscourge; specific <WikiIcon name={"Scourge"} /> Scourge build focused on giving barrier and huge resurrect potential
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>qb/qfb<br />quickbrand</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Firebrand"} /> Quickness Firebrand; <WikiIcon name={"Firebrand"} /> dps firebrand build that also covers <WikiIcon name={"Quickness"} /> Quickness
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>rr</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2182"></span>; <WikiIcon name={"Renegade"} /> condition Renegade playing the trait to cover <WikiIcon name={"Alacrity"} /> Alacrity for whole squad
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>soi</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10236"></span>; extends all boons for 3 seconds for nearby players
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>spb</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Spellbreaker"} /> Spellbreaker; usually refers to banner warrior playing <WikiIcon name={"Spellbreaker"} /> Spellbreaker on <WikiIcon name={"Qadim"} /> Qadim
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>slb</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Soulbeast"} /> Soulbeast
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>spiritbeast</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Soulbeast"} />
                                Soulbeast playing with either <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12498"></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12497"></span> as one of their utilities
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>stm</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2022"></span>; usually refers to <WikiIcon name={"Chronomancer"} /> Chronomancer playing the trait to supply <WikiIcon name={"Quickness"} /> Quickness
                            </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tabName="abbreviations-bosses" active={false}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>VG</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Vg"} /> Vale Guardian, first boss in wing 1
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>KC</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"KC"} /> Keep Construct, second boss in wing 3
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>TC</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Twisted Castle, third encounter in wing 3
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>MO</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"MO"} />Mursaat Overseer, second boss in wing 4
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>SH<br />Desmina</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"SH"} />Soulless Horror, first boss in wing 5
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>CA</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"CA"} /> Conjured Amalgamate, first boss in wing 6
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>Q1</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"Qadim"} /> Qadim, final boss of wing 6
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>Q2/Qtp<br />Qtpie</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        <WikiIcon name={"QTP"} /> Qadim the Peerless, final boss of wing 7
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>FC</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Fullclear; refers to full run of all (or specified) wings
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W1</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Spirit Vale
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W2</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Salvation Pass
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W3</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Stronghold of the Faithful
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W4</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Bastion of the Penitent
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W5</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Hall of Chains
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W6</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Mythwright Gambit
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W7</b>
                                    </td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Key of Ahdashim
                            </td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'center', padding: '5px 10px' }}>
                                        <b>W4 B3</b></td>
                                    <td style={{ padding: '5px 10px' }}>
                                        Squad is in wing 4 (Bastion of the Penitent) on third boss (Samarog) etc.
                            </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommAbbreviations