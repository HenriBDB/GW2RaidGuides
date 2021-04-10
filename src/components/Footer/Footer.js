import React from "react";
import DiscordLogo from '../../assets/icons/discordLogo.png';
import {
    FooterWrapper,
    FooterContent,
    MobileWrapper,
    FooterCol,
    FooterTitle,
    FooterLink,
    ExternalLink,
    InternalLink,
    FooterIcon,
    LinkIcon,
    Copyright
} from './styles'

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <MobileWrapper>
                    <FooterCol>
                        <FooterTitle>Contact Us</FooterTitle>
                        <ExternalLink href="https://discord.gg/mpyMenSCc4" target="_blank"><FooterIcon src={DiscordLogo} height="30" /></ExternalLink>
                    </FooterCol>
                    <FooterCol>
                        <FooterTitle>Raid Training</FooterTitle>
                        <ExternalLink href=" https://discord.gg/hdhDE3v" target="_blank"><FooterIcon src={DiscordLogo} height="30" /></ExternalLink>
                    </FooterCol>
                </MobileWrapper>
                <MobileWrapper>
                <FooterCol>
                    <FooterTitle>About the Project</FooterTitle>
                    <InternalLink to="/changelog" onClick={() => window.scrollTo(0, 0)}><LinkIcon /> Changelog</InternalLink>
                </FooterCol>
                    <FooterCol>
                        <FooterTitle>
                            <FooterLink to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
                                <LinkIcon style={{ fontSize: 16 }} /> Privacy Policy
                            </FooterLink>
                        </FooterTitle>
                    </FooterCol>
                </MobileWrapper>
            </FooterContent>
            <Copyright>
                &#169; 2021 GW2 Raid Guides<br />
                This site uses art from video game development and publishing companies. All trademarks are the property of their respective owners.
            </Copyright>
        </FooterWrapper>
    )
}
export default Footer;