import React from 'react'
import Link from 'gatsby-link'
import Profile from '../Profile'
import HotLinks from '../HotLinks'

const ITEM_HEIGHT = 40.95

class TextCycle extends React.Component {
  state = {
    maxItems: 0,
    prevItem: 4,
    item: 4
  }

  getMarginOffsetFromItem (item) {
    return `-${ITEM_HEIGHT * Math.min(Math.max(item, 0), this.state.maxItems)}px`
  }

  pickRandomItem () {
    do {
    var newItem = Math.floor(Math.random() * this.state.maxItems)
    } while (newItem === this.state.item || newItem === this.state.prevItem)
    return newItem
  }

  componentDidMount () {
    const maxItems = document.querySelector('.text-cycle ul').children.length
    this.setState({ maxItems }, () => {
      this.cycle = setInterval(() => {
        const prevItem = this.state.item
        const item = this.pickRandomItem()
        this.setState({ prevItem, item })
      }, 3000)
    })
  }

  componentWillUnmount () {
    clearInterval(this.cycle)
  }

  render () {
    return (
      <div className="text-cycle">
        <ul style={{ marginTop: this.getMarginOffsetFromItem(this.state.item) }}>
          <li>Parsers</li>
          <li>ReasonML</li>
          <li>JavaScript</li>
          <li>PL Design</li>
          <li>Compilers</li>
          <li>Types</li>
          <li>OCaml</li>
        </ul>
      </div>
    );
  }
}

export default TextCycle
