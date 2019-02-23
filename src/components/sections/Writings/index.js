import React from 'react';
import {withPrefix} from 'gatsby';
import styled from '@emotion/styled'
import {
  Section,
  Container,
  SubHeader,
  Title,
  Authors
} from '../../ui';

const TitleLink = styled(Title)({
  display: 'inline',
  cursor: 'pointer',
  textDecoration: 'underline',
  textUnderlinePosition: 'unset',
  transition: 'all 150ms linear',
  textTransform: 'capitalize',
  '&:hover': {
    opacity: 0.75
  }
});

function WritingItem ({title, url, mediumUrl, date, children}) {
  const childrenNoPeriod = children[children.length - 1] === '.'
    ? children.slice(0, -1)
    : children;

  return (
    <React.Fragment>
      <TitleLink onClick={() => window.open(url)}>{title}</TitleLink>
      <Authors style={{marginTop: 5}}>
        {date}
        {mediumUrl ? (
          <>, <a href={mediumUrl}>Medium article</a></>
        ) : null}
      </Authors>
      <p style={{marginBottom: 40}}>
        {children}{/* … */}
      </p>
    </React.Fragment>
  );
}

function WritingsComponent ({color}) {
  return (
    <Section id="writings" color={color}>
      <Container>
        <SubHeader className="section-header">Writings</SubHeader>
        <p style={{marginBottom: 40}}>
          When I'm not reading about new things, I like writing about them. I've recently been posting all of my articles to <a href="https://medium.com/@nickzuber/">Medium</a>, but I've listed out a few of my favorites below:
        </p>

        {/* <WritingItem
          title="What's a rolling hash?"
          url="#"
          date="February 2019"
        >
          Doings things can be hard—especially when you want to do things fast.
          One of the most classic problems in software development is one that we're all familiar with: matching strings. You have a couple of words, and you want to know if particular phrase is in there. Simple, right?
        </WritingItem> */}

        <WritingItem
          title="Why GitHub notifications make it hard to get things done & how to fix it."
          url="https://medium.com/@nickzuber/why-github-notifications-make-it-hard-to-get-things-done-how-to-fix-it-be7cea936063"
          mediumUrl="https://medium.com/@nickzuber/why-github-notifications-make-it-hard-to-get-things-done-how-to-fix-it-be7cea936063"
          date="February 2019"
        >
          My quest to solving the worlds most pressing issues: managing GitHub notifications. I talk about some ways that can help with this problem and finish by introducing Meteorite – a tool designed for making notifications smarter.
        </WritingItem>

        <WritingItem
          title="Proving type soundness in a simply typed lambda calculus."
          url={withPrefix('/pdf/type-soundness.pdf')}
          date="March 2018"
        >
          Evaluation contexts, typing rules, runtime semantic rules, and type soundness for a simply typed lambda calculus with various traditional language features.
        </WritingItem>

        <WritingItem
          title="Exploring Linear Discriminant Analysis Classification of Non-Normal Data using Poker Hands."
          url={withPrefix('/pdf/lda.pdf')}
          date="December 2017"
        >
          We explore the effectiveness of linear discriminant analysis on a multi-class non-normally distributed dataset and try to identify the points of unreliablility so that we can attempt to counter it and produce more reliable results.
        </WritingItem>

      </Container>
    </Section>
  );
}

export default WritingsComponent;
