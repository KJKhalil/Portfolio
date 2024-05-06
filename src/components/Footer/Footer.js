import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call Me</LinkTitle>
          <LinkItem href='tel:440-554-4425'>440-554-4425</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email Me</LinkTitle>
          <LinkItem href='mailto:khalil.j.khalil2@gmail.com'>khalil.j.khalil2@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Let's Create Something Amazing Together</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href='https://github.com/KJKhalil'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>

          <SocialIcons href='https://www.linkedin.com/in/kjkhalil/'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
        </SocialContainer>  
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
