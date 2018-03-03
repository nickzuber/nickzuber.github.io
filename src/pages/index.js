import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'
import HighlightHeader from '../components/HighlightHeader'
import ContentItem from '../components/ContentItem'

const IndexPage = () => (
  <div>
    <TopProfile />

    <ContentItem icon="laptop">
      <HighlightHeader>What I've been up to</HighlightHeader>
      <p>Last summer, I was at <a href="https://box.com/">Box</a> working on <a href="https://github.com/box/ClusterRunner">ClusterRunner</a>, a tool that helps run test suites in the fastest and most efficient way possible. Working with <a href="https://www.python.org/">Python</a> and <a href="http://www.tornadoweb.org/en/stable/">SQLite</a> to help build developer tools.</p>
    </ContentItem>

    <ContentItem icon="heart">
      <HighlightHeader>Some things I've made</HighlightHeader>
      <p><a href="https://github.com/nickzuber/infrared">infrared</a>, <a href="https://github.com/nickzuber/needle">needle</a>, <a href="https://github.com/nickzuber/mark-up">markup</a>, <a href="https://github.com/nickzuber/add-reason">add-reason</a>, and <a href="https://github.com/nickzuber/doxide">doxide</a> are a few of my projects. You can find more on <a href="https://github.com/nickzuber">GitHub</a>. Some of these projects collectively have over 16K installs on <a href="https://www.npmjs.com/~nickzuber">NPM</a>.</p>
    </ContentItem>

    <ContentItem icon="pencil">
      <HighlightHeader>Writings and thoughts</HighlightHeader>
      <p>When I'm not reading about new things, I like <Link to="/blog/">writing about them</Link>. I've recently learned about <a href="#">some dope bullshit</a>.</p>
    </ContentItem>

    <ContentItem icon="printer">
      <HighlightHeader>Experience and resume</HighlightHeader>
      <p>I've been around the block a few times, learning plenty of new skills and gaining tons of experience along the way. You can <Link to="/">take a look at my resume</Link> to see what I've been up to lately.</p>
    </ContentItem>

    <ContentItem icon="social">
      <HighlightHeader>Where to find me</HighlightHeader>
      <p>There are plenty of ways to get in touch. You can find me on <a href="http://stackoverflow.com/users/5055063/nick-zuber">Stack Overflow</a>, <a href="https://github.com/nickzuber">GitHub</a>, <a href="https://www.linkedin.com/in/nickzuber">LinkedIn</a>, <a href="https://angel.co/nicholas-zuber">AngelList</a>, <a href="https://twitter.com/Nick_Zuber">Twitter</a>, <a href="https://www.facebook.com/zuber.nicholas">Facebook</a>, or just <a href="mailto:zuber.nicholas@gmail.com">shoot me an email</a>.</p>
    </ContentItem>

    <ContentItem icon="travel">
      <HighlightHeader>Where I've been</HighlightHeader>
      <p>Over the years, I've had the privilege of <Link to="/work/">working for some amazing companies and organizations</Link>. Here's a small overview on where I've been recently.</p>
    </ContentItem>
  </div>
)

export default IndexPage
