import React from 'react';
import styled from 'styled-components';
import aboutUsImage from '../assets/portfolio1.jpg';
import Title from './Title';
import { motion, useAnimation } from 'framer-motion';
import play from "assets/play.png";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';


function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  
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
    <Section id="aboutUs" >
      <Title value="about us" />
      <div className="about-us">
        <motion.div
          className="content"
          >
          <motion.div className="image" 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={slideInVariants}
          transition={slideInTransition}>
            <img src={aboutUsImage} alt="About Us" />
          </motion.div>
          <motion.div className="text"
          ref={ref2}
          initial="hidden"
          animate={controls}
          variants={slideOutVariants}
          transition={slideInTransition}
          >
            <h2>Perfect Dry Cleaner: Elevating Cleanliness to an Art</h2>
            <p>
            'We Clean, You Should Relax' is not just a slogan; it's a promise. Our team of dedicated professionals specializes in the intricate cleaning of carpets, sofas, curtains, designer dresses, and wedding dresses. When you choose us, you're not just opting for a cleaning service; you're trusting us with your most cherished items, and we take that responsibility seriously.

What sets us apart is our unwavering dedication to providing the best service possible. We go beyond the surface, ensuring that each item receives the care and attention it deserves. It's not just about hygiene; it's about creating an environment that leaves you feeling refreshed and satisfied.
            </p>
            <div className="more">
                <motion.img whileHover={{scale: 1.1}} src={play} alt="Play"/>
                <span>Read More</span>
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
    margin: 0 14rem;
    margin-top: 10rem;
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
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
        p {
          color: var(--primary-color);
        }
        .more{
          margin-top: 5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      span{
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: var(--primary-color);
      }
    }
      }
    }
  }
  @media (min-width: 1600px) {
    .about-us {
      padding-top: 5rem;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .about-us {
      margin: 2rem 0;
      flex-direction: column;
      gap: 2rem;
      padding: 0 2rem;
      &__content {
        flex-direction: column;
        text-align: center;
        &__image,
        &__text {
          width: 100%;
        }
      }
    }
  }
`;

export default About