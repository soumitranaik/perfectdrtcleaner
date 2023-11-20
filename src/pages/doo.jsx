import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Doo = () => {
  useEffect(() => {
    console.log('Enter animation component mounted');

    return () => {
      console.log('Enter animation component unmounted');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Dry Cleaning Enter</h2>
      <p>We specialize in providing exceptional dry cleaning services...</p>
    </motion.div>
  );
};

export default Doo;
