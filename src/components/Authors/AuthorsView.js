import React from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import Casual from '../../assets/avatars/avatar_casual.jpg';
import Costa from '../../assets/avatars/avatar_costa.png';
import Eren from '../../assets/avatars/avatar_eren.png';
import Fines from '../../assets/avatars/avatar_fines.jpg';
import Wasabi from '../../assets/avatars/avatar_wasabi.png';
import warrior from '../../assets/icons/warrior-icon.png';
import ranger from '../../assets/icons/ranger-icon.png';
import dh from '../../assets/icons/dh-icon.png';
import weaver from '../../assets/icons/weaver-icon.png';
import comm from '../../assets/icons/comm-icon.png';
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
                        <AuthorsImg src={Casual} width="200" height="200" />
                        <AuthorsName>Casual Elitist</AuthorsName>
                        <Socials>
                            <Link href="https://www.youtube.com/c/CasualElitist" target="_blank">
                                <YtIcon />
                            </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>CasualElitist#2499</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>paulelle.6813</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><CoderIcon />Developer</AuthorsRole>
                        <AuthorsRole><ContentIcon src={dh} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
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
                        <AuthorsImg src={Fines} width="200" height="200" />
                        <AuthorsName>Fines</AuthorsName>
                        <Socials>
                            <Link href="https://www.youtube.com/user/macowenna" target="_blank">
                                <YtIcon />
                            </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>Fines#9241</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>Fines Juliverine.5846</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><ContentIcon src={weaver} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
                    <AuthorsCol>
                        <AuthorsImg src={Wasabi} width="200" height="200" />
                        <AuthorsName>Wasabi</AuthorsName>
                        <Socials>
                            <Link href="https://www.youtube.com/channel/UCx0ivehxK1NO6XbLcLX3dfw" target="_blank">
                                <YtIcon />
                            </Link>
                            <Tooltip>
                                <DiscordIcon />
                                <TooltipText>Wasabi#8826</TooltipText>
                            </Tooltip>
                            <Tooltip>
                                <GameIcon />
                                <TooltipText>Wasaabii.4605</TooltipText>
                            </Tooltip>
                        </Socials>
                        <AuthorsRole><ContentIcon src={comm} height="25" />Content Creator</AuthorsRole>
                    </AuthorsCol>
                </AuthorsRow>
            </AuthorsContainer>
        </AuthorsWrapper>
    )
}
export default AuthorsView;