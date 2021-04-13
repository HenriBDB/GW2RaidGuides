import React from 'react'
import WikiIcon from '../../../WikiIcon'
import SectionIntro from '../../../SectionIntro'
import SectionCollapsible from '../../../SectionCollapsible'
import NavTabs from '../../../NavTabs'
import TabPane from '../../../TabPane'
import Staff from './Staff'
import Warhorn from './Warhorn'
import Axe from './Axe'
import Shortbow from './Shortbow'
import Longbow from './Longbow'

const WeaponSkills = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Weapon Skills" id="druid-weapon-skills">
            <SectionIntro>
                <p>
                    Your main weapon set will be Staff - Axe/Warhorn. It provides great healing while allowing you to easily upkeep boons like <WikiIcon name="Might"/> Might
                    , <WikiIcon name="Fury"/> Fury and <WikiIcon name="Regeneration"/> Regeneration. If you need the extra 
                    CC, you can also take a Shortbow with <span data-armory-embed="items" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="24639"></span>. 
                    Take the Shortbow instead of Axe/Warhorn if you still need the healing from Staff otherwise swap out the Staff for it. For fights where you are responsible for pushing, you can equip a Longbow 
                    thanks to <span data-armory-embed="skills" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="12511"></span>. For which weapon to take out, same rules apply as for Shortbow explained above. 
                    In contrast, should you wish to pull mobs like slublings on Slothasor or adds on Xera, you can take Axe offhand instead of Warhorn. If you are running condi druid, 
                    you might also equip a torch and other condition heavy weapons in the following setup: Shortbow - Axe/Torch.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Staff", "Warhorn", "Axe", "Shortbow", "Longbow"]} hrefs={["staff", "warhorn", "axe", "shortbow", "longbow"]}>
                <TabPane tabName={"staff"} active={true}>
                    <Staff/>
                </TabPane>
                <TabPane tabName={"warhorn"}>
                    <Warhorn/>
                </TabPane>
                <TabPane tabName={"axe"}>
                    <Axe/>
                </TabPane>
                <TabPane tabName={"shortbow"}>
                    <Shortbow/>
                </TabPane>
                <TabPane tabName={"longbow"}>
                    <Longbow/>
                </TabPane>
            </NavTabs>
        </SectionCollapsible>
    )
}

export default WeaponSkills