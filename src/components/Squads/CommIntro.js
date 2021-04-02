import React from "react";
import GuideTitle from "../GuideTitle";
import { GuideDescription, SectionContainer } from './styles';

const CommIntro = () => {
    return (
        <SectionContainer>
            <GuideTitle title="Commander's Compendium" footer="Raid squad compositions by Wasabi" />
            <GuideDescription>
                <p>&emsp;Ever wondered why SC raid comps differs so much from pug groups? Why do we split squad into two (or more) subgroups? What roles do you need to look for when pugging? This guide will teach you what goes into creating a functioning raid squad, with all the nuances and details.</p>
                <p>The goal is to teach and inform people about optimal (meta) raid compositions. Truth is, pretty much every encounter in the game can be done with whatever classes with no regards to composition, it’s player skill and understanding of the game that matters the most. However, bringing correct classes and creating a good, synergistic team makes things whole lot easier and allows us to achieve better boss kills. In the end, this is aimed at people who wish to improve, and understanding how classes work together is an important part of becoming a better player.</p>
                <p style={{fontSize: '1.5rem', textAlign: 'center', fontFamily: "Noto serif"}}>Guide is <span style={{color: 'green', fontFamily: "Noto serif"}}>up to date</span> as of JULY 7th 2020 balance patch</p>
            </GuideDescription>
        </SectionContainer>
    )
}
export default CommIntro