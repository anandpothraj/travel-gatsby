import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcon, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon/>
                    EXPLOR
                </SocialLogo>
                <WebsiteRights>EXPLOR © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink 
                        href="//www.facebook.com/" 
                        target="_blank" 
                        aria-label="FaceBook">
                            <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink 
                        href="//www.instagram.com/" 
                        target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink 
                        href="//www.youtube.com/" 
                        target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink 
                        href="//www.twitter.com/" 
                        target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink 
                        href="//www.linkedin.com/" 
                        target="_blank" 
                        aria-label="LinkedIn">
                            <FaLinkedin/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer