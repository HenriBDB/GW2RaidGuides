import React from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import Costa from '../../assets/avatars/avatar_costa.png';
import Eren from '../../assets/avatars/avatar_eren.png';
import Paula from '../../assets/avatars/avatar_paula.jpg';
import warrior from '../../assets/icons/warrior-icon.png';
import ranger from '../../assets/icons/ranger-icon.png';
import dh from '../../assets/icons/dh-icon.png';
import {
    AuthorsWrapper,
    AuthorsContainer,
    Title,
    AuthorsRow,
    AuthorsCol,
    AuthorsImg,
    AuthorsName,
    AuthorsRole,
    CoderIcon,
    ContentIcon,
    Socials,
    YtIcon,
    DiscordIcon,
    GameIcon,
    Link,
    Tooltip,
    TooltipText
} from './styles'

const AuthorsView = () => {

    return (
        <AuthorsWrapper>
            <ScrollArrow background='crimson' />
            <AuthorsContainer>
                <Title>
                    Creators
                </Title>
                <AuthorsRow>
                    <AuthorsCol>
                        <AuthorsImg src={Costa} width="200" height="200" />
                        <AuthorsName>Costa</AuthorsName>
                        <Socials>
                                <Link href="https://www.youtube.com/channel/UCC1yHilnsxIy4wIgflg-pXw" target="_blank">
                                    <YtIcon />
                                </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>CostaPrimo#7942</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>CostaPrimo.7942</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><CoderIcon />Developer</AuthorsRole>
                        <AuthorsRole><ContentIcon src={warrior} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
                    <AuthorsCol>
                        <AuthorsImg src={Eren} width="200" height="200" />
                        <AuthorsName>Eren</AuthorsName>
                        <Socials>
                            <Link href="https://www.youtube.com/channel/UCkDi9qWsCqdRfwG0LB3ADsQ" target="_blank">
                                <YtIcon />
                            </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>ErenBole#1280</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>Eren&nbsp;Bole.8720</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><CoderIcon />Developer</AuthorsRole>
                        <AuthorsRole><ContentIcon src={ranger} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
                    <AuthorsCol>
                        <AuthorsImg src={Paula} width="200" height="200" />
                        <AuthorsName>Paula</AuthorsName>
                        <Socials>
                            <Link href="https://www.youtube.com/c/PaulaK" target="_blank">
                                <YtIcon />
                            </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>Paula#2499</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>paulelle.6813</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><CoderIcon />Developer</AuthorsRole>
                        <AuthorsRole><ContentIcon src={dh} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
                </AuthorsRow>
            </AuthorsContainer>
        </AuthorsWrapper>
    )
}
export default AuthorsView;