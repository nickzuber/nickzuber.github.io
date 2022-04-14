import React from "react";
import styled from "@emotion/styled";
import { Header, SubHeader, HeaderAlt, Section, Container } from "../../ui";
import { makeColorPicker } from "../../utils";

const pickColor = makeColorPicker()

const ProjectContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 60,
  "@media (max-width: 750px)": {
    flexDirection: "column",
  },
});

const ProjectHeader = styled(Header)({
  position: 'relative',
  margin: 0,
  fontWeight: 500,
  fontSize: "1.6em",
  lineHeight: "1.4em",
  fontFamily: "medium-marketing-display-font",
}, props => ({
  '&:after': {
    content: '""',
    height: 3,
    width: '25%',
    background: pickColor.next().value,
    position: 'absolute',
    top: -10,
    left: -2,
    borderRadius: 2
  }
}));

const ProjectHeaderAlt = styled(HeaderAlt)({
  fontSize: "0.85rem",
  lineHeight: "1.3rem",
  letterSpacing: 0.5,
  marginTop: 5,
  marginBottom: 10,
});

const ProjectTag = styled("span")({
  fontFamily: "Inconsolata,monospace",
  boxSizing: "border-box",
  fontSize: "0.9rem",
  padding: "4px 10px",
  marginRight: "8px",
  marginBottom: "8px",
  fontWeight: "500",
  borderRadius: "2px",
  color: "#fff",
  background: "none",
  display: "inline-block",
  textTransform: "lowercase",
  userSelect: "none",
  cursor: "default",
});

const ProjectLink = styled("a")({
  fontFamily:
    'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  textTransform: "uppercase",
  fontSize: "0.95rem",
  letterSpacing: 0.75,
});

const ProjectLinksContainer = styled("div")({
  display: "inline-block",
  paddingRight: 24,
  i: {
    fontSize: 12,
    marginRight: 6,
  },
});

const ProjectTitleContainer = styled("div")({
  width: "30%",
  paddingRight: 20,
  "@media (max-width: 750px)": {
    width: "100%",
    paddingRight: 0,
  },
});

const ProjectDescriptionContainer = styled("div")({
  width: "70%",
  "@media (max-width: 750px)": {
    width: "100%",
  },
});

const ProjectDescription = styled("p")({
  "@media (max-width: 750px)": {
    marginTop: 10,
  },
});

function ProjectItem({ title, subtitle, tags = [], links = [], color = null, children }) {
  return (
    <ProjectContainer>
      <ProjectTitleContainer>
        <ProjectHeader color={color}>{title}</ProjectHeader>
        <ProjectHeaderAlt>{subtitle}</ProjectHeaderAlt>
        {/* <Tags tags={tags} /> */}
      </ProjectTitleContainer>
      <ProjectDescriptionContainer>
        {children}
        {links.map((link) => (
          <ProjectLinksContainer key={link.title}>
            {getLinkIcon(link.title)}
            <ProjectLink href={link.url}>{link.title}</ProjectLink>
          </ProjectLinksContainer>
        ))}
      </ProjectDescriptionContainer>
    </ProjectContainer>
  );
}

function getLinkIcon(title) {
  switch (title.toLowerCase()) {
    case "code":
    case "github":
      return <i className="fab fa-github" />; // <i className="fas fa-code-branch"></i>
    case "post":
    case "blog":
    case "articles":
      return <i className="far fa-newspaper" />;
    case "npm":
    case "node":
    case "install":
      return <i className="fas fa-terminal" />;
    case "product":
      return <i className="fab fa-product-hunt" />;
    case "twitter":
    case "tweets":
      return <i className="fab fa-twitter" />;
    case "website":
      return <i className="fas fa-globe-americas" />;
    case "video":
    case "youtube":
      return <i className="fab fa-youtube" />;
    case "pypi":
      return <i className="fab fa-python" />;
    default:
      return null;
  }
}
function getTagStyles(tag) {
  switch (tag) {
    case "research":
    case "productivity":
    case "language":
      return {
        backgroundColor: "#f2c4b7",
        color: "#8f5a51",
      };
    case "developer tool":
      return {
        backgroundColor: "rgb(229, 185, 241)",
        color: "rgb(81, 62, 86)",
      };
    case "web app":
      return {
        backgroundColor: "#a0dbfe",
        color: "#315951",
      };
    case "paper":
    case "community":
      return {
        backgroundColor: "rgb(179, 236, 186)",
        color: "rgb(68, 93, 71)",
      };
    case "compiler":
    case "type system":
      return {
        backgroundColor: "#83e2cf",
        color: "#315951",
      };
    default:
      return {
        backgroundColor: 'rgb(255 222 103)',
        color: 'rgb(91 91 91)'
      };
  }
}

function Tags({ tags = [] }) {
  return tags.sort().map((name) => (
    <ProjectTag key={name} style={getTagStyles(name)}>
      {name}
    </ProjectTag>
  ));
}

function ProjectsComponent({ color }) {
  return (
    <Section id="projects" color={color}>
      <Container>
        <SubHeader className="section-header">What I've Built</SubHeader>

        <p style={{ marginBottom: 40 }}>
          I love working on side projects. Creating free & accessible software is something I'm
          really passionate about. All of{" "}
          <a href="https://github.com/nickzuber">my projects can be found on GitHub</a>, but a
          few of my personal favorites are highlighted here.
        </p>

        <ProjectItem
          title="Notion Draw: Simple embdded doodling app"
          subtitle="embedded app"
          color="#fa5252"
          tags={["game", "web app"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/notion-draw" },
            { title: "website", url: "https://www.notion-draw.art/" },
            { title: "tweets", url: "https://twitter.com/nick_zuber/status/1512138346788704260" },
          ]}
        >
          <ProjectDescription>
            Simple drawing web app designed to be embedded in Notion pages. This unlocks the ability to
            doodle directly within Notion, which is something I've wanted for a while.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Crosswordle: A daily crossword game"
          subtitle="daily game"
          color="#fa5252"
          tags={["game", "web app"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/cross-wordle" },
            { title: "website", url: "https://www.cross-wordle.games/" },
            { title: "tweets", url: "https://twitter.com/nick_zuber/status/1491932699539521548" },
          ]}
        >
          <ProjectDescription>
            Inspired by games like Wordle, Scrabble, and Bananagrams, with this game you're
            tasked with building a tiny 6x6 crossword board using the 20 letters given to you.
          </ProjectDescription>
          <ProjectDescription>
            This one was a ton of fun to make and had some interesting technical challenging
            (generating valid 6x6 crosswords with 20 letters).
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Spectre: Simple SVG editor for tracing"
          subtitle="editor"
          color="#be4bdb"
          tags={["editor", "web app", "svg"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/spectre" },
            { title: "website", url: "https://spectre-nickzuber.vercel.app/" },
          ]}
        >
          <ProjectDescription>
            Spectre is an experimental SVG editor designed to help make the process of creating
            clean & minimal SVGs really simple.
          </ProjectDescription>
          <ProjectDescription>
            The features for this editor are also very intentional — they're designed around
            specific workflows to help users trace complex shapes and generate <i>simple</i>{" "}
            SVGs.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Infrared: Inferred static type checker for JavaScript"
          subtitle="compiler"
          color="#5c7cfa"
          tags={["type system", "language", "developer tool"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/infrared" },
            // { title: 'articles'
            // , url: '#'
            // },
          ]}
        >
          <ProjectDescription>
            Infrared is a developer tool that statically analyzes JavaScript projects and finds
            type errors. If you've ever used <a href="https://flow.org/">Flow</a> before, this
            project is kind of like that but specializing in type inference.
          </ProjectDescription>
          <ProjectDescription>
            This project fills the gap between vanilla JavaScript and TypeScript: if you want
            to go all-in on a type system you should use TypeScript. If you want type safety
            without changing <i>anything</i> in your project, use Infrared.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Meteorite: Smarter GitHub notifications"
          subtitle="productivity"
          color="#20c997"
          tags={["web app", "productivity"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/meteorite" },
            { title: "website", url: "https://meteorite.dev/" },
            {
              title: "blog",
              url:
                "https://medium.com/@nickzuber/why-github-notifications-make-it-hard-to-get-things-done-how-to-fix-it-be7cea936063",
            },
            {
              title: "product",
              url: "https://www.producthunt.com/posts/meteorite",
            },
          ]}
        >
          <ProjectDescription>
            Smarter GitHub notifications. Organize and score notifications based on importance
            and relevance.
          </ProjectDescription>
          <ProjectDescription>
            Meterorite is the solution for managing your GitHub notifications by filtering out
            the ones that don't matter to you, scoring & sorting the ones that matter based on
            personalized heuristics, and using desktop notifications.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="ClusterRunner: Optimize test suites horizontally "
          subtitle="box"
          color="#20c997"
          tags={["productivity", "developer tool"]}
          links={[
            { title: "github", url: "https://github.com/box/clusterrunner" },
            { title: "website", url: "http://clusterrunner.com" },
            {
              title: "video",
              url: "https://www.youtube.com/watch?v=V7fhx1i4qPE",
            },
          ]}
        >
          <ProjectDescription>
            ClusterRunner is a testing tool that makes it easy to execute test suites across
            your infrastructure in the fastest and most efficient way possible.
          </ProjectDescription>
          <ProjectDescription>
            This project is run internally at Box on ~100,000 tests each day and speeds up the
            feedback loop by 300x. I created a caching layer for build artifacts and reworked
            the API.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="chs: Play chess in your terminal"
          subtitle="cli game"
          color="#20c997"
          tags={["cli app"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/chs" },
            {
              title: "tweets",
              url: "https://twitter.com/nick_zuber/status/1146875377056280577",
            },
            { title: "pypi", url: "https://pypi.org/project/chs" },
          ]}
        >
          <ProjectDescription>
            Spawned from my love for chess, I created an app to play chess against the
            Stockfish engine in your terminal. It ended up being a great tool for learning and
            practicing reading the board (+ algebraic notation).
          </ProjectDescription>
          <ProjectDescription>
            This was a ton of fun to make because I was able to build it using Python which I
            don't get the chance to use too often, and designing a UI engine for the terminal
            to print the chess board was an interesting challenge.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="ReasonML + JavaScript interoperability tool"
          subtitle="dev tool"
          color="#20c997"
          tags={["developer tool", "productivity"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/add-reason" },
            {
              title: "tweets",
              url: "https://twitter.com/nick_zuber/status/961439260997021697",
            },
            { title: "npm", url: "https://www.npmjs.com/package/add-reason" },
          ]}
        >
          <ProjectDescription>
            This is an easy to use cli tool that helps you seamlessly interop ReasonML code
            with an existing JavaScript project. You tell us where your ReasonML code is, and
            we'll handle the rest!
          </ProjectDescription>
          <ProjectDescription>
            After this project started{" "}
            <a href="https://twitter.com/EricVicenti/status/961704695738769408">getting</a>{" "}
            <a href="https://twitter.com/mjackson/status/961728212085567488">pretty</a>{" "}
            <a href="https://mobile.twitter.com/nick_zuber/status/961439260997021697">
              popular
            </a>
            , I worked with the BuckleScript team to help integrate this functionality{" "}
            <a href="https://github.com/BuckleScript/bucklescript/issues/2500#issuecomment-364287815">
              into the main project
            </a>
            !
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Kelp: x86-64 compiler"
          subtitle="COMP 4060: Compiler Construction"
          color="#20c997"
          tags={["compiler", "language"]}
          links={[
            {
              title: "github",
              url: "https://github.com/nickzuber/lets-make-a-compiler",
            },
          ]}
        >
          <ProjectDescription>
            While learning about compilers, I also{" "}
            <a href="https://github.com/nickzuber/lets-make-a-compiler/blob/master/src/compiler.ml">
              built one from scratch
            </a>{" "}
            using OCaml. It compiles a JavaScript-like language which features like closures,
            functions, vectors, and types, to x86-64 assembly.
          </ProjectDescription>
          <ProjectDescription>
            Don't think I skipped out on the fun stuff; I also wrote an{" "}
            <a href="https://github.com/nickzuber/lets-make-a-compiler/blob/master/runtime/gc.c">
              automatic garbage collector
            </a>{" "}
            in C to compliment it.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Markup: Create & share TeX snippets"
          subtitle="collaboration"
          color="#20c997"
          tags={["web app", "community"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/markup" },
            { title: "website", url: "https://github.com/nickzuber/markup" },
          ]}
        >
          <ProjectDescription>
            Markup is a web app that lets people easily create and{" "}
            <a href="https://katex.org/docs/supported.html">share rich TeX snippets</a>. You
            can write snippets containing markdown and/or math typesettting - similar to the
            math typesetting you find in LaTeX distributions.
          </ProjectDescription>
          <ProjectDescription>
            I made this to help myself and other students collaborate in our mathematics and CS
            courses. It was also a simple way to describe questions to professors over email,
            which was nice.
          </ProjectDescription>
        </ProjectItem>

        <ProjectItem
          title="Needle: Extensive data structure library"
          subtitle="library"
          color="#51cf66"
          tags={["community", "productivity"]}
          links={[
            { title: "github", url: "https://github.com/nickzuber/needle" },
            { title: "npm", url: "https://www.npmjs.com/package/node-needle" },
          ]}
        >
          <ProjectDescription>
            Needle is a standalone extensive data structure library in JavaScript.
          </ProjectDescription>
          <ProjectDescription>
            Fun fact, this was actually one of{" "}
            <a href="https://github.com/nickzuber/needle/commit/f54150272c298fb8edf7ee81342aada425774643#diff-04c6e90faac2675aa89e2176d2eec7d8">
              my first open source projects I ever made
            </a>{" "}
            (will always have a special place in my heart).
          </ProjectDescription>
        </ProjectItem>
      </Container>
    </Section>
  );
}

export default ProjectsComponent;
