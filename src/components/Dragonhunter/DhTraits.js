import React from "react";
import { Link } from 'react-scroll';
import SectionIntro from '../../components/SectionIntro';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import Zeal from './Traits/Zeal';
import Radiance from './Traits/Radiance';
import Virtues from './Traits/Virtues';
import DragonhunterTrait from './Traits/DragonhunterTrait';
import { SectionContainer } from './styles'


const DhTraits = ({ showGear, showRotation, showGuides }) => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p> This is your initial trait setup which you will be using in most groups on most raid encounters:</p>
                <div data-armory-embed="specializations" data-armory-ids="42,16,27" data-armory-42-traits="634,653,2017" data-armory-16-traits="574,565,1683" data-armory-27-traits="1898,1835,1955">
                </div>
                <br />
                <p>There are few bosses which will require you take 1 or 2 different traits (or the entire traitline). Those trait changes will also require gear adjustments (more info in
                    <Link to="dh-section-gear" smooth={true} duration={1000} onClick={showGear}>
                        <span
                            style={{ color: "#69CCE7", cursor: "pointer" }}>
                            &nbsp;Gear&nbsp;
                        </span>
                    </Link>
                section). However, you can also use the basic trait set up on every boss as a beginner with 1 gearset.
                Navigate with the tabs below to learn more about traits used for <WikiIcon name={"Dragonhunter"} /> Power Dragonhunter build (I will only go over actually used traits to keep this guide concise).</p>
            </SectionIntro>
            <NavTabs tabNames={["Zeal", "Radiance", "Virtues", "Dragonhunter"]} hrefs={["zeal", "radiance", "virtues", "dragonhunter"]} gameClass="dragonhunter">
                <TabPane tabName="zeal" active={true}>
                    <Zeal />
                </TabPane>
                <TabPane tabName="radiance">
                    <Radiance showRotation={showRotation} showGuides={showGuides} showGear={showGear}/>
                </TabPane>
                <TabPane tabName="virtues">
                    <Virtues showGear={showGear}/>
                </TabPane>
                <TabPane tabName="dragonhunter">
                    <DragonhunterTrait showRotation={showRotation}/>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhTraits