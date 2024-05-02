import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>

      <SectionTitle main center>
        Welcome To My Portfolio
      </SectionTitle>

      <SectionText>
        BlankForNow
      </SectionText>

      <Button onClick={() => window.location.href = 'khalil.j.khalil2@gmail.com'}>Email Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;