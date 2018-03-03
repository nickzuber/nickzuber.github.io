import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const WebpageWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Nick Zuber — Software Engineer"
      meta={[
        { name: 'description', content: 'Nick Zuber is a software engineer based in the Boston and Bay Area.' },
        { name: 'keywords', content: 'nick, zuber, software, engineer, nick zuber, software engineer, nickzuber' },
      ]}
    />
    <Header />
    <div className="wrapper">
      <div className="content">
        {children()}
        <p style={{
          textAlign: 'center',
          fontSize: '80%',
          opacity: '.3',
          letterSpacing: '-0.035em',
        }}>&copy; Copyright 2018 Nick Zuber</p>
      </div>
    </div>
  </div>
)

WebpageWrapper.propTypes = {
  children: PropTypes.func,
}

export default WebpageWrapper
