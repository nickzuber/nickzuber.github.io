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
import CapSheet from '../../img/sheets/sprite-sheet-cap.png'

import DrawnBox from '../../img/drawn/box.png'
import DrawnBoxSheet from '../../img/drawn/sprite-sheet-box.png'
import DrawnPaperSheet from '../../img/drawn/sprite-sheet-paper.png'
import DrawnMapSheet from '../../img/drawn/sprite-sheet-map.png'
import DrawnLaptopSheet from '../../img/drawn/sprite-sheet-laptop.png'
import DrawnBookSheet from '../../img/drawn/sprite-sheet-book.png'
import DrawnCoffeeSheet from '../../img/drawn/sprite-sheet-coffee.png'
import DrawnSchoolSheet from '../../img/drawn/sprite-sheet-school.png'

function getIcon (t) {
  switch (t) {
    case 'laptop':
      return DrawnLaptopSheet
    case 'heart':
      return DrawnCoffeeSheet
    case 'pencil':
      return DrawnBookSheet
    case 'letter':
      return DrawnPaperSheet
    case 'social':
      return DrawnMapSheet
    case 'travel':
      return DrawnBoxSheet
    case 'wrench':
      return DrawnLaptopSheet
    case 'cap':
      return DrawnSchoolSheet
    default:
      return DrawnBoxSheet
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
