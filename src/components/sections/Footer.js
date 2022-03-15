import React from 'react';
import styled from '@emotion/styled';
import {
  Section,
  Container
} from '../ui';

const FlexContainer = styled(Container)({
  padding: 0,
  display: 'flex',
  justifyContent: 'space-between',
  '@media (max-width: 750px)': {
    flexDirection: 'column',
    paddingTop: 30,
    paddingBottom: 30,
  }
});

const WhiteTextContainer = styled(Container)({
  padding: '30px 0',
  margin: 0,
  color: '#ffffff',
  '@media (max-width: 750px)': {
    padding: '10px 0',
  }
}, ({textAlign}) => ({
  textAlign
}));

const Disclaimer = styled('div')({
  fontSize: '1rem',
  fontWeight: 500,
  'a': {
    color: "#ffffff",
    fontSize: '1rem',
  },
  '@media (max-width: 750px)': {
    textAlign: 'left'
  }
});

function HeaderComponent () {
  return (
    <footer>
      <Section color="#202631">
        <Container style={{paddingTop: 0, paddingBottom: 0}}>
          <FlexContainer>
            <WhiteTextContainer textAlign="left">
              <Disclaimer>© {new Date().getFullYear()} — Nick Zuber</Disclaimer>
            </WhiteTextContainer>
            <WhiteTextContainer textAlign="right">
              <Disclaimer>Design & layout inspired by <a href="https://slim.computer/">Sarah Lim</a>, built with Gatsby, hosted on GitHub</Disclaimer>
            </WhiteTextContainer>
          </FlexContainer>
        </Container>
      </Section>
    </footer>
  );
}

export default HeaderComponent;
