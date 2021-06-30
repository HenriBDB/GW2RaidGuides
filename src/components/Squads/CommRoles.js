import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIcon from '../WikiIcon';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import CommCard from '../../components/CommCard';
import {
    SectionContainer,
} from './styles'

const CommRoles = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal", textAlign: 'center' }} className="mb-0">
                    Some roles are related to specific bosses only and all are mentioned under <b>Special roles</b>.
                </p>
                <p style={{ fontStyle: "normal", textAlign: 'center' }} className="mt-0">
                    Rest we can break down to simple categories.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["DPS", "Banners", "Supports", "Tank", "Special Roles"]} hrefs={["squad-DPS", "squad-banners", "squad-supports", "squad-tank", "squad-special-roles"]} gameClass="commander">
                <TabPane tabName="squad-DPS" active={true}>
                    <p>
                        Damage dealers of all kinds. It’s definitely better if DPS players help the team in other ways than just hitting the boss as hard as they can, but in your everyday group, the expectations are simple - outdamage supports, deal with certain mechanics and survive.
                    </p>
                </TabPane>
                <TabPane tabName="squad-banners" active={false}>
                    <p>
                        DPS Warrior with two banners as utility skills. Not a pure DPS build, but also definitely not a support, comfortably sitting in a category of his own.
                    </p>
                </TabPane>
                <TabPane tabName="squad-supports" active={false}>
                    <p>
                        We can further divide them into healers, damage dealers and tanks, but at their core, they (should) always provide boons at the same time. No support should be doing only one thing, as it’s highly inefficient, always aim to cover more roles at once.
                    </p>
                    <div className="triangle-container">
                        <div className="triangle">
                            <p style={{ position: "absolute", top: -25, left: -25 }}>Boons</p>
                            <p style={{ position: "absolute", bottom: -245, left: -160 }}>Damage</p>
                            <p style={{ position: "absolute", bottom: -245, right: -160 }}>Healing</p>
                            <p style={{ position: "absolute", bottom: -115, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem", zIndex: 2 }}><WikiIcon name={"Renegade"} />&nbsp;Alaren</p>
                            <p style={{ position: "absolute", bottom: -155, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem", zIndex: 2 }}><WikiIcon name={"Firebrand"} />&nbsp;Quickbrand</p>
                            <p style={{ position: "absolute", bottom: -195, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem", zIndex: 2 }}><WikiIcon name={"Scrapper"} />&nbsp;Scrapper</p>
                            <p style={{ position: "absolute", bottom: -245, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem" }}><WikiIcon name={"Scourge"} />&nbsp;Healscourge</p>
                            <p style={{ position: "absolute", bottom: -122, left: -136, transform: "rotate(-56deg)", display: 'flex', fontSize: "0.8rem", zIndex: 2 }}><WikiIcon name={"Chronomancer"} />&nbsp;STM Chrono</p>
                            <p style={{ position: "absolute", bottom: -113, right: -109, transform: "rotate(56deg)", display: 'flex', fontSize: "0.8rem", zIndex: 2 }}><WikiIcon name={"Druid"} />&nbsp;Druid</p>
                            <div className="empty"></div>
                        </div>
                    </div>
                </TabPane>
                <TabPane tabName="squad-tank" active={false}>
                    <p>
                        Tanking is a bit special, as it’s not a standalone role but rather something you do as an extra job. While anyone (even DPS) can be a tank without major issues, it’s best for everyone if we let one of the supports do it - healers preferably.
                    </p>
                    <p>
                        To learn more, refer to our Tanking guide (coming soonTM)
                    </p>
                </TabPane>
                <TabPane tabName="squad-special-roles" active={false}>
                    <p>
                        Some mechanics will require a specific type of build in order to deal with them and people have certain expectations when looking for those.
                    </p>
                    <CommCard text={["Boonthief"]}>
                        <p>
                            Either <WikiIcon name={"Daredevil"} /> Daredevil or <WikiIcon name={"Thief"} /> Core Thief. Playable only on bosses with <WikiIcon name={"Plasma"} /> Detonate Plasma as their stolen skill, as without it BT can’t function - most commonly <WikiIcon name={"Adina"} /> Adina, <WikiIcon name={"Matthias"} /> Matthias and <WikiIcon name={"MO"} /> Mursaat Overseer. Can cover every boon in the game permanently with the exception of <WikiIcon name={"Alacrity"} /> Alacrity.  Replaces <WikiIcon name={"Quickness"} /> Quickness in one subgroup and if two are in a squad, they replace <WikiIcon name={"Might"} /> Might source as well.
                        </p>
                    </CommCard>
                    <CommCard text={["Epi"]}>
                        <p>
                            DPS <WikiIcon name={"Scourge"} /> Scourge playing with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10606"></span> as their utility skill. It spreads conditions to nearby enemies and it’s used on <WikiIcon name={"SH"} /> Soulless Horror (golem) and <WikiIcon name={"MO"} /> Mursaat Overseer (soldiers) or any add heavy fight. Replaces DPS.
                        </p>
                    </CommCard>
                    <CommCard text={["RR"]}>
                        <p>
                            DPS <WikiIcon name={"Renegade"} /> Renegade playing with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="2182"></span> trait to supply <WikiIcon name={"Alacrity"} /> Alacrity for the whole squad. You need two of them to achieve permanent uptime, or only one is taken to fill the gaps left by staff <WikiIcon name={"Mirage"} /> Mirage. Replaces <WikiIcon name={"Alacrity"} /> Alacrity source and DPS.
                        </p>
                    </CommCard>
                    <CommCard text={["Handkiter"]}>
                        <p>
                            Most commonly <WikiIcon name={"Herald"} /> Herald or <WikiIcon name={"Soulbeast"} /> Soulbeast, or any self-sustainable build. Taken only on <WikiIcon name={"Deimos"} /> Deimos to deal with hands. Replaces DPS.
                        </p>
                    </CommCard>
                    <CommCard text={["Pylon kiter"]}>
                        <p>
                            Most commonly <WikiIcon name={"Deadeye"} /> Rifle Deadeye or <WikiIcon name={"Scourge"} /> Scourge, however other self-sustainable builds exist. Taken on <WikiIcon name={"QTP"} /> Qadim the Peerless only, as their job is to control a pylon (which deals continuous damage) and collect orbs via movement skills. Replaces DPS.
                        </p>
                    </CommCard>
                    <CommCard text={["Kiter (Q1)"]}>
                        <p>
                            Most commonly <WikiIcon name={"Deadeye"} /> Deadeye, more options exist. Separated from the team for the majority of the fight, they need to be able to survive on their own while killing mobs. Replaces DPS.
                        </p>
                    </CommCard>
                    <CommCard text={["Tower Chrono"]}>
                        <p>
                            <WikiIcon name={"Chronomancer"} /> Chronomancer build played on <WikiIcon name={"Escort"} /> Escort only, you will be separated from the rest of the team to capture towers - either solo or by portaling the rest of the team there.
                        </p>
                    </CommCard>
                    <p style={{ textAlign: 'center' }}>
                        People ask for more roles in lfg - like cannons, pushers, kiters (Dhuum/Sabetha) - however all of those can be done by anyone or will be done by classes that are already in the squad (with some adjustment to the build if needed) for different reasons.
                    </p>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommRoles