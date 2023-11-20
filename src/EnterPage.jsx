import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EnterPage = () => {
  useEffect(() => {
    console.log('EnterPage component mounted');

    return () => {
      console.log('EnterPage component unmounted');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Enter Animation Page</h2>
      <p>This is the enter animation page.</p>
      <Link to="/exit">Go to Exit Animation Page</Link>
    </motion.div>
  );
};

export default EnterPage;
