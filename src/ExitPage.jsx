import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExitPage = () => {
  useEffect(() => {
    console.log('ExitPage component mounted');

    return () => {
      console.log('ExitPage component unmounted');
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
    
    >
      <h2>Exit Animation Page</h2>
      <p>This is the exit animation page.</p>
      <Link to="/enter">Go to Enter Animation Page</Link>
    </motion.div>
  );
};

export default ExitPage;
