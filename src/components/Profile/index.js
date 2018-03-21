
import React from 'react'
import ProfileSheet from '../../img/sheets/sprite-sheet-profile.png'
import ProfileStatic from '../../img/me.jpg'

const AnimatedProfile = () => (
  <div
    style={{
      position: 'relative',
      height: '110px',
      margin: '0'
    }}
  >
    <div
      style={{backgroundImage: `url(${ProfileSheet})`}}
      className="profile has-bursted"
    />
  </div>
)

const StaticProfile = () => (
  <div
    style={{
      position: 'relative',
      height: '110px',
      margin: '0 auto 10px'
    }}
  >
    <div
      style={{backgroundImage: `url(${ProfileStatic})`}}
      className="profile-static"
    />
  </div>
)

export default StaticProfile
