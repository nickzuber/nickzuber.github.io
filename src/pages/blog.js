import React from 'react'
import Helmet from "react-helmet";
import TopProfile from '../components/TopProfile'
import BlogPost from '../components/BlogPost'

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      <TopProfile />
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogPost
              key={post.id}
              path={post.frontmatter.path}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              desc={post.excerpt}
            />
          )
        })}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
          }
        }
      }
    }
  }
`

export default Blog
