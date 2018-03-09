import React from 'react'
import Link from 'gatsby-link'
import TopProfile from '../TopProfile'
import HighlightHeader from '../HighlightHeader'

import ProfileSheet from '../../img/sheets/sprite-sheet-profile.png'

import HeartSheet from '../../img/sheets/sprite-sheet-heart.png'
import PencilSheet from '../../img/sheets/sprite-sheet-pencil.png'
import LetterSheet from '../../img/sheets/sprite-sheet-letter.png'
import LaptopSheet from '../../img/sheets/sprite-sheet-laptop.png'
import TravelSheet from '../../img/sheets/sprite-sheet-luggage.png'
import SocialSheet from '../../img/sheets/sprite-sheet-helmet.png'

import WrenchSheet from '../../img/sheets/sprite-sheet-wrench.png'

function getIcon (t) {
  switch (t) {
    case 'laptop':
      return LaptopSheet
    case 'heart':
      return HeartSheet
    case 'pencil':
      return PencilSheet
    case 'letter':
      return LetterSheet
    case 'social':
      return SocialSheet
    case 'travel':
      return TravelSheet
    case 'wrench':
      return WrenchSheet
    default:
      return RobinSheet
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
