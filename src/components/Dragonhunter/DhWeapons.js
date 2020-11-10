import React from "react";
import { Link } from 'react-scroll';
import { SectionContainer } from './styles'
import SectionIntro from '../../components/SectionIntro';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import BossCard from '../../components/BossCard';
import WikiIcon from '../../components/WikiIcon';
import VG from '../../assets/bosses/vg.png';
import Gorse from '../../assets/bosses/gorseval.png';
import Sabetha from '../../assets/bosses/sabetha.png';
import Sloth from '../../assets/bosses/slothasor.png';
import Trio from '../../assets/bosses/trio.png';
import Escort from '../../assets/bosses/escort.png';
import KC from '../../assets/bosses/kc.png';
import Xera from '../../assets/bosses/xera.png';
import Cairn from '../../assets/bosses/cairn.png';
import MO from '../../assets/bosses/mo.png';
import Samarog from '../../assets/bosses/samarog.png';
import Deimos from '../../assets/bosses/deimos.png';
import CA from '../../assets/bosses/ca.png';
import Adina from '../../assets/bosses/adina.png';


const DhWeapons = ({ showTraits }) => {
    return (
        <SectionContainer style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
            <SectionIntro>
                <p>
                    As a power Dragonhunter you will always play Greatsword (due to the <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="653" className="dhskill"></span> trait explained in
                <Link to="dh-section-traits" smooth={true} duration={1000} onClick={showTraits}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Traits
                    </span>
                    </Link>). In the other weaponset you will always take Focus as an offhand weapon. But what about mainhand - Scepter or Sword?
            </p>

                <p>
                    The biggest advantage of Sword over Scepter is higher damage. The biggest advantage of Scepter over Sword is having ranged dps option.
            </p>
                <p>
                    If you choose to play Sword, you have to remember about the issue with Radiance traits (<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> vs <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="566" className="dhskill"></span>). Go back to
                <Link to="dh-section-traits" smooth={true} duration={1000} onClick={showTraits}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Traits&nbsp;
                    </span>
                    </Link>
                if you missed it.
            </p>
                <p>
                    In general, Scepter is more universal and you can safely play it on every boss, you will just deal less dps than with Sword. Below you can find my personal recommendations for some raid bosses and events.
            </p>
            </SectionIntro>
            <NavTabs tabNames={["Wing 1", "Wing 2", "Wing 3", "Wing 4", "Wing 6", "Wing 7"]} hrefs={["dh-w1", "dh-w2", "dh-w3", "dh-w4", "dh-w6", "dh-w7"]} gameClass="dragonhunter">
                <TabPane tabName="dh-w1" active="true">
                    <BossCard src={VG} bossName={"Vale Guardian"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you are doing standard pug wall strat - allows you to attack the boss from range when he is running towards you while you are standing in the group getting all boons which are already being provided, like <WikiIcon name={"Might"} /> Might (range is useful if your tank steps in blues, ports around and makes the boss move a lot);<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if you are doing mid strat.
                       </p>
                    </BossCard>
                    <BossCard src={Gorse} bossName={"Gorseval"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> for easier orb clearing or if you are doing very slow cc and need to dodge out from the boss during cc phase;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if other people are clearing orbs too (don't forget to use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="44846" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> for orb clearing in such case).
                        </p>
                    </BossCard>
                    <BossCard src={Sabetha} bossName={"Sabetha"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if your group has troubles with kiting and there is a lot of flak in the middle of the boss; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> in any other case.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w2">
                    <BossCard src={Sloth} bossName={"Slothasor"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> - always (unless you are doing it in a very organized group where you will be sure about movement) - you need range if you get fixation or if Sloth gets stuck in poison due to bad fixation movement, getting cc or being stuck in shake animation.
                        </p>
                    </BossCard>
                    <BossCard src={Trio} bossName={"Trio"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> for safety at Narella.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w3">
                    <BossCard src={Escort} bossName={"Escort"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> for safety (unintentional porting with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9097" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> to mines took away many Guardian lives).
                        </p>
                    </BossCard>
                    <BossCard src={KC} bossName={"Keep Construct"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you are doing wall strat, so you can attack from range while boss is coming towards the group;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if you are doing mid strat.
                        </p>
                    </BossCard>
                    <BossCard src={Xera} bossName={"Xera"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you want to kill shards from range; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if you are not afraid of killing shards melee (just make sure you actually go out and kill them).
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w4">
                    <BossCard src={Cairn} bossName={"Cairn"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you are running to the greens or taking agony;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if you are using <WikiIcon name={"Stability"} /> Stability for greens and you are not taking agony.
                       </p>
                    </BossCard>
                    <BossCard src={MO} bossName={"Mursaat Overseer"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you need to help with killing Jades;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> if you don't need to help killing Jades.
                        </p>
                    </BossCard>
                    <BossCard src={Samarog} bossName={"Samarog"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> if you need to immobilize Rigom with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9099" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> or if you are not sure about other people movement and want to have ranged option for the green/friends mechanics; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> in any other case.
                        </p>
                    </BossCard>
                    <BossCard src={Deimos} bossName={"Deimos"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> - always - you need ranged option if tank movement is incorrect, if Oils get triggered or if Deimos is stuck in Oil during pizza/mind crush animation which happens very often.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w6">
                    <BossCard src={CA} bossName={"Conjured Amalgamate"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span>, you don't need any range here.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w7">
                    <BossCard src={Adina} bossName={"Adina"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7" }}>scepter</span> - safe option if you are on pillar duty, it lines up well when pillars appear, so all you need to do is to continue your rotation while moving out to place the pillar;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7" }}>sword</span> - more risky option if you are on pillar duty, which requires you to dodge out with pillar last second, then <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9097" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9080" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> back to the boss.
                       </p>
                    </BossCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhWeapons