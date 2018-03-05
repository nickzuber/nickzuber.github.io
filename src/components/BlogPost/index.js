import React from 'react'
import Link from 'gatsby-link'
import Profile from '../Profile'
import HotLinks from '../HotLinks'
import TextCycle from '../TextCycle';

function getTagColor (tag) {
  switch (tag) {
    case 'paper':
      return '#3778ff'
    case 'algorithm':
      return '#b26cee'
    case 'language':
      return '#ff4772'
    case 'os':
      return '#3aaa55'
    case 'compiler':
      return '#F48700'
    default:
      return '#17caf0'
  }
}

const Title = ({ path, children }) =>
  <Link to={path}>
    <h1
      style={{
        fontWeight: '500',
        fontSize: '20px',
        letterSpacing: '-0.025em',
        margin: '0px',
        display: 'block',
        padding: '0'
      }}>{children}</h1>
  </Link>

export const DateAndTags = ({ tags, children }) =>
  <div style={{
    margin: '8px 0',
    lineHeight: '21px',
    textAlign: 'left',
    color: 'rgba(165, 170, 173, 0.75)',
    fontSize: '14px'
  }}>
    {tags.map(name => (
      <span style={{ background: getTagColor(name) }} className="blog-tag">
        {name}
      </span>
    ))}
    <span
      style={{
        fontWeight: '400',
        color: 'rgba(165, 170, 173, 0.75)',
        margin: '10px auto',
      }}>{children}</span>
  </div>

const Description = ({ children }) =>
  <p
    style={{
      fontSize: '14px',
      margin: '0 0 10px',
      textAlign: 'justify',
      overflow: 'hidden',
      maxHeight: '72px',
      lineHeight: '24px'
    }}>{children}</p>

const BlogPost = ({ title, path, tags, date, desc }) => (
  <div style={{
    margin: '20px 0',
    padding: '0 0 20px'
  }}>
    <Title path={path}>{title}</Title>
    <DateAndTags tags={tags}>Nick Zuber — {date}</DateAndTags>
    <Description>{desc}</Description>
  </div>
)

export default BlogPost
