import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import {
    FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
    FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, WebsiteRights, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }


    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/signin">What do we do</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Services</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Blogs </FooterLinkTitle>
                            <FooterLink to="/signin">To be Mother</FooterLink>
                            <FooterLink to="/signin">Just born Baby</FooterLink>
                            <FooterLink to="/signin">6 months to delivery</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Social Media </FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">YouTube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer> */}

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Healthy<span style={{color: '#01bf71'}}>Book</span>ar</SocialLogo>
                        <WebsiteRights>HealthyBookar © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/healthybookar" target="blank" aria-label="Facebook">
                                <FacebookIcon />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.instagram.com/healthybookar" target="blank" aria-label="Instagram">
                                <InstagramIcon />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.twitter.com/healthybookar" target="blank" aria-label="Twitter">
                                <TwitterIcon />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.linkedin.com/healthybookar" target="blank" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </SocialIconLink>

                            <SocialIconLink href="https://www.youtube.com/healthybookar" target="blank" aria-label="Youtube">
                                <YouTubeIcon />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
