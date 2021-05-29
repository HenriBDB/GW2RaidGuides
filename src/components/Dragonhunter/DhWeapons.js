import React from "react";
import { SectionContainer } from './styles'
import SectionIntro from '../../components/SectionIntro';
import SectionLink from '../../components/SectionLink';
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


const DhWeapons = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    As a <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter you will always play Greatsword (due to the <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="653" className="dhskill"></span> trait explained in
                    <SectionLink sectionId="dh-section-traits">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Traits
                        </span>
                    </SectionLink>). But what about the other weaponset - Sword / Focus or Scepter / Focus? Or maybe Longbow?
            </p>

                <p>
                    Due to the recent nerfs, Scepter is not really a good choice as a ranged dps option anymore, so if you need range you can play Longbow instead.
            </p>
                <p>
                    If you choose to play Sword, you have to remember about the issue with Radiance traits (<span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> vs <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="566" className="dhskill"></span>). Go back to
                    <SectionLink sectionId="dh-section-traits">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Traits&nbsp;
                        </span>
                    </SectionLink>
                if you missed it.
            </p>
            <p>
                Most people will probably recommend you to play Sword no matter what as it's more dps, however I can see Longbow being useful in some situations, especially in less experienced groups where you don't get perfect conditions to stay on the boss at all times and execute your Sword rotation. Below you can find my personal recommendations for some raid bosses and events.
            </p>
            </SectionIntro>
            <NavTabs tabNames={["Wing 1", "Wing 2", "Wing 3", "Wing 4", "Wing 6", "Wing 7"]} hrefs={["dh-w1", "dh-w2", "dh-w3", "dh-w4", "dh-w6", "dh-w7"]} gameClass="dragonhunter">
                <TabPane tabName="dh-w1" active={true}>
                    <BossCard src={VG} bossName={"Vale Guardian"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold" }}>longbow</span> if you are doing standard pug wall strat - allows you to attack the boss from range when he is running towards you while you are standing in the group getting all boons which are already being provided, like <WikiIcon name={"Might"} /> Might (range is useful if your tank steps in blues, ports around and makes the boss move a lot);<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> if you are doing mid strat.
                       </p>
                    </BossCard>
                    <BossCard src={Gorse} bossName={"Gorseval"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if you struggle with orb clearing or you are doing very slow cc and need to dodge out from the boss during cc phase;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> in any other case (don't forget to use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="44846" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> for orb clearing in such case).
                        </p>
                    </BossCard>
                    <BossCard src={Sabetha} bossName={"Sabetha"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if your group has troubles with kiting and there is a lot of flak in the middle of the arena which doesn't allow you stay meele; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> in any other case.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w2">
                    <BossCard src={Sloth} bossName={"Slothasor"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> - in most pug scenarios - you need range if you get fixation so you can continue attacking while moving to new position or if Sloth gets stuck in poison (which can happen due to bad fixation movement, getting cc or being stuck in shake animation).
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> in any organized group where you are sure about correct fixation movement.
                        </p>
                    </BossCard>
                    <BossCard src={Trio} bossName={"Trio"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> for safety at Narella.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w3">
                    <BossCard src={Escort} bossName={"Escort"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> for safety (unintentional porting with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9097" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> to mines took away many Guardian lives) and easy adds clearing from distance.
                        </p>
                    </BossCard>
                    <BossCard src={KC} bossName={"Keep Construct"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> in beginner groups, if you need to spread out with bombs or move far away with fixation;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> in more experienced groups.
                        </p>
                    </BossCard>
                    <BossCard src={Xera} bossName={"Xera"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if you need to kill shards from range; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> if you are not afraid of killing shards melee (just make sure you actually go out and kill them).
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w4">
                    <BossCard src={Cairn} bossName={"Cairn"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if you are running to greens or taking agony;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> if you are using <WikiIcon name={"Stability"} /> Stability for greens and you are not taking agony.
                       </p>
                    </BossCard>
                    <BossCard src={MO} bossName={"Mursaat Overseer"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if you need to help with killing Jades;<br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> if you don't need to help killing Jades.
                        </p>
                    </BossCard>
                    <BossCard src={Samarog} bossName={"Samarog"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> if you are not sure about other people movement and want to have ranged option for the green/friends mechanics; <br />
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> in any other case.
                        </p>
                    </BossCard>
                    <BossCard src={Deimos} bossName={"Deimos"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>longbow</span> - in most pugs/less organized groups - you want ranged option if tank movement is incorrect, if Oils get triggered or if Deimos is stuck in Oil during pizza/mind crush animation which happens very often; also obviously when doing ranged Deimos strat.
                        </p>
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> - if you feel confident with your tank's movement and black spawning.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w6">
                    <BossCard src={CA} bossName={"Conjured Amalgamate"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span>, you don't need any range here.
                        </p>
                    </BossCard>
                </TabPane>
                <TabPane tabName="dh-w7">
                    <BossCard src={Adina} bossName={"Adina"} gameClass="dragonhunter">
                        <p>
                            - <span style={{ color: "#69CCE7", fontWeight: "bold"  }}>sword</span> - longbow rotation doesn't align well with pillars spawning so I would recommend sword even if you are on pillar duty - you can dodge out with pillar last second, then <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9097" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9080" className="dhskill" style={{ color: '#69CCE7', textDecorationColor: '#69CCE7' }}></span> back to the boss.
                       </p>
                    </BossCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhWeapons