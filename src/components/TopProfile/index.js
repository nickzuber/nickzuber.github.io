import React from 'react'
import Link from 'gatsby-link'
import Profile from '../Profile'

const TopProfile = () => (
  <div style={{textAlign: 'center'}}>
    <Profile />
    <h1
      style={{
        fontWeight: '700',
        fontSize: '3em',
        letterSpacing: '-.03em'
      }}
    >Nick Zuber</h1>
    <Link to="/">Go to home</Link> <Link to="/work/">Go to work</Link>
  </div>
)

export default TopProfile
