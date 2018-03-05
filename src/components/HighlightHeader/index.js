import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import gud from 'gud'

const componentStyles = {
  textTransform: 'capitalize'
}

const HighlightHeader = ({ style, children }) => {
  const id = gud()
  const headerClass = `header-${id}`
  return (
    <div>
      <h1
        className={headerClass}
        style={{...componentStyles, ...style}}
      >{children}</h1>
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            document.querySelector(`.${headerClass}`).classList.add('animate-highlight-text-right')
          }
        }}
      />
    </div>
  )
}

export default HighlightHeader
