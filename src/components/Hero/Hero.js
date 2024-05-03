import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>

      <SectionTitle main center>
        Khalil Khalil
      </SectionTitle>

      <SectionText>
        Full-Stack Developer & UI/UX Designer
      </SectionText>

      <Button onClick={() => window.location.href ='mailto:khalil.j.khalil2@gmail.com'}>Get In Touch</Button>
    </LeftSection>
  </Section>
);

export default Hero;