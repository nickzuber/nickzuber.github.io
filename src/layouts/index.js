import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'
import 'katex/dist/katex.min.css'

class TemplateWrapper extends React.Component {
  componentDidMount () {
    // run easter egg on inital page load
    console.log("%cUp for a challenge? %cMaybe you'll win a prize — isn't that exciting?","color: #ff4298","color: #5694f1")
    console.log("%cIf you solve it, email or tweet me the answer! %cDecode the following message:","color: #2cb673","color: #fe4a49")
    console.log("%ctr >>> '[\\040-\\054*37][\\056-\\075*22]3' '?-[N' '%0-)8-0(%-/(!.+ <<< LC_CTYPE/C","color: #999")
  }

  render () {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="Nick Zuber — Software Engineer"
          meta={[
            { name: 'description', content: 'Nick Zuber is a software engineer based in the Boston and Bay Area.' },
            { name: 'keywords', content: 'nick, zuber, software, engineer, nick zuber, software engineer, nickzuber' },
          ]}
        />
        <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700" rel="stylesheet" />
        <Header />
        <div className="wrapper">
          <div className="content">
            {children()}
            <p style={{
              textAlign: 'center',
              fontSize: '80%',
              opacity: '.3',
              letterSpacing: '-0.035em',
            }}>&copy; Copyright 2019 Nick Zuber</p>
          </div>
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
