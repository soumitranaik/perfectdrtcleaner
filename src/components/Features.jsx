import React, { useState } from 'react';
import '../assets/featuredstyles.css';
import { motion } from 'framer-motion';
import { FaCheckSquare, FaChevronCircleRight, FaRegCheckCircle } from 'react-icons/fa';



const Features = () => {

  const [isHovered, setIshovered] = useState(false);
  const [isHovered2, setIshovered2] = useState(false);
  const [isHovered3, setIshovered3] = useState(false);
  const [isHovered4, setIshovered4] = useState(false);
  return (
    <div className="features-container">
      <motion.div
        id="feature1"
        className="features-section"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onHoverStart={() => setIshovered(true)}
        onHoverEnd={() => setIshovered(false)}
        
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="content">
          <motion.h1>Premium Fabric Care</motion.h1>
          {isHovered && (
            <motion.p
              className="features-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ul>
                <li>
                  <FaCheckSquare /> Dry Cleaning: Trust us with your garments
                  for meticulous dry cleaning, leaving them looking and feeling
                  brand new.
                </li>
                <li>
                  <FaCheckSquare /> Darning or Mending: Extend the life of your
                  favorite garments with our expert repair services.
                </li>
              </ul>
            </motion.p>
          )}
        </div>
        <div className="overlay"></div>
      </motion.div>
      <motion.div
        id="feature2"
        className="features-section"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onHoverStart={() => setIshovered2(true)}
        onHoverEnd={() => setIshovered2(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="content">
          <h1>Textile Revitalization</h1>
          {isHovered2 && (
            <motion.p
              className="features-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ul>
                <li>
                  <FaCheckSquare /> Starching: Give your fabrics a crisp and
                  polished finish with our professional starching service.
                </li>
                <li>
                  <FaCheckSquare /> Saree Calendering: Preserve the elegance of
                  your sarees through specialized calendering.
                </li>
              </ul>
            </motion.p>
          )}
        </div>
        <div className="overlay"></div>
      </motion.div>
      <motion.div
        id="feature3"
        className="features-section"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onHoverStart={() => setIshovered3(true)}
        onHoverEnd={() => setIshovered3(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="content">
          <h1>Home and Furniture Cleaning</h1>
          {isHovered3 && (
            <motion.p
              className="features-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ul>
                <li>
                  <FaCheckSquare /> Cleaning Services: Comprehensive cleaning
                  for clothes and household textiles for a fresh and hygienic
                  touch.
                </li>
                <li>
                  <FaCheckSquare /> Sofa, Carpet, Curtain, and Mattress
                  Cleaning: Elevate your living space with professional cleaning
                  for various items.
                </li>
              </ul>
            </motion.p>
          )}
        </div>
        <div className="overlay"></div>
      </motion.div>
      <motion.div
        id="feature4"
        className="features-section"
        whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        onHoverStart={() => setIshovered4(true)}
        onHoverEnd={() => setIshovered4(false)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="content">
          <h1>Specialized Garment Care</h1>
          {isHovered4 && (
            <motion.p
              className="features-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <ul>
                <li>
                  <FaCheckSquare /> Designer Wear Cleaning: Trust us with the
                  unique requirements of high-end fabrics and intricate designs.
                </li>
                <li>
                  <FaCheckSquare /> Wedding Dress Cleaning: Cherish the memories
                  of your special day with our delicate cleaning and
                  preservation service.
                </li>
              </ul>
            </motion.p>
          )}
        </div>
        <div className="overlay"></div>
      </motion.div>
    </div>
  );
}

export default Features