import React from 'react'
import Link from 'gatsby-link'
import VisibilitySensor from 'react-visibility-sensor'
import gud from 'gud'
import TopProfile from '../TopProfile'
import HighlightHeader from '../HighlightHeader'
import Icon from '../Icon'

function onChange (isVisible, icon, contentItemClass) {
  if (isVisible) {
    document.querySelector(`.${contentItemClass} .item-content h1`).classList.add('animate-highlight-text-right')
    // add correct icon burst class
    document.querySelector(`.${contentItemClass} .item-icon .item-icon-base`).classList.add('has_bursted')
  }
}

const ContentItem = ({ icon, children }) => {
  const id = gud()
  const contentItemClass = `-content-item-${id}`
  return (
    <div className={`item-wrapper ${contentItemClass}`}>
      <div className="item-icon">
        <Icon icon={icon} />
      </div>
      <div className="item-content">
        {children}
        <VisibilitySensor onChange={(isVisible) => onChange(isVisible, icon, contentItemClass)} />
      </div>
    </div>
  )
}

export default ContentItem
