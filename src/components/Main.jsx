import React from 'react';
import Video from './Video';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Milestones from './Milestones';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import Skills from './Skills';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';
import Slider from './Slider';
import Features from './Features';
import Reviews from './Reviews';

export const Main = () => {
  return (
    <>  
        <Home />
        <Services />
        
        <Portfolio />
        <About />
        
        <Features />
        <Blog />
        <Video />
        <Reviews />
        
        <Contact />
        
        <ScrollToTop />
    </>
  )
}
