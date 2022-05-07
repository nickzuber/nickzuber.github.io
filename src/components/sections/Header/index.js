import React from 'react';
import {keyframes} from '@emotion/core';
import styled from '@emotion/styled';
import {
  Section,
  Header,
  HeaderAlt
} from '../../ui';
import Image from '../../image';
import SocialMedia from './SocialMedia';
import Blob1Svg from '../../../images/blob-shape-1.svg';
import Blob2Svg from '../../../images/blob-shape-2.svg';
import './header.css';

const B1 = Blob1Svg;
const B2 = Blob2Svg;

const BlockOptions = {
  scale: 2.6,
  speed: 5
}

const blobFrames1 = keyframes`
  0% {
    transform: translateY(-8px) rotate(14deg) scale(${BlockOptions.scale});
  }
  50% {
    transform: translateY(-8px) rotate(0deg) scale(${BlockOptions.scale - 0.02});
  }
  100% {
    transform: translateY(-8px) rotate(14deg) scale(${BlockOptions.scale});
  }
`;

const blobFrames2 = keyframes`
  0% {
    transform: translateY(-8px) rotate(-2deg) scale(${BlockOptions.scale});
  }
  50% {
    transform: translateY(-8px) rotate(0deg) scale(${BlockOptions.scale + 0.04});
  }
  100% {
    transform: translateY(-8px) rotate(-2deg) scale(${BlockOptions.scale});
  }
`;

const BaseBlob = styled.div`
  pointer-events: none;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Blob1 = styled(BaseBlob)`
  background: url(${B1}) center center no-repeat;
  background-size: contain;
  animation: ${blobFrames1} ${BlockOptions.speed + 10}s infinite;
`;

const Blob2 = styled(BaseBlob)`
  background: url(${B2}) center center no-repeat;
  background-size: contain;
  animation: ${blobFrames2} ${BlockOptions.speed}s infinite;
`;

const ImageContainer = styled('div')({
  position: 'relative',
  zIndex: 1,
  width: 180,
  height: 180,
  margin: 'auto 0',
  marginRight: 50,
  '@media (max-width: 750px)': {
    margin: '40px auto 60px',
  }
});

const HeaderContainer = styled('header')({
  margin: '0 auto',
  maxWidth: 740,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  overflow: 'hidden',
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
  margin: '20px 0 0',
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
          <Mono>he/him/his</Mono>
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
          <Blob1 />
          <Blob2 />
          <Image />
        </ImageContainer>
      </HeaderContainer>
    </Section>
  );
}

export default HeaderComponent;
