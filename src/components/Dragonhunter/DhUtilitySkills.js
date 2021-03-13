import React from "react";
import SectionIntro from '../../components/SectionIntro';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import { SectionContainer } from './styles'

const DhUtilitySkills = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p>You will run the standard utility set in almost every raid. Small adjustments should be made when your squad setup requires it, however you should remember that swapping out any utility skill (apart from heal and elite) is a significant dps loss for a <WikiIcon name={"Dragonhunter"} /> Dragonhunter.</p>
            </SectionIntro>
            <NavTabs tabNames={["Healing", "Utility 1", "Utility 2", "Utility 3", "Elite"]} hrefs={["dh-heal", "dh-utility1", "dh-utility2", "dh-utility3", "dh-elite"]} gameClass="dragonhunter">
                <TabPane tabName="dh-heal" active={true}>
                    <p>
                        Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="574" className="dhskill"></span> you will gain <WikiIcon name={"Retaliation"} /> Retaliation when you use a heal skill, so on fights where you don't need to save it for certain mechanics to heal up, you can use it as a <WikiIcon name={"Retaliation"} /> Retaliation source.
                    </p>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                    <SkillCard skillID={[21664]}>
                        <p>
                            Very powerful heal skill in your build with the shortest cast time. 33% of damage which you deal to enemies is returned to you as healing. The duration of this effect is 6 seconds, which makes it a great skill for fights like <WikiIcon name="Gorseval"/> Gorseval (where you can safely damage the boss during CC phase after you use this heal skill), <WikiIcon name="Adina"/> Adina (to keep damaging her when she gets <WikiIcon name={"Retaliation"} /> Retaliation) or <WikiIcon name="Vg"/> VG (to get back to 100% health right after green explosion).
                        </p>
                    </SkillCard>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Alternative</h4>
                    </div>
                    <SkillCard skillID={[9102]}>
                        <p>
                            Very situational skill which I only recommend to use for events like Spirit Woods, Trio, Escort, River, Broken King, due to the easy access to 2s block, which can be handy during those events.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-utility1">
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                    <SkillCard skillID={[44846]}>
                        <p>
                            <a href="https://wiki.guildwars2.com/wiki/Spirit_Weapon" target="_blank" rel="noopener noreferrer" className="dhlink">Spirit Weapon</a> with 3 charges. You will use most charges in combination with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span>, however if you have a charge available outside the burst loop, always use it in combination with a symbol - <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9090" className="dhskill"></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9097" className="dhskill"></span>. It hits 4 times applying 3 stacks of <WikiIcon name={"Vulnerability"} /> Vulnerability per hit (max 12 stacks) and 3s of <WikiIcon name={"Crippled"} /> Cripple.
                        </p>
                        <p>
                            If you ever have to replace any of your utility skills for something else, you should replace this one for the least damage loss (the other 2 default utility skills are just too valuable for a <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter).
                        </p>
                    </SkillCard>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Alternatives</h4>
                    </div>
                    <SkillCard skillID={[9153]}>
                        <p>
                            Grants <WikiIcon name={"Retaliation"} /> Retaliation (5s) and <WikiIcon name={"Stability"} /> Stability (5 stacks for 6s) for the whole squad (10 people). You can use it when your <WikiIcon name={"Retaliation"} />Retaliation uptime is almost non existent (although at this point you may wanna play some other class) or when you need 10 man <WikiIcon name={"Stability"} /> Stability, for example on <WikiIcon name={"Slothasor"} /> Slothasor or <WikiIcon name={"Cairn"} /> Cairn. Only take this skill if literally noone else can provide <WikiIcon name={"Stability"} /> Stability, which would be very rare because you will have a <WikiIcon name={"Firebrand"} /> Healbrand, <WikiIcon name={"Firebrand"} /> Quickbrand, <WikiIcon name={"Renegade"} /> Alacrity Renegade or 2 <WikiIcon name={"Chronomancer"} /> Chronos in almost every pug squad (and any of those can provide <WikiIcon name={"Stability"} /> Stability at almost no cost).
                        </p>
                        <p>
                            Feel free to take this skill on meaningless events like Trio for Narella's tornadoes or on Escort for annoying mobs that could kick you into mines.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9084]}>
                        <p>
                            Provides easy access to <WikiIcon name={"Aegis"} /> Aegis (2 charges) which may be useful if you want to play Virtues build without a <WikiIcon name={"Thief"} /> Boonthief. However, if you really need to take this skill, you may consider playing <WikiIcon name={"Guardian"} /> Core Guardian, which doesn't lose as much dps with swapping out 1 utility skill as a <WikiIcon name={"Dragonhunter"} /> Dragonhunter does.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9251]}>
                        <p>
                            Only take it if you need to refect projectiles and noone else can do it. May be useful for hands on <WikiIcon name={"Adina"} /> Adina, bubble at <WikiIcon name={"Matthias"} /> Matthias or projectiles at <WikiIcon name={"Slothasor"} /> Slothasor (if your squad struggles with Slubling control).
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-utility2">
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                    <SkillCard skillID={[30364]}>
                        <p>
                            One of your highest dps skills which grants you <WikiIcon name={"Fury"} /> Fury and applies <WikiIcon name={"Slow"} /> Slow to your enemy (which makes your Power Chrono players very happy). Always try to pair this skill with <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> as they have the same <WikiIcon name={"Recharge"} /> cooldown so they line up together perfectly. It takes a while for this trap to trigger, so you can use it right before <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> so it activates when the 15% damage modifier from <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> is up.
                        </p>
                        <p>
                            Never ever swap this skill out.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-utility3">
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                    <SkillCard skillID={[9093]}>
                        <p>
                            It gives you +180 <WikiIcon name={"Power"} /> Power by default. With <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579" className="dhskill"></span> trait it grants you +216 <WikiIcon name={"Power"} /> Power. When you activate the signet, +216 <WikiIcon name={"Power"} /> Power buff is shared with your party for 10 seconds (max 5 targets, including you). With this trait you don't lose your passive <WikiIcon name={"Power"} /> Power increase when you activate the Signet. The <WikiIcon name={"Recharge"} /> recharge on the Signet gets reduced from 30s to 24s (without <WikiIcon name={"Alacrity"} /> Alacrity). If there are few Guardians using Signet with this trait, the Signet buffs stack, which means you can get even more <WikiIcon name={"Power"} /> Power increase. After the recent fix, using the Signet doesn't make you lose all your previous stacks anymore.
                        </p>
                        <p>
                            It's your best CC skill (300 breakbar damage) which should be used in combination with <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="579" className="dhskill"></span> trait for the reasons mentioned above.
                        </p>
                        <p>
                            Never ever swap this skill out.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-elite">
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Default</h4>
                    </div>
                    <SkillCard skillID={[30273]}>
                        <p>
                            Grants <WikiIcon name={"Might"} /> Might and applies <WikiIcon name={"Slow"} /> Slow on trigger (making your <WikiIcon name={"Chronomancer"}/> Power Chronos happy again). Pulls enemies and provides 150 instant breakbar damage (more over time due to <WikiIcon name={"Slow"}/> Slow).
                        </p>
                        <p>
                            This skill does not deal amazing damage, so you should always save it for CC in fights where CC is needed. You also won't lose much if you swap this skill for any other.
                        </p>
                    </SkillCard>
                    <div className="row justify-content-center">
                        <h4 className="mb-0">Alternatives</h4>
                    </div>
                    <SkillCard skillID={[29965]}>
                        <p>
                            Grants <WikiIcon name={"Fury"} /> Fury (10s) and <WikiIcon name={"Quickness"} /> Quickness (3s on allies, 6s on you) to 5 targets (including you). Take it if you are missing any of those boons or if you are stacking Guardians to cover <WikiIcon name={"Quickness"} /> Quickness. Very useful in fights with split phases.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[30461]}>
                        <p>
                            Provides a bit of healing on 5 targets every 3 seconds when it's passive and helps upkeeping scholar bonus on power classes. Active skill regenerates your and allies health to 100%. Useful in no healer comps (for example <WikiIcon name={"MO"} /> MO, <WikiIcon name={"Adina"} /> Adina), which are not seen in pugs, but rather in more tryhard statics. 
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9154]}>
                        <p>
                            Refreshes your virtues and makes you invulnerable for 3 seconds. Useful on River to refresh <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30225" className="dhskill"></span> and <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="30039" className="dhskill"></span> for heals and blocks, and on Broken King to not take any damage when the green circle under you is exploding. If you want to be a true hero, you can take it on <WikiIcon name={"Slothasor"} /> Slothasor to block projectiles from shake (jump in the middle his hitbox while being invulnerable).
                        </p>
                    </SkillCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhUtilitySkills