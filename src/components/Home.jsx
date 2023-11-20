import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import home from '../assets/home.jpg';
import play from '../assets/play.png';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "animation";


function Home() {
  const slideInVariants = {
    hidden: { x: '-100%' }, 
    visible: { x: 0 },      
  };

  const slideInTransition = {
    type: 'spring',     
    damping: 25,       
    stiffness: 500,     
  };

  return (
    <Section id="home">
        
        <motion.div className="home" 
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type:"tween"}}
        >
          <motion.div className="content"
              initial="hidden"
              animate="visible"
              variants={slideInVariants}
              transition={slideInTransition}
          >
            <div className="title">
              <h1>Let Your Home Shine</h1>
            </div>
            <div className="subTitle">
              <p>Our cleaning services are dedicated to removing dirt, dust, stains, and unpleasant odors using effective liquids, powders, and sprays. We offer a range of top-notch dry cleaning services in West Delhi, including Sofa Cleaning, Carpet Cleaning, Car Interior Cleaning, and Dry Cleaning for clothes. Our commitment to excellence is reflected in the use of premium chemicals to ensure the best results.</p>
            </div>
            <img src={play} alt="Play Button" />
          </motion.div>
        </motion.div>
        <motion.div className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type:"tween"}}
        >
          <div className="grid">
            <div className="col">
              <strong>Address</strong>
              <p>No 13/ 8, DDA Shopping Centre,<br />Chhoti Subji Mandi, Janakpuri,<br />New Delhi, Delhi 110058</p>
            </div>
            <div className="col">
              <strong>Phone</strong>
              <p>+91 98994 16600</p>
            </div>
            <div className="col">
              <strong>Email</strong>
              <p>hello@perfectdrycleaner.in</p>
            </div>
            <div className="col">
              <strong>Timings</strong>
              <p>Open 24 x 7</p>
            </div>
            <div className="col">
              <strong>Payments</strong>
              <p>Accepts UPI, Cash, Card</p>
            </div>
            <div className="col">
              <strong>Delivery</strong>
              <p>Available On-demand</p>
            </div>
          </div>
        </motion.div>
    </Section>
  )
}

const Section = styled.section`
    background: url(${home}) no-repeat center;
    min-height: 86vh;
    background-size: cover;
    position: relative;
    .home{
      height: 100%;
      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 60%;
        color: #fff;
        gap: 1.2rem;
        padding-top: 8rem;
        padding-left: 18rem;
        .title{
          h1{
            font-size: 5rem;
            line-height: 5.3rem;            
          }
        }
        .subTitle{
          p{
            width: 70%;
            margin-bottom: 2rem;
          }
        }
      }
    }
    .info{
      position: absolute;
      bottom: -6rem;
      right: 0;
      background-color: var(--secondary-color);
      padding: 4rem;
      .grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
        color: #fff;
      }
    }
    @media (min-width: 1600px) {
    .home {
      .content{
        padding-top: 18rem;
      }
    }
  }
  @media screen and (min-width: 280px) and  (max-width: 1080px){
    .home{
      .content{
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 0;
        .title{
          h1{
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info{
      position: initial;
      .grid{
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Home