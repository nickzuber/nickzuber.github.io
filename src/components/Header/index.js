import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    className='header-section'
    style={{
      background: 'none',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        textAlign: 'right',
        boxSizing: 'border-box',
      }}
    >
      <Link exact activeClassName={'not-btn-active'} className='not-btn' to="/">Home</Link>
      <Link exact activeClassName={'not-btn-active'} className='not-btn' to="/career/">Career</Link>
      <Link exact activeClassName={'not-btn-active'} className='not-btn' to="/projects/">Projects</Link>
      {/* <a target="_blank" className='not-btn'href='https://github.com/nickzuber'>GitHub</a> */}
      <Link exact activeClassName={'btn-active'} className='btn'to="/blog/">Blog</Link>
    </div>
  </div>
)

export default Header
