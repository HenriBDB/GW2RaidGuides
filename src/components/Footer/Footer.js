import React from "react";
import DiscordLogo from '../../assets/icons/discordLogo.png';
import {
    FooterWrapper,
    FooterContent,
    FooterCol,
    FooterTitle,
    FooterLink,
    ExternalLink,
    FooterIcon,
    LinkIcon,
    Copyright
} from './styles'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterCol>
                    <FooterTitle>Contact Us</FooterTitle>
                    <ExternalLink href="https://discord.gg/mpyMenSCc4" target="_blank"><FooterIcon src={DiscordLogo} height="30"/></ExternalLink>
                </FooterCol>
                <FooterCol>
                    <FooterTitle>Raid Training</FooterTitle>
                    <ExternalLink href=" https://discord.gg/hdhDE3v" target="_blank"><FooterIcon src={DiscordLogo} height="30"/></ExternalLink>
                </FooterCol>
                <FooterCol>
                    <FooterTitle>About the Project</FooterTitle>
                    <ExternalLink href="https://github.com/HenriBDB/GW2RaidGuides" target="_blank"><LinkIcon /> Changelog</ExternalLink>
                    <ExternalLink href="https://github.com/HenriBDB/GW2RaidGuides/issues" target="_blank"><LinkIcon /> Planned features &#38; bug reports</ExternalLink>
                </FooterCol>
                <FooterCol>
                    <FooterTitle>
                        <FooterLink to="/privacy-policy">
                        <LinkIcon style={{fontSize: 16}} /> Privacy Policy
                            </FooterLink>
                    </FooterTitle>
                </FooterCol>
            </FooterContent>
            <Copyright>
                &#169; 2021 GW2 Raid Guides
            </Copyright>
        </FooterWrapper>
    )
}
export default Footer;