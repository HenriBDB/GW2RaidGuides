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
import Seo from "../seo"

const PrivacyPolicy = () => {

    return (
        <>
            <Seo title="Privacy Policy" />
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
                        ‍‍We may collect personal identification information from Users in a variety of ways in connection with other activities, services, features or resources we make available on our Site. Users may visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities. We will never send an electronic communication (email or text) requested personal confidential information.
            </Paragraph>
                    <ParagraphTitle>Aggregate Information</ParagraphTitle>
                    <Paragraph>
                        We may gather aggregate information, which refers to information your computer automatically provides to us and that cannot be tied back to you as a specific individual. Examples include referral data (the websites you visited just before and just after our site), the pages viewed, time spent at our website, and Internet Protocol (IP) addresses. An IP address is a number that is automatically assigned to your computer whenever you access the Internet. For example, when you request a page from one of our sites, our servers log your IP address to create aggregate reports on user demographics and traffic patterns and for purposes of system administration.
            </Paragraph>
                    <ParagraphTitle>Liability for links</ParagraphTitle>
                    <Paragraph>
                        Our website provides links to third-party websites for the convenience of our users. If you access those links, you will leave our website. We do not control these third-party websites and cannot represent that their policies and practices will be consistent with this Privacy Policy. For example, other websites may collect or use personal information about you in a manner different from that described in this document. Therefore, you should use other websites with caution, and you do so at your own risk. We encourage you to review the privacy policy of any website before submitting personal information.
            </Paragraph>
                    <ParagraphTitle>Cookies</ParagraphTitle>
                    <Paragraph>
                        Our site may use a feature of your browser to set a “cookie” on your computer. Cookies are small packets of information that a website’s computer stores on your computer. The Operators’s websites can then read the cookies whenever you visit our site. We may use cookies in a number of ways, such as to save your password so you don’t have to re-enter it each time you visit our site, to deliver content specific to your interests and to track the pages you’ve visited. These cookies allow us to use the information we collect to customize your experience so that your visit to our site is as relevant and as valuable to you as possible.
                    <br /><br />
                    Most browser software can be set up to deal with cookies. You may modify your browser preference to provide you with choices relating to cookies. You have the choice to accept all cookies, to be notified when a cookie is set or to reject all cookies. If you choose to reject cookies, certain of the functions and conveniences of our website may not work properly, and you may be unable to use those of the Operators’s services that require registration in order to participate, or you will have to re-register each time you visit our site. Most browsers offer instructions on how to reset the browser to reject cookies in the “Help” section of the toolbar. We do not link non-personal information from cookies to personally identifiable information without your permission.
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
                                To improve customer service<br />
                            Information you provide helps us respond to your customer service requests and support needs more efficiently.
                    </ListItem>
                            <br /><br />
                            <ListItem>
                                To personalize user experience<br />
                            We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.
                    </ListItem>
                            <br /><br />
                            <ListItem>
                                To improve our Site<br />
                            We may use feedback you provide to improve our products and services.
                    </ListItem>
                        </List>
                    </Paragraph>
                    <ParagraphTitle>Security</ParagraphTitle>
                    <Paragraph>
                        We make every effort to protect personal information by users of the website, including using firewalls and other security measures on its servers. No server, however, is 100% secure, and you should take this into account when submitting personal or confidential information about yourself on any website, including this one. You alone are responsible for maintaining the secrecy of your personal information. Please use care when use access this website and provide personal information.
            </Paragraph>
                    <ParagraphTitle>Sharing Your Personal Information</ParagraphTitle>
                    <Paragraph>
                        ‍We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners or trusted affiliates for the purposes outlined above. We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters, packets or surveys. We may share your general information with these third parties for those limited purposes. Your personal confidential information is never shared.
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
        </>
    )
}
export default PrivacyPolicy