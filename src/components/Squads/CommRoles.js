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
                <p style={{ fontStyle: "normal", textAlign: 'center' }} class="mb-0">
                    Some roles are related to specific bosses only and all are mentioned under <b>Special roles</b>.
                </p>
                <p style={{ fontStyle: "normal", textAlign: 'center' }} class="mt-0">
                    Rest we can break down to simple categories.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["DPS", "Banners", "Supports", "Tank", "Special Roles"]} hrefs={["squad-dps", "squad-banners", "squad-supports", "squad-tank", "squad-special-roles"]} gameClass="commander">
                <TabPane tabName="squad-dps" active={true}>
                    <p>
                        Damage dealers of all kinds. It’s definitely better if dps players help the team in other ways than just hitting the boss as hard as they can, but in your everyday group, the expectations are simple - outdamage supports, deal with certain mechanics and survive.
                    </p>
                </TabPane>
                <TabPane tabName="squad-banners" active={false}>
                    <p>
                        DPS Warrior with two banners as utility skills. Not a pure dps build, but also definitely not a support, comfortably sitting in a category of his own.
                    </p>
                </TabPane>
                <TabPane tabName="squad-supports" active={false}>
                    <p>
                        We can further divide them into healers, damage dealers and tanks, but at their core, they (should) always provide boons at the same time. Tanking is a bit special, as it’s mostly trivial/non existent, but in a few cases there’s need for a dedicated tank.
                    </p>
                    <div className="triangle-container">
                        <div className="triangle">
                            <p style={{position: "absolute", top: -25, left: -25}}>Boons</p>
                            <p style={{position: "absolute", bottom: -245,left: -160}}>Damage</p>
                            <p style={{position: "absolute", bottom: -245, right: -160}}>Healing</p>
                            <p style={{position: "absolute", bottom: -130, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem", zIndex: 2}}><WikiIcon name={"Renegade"} />&nbsp;Alaren</p>
                            <p style={{position: "absolute", bottom: -180, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem", zIndex: 2}}><WikiIcon name={"Firebrand"} />&nbsp;Quickbrand</p>
                            <p style={{position: "absolute", bottom: -245, left: "-50%", transform: "translate(-50%, 0)", display: 'flex', fontSize: "0.8rem"}}><WikiIcon name={"Scourge"} />&nbsp;Healscourge</p>
                            <p style={{position: "absolute", bottom: -122, left: -136, transform: "rotate(-56deg)", display: 'flex', fontSize: "0.8rem", zIndex: 2}}><WikiIcon name={"Chronomancer"} />&nbsp;STM Chrono</p>
                            <p style={{position: "absolute", bottom: -113, right: -109, transform: "rotate(56deg)", display: 'flex', fontSize: "0.8rem", zIndex: 2}}><WikiIcon name={"Druid"} />&nbsp;Druid</p>
                            <div className="empty"></div>
                        </div>
                    </div>
                    <p>
                        No support should only do one thing. That’s why we don’t see <WikiIcon name={"Scrapper"} /> Heal scrappers that much for example, but <WikiIcon name={"Druid"} /> Druid is staple in almost every squad due to the sheer utility and dps boost they provide.
                    </p>
                </TabPane>
                <TabPane tabName="squad-tank" active={false}>
                    <p>
                        Tanking is the most misunderstood role in the game. Out of 25 encounters, 13 need dedicated tank, and only 4 (<WikiIcon name={"SH"} /> Soulless Horror, <WikiIcon name={"Largos"} /> Largos, <WikiIcon name={"QTP"} /> Qadim the Peerless, <WikiIcon name={"Eater"} /> Eater of Souls) are difficult enough to need actual tank build - <WikiIcon name={"Chronomancer"} /> <b>Chronotank</b> specifically.
                    </p>
                    <p>
                        Many will disagree - you can tank those bosses without a <WikiIcon name={"Chronomancer"} /> Chronotank, which is true, as it’s experience that matters the most. The main point is, that the majority of bosses can be easily tanked by any of the supports (or dps even) just by raising your <WikiIcon name={"Toughness"} /> Toughness a bit, as it boils down to - face the boss away, be aware of one or two attacks and move if needed.
                    </p>
                </TabPane>
                <TabPane tabName="squad-special-roles" active={false}>
                    <p>
                        Some mechanics will require a specific type of build in order to deal with them and people have certain expectations when looking for those.
                    </p>
                    <CommCard text={["Boon Thief"]}>
                        <p>
                            Either <WikiIcon name={"Daredevil"} /> Daredevil or <WikiIcon name={"Thief"} /> Core Thief. Playable only on bosses with <WikiIcon name={"Plasma"} /> Detonate Plasma as their stolen skill, as without it BT can’t function - most commonly <WikiIcon name={"Adina"} /> Adina, <WikiIcon name={"Matthias"} /> Matthias and <WikiIcon name={"MO"} /> Mursaat Overseer. Can cover every boon in the game permanently with the exception of <WikiIcon name={"Alacrity"} /> Alacrity.  Replaces both quickness supports (can partially function as healer too if build for it)
                        </p>
                    </CommCard>
                    <CommCard text={["Epi"]}>
                        <p>
                            DPS <WikiIcon name={"Scourge"} /> Scourge playing with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="10606" className="dhskill"></span> as their utility skill. It spreads conditions to nearby enemies and it’s used on <WikiIcon name={"SH"} /> Soulless Horror (golem) and <WikiIcon name={"MO"} /> Mursaat Overseer (soldiers). Replaces dps.
                        </p>
                    </CommCard>
                    <CommCard text={["Handkiter"]}>
                        <p>
                            Most commonly <WikiIcon name={"Herald"} /> Herald or <WikiIcon name={"Soulbeast"} /> Soulbeast, or any self-sustainable build. Taken only on <WikiIcon name={"Deimos"} /> Deimos to deal with hands. Replaces dps.
                        </p>
                    </CommCard>
                    <CommCard text={["Pylon kiter"]}>
                        <p>
                            Most commonly <WikiIcon name={"Deadeye"} /> Rifle Deadeye or <WikiIcon name={"Scourge"} /> Scourge, however other self-sustainable builds exist. Taken on <WikiIcon name={"QTP"} /> Qadim the Peerless only, as their job is to control a pylon (which deals continuous damage) and collect orbs via movement skills. Replaces dps.
                        </p>
                    </CommCard>
                    <CommCard text={["Kiter (Q1)"]}>
                        <p>
                            Most commonly <WikiIcon name={"Deadeye"} /> Deadeye, more options exist. Separated from the team for the majority of the fight, they need to be able to survive on their own while killing mobs. Replaces dps.
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