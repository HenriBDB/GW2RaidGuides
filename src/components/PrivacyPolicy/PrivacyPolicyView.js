import React from "react";
import ScrollArrow from '../../components/ScrollArrowTop';
import {
    PrivacyWrapper,
    PrivacyContainer,
    Title,
    ParagraphTitle,
    Paragraph,
    List,
    ListItem
} from './styles'

const PrivacyPolicyView = () => {

    return (
        <PrivacyWrapper>
            <ScrollArrow background='#7289DA' />
            <PrivacyContainer>
                <Title>
                    Privacy Policy
            </Title>
                <Paragraph>
                    We, the Operators of this Website, provide it as a public service to our users. Your privacy is important to us. This Privacy Policy has been written to describe the conditions under which this website is being made available to you. The Privacy Policy discusses, among other things, how data obtained during your visit to this website may be collected and used.
            </Paragraph>
                <ParagraphTitle>Personal Identification Information</ParagraphTitle>
                <Paragraph>
                    ‍‍We do not collect any personal identification information from Users, as they visit our Site anonymously.
            </Paragraph>
                <ParagraphTitle>Aggregate Information</ParagraphTitle>
                <Paragraph>
                    We automatically collect certain information about you and the device you use to access our website - referral data (the websites you visited just before and just after our site), the pages viewed, time spent at our website, and Internet Protocol (IP) addresses.
            </Paragraph>
                <ParagraphTitle>Liability for links</ParagraphTitle>
                <Paragraph>
                    Our website provides links to third-party websites for the convenience of our users. If you access those links, you will leave our website. We do not control these third-party websites and cannot represent that their policies and practices will be consistent with this Privacy Policy. For example, other websites may collect or use personal information about you in a manner different from that described in this document. Therefore, you should use other websites with caution, and you do so at your own risk. We encourage you to review the privacy policy of any website before submitting personal information.
            </Paragraph>
                <ParagraphTitle>Cookies</ParagraphTitle>
                <Paragraph>
                    Our site may use a feature of your browser to set a “cookie” on your computer. Cookies are small packets of information that a website’s computer stores on your computer. The Operators’s websites can then read the cookies whenever you visit our site. We may use cookies in a number of ways, such as to track the pages you’ve visited. These cookies allow us to use the information we collect to customize your experience so that your visit to our site is as relevant and as valuable to you as possible.
            </Paragraph>
                <ParagraphTitle>How We Use Collected Information</ParagraphTitle>
                <Paragraph>
                    We may collect and use Users information for the following purposes:
                    ‍<br /><br />
                    <List>
                        <ListItem>
                            To run and operate our Site<br />
                            We may need your information display content on the Site correctly.
                    </ListItem>
                    ‍<br /><br />
                        <ListItem>
                            To personalize user experience<br />
                            We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                    </ListItem>
                        <br /><br />
                        <ListItem>
                            To improve our Site<br />
                            We may collect your information to track and measure the popularity of guides and improve our Website offerings.
                    </ListItem>
                    </List>
                </Paragraph>
                <ParagraphTitle>Sharing Your Personal Information</ParagraphTitle>
                <Paragraph>
                    ‍We do not sell, trade, or rent Users personal identification information to others. This Website uses Google Analytics, a service that tracks and aggregates traffic, usage, and interactions on the website. Google Analytics detects your IP address, but no other personally identifiable information.
            </Paragraph>
                <ParagraphTitle>Changes To This Privacy Policy</ParagraphTitle>
                <Paragraph>
                    We have the discretion to update this privacy policy at any time. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
            </Paragraph>
                <ParagraphTitle>Your Acceptance of These Terms</ParagraphTitle>
                <Paragraph>
                    ‍By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.
            </Paragraph>
                <ParagraphTitle>Contact Information</ParagraphTitle>
                <Paragraph>
                    If you have any questions about this Privacy Policy or the practices of this site, please contact us via Discord.
            </Paragraph>
            </PrivacyContainer>
        </PrivacyWrapper>
    )
}
export default PrivacyPolicyView