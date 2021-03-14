import React from "react";
import {
    HomeContainer,
    LeftContainer,
    RightContainer,
    PanelTitle,
    Panel,
} from './styles'
import squadsBg from '../../assets/backgrounds/squads.jpg'
import dhBg from '../../assets/backgrounds/dragohunter.jpg'
import druidBg from '../../assets/backgrounds/druid.jpg'
import warriorBg from '../../assets/backgrounds/warrior.jpg'
const HomeView = () => {

    return (
        <HomeContainer>
            <LeftContainer>
                <Panel
                    style={{
                        backgroundImage: `url(${dhBg})`,
                        backgroundPosition: '20%'
                    }} />
                <Panel
                    style={{
                        backgroundImage: `url(${druidBg})`,
                        backgroundPosition: 'center'
                    }} />
                <Panel
                    style={{
                        backgroundImage: `url(${warriorBg})`,
                        backgroundPosition: 'left'
                    }} />
                <PanelTitle href="class-guides"><span style={{fontFamily:"Noto serif"}}>Class </span><span style={{fontFamily:"Noto serif"}}>guides</span></PanelTitle>
            </LeftContainer>
            <RightContainer
                style={{
                    backgroundImage: `url(${squadsBg})`,
                    backgroundPosition: 'center'
                }}>
                <PanelTitle href="commander-guide"><span style={{fontFamily:"Noto serif"}}>Commander </span><span style={{fontFamily:"Noto serif"}}>guide</span></PanelTitle>
            </RightContainer>
        </HomeContainer>
    )
}
export default HomeView;