import React from "react";
import SectionIntro from '../SectionIntro';
import WikiIcon from '../WikiIcon';
import NavTabs from '../NavTabs';
import TabPane from '../TabPane';
import {
    SectionContainer,
} from './styles'

const CommClasses = () => {
    return (
        <SectionContainer>
            <SectionIntro>
                <p style={{ fontStyle: "normal", textAlign: 'center' }}>
                    Once boons and buffs are covered, the choice of classes and builds depend on the encounter.
                </p>
            </SectionIntro>
            <NavTabs tabNames={["Utility", "DPS"]} hrefs={["squad-utility", "squad-dps-class"]} gameClass="commander">
                <TabPane tabName="squad-utility" active={true}>
                    <p>
                        Anything from extra cc to skills that allow us to approach the encounter in a different (better) way. Not limited to supports, as dps players have a lot to offer too. If we can utilize thief or mesmer portals, we should take advantage of that. Projectile blocks/reflect may come in handy on some encounters, whereas pulls are usually mandatory on select bosses with adds.
                    </p>
                    <p>
                        Due to this, and many different reasons, it may be wise to pick <WikiIcon name={"Chronomancer"} /> STM Chrono over <WikiIcon name={"Firebrand"} /> Quickbrand (and the other way around), or <WikiIcon name={"Renegade"} /> Renegade over <WikiIcon name={"Dragonhunter"} /> Dragonhunter. Think about what you can offer to the team, and if you can utilize it on the boss. Adjusting your utility skills is also a good idea, if you can’t bring different class.
                    </p>
                </TabPane>
                <TabPane tabName="squad-dps-class" active={false}>
                    <p>
                        While a lot of people tend to simply split dps choices into “bring power here and condi there”, <b>it’s not that simple</b>. Often, the correct choice is simply <b>whatever you’re most experienced with</b>. Once you expand your roster and you will have more options to choose from however, there is more nuance to it than just power/condi.
                    </p>
                    <p>
                        This might be obvious, but sometimes the right answer is just class with <b>highest damage output</b>. Previous patch, a lot of raid records were beaten with <WikiIcon name={"Chronomancer"} /> <b>Power Chronomancers</b>, even bosses that the community deemed as <b>condi</b>. Why is that?
                    </p>
                    <p>
                        With the exception of <WikiIcon name={"Confusion"} /> <b>Confusion</b> (and <WikiIcon name={"Torment"} /> Torment, to a lesser extent), bosses <b>do not</b> take more damage from conditions than usual. It has to do more with <WikiIcon name={"Invuln"} /> <b>invulnerability phases</b> and other elements, like short damage boosts (<WikiIcon name={"UnnaturalSignet"} /> signet on <WikiIcon name={"Deimos"} /> Deimos, <WikiIcon name={"Fractured"} /> swords on <WikiIcon name={"CA"} /> CA). While the damage <b>boosts both</b> types of damage, the short durations (and short phases) tends to favor power damage more, as conditions need a while to ramp up.
                    </p>
                    <p>
                        However, what’s important to note, even the ‘short’ phases - <WikiIcon name={"Slothasor"} /> Slothasor, <WikiIcon name={"Gorseval"} /> Gorseval or <WikiIcon name={"CA"} /> Conjured Amalgamate for example - <b>are long enough for conditions to catch up</b>. In pug groups, that is, in organized groups where you know the damage output of your teammates, it might not hold true.
                    </p>
                    <p>
                        Another thing to consider is <b>movement</b>. Some classes, be it power or condi, have no problem maintaining their rotations while moving, or they’re not relying on the <b>boss staying in their damaging fields</b>. For others, it’s a deal breaker if they, or the boss, needs to move.
                    </p>
                    <p>
                        Last but not least, the choice of power or condi class can be determined by <b>split phase adds</b>. Conjured Amalgamate is a good example - while the main burst phase is usually long enough for condi class to ramp up, the hand phases are quite short, making it really hard for some builds to do any reasonable damage in the short amount of time. Squad with one or two condi dps players will be fine, but if everyone is playing condi classes, destroying the hands alone may prove difficult.
                    </p>
                    <p>
                        <b>TL:DR</b>, stop thinking about dps classes in a vacuum, as it’s wrong to just simplify them into power or condi variants, and <b>start thinking about each build individually</b> instead.
                    </p>
                </TabPane>
            </NavTabs>
        </SectionContainer >
    )
}
export default CommClasses