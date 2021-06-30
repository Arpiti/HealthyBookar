import React from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
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
                <FooterLinksContainer>

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
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Healthy<span style={{color: '#01bf71'}}>Book</span>ar</SocialLogo>
                        <WebsiteRights>HealthyBookar © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href="/" target="blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>

        </FooterContainer>
    )
}

export default Footer
