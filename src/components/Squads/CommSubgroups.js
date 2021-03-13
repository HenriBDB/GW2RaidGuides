import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIcon from '../WikiIcon';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
} from './styles'

const CommSubgroups = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal", textAlign: 'center' }}>
                    Splitting into subgroups allows us to achieve our desired distribution of boons, buffs and heals. .
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Boon priority", "Buff Sharing", "Rules to remember"]} hrefs={["boon-priority", "buff-sharing", "rules-to-remember"]} gameClass="commander">
                <TabPane tabName="boon-priority" active={true}>
                    <p>
                        Each skill has a maximum <b>number of targets</b> it can effect at once - Either 5 or 10 (or unlimited). In raid scenario, the boon priority looks like:
                    </p>
                    <p style={{ fontSize: "1.2rem", textAlign: 'center', fontFamily: 'Montserrat' }}>
                        Subgroup &gt; Squad &gt; Minions (clones, spirits) &gt; NPCs (Desmina)
                    </p>
                    <p>
                        All boons are based on <b>proximity</b>: If all targets are in the same subgroup (or all are in different ones), whoever is closest to the center of the boon source will get the boons
                    </p>
                </TabPane>
                <TabPane tabName="buff-sharing" active={false}>
                    <p>
                        Buffs share the same priority as boons, however with how passive buffs application work, we can achieve great uptimes on more than 5 players
                    </p>
                    <p style={{ fontSize: "1.2rem", textAlign: 'center', fontFamily: 'Montserrat' }} className="comm-buffs">
                        <span data-armory-embed="traits" data-armory-size="30" data-armory-inline-text="wiki" data-armory-ids="1016"></span>, <span data-armory-embed="traits" data-armory-size="30" data-armory-inline-text="wiki" data-armory-ids="1786"></span>, <span data-armory-embed="traits" data-armory-size="30" data-armory-inline-text="wiki" data-armory-ids="1482"></span>, <span data-armory-embed="traits" data-armory-size="30" data-armory-inline-text="wiki" data-armory-ids="1984"></span>
                    </p>
                    <p>
                        All of these are passively applying <b>9 seconds of the buff every 3 seconds to nearby 5 players</b> (source included). If we have a subgroup of 5 players, it will only be ever applied to them, unless they’re out of range. However, if we have more players in one subgroup (or source is in a subgroup of its own), proximity priority will take over and it’s possible to achieve 90%+ uptime on 7 players.
                    </p>
                    <p style={{ textAlign: 'center' }}>
                        Healing behaves the same way, prioritizing subgroups. If the target is already at max health, the heal <b>overflows to the next damaged target</b> closest to the heal center of the heal source.
                    </p>
                </TabPane>
                <TabPane tabName="rules-to-remember" active={false}>
                    <p>
                        While pugging, you will pretty much only encounter <b>2 subgroups with 5 players each</b>. It’s the easiest and simplest way, but it works perfectly fine. But even with just 2 subgroups, there are rules you need to keep in mind, as correct subgroups can boost dps significantly for no effort.
                    </p>
                    <ul className="comm-to-remember">
                        <li>Once the fight starts, changing subgroups has no effect</li>
                        <li>One <WikiIcon name={"Quickness"} /> Quickness source in each subgroup (if present, <WikiIcon name={"Firebrand"} /> Firebrand should be separated from <WikiIcon name={"Druid"} /> Druid for guaranteed <WikiIcon name={"Fury"} /> Fury source in both groups)</li>
                        <li>If running 2 healers, separate them</li>
                        <li>If running soloheal, separate them from <WikiIcon name={"Renegade"} /> Alaren</li>
                        <li>DPS players who needs <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> -&gt; <WikiIcon name={"Druid"} /> Druid subgroup (if <WikiIcon name={"Soulbeast"} /> Power Soulbeast is present, separate him from <WikiIcon name={"Druid"} /> Druid and ask him to run <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>)</li>
                        <li>Power DPS players who don’t need <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span> -&gt; <WikiIcon name={"Renegade"} /> Alaren subgroup for <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1786"></span></li>
                        <li><WikiIcon name={"Berserker"} /> Power Warriors and <WikiIcon name={"Weaver"} /> Weavers -&gt; <WikiIcon name={"Druid"} /> Druid subgroup for <WikiIcon name={"Swiftness"} /> Swiftness (and <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>)</li>
                        <li>Group <WikiIcon name={"Dragonhunter"} /> Dragonhunters/ <WikiIcon name={"Guardian"} /> Core Guards together (and with <WikiIcon name={"Renegade"} /> Alaren) for <WikiIcon name={"Retaliation"} /> Retaliation</li>
                    </ul>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default CommSubgroups