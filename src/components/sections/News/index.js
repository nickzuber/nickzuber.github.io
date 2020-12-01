import React from 'react';
import {Link, withPrefix} from 'gatsby';
import styled from '@emotion/styled'
import {
  Section,
  Container,
  SubHeader
} from '../../ui';

const NewsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 16,
  '@media (max-width: 750px)': {
    flexDirection: 'column'
  }
});

const NewsDateContainer = styled('div')({
  width: '15%',
  textAlign: 'right',
  paddingRight: 20,
  '@media (max-width: 750px)': {
    textAlign: 'left',
    width: '100%'
  }
});

const NewsTextContainer = styled('div')({
  width: '85%',
  '@media (max-width: 750px)': {
    width: '100%'
  }
});

const NewsText = styled('p')({
  marginBottom: 8
});

const NewsDate = styled('p')({
  fontStyle: 'italic',
  fontWeight: '600',
  fontSize: '1rem',
  marginBottom: 0,
});

function NewsItem ({date, children}) {
  return (
    <NewsContainer>
      <NewsDateContainer>
        <NewsDate>
          {date}
        </NewsDate>
      </NewsDateContainer>
      <NewsTextContainer>
        {children}
      </NewsTextContainer>
    </NewsContainer>
  );
}

function NewsComponent ({color}) {
  return (
    <Section id="updates" color={color}>
      <Container style={{paddingBottom: 60}}>
        <SubHeader className="section-header">Updates</SubHeader>
        <p style={{marginBottom: 40}}>
          {/* Over the years I've has the pleasure of working with some amazing people and I've made some accomplishments along the way. You can take a look at <Link to="/resume">my resume</Link> to see what I've been up to lately. */}
          Over the years I've has the pleasure of working with some amazing people and I've made some accomplishments along the way. You can take a look at <a href={withPrefix('/pdf/NickZuberResume.pdf')}>my resume</a> to see what I've been up to lately.
        </p>

        <NewsItem date="April 2020">
          <NewsText>
            Promoted internally to a senior software engineer. I also became the lead engineer on the <a href="https://robinpowered.com/features/maps/">maps</a> platform, helping optimize and evolve the product as a whole.
          </NewsText>
        </NewsItem>

        <NewsItem date="May 2018">
          <NewsText>
            Graduated from <a href="https://uml.edu/">University of Massachusetts Lowell</a> with a BS in Computer Science and minor in Mathematics, focusing on metatheory of programming languages.
          </NewsText>
        </NewsItem>

        <NewsItem date="Dec 2017">
          <NewsText>
            Accepted an offer to work full time at my favorite startup, <a href="https://robinpowered.com">Robin</a>. I joined the <i>front end engineering team</i> to help build out our component library, developer build & release tools, and some cool new products.
          </NewsText>
        </NewsItem>

        <NewsItem date="June 2017">
          <NewsText>
            Began my next internship at <a href="https://box.com/home">Box</a>, joining the productivity engineering team.
          </NewsText>
          <NewsText>
            I've always loved building developer tools as a hobby, and doing it professionally was just as fun.
          </NewsText>
        </NewsItem>

        <NewsItem date="May 2016">
          <NewsText>
            Started my internship at <a href="https://robinpowered.com">Robin</a>, joining the mobile team as a software engineer.
          </NewsText>
          <NewsText>
            I got to learn a lot about what goes into building a new product and how to iterate quickly on ideas first hand, which was a cool experience.
          </NewsText>
        </NewsItem>

        <NewsItem date="May 2015">
          <NewsText>
            Joined <a href="http://verandaoutdoors.com/">Veranda Outdoors</a> for the summer and led a small team of developers and created a wholesale ordering platform.
          </NewsText>
        </NewsItem>

        <NewsItem date="Feb 2015">
          <NewsText>
            Did some contract work for my university to create a web app that helped professors automate the class scheduling process.
          </NewsText>
        </NewsItem>

        <NewsItem date="Sept 2014">
          <NewsText>
            Officially started attending college at <a href="https://uml.edu/">University of Massachusetts Lowell</a>, studying Computer Science and Mathematics.
          </NewsText>
        </NewsItem>

      </Container>
    </Section>
  );
}

export default NewsComponent;
