import React from 'react'
import Link from 'gatsby-link'
import Profile from '../Profile'
import HotLinks from '../HotLinks'
import TextCycle from '../TextCycle';

const Header = ({ children }) =>
  <h1
    // className='animate-highlight-text-right'
    style={{
      // fontStyle: 'italic',
      fontWeight: '600',
      fontSize: '3em',
      letterSpacing: '-.05em',
      margin: 0,
      display: 'inline-block',
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
    <Subheader>Software engineer studying <TextCycle>stuff</TextCycle></Subheader>
    <HotLinks />
  </div>
)

export default TopProfile
