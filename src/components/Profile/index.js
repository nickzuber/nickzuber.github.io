
import React from 'react'
import ProfileSheet from '../../img/sheets/sprite-sheet-profile.png'

const Profile = () => (
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

export default Profile
