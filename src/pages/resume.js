import React from 'react'
import TopProfile from '../components/TopProfile'

class ResumePage extends React.Component {
  componentDidMount () {
    window.location.href = './NickZuberResume.pdf'
  }

  render () {
    return (
      <div>
        <TopProfile />
        <div style={{ padding: '0 15px' }}>
          <h1 className="animate-highlight-text-right">Well, this is awkward.</h1>
          <p>You should have been redirected to my resume PDF file. If you haven't been already, for whatever reason, <a href="./NickZuberResume.pdf">click here instead</a>.</p>
        </div>
      </div>
    )
  }
}

export default ResumePage
