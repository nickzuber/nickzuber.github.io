import React from 'react';
import styled from '@emotion/styled';
import {
  Section,
  Container,
  SubHeader,
  Title,
  Authors
} from '../../ui';

const TitleNoMargin = styled(Title)({
  marginTop: 20
});

const ReadingItem = styled('p')({
  marginBottom: 40
});

function ReadingsComponent ({color}) {
  return (
    <Section id="readings" color={color}>
      <Container>
        <SubHeader className="section-header">What I've Read</SubHeader>
        <p>
          Reading not only helps me stay sane on the commutes to work, but it also helps me take deeper dives into topics of interest. Below is a collection of books and academic papers that I've enjoyed recently.
        </p>
        <ReadingItem>
          Things marked with an asterisk (*) denote something that I'm currently in the middle of reading.
        </ReadingItem>

        <TitleNoMargin>Types and Programming Languages*</TitleNoMargin>
        <Authors>Benejamin C. Pierce</Authors>
        <ReadingItem>
          All things type theory and metatheory on programming languages. Great read for brushing up on formal fundementals.
        </ReadingItem>

        <TitleNoMargin>Fast and Precise Type Checking for JavaScript</TitleNoMargin>
        <Authors>Facebook Inc, University of California, San Diego</Authors>
        <ReadingItem>
          All about the inner workings of Flow and how its gradual type system was implemented, and some of the design decisions that went into it.
        </ReadingItem>

        <TitleNoMargin>Hypergraphs: First Properties</TitleNoMargin>
        <Authors>Alain Bretto, Universite de CaenCaenFrance</Authors>
        <ReadingItem>
          Various different mathematical properties and their importance in regards to hypergraphs.
        </ReadingItem>

        <TitleNoMargin>Advanced Programming Language Design*</TitleNoMargin>
        <Authors>Ralph A. Finkler</Authors>
        <ReadingItem>
          Deep dives into programming language features and tradeoffs for when building and designing a programming language.
        </ReadingItem>

      </Container>
    </Section>
  );
}

export default ReadingsComponent;
