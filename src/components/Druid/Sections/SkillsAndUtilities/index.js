import React from 'react';
import WikiIcon from '../../../WikiIcon'
import SectionIntro from '../../../SectionIntro';
import SectionCollapsible from '../../../SectionCollapsible';

const SkillsAndUtilities = () => {
    return(
        <SectionCollapsible gameClass="ranger" title="Skills and Utilities" id="druid-skills">
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
        </SectionCollapsible>
    )
}

export default SkillsAndUtilities