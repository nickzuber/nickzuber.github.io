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

const Title = ({ children }) =>
  <h1
    style={{
      fontWeight: '600',
      fontSize: '21px',
      letterSpacing: '-0.025em',
      margin: '0px',
      color: '#32383e',
      display: 'block',
      padding: '0'
    }}>{children}</h1>

export const DateAndTags = ({ tags, children }) =>
  <div style={{
    margin: '8px 0',
    lineHeight: '21px',
    textAlign: 'left',
    color: 'rgba(50, 77, 90, 0.35)',
    fontSize: '14px'
  }}>
    {tags.map(name => (
      <span
        key={name}
        className="blog-tag"
        style={{ background: getTagColor(name) }}
      >
        {name}
      </span>
    ))}
    <span
      style={{
        fontWeight: '400',
        color: 'rgba(50, 77, 90, 0.35)',
        margin: '10px auto',
      }}>{children}</span>
  </div>

const Description = ({ children }) =>
  <p
    style={{
      margin: '0 0 10px',
    }}>{children}</p>

const BlogPost = ({ title, path, tags, date, desc }) => (
  <div style={{
    margin: '20px 0',
    padding: '0 0 20px'
  }}>
    <Link to={path}>
      <Title>{title}</Title>
      <DateAndTags tags={tags}>{date}</DateAndTags>
      <Description>{desc}</Description>
    </Link>
  </div>
)

export default BlogPost
