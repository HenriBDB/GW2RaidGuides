import React, { useState } from "react";
import {
    HomeContainer,
    PanelContainer,
    Panel,
    PanelTitle,
} from './styles'
import dhBackground from '../../assets/backgrounds/dragohunter.jpg'
import druidBackground from '../../assets/backgrounds/druid.jpg'
import warriorBackground from '../../assets/backgrounds/warrior.jpg'

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
                        backgroundImage: `url(${dhBackground})`
                    }}
                    onClick={expandDhPanel}>
                    <PanelTitle>Dragonhunter</PanelTitle>
                </Panel>
                <Panel
                    style={{
                        flex: panelDruidExpanded ? '5' : '1',
                        backgroundImage: `url(${druidBackground})`
                    }}
                    onClick={expandDruidPanel}>
                    <PanelTitle>Druid</PanelTitle>
                </Panel>
                <Panel
                    style={{
                        flex: panelWarriorExpanded ? '5' : '1',
                        backgroundImage: `url(${warriorBackground})`
                    }}
                    onClick={expandWarriorPanel}>
                    <PanelTitle>Warrior</PanelTitle>
                </Panel>
            </PanelContainer>
        </HomeContainer>
    )
}
export default HomeView;