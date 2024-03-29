import React from "react";
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import SectionLink from '../../components/SectionLink';
import { SectionContainer } from './styles'

const DhWeaponSkills = () => {
    return (
        <SectionContainer>
            <NavTabs tabNames={["Greatsword", "Sword", "Scepter", "Focus", "Longbow"]} hrefs={["dh-gs", "dh-sword", "dh-scepter", "dh-focus", "dh-longbow"]} gameClass="dragonhunter">
                <TabPane tabName="dh-gs" active={true}>
                    <p>
                        As mentioned in previous sections, Greatsword is the go-to weapon for a <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter. It deals massive damage, has access to a powerful Symbol and some squad utility. You will always take it as your first weaponset.
                    </p><br />
                    <SkillCard skillID={[9137, 9138, 9139]}>
                        <p>
                            Autoattack chain consisting of 3 strikes. Every strike hits up to 3 targets. As usually in autoattack chains, last strike deals highest damage so you usually want to finish full autoattack chain for most damage output. Last strike of this chain also applies 1 stack of <WikiIcon name={"Might"} /> Might per target (hitting 3 targets will apply 3 stacks of <WikiIcon name={"Might"} /> Might).
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9081]}>
                        <p>
                            Damage goes BRRRRRRRRRRRRRR! Your highest dps skill. It hits 14 times - 7 hits from the spin, 7 hits from projectiles which fly out. In order to get all projectiles to hit the boss, you always want to use this skill in the middle of the hitbox of the boss. As usual, last hit of this skill deals the highest damage, so be careful to not cancel it by accident by using another skill or weaponswapping too early. It can hit up to 5 targets. It's also a <a href="https://wiki.guildwars2.com/wiki/Whirl_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Whirl finisher</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9080]}>
                        <p>
                            Helps with movement and allows you to get the boss faster (for example you can leap to <WikiIcon name={"Adina"} /> Adina from the pillar instead of walking). It does a small amount of healing and it <WikiIcon name={"Blinded"} /> Blinds your target. It can hit up to 5 targets. It's also a <a href="https://wiki.guildwars2.com/wiki/Leap_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Leap finisher</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9146]}>
                        <p>
                            Pulses 5 times dealing damage to the enemy and granting 1s of <WikiIcon name={"Resolution"} /> Resolution with every pulse to you and 4 other allies standing in it. Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="646" className="dhskill"></span> it also applies <WikiIcon name={"Vulnerability"} /> Vulnerability to your target. Grants 5 stacks of <a href="https://wiki.guildwars2.com/wiki/Symbolic_Avenger_(effect)" target="_blank" rel="noopener noreferrer" className="dhlink">Symbolic Avenger</a> increasing your damage by 10%. It's also a <a href="https://wiki.guildwars2.com/wiki/Light_field" target="_blank" rel="noopener noreferrer" className="dhlink">Light field</a>.
                        </p>
                        <p>
                            This skill has a pretty long aftercast which you can cancel by moving or stowing your weapons right after the Symbol appears on the ground. Cancelling the aftercast of this skill will bring you over ~1k dps increase (golem number).
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9147, 9226]}>
                        <p>
                            Throws projectiles and deals damage over time. It can hit up to 5 targets which are in 600 range, but if you use it inside the hitbox of the boss while other targets are around, it will hit once with all 5 projectiles, i.e. the boss will get all hits. This skill makes <WikiIcon name={"Dragonhunter"} /> Dragonhunter a strong choice in fights where mobs are around (for example Seekers at <WikiIcon name={"Vg"} /> VG, Spirits at <WikiIcon name={"Gorseval"} /> Gorseval, Slublings at <WikiIcon name={"Slothasor"} /> Sloth, Statues at <WikiIcon name={"KC"} /> KC, and more). You will find instructions on how to use this skill in the most efficient way in different fights in
                            <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides
                        </span>
                    </SectionLink>. It's also a <a href="https://wiki.guildwars2.com/wiki/Whirl_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Whirl finisher</a>.
                        </p>
                        <p>
                            This skill also has an aftercast which can be cancelled - by stowing your weapons right after projectiles are thrown.
                        </p>
                        <p>
                            The second skill of the sequence is a pull which allows you to pull mobs which get hit by the projectiles. Pulling the enemies will end the <a href="https://wiki.guildwars2.com/wiki/Binding_Blade_(effect)" target="_blank" rel="noopener noreferrer" className="dhlink">Binding Blade</a> effect.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-sword">
                    <p>
                        Sword is your melee dps option in the second weaponset. It should be paired with focus. Due to the recent scepter nerfs, it should be your go-to weapon on majority of bosses.
                    </p><br />
                    <SkillCard skillID={[9105, 9106, 9227]}>
                        <p>
                            Autoattack chain consisting of 3 strikes. Same as Greatsword autoattacks, every strike hits up to 3 targets. Again, as usually in autoattack chains, last strike deals highest damage so you usually want to finish full autoattack chain for most damage output. Last strike of this chain sends out 3 waves of attacks (enemies caught in the middle will get hit by all 3 waves) and has the biggest range out of all 3 strikes.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9097]}>
                        <p>
                            Teleports you to the target, applies <WikiIcon name={"Blinded"} /> Blindness to your enemy and creates a Symbol which pulses 5 times and grants <WikiIcon name={"Fury"} /> Fury with every pulse to you and 4 other allies standing in it. Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="646" className="dhskill"></span> it also applies <WikiIcon name={"Vulnerability"} /> Vulnerability to your target. Grants 5 stacks of <a href="https://wiki.guildwars2.com/wiki/Symbolic_Avenger_(effect)" target="_blank" rel="noopener noreferrer" className="dhlink">Symbolic Avenger</a> increasing your damage by 10%. It's also a <a href="https://wiki.guildwars2.com/wiki/Light_field" target="_blank" rel="noopener noreferrer" className="dhlink">Light field</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9107]}>
                        <p>
                            Casts damaging projectiles while blocking ranged attacks (3s block). The channel of this skill is pretty long and it can be interrupted by casting other skill or moving. To make sure that the cast of this skill is not interrupted (and to avoid aftercast), the best practice is to queue <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="44846" className="dhskill"></span> directly after.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-scepter">
                    <p>
                        Scepter is one of the 2 possible ranged dps options - all Scepter skills have 900 range. It should be paired with Focus. Due to the recent balance changes, it falls behind longbow in dps, so I would recommend playing longbow instead whenever you need ranged dps.
                    </p><br />
                    <SkillCard skillID={[9098]}>
                        <p>
                            A single autoattack skill, firing an orb at the boss. Low damage skill, used as a filler in your rotation while you are waiting for your burst skills to come off <WikiIcon name={"Recharge"} /> cooldown.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9090]}>
                        <p>
                            Hits the boss multiple times (8 impacts). Pulses 5 times granting 1s of <WikiIcon name={"Might"} /> Might with every pulse to you and 4 other allies standing in it. Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="646" className="dhskill"></span> it also applies <WikiIcon name={"Vulnerability"} /> Vulnerability to your target. Grants 4 stacks of <a href="https://wiki.guildwars2.com/wiki/Symbolic_Avenger_(effect)" target="_blank" rel="noopener noreferrer" className="dhlink">Symbolic Avenger</a> (unlike <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="9146" className="dhskill"></span> or <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29789" className="dhskill"></span>, the first pulse doesn't apply Avenger stacks). It's also a <a href="https://wiki.guildwars2.com/wiki/Light_field" target="_blank" rel="noopener noreferrer" className="dhlink">Light field</a>.
                        </p>
                        <p>
                            It has a small aftercast which can be cancelled by autoattacking afterwards.
                        </p>

                    </SkillCard>
                    <SkillCard skillID={[9099]}>
                        <p>
                            Immobilizes and applies <WikiIcon name={"Vulnerability"} /> Vulnerability to your enemy. This skill is not a part of your rotation and it will be mostly used to immobilize targets like Rigom at <WikiIcon name={"Samarog"} /> Samarog or Pride at <WikiIcon name={"Deimos"} /> Deimos.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-focus">
                    <p>
                        Focus is the only off-hand weapon you will take as a <WikiIcon name={"Dragonhunter"} /> Dragonhunter on the fights where you want to deal damage. Sometimes you can take Shield instead, for example on Escort when you are on tower duty or on River when you are on Desmina duty, but I will not cover it in this guide.
                    </p><br />
                    <SkillCard skillID={[9112]}>
                        <p>
                            Deals a decent amount of damage over time. It has a huge range (1200).
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[9082]}>
                        <p>
                            Creates a shield that blocks the next 3 attacks within the next 4 seconds. Explodes when it ends, dealing damage to enemies. It's a kind of skill which you can use to negate some mechanics like for example Slam on <WikiIcon name={"Gorseval"} /> Gorseval or as a panic button when you have no dodges available. If you feel safe, you can just use it in your rotation for damage. It's also a <a href="https://wiki.guildwars2.com/wiki/Blast_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Blast finisher</a> which is triggered when you activate the skill.
                        </p>
                    </SkillCard>
                </TabPane>
                <TabPane tabName="dh-longbow">
                    <p>
                        Longbow is your second ranged option which you can take as a secondary weaponset. Due to the recent balance changes, it pulls ahead of scepter in dps. All Longbow skills have minimum 1200 range.
                    </p><br />
                    <SkillCard skillID={[30471]}>
                        <p>
                            Autoattack which pierces multiple enemies. If more than 1 target is hit, it <WikiIcon name={"Crippled"} /> Cripples (2s) all hit targets (max 5 of them). It's also a <a href="https://wiki.guildwars2.com/wiki/Projectile_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Projectile finisher</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[30229]}>
                        <p>
                            Another attack piercing multiple foes, up to 5 targets. It has the biggest range of all longbow skills - 1500. It's also a <a href="https://wiki.guildwars2.com/wiki/Projectile_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Projectile finisher</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[29630]}>
                        <p>
                            Third and last of the piercing attacks. It's a <WikiIcon name={"Knockback"} /> Knockback which also applies <WikiIcon name={"Blinded"} /> Blind (4s) to enemies and blocks projectiles. It's unblockable. It's also a <a href="https://wiki.guildwars2.com/wiki/Projectile_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Projectile finisher</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[29789]}>
                        <p>
                            Pulses 5 times dealing damage to the enemy and granting 3s of <WikiIcon name={"Vigor"} /> Vigor with every pulse to you and 4 other allies standing in it. Applies <WikiIcon name={"Burning"} /> Burning (12s). Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="646" className="dhskill"></span> it also applies <WikiIcon name={"Vulnerability"} /> Vulnerability to your target. Grants 5 stacks of <a href="https://wiki.guildwars2.com/wiki/Symbolic_Avenger_(effect)" target="_blank" rel="noopener noreferrer" className="dhlink">Symbolic Avenger</a> increasing your damage by 10%. It's also a <a href="https://wiki.guildwars2.com/wiki/Light_field" target="_blank" rel="noopener noreferrer" className="dhlink">Light field</a>.
                        </p>
                    </SkillCard>
                    <SkillCard skillID={[30628]}>
                        <p>
                            Channeled skill which damages multiple times (4 impacts), applies <WikiIcon name={"Crippled"} /> Cripple (2s) and creates barrier at target location which cannot be crossed for 5 seconds.
                        </p>
                    </SkillCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhWeaponSkills