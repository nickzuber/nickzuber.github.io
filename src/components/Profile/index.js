
import React from 'react'
import Sheet from '../../img/sprite-sheet.png'

const Profile = () => (
  <div
    style={{
      position: 'relative',
      height: '110px',
      margin: '0'
    }}
  >
    <div
      style={{backgroundImage: `url(${Sheet})`}}
      className="profile has_bursted"
    />
  </div>
)

export default Profile
