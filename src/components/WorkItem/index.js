import React from 'react'
import Link from 'gatsby-link'
import VisibilitySensorWithOffset from '../VisibilitySensorWithOffset'
import gud from 'gud'
import Icon from '../Icon'

function onChange (isVisible, icon, contentItemClass) {
  if (isVisible) {
    document.querySelector(`.${contentItemClass} .work-safe-wrapper`).classList.add('fade-in')
    document.querySelector(`.${contentItemClass} .work-right h1 .work-title`).classList.add('animate-highlight-text-right')
    // add correct icon burst class
    document.querySelector(`.${contentItemClass} .work-left .item-icon-base`).classList.add('has-bursted')
    let maybeLine = document.querySelector(`.${contentItemClass} .work-left .work-line`)
    maybeLine ? maybeLine.classList.add('fade-in') : null
  }
}

const SvgDashedLine = ({ d }) =>
  <svg className="work-line" width="50" height="195" viewBox="62 5 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path
        strokeWidth="2"
        stroke="rgba(165, 170, 173, 0.75)"
        strokeLinecap="round"
        strokeDasharray="15, 10, 5, 10, 15"
        d={d}
      />
    </g>
  </svg>

const WorkBlock = ({ d, children, ...props }) => {
  const renderLine = props.isLast ? false : true
  const id = gud()
  const workBlockClass = `-content-item-${id}`
  return (
    <div className={`work-block-wrapper ${workBlockClass}`}>
      <div className="work-safe-wrapper">
        <div className="work-left">
          <div className="work-icon">
            <Icon icon={"icon prop here"} />
          </div>
          {renderLine ? <SvgDashedLine d={d} /> : null}
        </div>
        <div className="work-right">
          <VisibilitySensorWithOffset
            offset={100}
            onChange={(isVisible) => onChange(isVisible, "icon prop here", workBlockClass)}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default WorkBlock
