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
import shop from '../assets/shop3.jpg'



function Aboutwashing() {
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
            <img src={shop} alt="About Us" />
          </motion.div>
          <motion.div
            className="text"
            ref={ref2}
            initial="hidden"
            animate={controls}
            variants={slideOutVariants}
            transition={slideInTransition}
          >
            <h2>Soothing Fabric Care: Washing Services</h2>
            <p>
              Elevate your everyday with our exceptional washing services that
              redefine garment care. At our state-of-the-art facility, we take
              laundry to the next level, seamlessly blending innovative
              technology with a meticulous approach. From casual wear to
              intricate fabrics, our advanced washing process caters to a
              diverse range of clothing items. Tough stains stand no chance
              against our expert stain removal methods, ensuring that your
              clothes emerge spotless and refreshed. Whether it's your daily
              essentials or cherished garments, we treat each item with the
              utmost attention, preserving their quality and extending their
              lifespan. Trust us to breathe new life into your laundry,
              providing you with clothes that look and feel revitalized.
              Experience the synergy of precision craftsmanship and modern
              technology in our washing services, setting a new standard for
              laundry excellence.
              
              <br></br>
            </p>
            <div className="more">
              <motion.a
                class="up"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                href="https://api.whatsapp.com/send?phone=9899416600"
              >
                
                Schedule a Free Pick-Up
              </motion.a>
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
    margin-right: 12rem;

    margin-left: 12rem;
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
        a {
          
            background: #00c0de;
            border: none;
            color: #fff;
            font: inherit;
            line-height: 1;
            margin: 0.5em;
            padding: 1em 2em;
            text-decoration: none;
          
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

export default Aboutwashing;