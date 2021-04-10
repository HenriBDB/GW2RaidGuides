import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import {Adina, CA, Cairn, Deimos, Dhuum, Escort, Gate, Gorseval, KC, Largos, Matthias, MO, Qadim, QtP, River, Sabetha, Sabir, Samarog, SH, Sloth, SpiritRun, Statues, TC, Trio, VG, Xera} from './Bosses';
const BossGuideSection = () => {
    return (
        <>
            <NavTabs tabNames={["Spirit Vale", "Salvation Pass", "Stronghold of the Faithful", "Bastion of the Penitent", "Hall of Chains", "Mythwright Gambit", "The Key of Ahdashim"]} hrefs={["w1", "w2", "w3", "w4", "w5", "w6", "w7"]} gameClass="warrior">
                <TabPane tabName="w1" active="true">
                    <p>
                        Wing one is overall power favoured, but you can find great success with both builds throughout
                        the entire wing. The wing as a whole is not very demanding of the warrior, and the banner
                        patterns for the different bosses are not very demanding or complicated either, given that
                        phases does not drag out too long.
                    </p>
                    <NavTabs tabNames={["Vale Guardian","Spirit Woods", "Gorseval the Multifarious", "Sabetha the Saboteur"]} hrefs={["vg","spirit","gorse","sab"]} gameClass="warrior">
                        <TabPane tabName="vg" active="true">
                            <VG/>
                        </TabPane>
                        <TabPane tabName="spirit">
                            <SpiritRun/>
                        </TabPane>
                        <TabPane tabName="gorse">
                            <Gorseval/>
                        </TabPane>
                        <TabPane tabName="sab">
                            <Sabetha/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w2">
                    <p>
                        This wing has one heavily power favoured encounter, and one heavily condition favoured
                        encounter, though both builds technically work on both encounters, the preferred builds are by
                        far better than the alternative. In this wing the first real challenge in terms of bannering shows
                        itself, but this is only for one of the encounters for this wing, the rest are fairly linear.
                    </p>
                    <NavTabs tabNames={["Slothasor", "Prison Camp", "Matthias Gabrel"]} hrefs={["sloth", "trio", "matthias"]} gameClass="warrior">
                        <TabPane tabName="sloth" active="true">
                            <Sloth/>
                        </TabPane>
                        <TabPane tabName="trio">
                            <Trio/>
                        </TabPane>
                        <TabPane tabName="matthias">
                            <Matthias/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w3">
                    <p>
                        Another heavily power favoured wing, though the condition build can find success on at least
                        one of the bosses in the wing. Here we will once again see some more complex banner patterns,
                        as well as more breakbars which would like some Maces to help break them.
                    </p>
                    <NavTabs tabNames={["Siege The Stronghold", "Keep Construct","Twisted Castle", "Xera"]} hrefs={["escort", "kc", "tc", "xera"]} gameClass="warrior">
                        <TabPane tabName="escort" active="true">
                            <Escort/>
                        </TabPane>
                        <TabPane tabName="kc">
                            <KC/>
                        </TabPane>
                        <TabPane tabName="tc">
                            <TC/>
                        </TabPane>
                        <TabPane tabName="xera">
                            <Xera/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w4">
                    <p>
                        This wing is fairly dynamic in which builds are good for each encounter, and for many of the
                        encounters the lesser build does not fall too far behind the better build. Both builds have clear
                        advantages and disadvantages on all the bosses except one, and this one boss is power favoured,
                        which means that the wing overall tips towards power builds. The banner patterns are not too
                        difficult for the first few encounters, but the later encounters can be harder to manage. Head
                        Butt can be used to break the float from not going to greens in a clutch.
                    </p>
                    <NavTabs tabNames={["Cairn the Indomitable", "Mursaat Overseer", "Samarog", "Deimos"]} hrefs={["cairn", "mo", "sama", "deimos"]} gameClass="warrior">
                        <TabPane tabName="cairn" active="true">
                            <Cairn/>
                        </TabPane>
                        <TabPane tabName="mo">
                            <MO/>
                        </TabPane>
                        <TabPane tabName="sama">
                            <Samarog/>
                        </TabPane>
                        <TabPane tabName="deimos">
                            <Deimos/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w5">
                    <p>
                        This wing is the first wing to be condition favoured when it comes to the bosses, though split
                        between the bosses and the encounters it is breaks even between power and condition. This
                        wing can be a real challenge when it comes to banner management, and there are encounter
                        specific mechanics that is more complex than the previous wings have had. Both power and
                        condition are viable for the whole wing.
                    </p>
                    <NavTabs tabNames={["Soulless Horror", "River of Souls", "Statues of Grenth", "Dhuum"]} hrefs={["sh", "river", "statues", "dhuum"]} gameClass="warrior">
                        <TabPane tabName="sh" active="true">
                            <SH/>
                        </TabPane>
                        <TabPane tabName="river">
                            <River/>
                        </TabPane>
                        <TabPane tabName="statues">
                            <Statues/>
                        </TabPane>
                        <TabPane tabName="dhuum">
                            <Dhuum/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w6">
                    <p>
                        For this wing both the power and the condition are relevant, but power build overall works
                        better on the majority of the encounters and is not much worse on the encounters where the
                        condition build is ahead. Most of the wing is fairly simple in its banner patterns, but the end
                        boss is rather complex if done optimally.
                    </p>
                    <NavTabs tabNames={["Conjured Amalgamate", "Twin Largos", "Qadim"]} hrefs={["ca", "largos", "qadim"]} gameClass="warrior">
                        <TabPane tabName="ca" active="true">
                            <CA/>
                        </TabPane>
                        <TabPane tabName="largos">
                            <Largos/>
                        </TabPane>
                        <TabPane tabName="qadim">
                            <Qadim/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
                <TabPane tabName="w7">
                    <p>
                        For this wing both builds are relevant for many of the encounters, though overall you can find
                        great success with power on all the encounters, where the condition build is only super relevant
                        on a couple of encounters. Banner patterns for these encounters are not too complex, and
                        decent uptimes are easily achievable throughout the entire wing.
                    </p>
                    <NavTabs tabNames={["Gates of Ahdashim", "Cardinal Adina", "Cardinal Sabir", "Qadim the Peerless"]} hrefs={["gate", "adina", "sabir", "qtp"]} gameClass="warrior">
                        <TabPane tabName="gate" active="true">
                            <Gate/>
                        </TabPane>
                        <TabPane tabName="adina">
                            <Adina/>
                        </TabPane>
                        <TabPane tabName="sabir">
                            <Sabir/>
                        </TabPane>
                        <TabPane tabName="qtp">
                            <QtP/>
                        </TabPane>
                    </NavTabs>
                </TabPane>
            </NavTabs>
        </>
    );
}

export default BossGuideSection;