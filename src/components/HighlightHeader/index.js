import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import gud from 'gud'

const HighlightHeader = ({ children }) => {
  const id = gud()
  const headerClass = `header-${id}`
  return (
    <div>
      <h1 className={headerClass}>{children}</h1>
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            console.log(document.querySelector(`.${headerClass}`).classList.add('animate-highlight-text-right'))
          }
          console.log('Element is now %s', isVisible ? 'visible' : 'hidden')
        }}
      />
    </div>
  )
}

export default HighlightHeader
