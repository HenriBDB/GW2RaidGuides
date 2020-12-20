import React from 'react';
import SkillCard from '../../components/SkillCard';
import WikiIcon from '../../components/WikiIcon';
import NavTabs from '../../components/NavTabs';
import TabPane from '../../components/TabPane';
import {AxeOnly, CC, Condi, FastHands, Greatsword, Leapfrog, Longbow, NoSwap} from './Rotation'

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
                <NavTabs tabNames={["Axe-only", "No-swap-axe", "Greatsword", "CC"]} hrefs={["Axe-only", "No-swap-axe", "Greatsword-r", "CC"]} gameClass="warrior">
                    <TabPane tabName="Axe-only" active="true">
                        <p>
                            For this rotation, the parts of it which matches the standard rotation will not be described in detail, only the parts which deviates from the core will be described.
                            The goal of this rotation is to not have to do Chop + Double Chop while in berserk, ever.
                            This is done by lowering Whirling Axe priority and instead focusing on Decapitates, only using Whirling Axe when everything else is on cooldown.
                        </p>
                        <AxeOnly/>
                    </TabPane>
                    <TabPane tabName="No-swap-axe">
                        <p>
                            This rotation works well everywhere, some of the other rotations might beat it in certain circumstances, but that should not take anything away from this rotation.
                            You can see plenty of success knowing this rotation and the CC part alone.
                        </p>
                    </TabPane>
                    <TabPane tabName="Greatsword-r">
                        <p>
                            This is a very technical rotation and by no means beginner friendly. Even if my adaptation of the
                            rotation is slightly easier than the optimal rotation, it is still difficult to execute if you are not
                            paying attention to detail. The idea is much the same as the burst Axe rotation, but instead of
                            using Whirling Axe as buffer, the Greatsword is the buffer.
                        </p>
                    </TabPane>
                    <TabPane tabName="CC">
                        <p>
                            When bringing weapons for CC, you will never want to swap to these weapons, outside of when
                            they are needed for CC. This means that the parts of the Axe rotations which dictates to swap
                            weapons + Chop, now becomes Chop + Double Chop instead. When you finally do swap to the CC
                            weapon set you want to quickly cast all the skills which deal breakbar damage, and then swap
                            back to Axes. The rotations outlined here are the order in which you want to cast your skills to
                            fit in as much CC as you can in the 5 seconds swap cooldown.
                        </p>
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-r">
                <NavTabs tabNames={["Standard", "Leapfrog", "Faster-Hands"]} hrefs={["Standard", "Leapfrog", "Faster-Hands"]} gameClass="warrior">
                    <TabPane tabName="Standard" active="true">
                    </TabPane>
                    <TabPane tabName="Leapfrog">
                    </TabPane>
                    <TabPane tabName="Faster-Hands">
                    </TabPane>
                </NavTabs>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default RotationSection;