import React from 'react';
import styled from '@emotion/styled';

export const Section = styled('div')({
  position: 'relative',
  width: '100%',
  background: '#fafafa',
  '& > div': {
    borderTop: '1px solid #28282822',
  }
}, ({color}) => color && ({
  background: color
}));

export const Container = styled('div')({
  margin: '0 auto',
  maxWidth: 780,
  padding: 30
});

export const Header = styled('h1')({
  fontFamily: 'medium-marketing-display-font,Geneva,Arial,sans-serif',
  zIndex: 0,
  fontSize: '2.6rem',
  lineHeight: '4.6rem',
  fontWeight: 900
});

export const SubHeader = styled(Header)({
  fontSize: '2.5rem',
  fontWeight: 500,
  margin: '0 0 10px'
});

export const HeaderAlt = styled('h2')({
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  letterSpacing: '1.8px',
  fontSize: '1rem',
  lineHeight: '1.75rem',
  fontWeight: 400,
  textTransform: 'uppercase'
});

export const Title = styled(SubHeader)({
  marginTop: 40,
  marginBottom: 0,
  fontSize: '1.65rem',
  lineHeight: '2.25rem'
});

export const Authors = styled('p')({
  fontStyle: 'italic',
  lineHeight: '2rem',
  marginBottom: 5
});

export const BackToTopComponent = styled('a')({
  fontSize: '0.9rem',
  background: 'none',
  fontWeight: 600,
  '&:hover': {
    background: 'none',
    opacity: 0.7
  }
});

export function BackToTop () {
  return (
    <BackToTopComponent href="#">
      <i className="fas fa-level-up-alt" style={{
        transform: 'rotateY(180deg) scale(0.8)'
      }}></i> Back to top
    </BackToTopComponent>
  );
}
