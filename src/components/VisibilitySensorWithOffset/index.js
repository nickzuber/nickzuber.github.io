import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const VisibilitySensorWithOffset = ({ onChange, offset }) =>
  <div style={{
    position: 'absolute',
    marginTop: `${offset}px`
  }}>
    <VisibilitySensor onChange={onChange} />
  </div>

export default VisibilitySensorWithOffset
