import React from 'react';
import styled from '@emotion/styled';
import {
  Section,
  Header,
  HeaderAlt
} from '../../ui';
import Image from '../../image';
import SocialMedia from './SocialMedia';
import './header.css';

const ImageContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  width: 200,
  height: 230,
  '@media (max-width: 750px)': {
    marginTop: 20,
    marginBottom: 80
  }
});

const HeaderContainer = styled('header')({
  margin: '0 auto',
  maxWidth: 740,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 60,
  '@media (max-width: 750px)': {
    padding: 30,
    flexDirection: 'column',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    textAlign: 'center'
  }
});

const BigHeader = styled(Header)({
  fontSize: '3.85rem',
  lineHeight: '4.6rem',
  fontWeight: 500,
  '@media (max-width: 750px)': {
    margin: '0 auto'
  }
});

const Mono = styled('p')({
  fontSize: '1.1rem',
  fontFamily: 'Inconsolata,monospace',
  margin: '10px 0',
});

const List = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  margin: '20px 0',
  padding: 0,
  listStyleType: 'none',
  listStyle: 'none',
  '@media (max-width: 750px)': {
    justifyContent: 'center'
  }
});

const ListItem = styled('li')({
  paddingRight: 20,
  paddingBottom: 10,
  'a': {
    fontSize: '1.1rem'
  },
  '@media (max-width: 750px)': {
    padding: '0 8px 8px'
  }
});

const Caption = styled('figcaption')({
  marginTop: 20,
  fontStyle: 'italic',
  fontWeight: 500,
  fontSize: '1.2rem',
  lineHeight: '1.8rem',
  textAlign: 'center',
  '&:before': {
    content: 'open-quote'
  },
  '&:after': {
    content: 'close-quote'
  },
});

const Item = ({to = "#", children}) => (
  <ListItem>
    <a href={to}>{children}</a>
  </ListItem>
);

function HeaderComponent ({color}) {
  return (
    <Section id="header" color={color}>
      <HeaderContainer>
        <div>
          <BigHeader className="header">Nick Zuber</BigHeader>
          <HeaderAlt>computer science & mathematics</HeaderAlt>
          <HeaderAlt>university of massachusetts lowell</HeaderAlt>
          <p style={{margin: 0, marginTop: 10, lineHeight: '2rem'}}>he/him/his</p>
          <Mono>zuber [dot] nicholas [at] gmail</Mono>
          <SocialMedia />
          <List>
            <Item to="#updates">Updates</Item>
            <Item to="#projects">Projects</Item>
            <Item to="#writings">Writings</Item>
            <Item to="#readings">Readings</Item>
          </List>
        </div>
        <ImageContainer id="header-image">
          <Image />
          <Caption>Kingdom Hearts is just a fanfic gone too far.</Caption>
        </ImageContainer>
      </HeaderContainer>
    </Section>
  );
}

export default HeaderComponent;
