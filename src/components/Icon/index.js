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

import RobinSheet from '../../img/sheets/sprite-sheet-robin.png'
import BoxSheet from '../../img/sheets/sprite-sheet-box.png'
import VerandaSheet from '../../img/sheets/sprite-sheet-veranda.png'
import UmlSheet from '../../img/sheets/sprite-sheet-uml.png'

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
    case 'robin':
      return RobinSheet
    case 'box':
      return BoxSheet
    case 'veranda':
      return VerandaSheet
    case 'uml':
      return UmlSheet
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
