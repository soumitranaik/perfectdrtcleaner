import Services from './components/Services';
import { Main } from 'components/Main';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar';
import DrycleaningServices from 'pages/Drycleaning';
import ScrollToTop from 'components/ScrollToTop';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Washing from 'pages/Washing';
import IroningServices from 'pages/Ironing';
import About from 'pages/About';
import ContactUs from 'pages/ContactUs';



const App = () => {
  const location = useLocation(); 

  return (
    <>
      <motion.div initial="hidden" animate="show">
      
        <Header />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route  path="/drycleaning" element={<DrycleaningServices />} />
            <Route  path="/washing" element={<Washing />} />
            <Route  path="/ironing" element={<IroningServices />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
           
            <Route path="/" element={<Main />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTop />
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
