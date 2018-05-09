import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'
import ContentItem from '../components/ContentItem'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const firstPost = posts[0].node.frontmatter
  return (
    <div>
      <TopProfile />

      <ContentItem icon="laptop">
        <h1>What I've been up to</h1>
        <p>Last summer, I was at <a href="https://box.com/home">Box</a> working on <a href="https://github.com/box/ClusterRunner">ClusterRunner</a>, a tool that helps run test suites in the fastest and most efficient way possible. Working with <a href="https://www.python.org/">Python</a> and <a href="http://www.tornadoweb.org/en/stable/">SQLite</a> to help build developer tools.</p>
      </ContentItem>

      <ContentItem icon="heart">
        <h1>Some things I've made</h1>
        <p><a href="https://github.com/nickzuber/infrared">infrared</a>, <a href="https://github.com/nickzuber/kelp">kelp</a>, <a href="https://github.com/nickzuber/mark-up">markup</a>, <a href="https://github.com/nickzuber/add-reason">add-reason</a>, and <a href="https://github.com/nickzuber/needle">needle</a> are a few of my projects. You can find more on <a href="https://github.com/nickzuber">GitHub</a>. Some of these projects collectively have over 16K installs on <a href="https://www.npmjs.com/~nickzuber">NPM</a>.</p>
      </ContentItem>

      <ContentItem icon="pencil">
        <h1>Writings and thoughts</h1>
        <p>When I'm not reading about new things, I like <Link to="/blog/">writing about them</Link>. I've recently learned about <Link to={firstPost.path}>{firstPost.title}</Link>.</p>
      </ContentItem>

      <ContentItem icon="letter">
        <h1>Experience and resume</h1>
        <p>I've been around the block a few times, learning plenty of new skills and gaining tons of experience along the way. You can <a href="./NickZuberResume.pdf">take a look at my resume</a> to see what I've been up to lately.</p>
      </ContentItem>

      <ContentItem icon="social">
        <h1>Where to find me</h1>
        <p>There are plenty of ways to get in touch. You can find me on <a href="http://stackoverflow.com/users/5055063/nick-zuber">Stack Overflow</a>, <a href="https://github.com/nickzuber">GitHub</a>, <a href="https://www.linkedin.com/in/nickzuber">LinkedIn</a>, <a href="https://angel.co/nicholas-zuber">AngelList</a>, <a href="https://twitter.com/nick_zuber">Twitter</a>, <a href="https://www.facebook.com/zuber.nicholas">Facebook</a>, or just <a href="mailto:zuber.nicholas@gmail.com">shoot me an email</a>.</p>
      </ContentItem>

      <ContentItem icon="travel">
        <h1>Where I've been</h1>
        <p>Over the years, I've had the privilege of <Link to="/career/">working for some amazing companies and organizations</Link>. Here's a small overview on where I've been recently.</p>
      </ContentItem>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

export default IndexPage
