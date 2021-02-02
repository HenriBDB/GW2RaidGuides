import React, { useState } from "react";
import {
    HomeContainer,
    PanelContainer,
    Panel,
    PanelTitle,
    Link
} from './styles'
import dhBackground from '../../assets/backgrounds/dragohunter.jpg'
import druidBackground from '../../assets/backgrounds/druid.jpg'
import warriorBackground from '../../assets/backgrounds/warrior.jpg'
import dhTitle from '../../assets/titles/DragonhunterTitle.png';
import druidTitle from '../../assets/titles/DruidTitle.png';
import warriorTitle from '../../assets/titles/WarriorTitle.png';

const HomeView = () => {
    const [panelDhExpanded, setDhPanelExpanded] = useState(true)
    const [panelDruidExpanded, setDruidPanelExpanded] = useState(false)
    const [panelWarriorExpanded, setWarriorPanelExpanded] = useState(false)

    const expandDhPanel = () => {
        setDhPanelExpanded(true);
        setDruidPanelExpanded(false);
        setWarriorPanelExpanded(false);
    }
    const expandDruidPanel = () => {
        setDhPanelExpanded(false);
        setDruidPanelExpanded(true);
        setWarriorPanelExpanded(false);
    }
    const expandWarriorPanel = () => {
        setDhPanelExpanded(false);
        setDruidPanelExpanded(false);
        setWarriorPanelExpanded(true);
    }

    return (
        <HomeContainer>
            <PanelContainer>
                <Panel
                    style={{
                        flex: panelDhExpanded ? '5' : '1',
                        cursor: panelDhExpanded ? 'auto' : 'pointer',
                        backgroundImage: `url(${dhBackground})`,
                        backgroundColor: panelDhExpanded ? '#69CCE7' : '#000000',
                    }}
                    onClick={expandDhPanel}>
                    <Link
                        style={{
                            color: '#69CCE7',
                            visibility: panelDhExpanded ? 'visible' : 'hidden',
                            opacity: panelDhExpanded ? 1 : 0,
                            transition: 'visibility 0s, opacity 0.5s linear',
                        }}
                        href="dragonhunter-guide">Go to guide</Link>
                    <PanelTitle>
                        <img src={dhTitle} alt="Dragonhunter" height="25" />
                    </PanelTitle>
                </Panel>
                <Panel
                    style={{
                        flex: panelDruidExpanded ? '5' : '1',
                        cursor: panelDruidExpanded ? 'auto' : 'pointer',
                        backgroundImage: `url(${druidBackground})`,
                        backgroundColor: panelDruidExpanded ? '#8ea53a' : '#000000',
                    }}
                    onClick={expandDruidPanel}>
                    <Link
                        style={{
                            color: '#8ea53a',
                            visibility: panelDruidExpanded ? 'visible' : 'hidden',
                            opacity: panelDruidExpanded ? 1 : 0,
                            transition: 'visibility 0s, opacity 0.5s linear',
                        }}
                        href="druid-guide">Go to guide</Link>
                    <PanelTitle>
                        <img src={druidTitle} alt="Druid" height="25" />
                    </PanelTitle>
                </Panel>
                <Panel
                    style={{
                        flex: panelWarriorExpanded ? '5' : '1',
                        cursor: panelWarriorExpanded ? 'auto' : 'pointer',
                        backgroundImage: `url(${warriorBackground})`,
                        backgroundColor: panelWarriorExpanded ? '#CF8D21' : '#000000',
                    }}
                    onClick={expandWarriorPanel}>
                    <Link
                        style={{
                            color: '#CF8D21',
                            visibility: panelWarriorExpanded ? 'visible' : 'hidden',
                            opacity: panelWarriorExpanded ? 1 : 0,
                            transition: 'visibility 0s, opacity 0.5s linear',
                        }}
                        href="warrior-guide">Go to guide</Link>
                    <PanelTitle>
                        <img src={warriorTitle} alt="Warrior" height="25" />
                    </PanelTitle>
                </Panel>
            </PanelContainer>
        </HomeContainer>
    )
}
export default HomeView;