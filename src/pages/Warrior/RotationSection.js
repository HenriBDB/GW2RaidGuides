import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';

const RotationSection = () => {
    return (
        <>
        <NavTabs tabNames={["Power", "Condi"]} hrefs={["Power-r", "Condi-r"]} gameClass="warrior">
            <TabPane tabName="Power-r" active="true">
                <p>
                   The power rotations this guide will cover, are a slightly simplified Core Axe-only rotation, a
                   burst oriented Axe-only rotation, and a burst Greatsword rotation. These rotations should
                   provide a core understanding of how to play power banner warrior, and with a final section
                   covering how to use the different CC weapons efficiently, one should be well equipped for raids,
                   by learning the rotations laid out in this guide. An important aspect for these rotations is the
                   concept of queuing or chaining skills. Almost all of the Axe skills queue into each meaning that if
                   you cast Throw Axe while casting Cyclone Axe, Cyclone Axe will not be interrupted but instead,

                   when it finishes its cast, Throw Axe will instantly cast right after, instead of defaulting to auto-
                   attacks. By understanding and mastering this concept, you can speed up the rotation immensely,

                   not wasting any time interrupting auto-attacks because of being slow at casting skills.
               </p>
                <NavTabs tabNames={["Axe-only", "No-swap axe", "Greatsword", "CC"]} hrefs={["Axe-only", "No-swap axe", "Greatsword-r", "CC"]} gameClass="warrior">
                    <TabPane tabName="Axe-only" active="true">
                        <p>This rotation works well everywhere, some of the other rotations might beat it in certain
                           circumstances, but that should not take anything away from this rotation. You can see plenty of
                           success knowing this rotation and the CC part alone.
                        </p>
                    </TabPane>
                    <TabPane tabName="No-swap axe">
                    </TabPane>
                    <TabPane tabName="Greatsword-r">
                    </TabPane>
                    <TabPane tabName="CC">
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-r">
                <NavTabs tabNames={["Standard", "Leapfrog"]} hrefs={["Standard", "Leapfrog"]} gameClass="warrior">
                    <TabPane tabName="Standard">
                    </TabPane>
                    <TabPane tabName="Leapfrog">
                    </TabPane>
                </NavTabs>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default RotationSection;