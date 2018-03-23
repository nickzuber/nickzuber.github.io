import React from 'react'
import Link from 'gatsby-link'
import VisibilitySensorWithOffset from '../VisibilitySensorWithOffset'
import gud from 'gud'
import TopProfile from '../TopProfile'
import HighlightHeader from '../HighlightHeader'
import Icon from '../Icon'

function onChange (isVisible, contentItemClass) {
  if (isVisible) {
    document.querySelector(`.${contentItemClass} .item-safe-wrapper`).classList.add('fade-in')
    document.querySelector(`.${contentItemClass} .item-content h1`).classList.add('animate-highlight-text-right')
    document.querySelector(`.${contentItemClass} .item-icon .item-icon-base`).classList.add('has-bursted')
  }
}

const ContentItem = ({ icon, children }) => {
  const id = gud()
  const contentItemClass = `-content-item-${id}`
  return (
    <div className={`item-wrapper ${contentItemClass}`}>
      <div className="item-safe-wrapper">
        <div className="item-icon">
          <Icon icon={icon} />
        </div>
        <div className="item-content">
          <VisibilitySensorWithOffset
            offset={25}
            onChange={(isVisible) => onChange(isVisible, contentItemClass)}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default ContentItem
