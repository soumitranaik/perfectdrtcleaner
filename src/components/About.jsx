import React from 'react';
import styled from 'styled-components';
import aboutUsImage from '../assets/portfolio1.jpg';
import Title from './Title';
import { motion, useAnimation } from 'framer-motion';
import play from "assets/play.png";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaCar, FaCheck, FaClock } from 'react-icons/fa';
import { BsClock, BsTruck } from 'react-icons/bs';



function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  const buttonVariants = {
    initial: {
      backgroundColor: "#00c0de", // Initial background color
    },
    hover: {
      backgroundColor: "#000", // Background color on hover
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  
  const slideInVariants = {
    hidden: { x: '-100%' }, // Start position (fully outside the viewport on the left)
    visible: { x: 0 },      // End position (slid in to 0%)
  };

  const slideInTransition = {
    type: 'spring',     // You can use 'tween', 'spring', or 'inertia' for the type of animation
    damping: 25,        // Adjust damping to control bounciness
    stiffness: 100,     // Adjust stiffness to control speed and smoothness
  };
  const slideOutVariants = {
    hidden: { x: '200%' }, // Start position (fully outside the viewport on the left)
    visible: { x: 0 },      // End position (slid in to 0%)
  };
  

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Section id="aboutUs">
      <Title value="about us" />
      <div className="about-us">
        <motion.div className="content">
          <motion.div
            className="image"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={slideInVariants}
            transition={slideInTransition}
          >
            <img src={aboutUsImage} alt="About Us" />
          </motion.div>
          <motion.div
            className="text"
            ref={ref2}
            initial="hidden"
            animate={controls}
            variants={slideOutVariants}
            transition={slideInTransition}
          >
            <h2>Perfect Dry Cleaner: We Clean, You Should Relax</h2>
            <p>
              'We Clean, You Should Relax' is not just a slogan; it's a promise.
              Our team of dedicated professionals specializes in the intricate
              cleaning of carpets, sofas, curtains, designer dresses, and
              wedding dresses. When you choose us, you're not just opting for a
              cleaning service; you're trusting us with your most cherished
              items, and we take that responsibility seriously. What sets us
              apart is our unwavering dedication to providing the best service
              possible. <br /><br />
              <p style={{display:'inline-flex', alignItems:'center'}}><BsTruck style={{fontSize:'32', color:'#00c0de', marginRight:'2rem'}} /> Free Home Delivery</p><br></br>
              <p style={{display:'inline-flex', alignItems:'center'}}><BsClock style={{fontSize:'32', color:'#00c0de', marginRight:'2rem'}} /> 24 X 7 Service</p>
            </p>
            <div className="more">
              
              <motion.button class="up" variants={buttonVariants}
      initial="initial"
      whileHover="hover"> Schedule a Free Pick-Up</motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .about-us {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 14rem;

    margin-left: 14rem;
    height: 100vh;
    /*margin-top: 10rem;*/
    gap: 5rem;
    .content {
      display: flex;
      align-items: center;
      .image {
        flex: 1;
        margin-right: 5rem;
        img {
          width: 100%;
          max-width: 100%;
          height: auto;
        }
      }
      .text {
        flex: 1;
        h2 {
          font-size: 3rem;
          line-height: 1;
          margin-bottom: 3rem;
          color: var(--secondary-color);
        }
        p {
          color: var(--primary-color);
        }
        .more {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          span {
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            color: var(--primary-color);
          }
        }
        button {
          
            background: #00c0de;
            border: none;
            color: #fff;
            font: inherit;
            line-height: 1;
            margin: 0.5em;
            padding: 1em 2em;
          
        }
        button: hover{
          
          background-color: #000;
          color: #fff

        
      }
      }
    }
  }
  @media (min-width: 1600px) {
    .about-us {
      padding-top: 5rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1000px) {
    .about-us {
      margin: 2rem 0;
      display: block;
      gap: 2rem;
      padding: 0 2rem;
      height: auto;
      margin: 8rem 0rem;
      .content {
        display: block !important;
        text-align: left;
        .image,
        .text {
          width: 100%;
          margin-bottom: 4rem;
        }
      }
    }
  }
`;

export default About