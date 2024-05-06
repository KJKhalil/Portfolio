//This Page Is Not Used ATM
import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

//This const Is Where The Accomplishments Are Written To Map
const data = [
  { number: 1, text: ''},
  { number: 2, text: '', },
  { number: 3, text: '', },
  { number: 4, text: '', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>

    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>

    <SectionDivider/>
  </Section>
);

export default Accomplishments;
