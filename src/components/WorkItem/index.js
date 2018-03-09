import React from 'react'
import Link from 'gatsby-link'
import VisibilitySensorWithOffset from '../VisibilitySensorWithOffset'
import gud from 'gud'
import Icon from '../Icon'

function onChange (isVisible, contentItemClass) {
  if (isVisible) {
    document.querySelector(`.${contentItemClass} .work-safe-wrapper`).classList.add('fade-in')
    document.querySelector(`.${contentItemClass} .work-right h1 .work-title`).classList.add('animate-highlight-text-right')
    document.querySelector(`.${contentItemClass} .work-left .item-icon-base`).classList.add('has-bursted')
    let maybeLine = document.querySelector(`.${contentItemClass} .work-left .work-line`)
    maybeLine ? maybeLine.classList.add('fade-in') : null
  }
}

const SvgDashedLine = ({ d }) =>
  <svg className="work-line" width="50" height="195" viewBox="62 10 50 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path
        strokeWidth="2"
        stroke="rgba(50, 77, 90, 0.25)"
        strokeLinecap="round"
        strokeDasharray="15, 10, 5, 10, 15"
        d={d}
      />
    </g>
  </svg>

const WorkBlock = ({ d, icon, children, ...props }) => {
  const renderLine = props.isLast ? false : true
  const id = gud()
  const workBlockClass = `-content-item-${id}`
  return (
    <div className={`work-block-wrapper ${workBlockClass}`}>
      <div className="work-safe-wrapper">
        <div className="work-left">
          <div className="work-icon">
            <Icon icon={icon} />
          </div>
          {renderLine ? <SvgDashedLine d={d} /> : null}
        </div>
        <div className="work-right">
          <VisibilitySensorWithOffset
            offset={150}
            onChange={(isVisible) => onChange(isVisible, workBlockClass)}
          />
          {children}
        </div>
      </div>
    </div>
  )
}

export default WorkBlock
