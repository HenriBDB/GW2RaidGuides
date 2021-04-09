import React from "react";
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import SectionIntro from '../../components/SectionIntro';
import SectionLink from '../../components/SectionLink';
import { SectionContainer } from './styles'

const DhVirtuesSkills = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p>
                    <a href="https://wiki.guildwars2.com/wiki/Virtue" target="_blank" rel="noopener noreferrer" className="dhlink">Virtues</a> are special abilities available only to Guardians. They have both passive and active effects and you can find them in your F1-F3 slots by default.
                </p>
            </SectionIntro>
            <SkillCard skillID={[29887, 33134]}>
                <p>
                    Your biggest damage modifier. Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1955" className="dhskill"></span> it grants 15% damage increase to enemies tethered to you. It <WikiIcon name={"Blinded"} /> Blinds, <WikiIcon name={"Crippled"} /> Cripples and <WikiIcon name={"Burning"} /> Burns your enemies. Your rotation is built around it - more details in
                    <SectionLink sectionId="dh-section-rotation">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Rotation
                        </span>
                    </SectionLink>.
                </p>
                <p>
                    The second skill of the sequence is a pull which allows you to pull mobs from a big distance (1200 range) and CC (150 breakbar damage). Using the pull will deactivate 15% damage modifier, so use it wisely. It has a separate <WikiIcon name={"Recharge"} /> cooldown from the first skill in the sequence.
                </p>
                <p>
                    Due to <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="571" className="dhskill"></span> the first skill (<span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> ) will get renewed (i.e. fully <WikiIcon name={"Recharge"} /> recharged) when you kill a foe. However, <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="33134" className="dhskill"></span>  will not get <WikiIcon name={"Recharge"} /> recharged. This will work only with enemies that give you experience after they are killed, for example Blue, Green and Red Guardians at <WikiIcon name="Vg" /> VG, Sappers at <WikiIcon name="Sabetha" /> Sabetha, Slublings at <WikiIcon name="Slothasor" /> Slothasor. It allows you to use <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="29887" className="dhskill"></span> more often in some fights which leads to dps increase. To see how it works in practice on different bosses check out
                    <SectionLink sectionId="dh-section-guides">
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Boss Guides
                        </span>
                    </SectionLink>.
                </p>
            </SkillCard>
            <SkillCard skillID={[30225]}>
                <p>
                    It's a targeted skill which allows you to leap to the target area within 800 range, healing you and allies around you and cleansing 2 conditions from you. It provides 100 breakbar damage if used as a <a href="https://wiki.guildwars2.com/wiki/Leap_finisher" target="_blank" rel="noopener noreferrer" className="dhlink">Leap finisher</a> into <a href="https://wiki.guildwars2.com/wiki/Lightning_field" target="_blank" rel="noopener noreferrer" className="dhlink">Lightning field</a>.
                </p>
                <p>
                    Very useful for movement (getting to the boss, getting to <WikiIcon name="Sabetha" /> Sabetha cannons, dropping poison on <WikiIcon name="Slothasor" /> Slothasor, etc.) and self condi cleanse for example on <WikiIcon name="Dhuum" /> Dhuum if your healers are struggling.
                </p>
            </SkillCard>
            <SkillCard skillID={[30039]}>
                <p>
                    Passive skill grants you <WikiIcon name={"Aegis"} /> Aegis every 40 seconds. Active skill grants <WikiIcon name={"Aegis"} /> Aegis to you and 4 of your allies. It also creates a shield in front of you which will block attacks for 3 seconds (it will not block attacks from the side or behind). It will also block the AoEs under your feet like blue teleports at <WikiIcon name="Cairn" /> Cairn or <WikiIcon name="Vg" /> VG, pizza on <WikiIcon name="Deimos" /> Deimos, tantrum on <WikiIcon name="Slothasor" /> Slothasor, provided that you don't move after casting it.
                </p>
            </SkillCard>
        </SectionContainer>
    )
}
export default DhVirtuesSkills