import React from 'react'
import Link from 'gatsby-link'
import Profile from '../Profile'
import HotLinks from '../HotLinks'

const Span = ({ children }) =>
  <span
    style={{
      color: '#EB298C',
      fontWeight: '400'
    }}>{children}</span>

const Header = ({ children }) =>
  <h1
    className='animate-highlight-text-right'
    style={{
      fontWeight: '600',
      fontSize: '3em',
      letterSpacing: '-.05em',
      margin: 0,
      display: 'inline-block',
      // fontStyle: 'italic',
      padding: '0 10px'
    }}>{children}</h1>

const Subheader = ({ children }) =>
  <h2
    style={{
      fontWeight: '400',
      color: 'rgba(165, 170, 173, 0.75)',
      fontSize: '1.5em',
      letterSpacing: '-0.02em',
      margin: '10px auto',
      padding: '0 10px'
    }}>{children}</h2>

const TopProfile = () => (
  <div style={{
    textAlign: 'center',
    marginBottom: '50px'
  }}>
    <Profile />
    <Header>Nick Zuber</Header>
    <Subheader>Software engineer working on <Span>stuff</Span></Subheader>
    <HotLinks />
  </div>
)

export default TopProfile
