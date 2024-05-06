import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/>
    <br/>
    <SectionTitle></SectionTitle>
    <SectionText></SectionText>

    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle></ListTitle>
          <ListParagraph></ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle></ListTitle>
          <ListParagraph></ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle></ListTitle>
          <ListParagraph></ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
