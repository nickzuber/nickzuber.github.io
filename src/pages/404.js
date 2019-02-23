import React from 'react';
import {Link} from "gatsby"
import styled from '@emotion/styled';
import {
  Title,
  HeaderAlt
} from '../components/ui';
import SEO from '../components/seo';

const Container = styled('div')({
  flexDirection: 'column',
  boxSizing: 'border-box',
  height: '100vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: 20
});

const BigTitle = styled(Title)({
  fontSize: '3rem',
  lineHeight: '3.5rem',
});

const Byline = styled(HeaderAlt)({
  marginTop: 20,
  marginBottom: 20,
  letterSpacing: '1.2px',
  fontSize: '1.2rem',
  lineHeight: '1.7rem',
});

const NotFoundPage = () => (
  <Container>
    <SEO />
    <BigTitle>You look like you're lost.</BigTitle>
    <Byline>This page doesn't exist</Byline>
    <Link to="/">Home</Link>
  </Container>
);

export default NotFoundPage;
