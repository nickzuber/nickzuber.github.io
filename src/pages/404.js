import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../components/TopProfile'

const FourOhFourPage = () => (
  <div>
    <TopProfile />
    <h1 className="animate-highlight-text-right">Well, this is awkward.</h1>
    <p>This page doesn't exist. Either the link you clicked on is broken (wicked sorry about that) or you just typed in the wrong address (real smooth). Either way, let's get <Link to='/'>back to the good stuff</Link>.</p>
  </div>
)

export default FourOhFourPage
