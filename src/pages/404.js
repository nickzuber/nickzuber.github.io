import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'

const Span = ({ children }) =>
  <span style={{
    // fontSize: '60%',
    // verticalAlign: 'top'
    // opacity: .5
  }}>
    {children}
  </span>

const FourOhFourPage = () => (
  <div>
    <TopProfile />
    <div style={{ padding: '0 15px' }}>
      <h1 className="animate-highlight-text-right">Well, this is awkward.</h1>
      <p>This page doesn't exist. Either the link you clicked on is broken <Span>(wicked sorry about that)</Span> or you just typed in the wrong address <Span>(real smooth dude)</Span>. Either way, let's get <Link to='/'>back to the good stuff</Link>.</p>
    </div>
  </div>
)

export default FourOhFourPage
