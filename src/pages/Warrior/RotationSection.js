import React from 'react';
import SkillCard from '../../components/SkillCard';
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
                <NavTabs tabNames={["Axe-only", "No-swap-axe", "Greatsword", "Longbow", "CC"]} hrefs={["Axe-only", "No-swap-axe", "Greatsword-r", "Longbow-r", "CC"]} gameClass="warrior">
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
                        <NoSwap/>
                    </TabPane>
                    <TabPane tabName="Greatsword-r">
                        <p>
                            This is a very technical rotation and by no means beginner friendly. Even if my adaptation of the
                            rotation is slightly easier than the optimal rotation, it is still difficult to execute if you are not
                            paying attention to detail. The idea is much the same as the burst Axe rotation, but instead of
                            using Whirling Axe as buffer, the Greatsword is the buffer.
                        </p>
                        <Greatsword/>
                    </TabPane>
                    <TabPane tabName="Longbow-r">
                        <p>
                            This rotation has a near perfect loop, where the only thing that can change from loop to loop
                            is swapping a Throw axe with a chop, and vice versa. This is a very bursty rotation that spikes
                            higher than the other rotations and faster, but falls off just as fast. It is only suited for
                            short phases or burst heavy encounters.
                        </p>
                        <Longbow/>
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
                        <CC/>
                    </TabPane>
                </NavTabs>
            </TabPane>
            <TabPane tabName="Condi-r">
                <p>
                    The condition damage guide will explain the structure of the rotation in a more approachable
                    way than most other sources do. The condition rotations are significantly harder than the power
                    rotations, given that they are not only fast paced, but also very unforgiving when it comes to mistakes.
                    Depending on the scale of the mistakes made, they may or may not haunt you further down the
                    rotation. This section will cover the standard rotation and my own creations, the leapfrog-
                     and "Faster-Hands" rotation.
                </p>
                <NavTabs tabNames={["Standard", "Leapfrog", "Faster-Hands"]} hrefs={["Standard", "Leapfrog", "Faster-Hands"]} gameClass="warrior">
                    <TabPane tabName="Standard" active="true">
                        <p>
                            The easiest way to present the structure of the condition rotation is to lay out parts of it in the
                            form of building blocks.
                        </p>
                        <Condi/>
                    </TabPane>
                    <TabPane tabName="Leapfrog">
                        <p>
                            Savage Leap is seemingly useless in the standard rotation, but if used in a fire field you gain fire
                            aura from the combo finisher. This fire aura can then be detonated thanks to King of Fires. This
                            is the concept the leapfrog rotation was designed around, weaving in Savage Leap and
                            detonating the fire aura for additional damage. The rotation is incredibly greedy at times, which
                            makes different parts of it hard to execute without a perfect rotation, and is in itself mostly
                            useless in a real raid scenario since getting a non-fire field finisher with Savage Leap destroys
                            the whole point of the rotation.
                        </p>
                        <Leapfrog/>
                    </TabPane>
                    <TabPane tabName="Faster-Hands">
                        <p>
                            This rotation is a slight adaptation of the standard condition rotation, swapping off
                            sword/torch earlier than you would otherwise, which in turns makes all your skills line up
                            differently. This means that you end your rotation on the golem on sword which slightly
                            inflates the damage of the benchmark. It should only be seen as an alternative to the standard
                            rotation,not a replacement of it.
                        </p>
                        <FastHands/>
                    </TabPane>
                </NavTabs>
            </TabPane>
        </NavTabs>
        </>
    );
}

export default RotationSection;