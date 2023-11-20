import React from 'react';
import styled from 'styled-components';
import play from '../assets/play.png';
import { useScroll } from 'components/useScroll';
import { servicesAnimation } from 'animation';
import { motion } from 'framer-motion';
import  banner  from '../assets/drycleaning-banner.jpg'
import { useEffect } from 'react';
import AnimatedPage from 'components/AnimatedPage';


function DrycleaningServices() {
  /*const [element, controls] = useScroll();*/


  
  return (
    <motion.div>
      <Section id="inner-page">
        <div className="banner"></div>
        <div className="inner">
          <div className="inner__service__title">
            <h2>Dry Cleaning</h2>
          </div>
          <p className="inner-description">
            <a href="/">tet=sssssst </a>We specialize in providing exceptional
            dry cleaning services to keep your wardrobe looking pristine. Dry
            cleaning is a meticulous process that goes beyond traditional
            laundering methods, employing a solvent-based technique to gently
            and effectively remove stains from delicate fabrics. Our experienced
            team understands the unique requirements of different materials and
            garments, ensuring that each item receives the care and attention it
            deserves.
          </p>

          <p className="inner-description">
            We specialize in providing exceptional dry cleaning services to keep
            your wardrobe looking pristine. Dry cleaning is a meticulous process
            that goes beyond traditional laundering methods, employing a
            solvent-based technique to gently and effectively remove stains from
            delicate fabrics. Our experienced team understands the unique
            requirements of different materials and garments, ensuring that each
            item receives the care and attention it deserves.
          </p>

          <p className="inner-description">
            In addition to our dry cleaning services, we offer alterations and
            repairs to ensure your clothes fit perfectly. Our skilled tailors
            can handle everything from simple adjustments to intricate
            alterations, providing you with a personalized and comfortable fit.
            Experience the convenience and excellence of [Your Business Name]
            Dry Cleaners – where your garments receive the care they deserve,
            and you can confidently step out in style.
          </p>
          <img src={play} alt="Read More" />
        </div>
      </Section>
    </motion.div>
  );
  
}

const Section = styled.section`
min-height: 100vh;
.inner{
  display: block;
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service{
    padding: 2rem;
    &:nth-of-type(2) {
      
      .inner__service__title{
        span{
          color: #fff;

        }
      }
      
    }
    &__image{
      margin-bottom: 3rem;
    }
    &__title{
      span{
        color: var(--primary-color);
        font-weight: bolder;
      } 
      h2{
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }    
    }
    &__description{
      color: var(--primary-color);
      margin-bottom: 2rem;

    }
  }
}
@media (min-width: 1600px) {
    .services {
      
      padding-top: 5rem;
      
    }
  }
  @media screen and (min-width: 280px) and  (max-width: 1080px){
    .services{
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
  .banner{
    background-image: url(${banner});
    background-position: center;
    height: 20rem;
    background-size: cover;
  }
  .inner-description{
       margin-bottom: 2rem;
      }
`;

export default DrycleaningServices;