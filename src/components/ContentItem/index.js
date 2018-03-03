import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../TopProfile'
import HighlightHeader from '../HighlightHeader'
import Icon from '../Icon'

const ContentItem = ({ icon, children }) => (
  <div className="item-wrapper">
    <div className="item-icon">
      <Icon icon={icon} />
    </div>
    <div className="item-content">
      {children}
    </div>
  </div>
)

export default ContentItem
