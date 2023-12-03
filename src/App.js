import Services from './components/Services';
import { Main } from 'components/Main';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from 'components/Navbar';
import DrycleaningServices from 'pages/Drycleaning';
import ScrollToTop from 'components/ScrollToTop';
import Footer from 'components/Footer';


const App = () => {
  const location = useLocation(); 

  return (
    <>
      <motion.div initial="hidden" animate="show">
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route  path="/drycleaning" element={<DrycleaningServices />} />
            <Route path="/services" element={<Services />} />
           
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
