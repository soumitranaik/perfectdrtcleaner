import React from 'react';
import Video from './Video';
import Blog from './Blog';
import Contact from './Contact';

import Home from './Home';

import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';

import Services from './Services';

import About from './About';

import Features from './Features';
import Reviews from './Reviews';
import Work from './Work';
import CalltoAction from './CalltoAction';
import Offer from './Offer';
import Slider from './Slider';
import Instagram from './Instagram';
import transition from 'transition';

export const Main = () => {
  return (
    <>  
        <Home />
        <Services />
        <Features />
        {/*<Portfolio />*/}
        <About />
        
        
        
        <Offer />
        <Instagram />
        
        <Work />
        
        
        <Reviews />
        <CalltoAction />
        
        <Contact />
        
        <ScrollToTop />
    </>
  )
}
