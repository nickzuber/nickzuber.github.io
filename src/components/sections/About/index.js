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
        <SubHeader className="section-header">About</SubHeader>
        <p>
          I'm Nick Zuber, a software engineer on the [secret] and <a href="https://robinpowered.com/features/">devices</a> teams at <a href="https://robinpowered.com">Robin</a>, helping modernize the open office. Previously, I interned at <a href="https://box.com/home">Box</a> as a tooling engineer where I helped work on <a href="https://www.clusterrunner.com">ClusterRunner</a>, which is an open source tool for horizontally optimizing tests & testing infrastructure.
        </p>
        <p>
          In my spare time, I love to research and study certain areas of computer science. My current research interests span across programming language design, user experience and interaction, and type theory. In particular, I've been learning about <i>fluid type systems</i>: bringing static type analysis to dynamic programming languages through type inference at <i>no cost</i>.
        </p>
        <p>
          I recently graduated with a BS in Computer Science and minor in Mathematics from <a href="https://www.uml.edu/">University of Massachusetts Lowell</a>, where I studied programming language design and <a href="https://arxiv.org/abs/1802.06375">gradual typing</a> with <a href="http://cimini.info/">Matteo Cimini</a>, machine learning with <a href="https://www.uml.edu/sciences/computer-science/faculty/adjunct-faculty/braun-jerome.aspx">Dr. Jerome J. Braun</a>, and compiler architecture and design with <a href="http://jeapostrophe.github.io/home/">Jay McCarthy</a>.
        </p>
        <p>
          Other things I enjoy: compilers, graph theory, <a href="https://webassembly.org/">WebAssembly</a>, crossword puzzles, <a href="https://ocaml.org/">OCaml</a>, developer tooling, open source software, <a href="https://www.uml.edu/CampusRecreation/Club-Sports/Active-Clubs/Table-Tennis/">table tennis</a>, classical piano, scented candles, and <a href="https://vsco.co/zuber">loving plants with all my heart</a>.
        </p>
      </Container>
    </Section>
  );
}

export default AboutComponent;
