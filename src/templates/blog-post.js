import React from 'react'
import Helmet from 'react-helmet'
import HighlightHeader from '../components/HighlightHeader'
import { DateAndTags } from '../components/BlogPost'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <div className="blog-wrapper">
      <Helmet title={`Nick Zuber -- ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1 style={{ margin: '2px 0 0', padding: '0' }}>{post.frontmatter.title}</h1>
        <DateAndTags tags={post.frontmatter.tags}>Nick Zuber — {post.frontmatter.date}</DateAndTags>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        tags
      }
    }
  }
`
