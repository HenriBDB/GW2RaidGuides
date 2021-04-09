import React, { useState } from "react";
import {
    GuidesContainer,
    PanelContainer,
    Panel,
    PanelTitle,
    Link
} from './styles'
import dhBackground from '../../assets/backgrounds/dragohunter.jpg'
import dhTitle from '../../assets/titles/DragonhunterTitle.png'

const GuidesView = () => {
    const [panelDhExpanded, setDhPanelExpanded] = useState(false)

    const expandDhPanel = () => {
        setDhPanelExpanded(true);
        // setDruidPanelExpanded(false);
        // setWarriorPanelExpanded(false);
    }

    return (
        <GuidesContainer>
            <PanelContainer>
                <Panel
                    style={{
                        flex: panelDhExpanded ? '5' : '1',
                        cursor: panelDhExpanded ? 'auto' : 'pointer',
                        backgroundImage: `url(${dhBackground})`,
                        backgroundColor: panelDhExpanded ? '#69CCE7' : '#000000',
                    }}
                    onMouseEnter={expandDhPanel}>
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
            </PanelContainer>
        </GuidesContainer>
    )
}
export default GuidesView;