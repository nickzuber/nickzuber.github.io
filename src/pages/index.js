import React from 'react';
import SEO from '../components/seo';
import HeaderComponent from '../components/sections/Header';
import AboutComponent from '../components/sections/About';
import NewsComponent from '../components/sections/News';
import ProjectsComponent from '../components/sections/Projects';
import WritingsComponent from '../components/sections/Writings';
import ReadingsComponent from '../components/sections/Readings';
import FooterComponent from '../components/sections/Footer';
import '../components/layout.css';

function DefaultRoute () {
  return (
    <>
      <SEO keywords={['nick', 'zuber', 'zubes', 'software', 'engineer', 'javascript']} />
      <HeaderComponent color="#e8fdf5" />
      <AboutComponent />
      <NewsComponent color="#e7f5ff" />
      <ProjectsComponent color="#fffcd6" />
      <WritingsComponent color="#e7f5ff" />
      <ReadingsComponent />
      <FooterComponent />
    </>
  );
}

export default DefaultRoute;
