import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../TopProfile'
import HighlightHeader from '../HighlightHeader'

import HeartIcon from '../../img/heart.png'
import PencilIcon from '../../img/pencil.png'
import PrinterIcon from '../../img/printer.png'
import LaptopIcon from '../../img/laptop.png'
import TravelIcon from '../../img/luggage.png'
import SocialIcon from '../../img/helmet.png'

function getIcon (t) {
  switch (t) {
    case 'heart':
      return HeartIcon
    case 'pencil':
      return PencilIcon
    case 'printer':
      return PrinterIcon
    case 'social':
      return SocialIcon
    case 'travel':
      return TravelIcon
    case 'laptop':
      return LaptopIcon
    default:
      return HeartIcon
  }
}

const Icon = ({ icon }) => (
  <div
    className="item-icon-base"
    style={{
      backgroundImage: `url(${getIcon(icon)})`
    }}
  />
)

export default Icon
