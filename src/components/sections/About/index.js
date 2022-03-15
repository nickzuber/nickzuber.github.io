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
          Hi 👋 I'm Nick, a staff software engineer currently working at <a href="https://robinpowered.com">Robin</a> leading the <a href="https://robinpowered.com/features/maps/">maps</a> platform, making it easy for companies to implement <a href="https://robinpowered.com/blog/what-is-hybrid-work">hybrid work</a> in their office. Previously, I worked at <a href="https://box.com/home">Box</a> as a tooling engineer where I helped work on <a href="https://www.clusterrunner.com">ClusterRunner</a>, which is an open source tool for horizontally optimizing tests & testing infrastructure.
        </p>
        <p>
          In my spare time, I love to research and study certain areas of computer science. My current research interests span across programming language design, user experience and interaction, and type theory. In particular, I've been learning about <i>fluid type systems</i>: bringing type analysis to dynamic programming languages through type inference.
        </p>
        <p>
          I graduated with a BS in Computer Science and minor in Mathematics from <a href="https://www.uml.edu/">University of Massachusetts Lowell</a>, where I studied programming language design and <a href="https://arxiv.org/abs/1802.06375">gradual typing</a> with <a href="http://cimini.info/">Matteo Cimini</a>, machine learning with <a href="https://www.uml.edu/sciences/computer-science/faculty/adjunct-faculty/braun-jerome.aspx">Dr. Jerome J. Braun</a>, and compiler architecture and design with <a href="http://jeapostrophe.github.io/home/">Jay McCarthy</a>.
        </p>
        <p style={{marginBottom: 40}}>
          Other things I enjoy: compilers, <a href="https://lichess.org/@/zube">chess</a>, graph theory, <a href="https://webassembly.org/">WebAssembly</a>, crossword puzzles, <a href="https://ocaml.org/">OCaml</a>, developer tooling, open source software, <a href="https://www.uml.edu/CampusRecreation/Club-Sports/Active-Clubs/Table-Tennis/">table tennis</a>, scented candles, and <a href="https://vsco.co/zuber">plants</a>.
        </p>
      </Container>
    </Section>
  );
}

export default AboutComponent;
