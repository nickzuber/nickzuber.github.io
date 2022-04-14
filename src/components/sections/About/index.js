import React from 'react';
import {
  Section,
  Container,
  SubHeader
} from '../../ui'

function AboutComponent () {
  return (
    <Section id="about">
      <Container>
        <SubHeader className="section-header">About Myself</SubHeader>
        <p>
          Hi 👋 I'm Nick, a software engineer currently working at <a href="https://notion.so/product">Notion</a> on the <a href="https://www.notion.so/enterprise">enterprise</a> team, helping improve the Notion experience for larger customers. Previously, I worked at <a href="https://robinpowered.com">Robin</a> as a staff software engineer leading the maps product. Before that I worked at <a href="https://box.com/home">Box</a> as a tooling engineer where I helped work on <a href="https://www.clusterrunner.com">ClusterRunner</a>, which is an open source tool for horizontally optimizing tests & testing infrastructure.
        </p>
        <p>
          In my spare time, I love to research and explore certain areas of computer science and geometry. My current interests span across programming language design, type theory, and geometric algorithms. Some of my hobby projects are fun examples of the things I like learning more about.
        </p>
        <p>
          I graduated with a BS in Computer Science and minor in Mathematics from <a href="https://www.uml.edu/">University of Massachusetts Lowell</a>, where I studied programming language design and <a href="https://arxiv.org/abs/1802.06375">gradual typing</a> with <a href="http://cimini.info/">Matteo Cimini</a>, machine learning with <a href="https://www.uml.edu/sciences/computer-science/faculty/adjunct-faculty/braun-jerome.aspx">Dr. Jerome J. Braun</a>, and compiler architecture and design with <a href="http://jeapostrophe.github.io/home/">Jay McCarthy</a>.
        </p>
        <p style={{marginBottom: 40}}>
          Other things I enjoy: compilers, <a href="https://lichess.org/@/zube">chess</a>, graph theory, crossword puzzles, <a href="https://ocaml.org/">OCaml</a>, developer tooling, open source software, <a href="https://www.uml.edu/CampusRecreation/Club-Sports/Active-Clubs/Table-Tennis/">table tennis</a>, scented candles, and <a href="https://vsco.co/zuber">plants</a>.
        </p>
      </Container>
    </Section>
  );
}

export default AboutComponent;
