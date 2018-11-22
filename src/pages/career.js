import React from 'react'
import TopProfile from '../components/TopProfile'
import WorkItem from '../components/WorkItem'
import UmlPng from '../img/logos/uml.png';
import VerandaPng from '../img/logos/veranda.png';

const Logo = ({children, url = '#'}) => (
  <div
    onClick={() => window.open(url)}
    style={{
      cursor: 'pointer',
      display: 'inline-block',
      position: 'relative',
    }}>
    {children}
  </div>
)

const curve1 = "M 80 40 Q 100 80 80 120 Q 60 160 80 200"
const curve2 = "M 80 40 Q 60 80 80 120 Q 100 160 80 200"
const curve3 = "M 80 40 Q 60 80 100 160 Q 100 160 80 200"
const curve4 = "M 80 40 Q 100 60 100 100 Q 60 140 80 200"

const DateSubtitle = ({ children }) =>
  <span style={{
    margin: '-1px 0 10px',
    marginLeft: 8,
    verticalAlign: '-webkit-baseline-middle',
    fontSize: '12px',
    fontWeight: '400',
    display: 'inline-block',
    color: 'rgba(50, 77, 90, 0.35)'
  }}>
    {children}
  </span>

const Company = ({ title }) => {
  return (
    <h1 style={{ lineHeight: '1.1em', marginBottom: 3 }}>
      <span className="work-title">{title}</span>
    </h1>
  )
}

function RobinLogo () {
  return (
    <svg style={{
      height: 12
    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 22">
      <defs>
        <linearGradient id="linearGradientRobin" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EB3349"></stop>
          <stop offset="98.583%" stopColor="#F45D43"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#linearGradientRobin)" fillRule="evenodd" d="M29.087 15.02a5.225 5.225 0 0 1-.914 1.507c-.373.423-.79.751-1.248.983-.46.234-.931.35-1.415.35-.907 0-1.579-.307-2.017-.92-.439-.614-.645-1.429-.62-2.444a5.657 5.657 0 0 1 .364-1.92c.226-.582.526-1.09.9-1.524a4.11 4.11 0 0 1 1.248-1c.46-.232.93-.348 1.414-.348.927 0 1.61.306 2.048.92.438.614.645 1.428.62 2.444a5.522 5.522 0 0 1-.38 1.951m2.81-7.315c.549.593.975 1.291 1.278 2.095.302.804.442 1.693.418 2.666-.033 1.312-.27 2.528-.71 3.65a9.363 9.363 0 0 1-1.81 2.935 8.297 8.297 0 0 1-2.723 1.967c-1.05.476-2.19.714-3.418.714a6.142 6.142 0 0 1-2.467-.491 5.924 5.924 0 0 1-1.976-1.38 6.138 6.138 0 0 1-1.293-2.112c-.303-.814-.442-1.697-.418-2.65a9.816 9.816 0 0 1 .769-3.633 9.936 9.936 0 0 1 1.901-2.952 8.704 8.704 0 0 1 2.739-1.967 7.788 7.788 0 0 1 3.282-.714c.886 0 1.708.164 2.466.492a5.777 5.777 0 0 1 1.961 1.38zm16.467-.085c.39.595.697 1.164.931 1.904.234.741.34 1.555.318 2.444-.037 1.523-.318 2.883-.841 4.078-.524 1.196-1.164 2.211-2.02 3.047-.858.836-1.754 1.556-2.853 1.989-1.099.433-2.194.565-3.383.565-2.318 0-4.797-.37-6.628-1.28L38.136.002h4.17l-1.574 7.544c.598-.55 1.214-1.022 1.814-1.255.6-.233 1.156-.46 2.266-.46s1.627.218 2.185.551c.446.266 1.04.74 1.367 1.238zM45.06 14.59c.182-.669.291-1.361.215-2.125-.067-.666-.185-1.22-.622-1.841-.351-.5-1.046-.889-1.812-.889-.907 0-1.645.313-2.175.937-.529.624-.896 1.412-1.1 2.364l-.958 4.507c.369.116.653.184.931.238.32.061.81.118 1.397.118.665 0 1.3-.146 1.85-.41.55-.265.986-.724 1.37-1.2.385-.477.737-1.083.904-1.699zm4.827 6.548L52.986 6.34h4.17l-3.098 14.798h-4.17zm21.01-13.91c.675.825.995 1.936.96 3.333a9.886 9.886 0 0 1-.157 1.523l-1.9 9.054H65.6l1.729-8.26c.068-.318.106-.625.113-.921.016-.635-.113-1.143-.386-1.524-.273-.38-.722-.57-1.346-.57-.464 0-.884.1-1.262.3a3.264 3.264 0 0 0-.987.81c-.28.338-.522.73-.724 1.174-.203.444-.35.91-.442 1.396l-1.592 7.595h-4.14L59.66 6.34h3.99l-.222 1.618c.663-.72 1.346-1.227 2.048-1.523.703-.296 1.507-.445 2.414-.445 1.33 0 2.332.413 3.007 1.238zm-52.884-5.23c.545.6.948 1.294 1.21 2.084.263.79.354 1.638.273 2.543-.101.99-.353 1.854-.757 2.591a7.035 7.035 0 0 1-1.469 1.88c-.575.517-2.164 1.336-2.164 1.336S15.81 14 16.436 16.8c.5 2.24.561 4.34.561 4.34h-4.449s-.087-2.221-.527-4.2c-.21-.948-.315-1.406-.461-1.838-.407-1.198-1.214-1.833-2.439-1.833H6.234l-1.659 7.87H0L3.647 3.355 2.241 0h11.15c.989 0 1.81.228 2.608.576a5.818 5.818 0 0 1 2.014 1.421zm-5.6 1.583h-4.09L6.99 9.691h4.876c.156 0 .314-.019.475-.052.155-.038.312-.09.47-.159a3.44 3.44 0 0 0 .985-.648c.293-.273.545-.6.757-.98.212-.378.338-.79.379-1.231.04-.4.01-.785-.09-1.154a2.743 2.743 0 0 0-.47-.963 2.333 2.333 0 0 0-.772-.648c-.303-.158-.823-.275-1.186-.275zm45.804-1.13c0 1.355-1.045 2.452-2.335 2.452-1.289 0-2.334-1.097-2.334-2.451S54.593 0 55.882 0c1.29 0 2.335 1.097 2.335 2.45z"></path>
    </svg>
  );
}

function BoxLogo () {
  return (
    <svg style={{
      height: 12
    }} id="Layer_1" viewBox="0 0 40 21.6" xmlns="http://www.w3.org/2000/svg">
      <path fill="#005ed8" d="M39.7 19.2c.5.7.4 1.6-.2 2.1-.7.5-1.7.4-2.2-.2l-3.5-4.5-3.4 4.4c-.5.7-1.5.7-2.2.2-.7-.5-.8-1.4-.3-2.1l4-5.2-4-5.2c-.5-.7-.3-1.7.3-2.2.7-.5 1.7-.3 2.2.3l3.4 4.5L37.3 7c.5-.7 1.4-.8 2.2-.3.7.5.7 1.5.2 2.2L35.8 14l3.9 5.2zm-18.2-.6c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c-.1 2.6-2.2 4.6-4.7 4.6zm-13.8 0c-2.6 0-4.7-2-4.7-4.6 0-2.5 2.1-4.6 4.7-4.6s4.7 2.1 4.7 4.6c0 2.6-2.1 4.6-4.7 4.6zM21.5 6.4c-2.9 0-5.5 1.6-6.8 4-1.3-2.4-3.9-4-6.9-4-1.8 0-3.4.6-4.7 1.5V1.5C3.1.7 2.4 0 1.6 0 .7 0 0 .7 0 1.5v12.6c.1 4.2 3.5 7.5 7.7 7.5 3 0 5.6-1.7 6.9-4.1 1.3 2.4 3.9 4.1 6.8 4.1 4.3 0 7.8-3.4 7.8-7.7.1-4.1-3.4-7.5-7.7-7.5z"></path>
    </svg>
  );
}

function UmlLogo () {
  return (
    <div style={{
      height: 12,
      width: 65,
      background: `url(${UmlPng}) left center no-repeat`,
      backgroundSize: 'contain'
    }}>
    </div>
  );
}

function VerandaLogo () {
  return (
    <div style={{
      height: 14,
      width: 53,
      background: `url(${VerandaPng}) left center no-repeat`,
      backgroundSize: 'contain'
    }}>
    </div>
  );
}

const WorkPage = () => (
  <div style={{textAlign: 'center' }}>
    <TopProfile />

    <WorkItem icon="wrench" d={curve1}>
      <Company
        title="Software Engineer"
        color="#eb3349"
        place="Robin"
      />
      <Logo url="https://robinpowered.com/">
        <RobinLogo />
      </Logo>
      <DateSubtitle>June 2018 — current</DateSubtitle>
      <p>I've rejoined the Robin engineering team to make it easier to manage your meeting rooms. Working with React, React Native, and JavaScript for web, iOS, and Android mobile apps.</p>
    </WorkItem>

    <WorkItem icon="cap" d={curve2}>
      <Company
        title="Graduated College"
        color="#0468b1"
        place="University of Massachuetts Lowell"
      />
      <Logo url="https://uml.edu/">
        <UmlLogo />
      </Logo>
      <DateSubtitle>May 2018</DateSubtitle>
      <p>Recieved a bachelor's degree in Computer Science with a minor in Mathematics from the University of Massachuetts Lowell.</p>
    </WorkItem>

    <WorkItem icon="wrench" d={curve1}>
      <Company
        title="Software Engineering Intern"
        color="#0060d5"
        place="Box"
      />
      <Logo url="https://box.com/home/">
        <BoxLogo />
      </Logo>
      <DateSubtitle>June 2017 — August 2017</DateSubtitle>
      <p>Spent the summer working on ClusterRunner, a tool that helps run test suites in the fastest and most efficient way possible. Worked with Python and SQLite to build APIs and developer tools.</p>
    </WorkItem>

    <WorkItem icon="wrench" d={curve2}>
      <Company
        title="Software Engineering Intern"
        color="#eb3349"
        place="Robin"
      />
      <Logo url="https://robinpowered.com/">
        <RobinLogo />
      </Logo>
      <DateSubtitle>May 2016 — August 2016</DateSubtitle>
      <p>Over the summer, I helped develop Robin's new user facing mobile app. Worked with React Native and Redux for both iOS and Android mobile apps.</p>
    </WorkItem>

    <WorkItem icon="wrench" d={curve1}>
      <Company
        title="Software Developer"
        color="#2cb673"
        place="Veranda Outdoors"
      />
      <Logo url="http://verandaoutdoors.com/">
        <VerandaLogo />
      </Logo>
      <DateSubtitle>May 2015 — August 2015</DateSubtitle>
      <p>Led a small team of developers and created a wholesale ordering platform. Worked with PHP and MySQL to build out relational databases and user interfaces.</p>
    </WorkItem>

    <WorkItem icon="wrench" d={curve2}>
      <Company
        title="Freelance Software Engineer"
        color="#0468b1"
        place="University of Massachuetts Lowell"
      />
      <Logo url="https://uml.edu/">
        <UmlLogo />
      </Logo>
      <DateSubtitle>February 2015 — June 2015</DateSubtitle>
      <p>Teamed up with staff to build and design a web app to help automate the class scheduling process at my university. Worked with JavaScript and efficient algorithms to develop an optimized platform.</p>
    </WorkItem>

    <WorkItem icon="cap" d={curve1} isLast={true}>
      <Company
        title="Started College"
        color="#0468b1"
        place="University of Massachuetts Lowell"
      />
      <Logo url="https://uml.edu/">
        <UmlLogo />
      </Logo>
      <DateSubtitle>September 2014</DateSubtitle>
      <p>Started attending college majoring in Computer Science with a minor in Mathematics.</p>
    </WorkItem>
  </div>
)

export default WorkPage
