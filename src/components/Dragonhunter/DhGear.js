import React from "react";
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import GearCard from '../../components/GearCard';
import { SectionContainer } from './styles'

const DhGear = () => {
    return (
        <SectionContainer>
            <NavTabs tabNames={["Standard", "Perfect Insctriptions", "Virtues"]} hrefs={["dh-standard-gear", "dh-pi-gear", "dh-virtues-gear"]} gameClass="dragonhunter">
                <TabPane tabName="dh-standard-gear" active="true">
                    <GearCard text={["No ", <span data-armory-embed="traits" data-armory-size="20" data-armory-inline-text="wiki" data-armory-ids="1016"></span>, " required"]}>
                        <p>
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum

                       </p>
                    </GearCard>
                </TabPane>
                <TabPane tabName="dh-pi-gear">
                    <GearCard skillID={1016}>
                        <p>
                            PI RHS Spotter
                        </p>
                    </GearCard>
                    <GearCard skillID={1016}>
                        <p>
                            PI RHS No Spotter
                        </p>
                    </GearCard>
                    <GearCard skillID={1016}>
                        <p>
                            PI RI Spotter
                        </p>
                    </GearCard>
                    <GearCard skillID={1016}>
                        <p>
                            PI RI No Spotter
                        </p>
                    </GearCard>
                </TabPane>
                <TabPane tabName="dh-virtues-gear">
                    <GearCard skillID={1016}>
                        <p>
                            Virtues Spotter
                        </p>
                    </GearCard>
                    <GearCard skillID={1016}>
                        <p>
                            Virtues No Spotter
                        </p>
                    </GearCard>
                </TabPane>
            </NavTabs>
        </SectionContainer>
    )
}
export default DhGear