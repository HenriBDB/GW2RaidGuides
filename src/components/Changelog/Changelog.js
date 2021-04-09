import React from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import CommCard from '../../components/CommCard';
import WikiIcon from '../WikiIcon';
import {
    ChangelogWrapper,
    ChangelogContainer,
    Title
} from './styles'

const Changelog = () => {

    return (
        <ChangelogWrapper>
            <ScrollArrow background='#7289DA' />
            <ChangelogContainer>
                <Title>
                    Changelog
                </Title>
                <div className="comm-summary">
                    <CommCard text={["15 April 2021"]}>
                        <ul>
                            <li>
                                Added <WikiIcon name={"Dragonhunter"} /> Dragonhunter, <WikiIcon name={"Berserker"} /> Warrior to <b>Class Guides</b> (up to date as of Balance Patch from 7th July 2020)
                        </li>
                            <li>
                                Added <WikiIcon name={"Commander"} /> <b>Commander Guide</b> (up to date as of Balance Patch from 7th July 2020)
                        </li>
                            <li>
                                Added Authors
                        </li>
                            <li>
                                Added Changelog
                        </li>
                            <li>
                                Work in progress: <WikiIcon name={"Druid"} /> Druid Guide, <WikiIcon name={"Berserker"} /> Warrior Guide
                        </li>
                        </ul>
                    </CommCard>
                </div>
            </ChangelogContainer>
        </ChangelogWrapper>
    )
}
export default Changelog