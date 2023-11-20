import React from 'react';
import styled from 'styled-components';
import service1 from 'assets/service1.png';
import service2 from 'assets/service2.png';
import service3 from 'assets/service3.png';
import play from '../assets/play.png';
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { servicesAnimation } from 'animation';
import { motion } from 'framer-motion';


function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type:"Steam Ironing",
      text:"Get rid of wrinkles and creases from your clothes with our fast and efficient steam ironing process. We use high-quality equipment and eco-friendly products to ensure your garments are clean, fresh and ready to wear.",
      image: service1,
    },
    {
      type:"Dry Cleaning",
      text:"We offer fast, reliable and affordable dry cleaning services for all your garments and fabrics. With our state-of-the-art facilities and experienced team, your clothes will always look their best.",
      image: service2,
    },
    {
      type:"Washing & Laundry",
      text:"We offer fast, reliable and affordable laundry services for all your needs. Whether you need to wash your clothes, bedding, curtains or carpets, we have the right equipment and expertise to handle any fabric and stain.",
      image: service3,
    },
  ];
  return <Section id="services" ref={element}>
    <Title value="services" />
    <div className="services">
      {
        data.map(({type, text, image},index) => {
          return(
            <motion.div className="services__service"
            variants={servicesAnimation}
            animate={controls}
            transition={{delay: 0.03,
            type: "tween",
            duration: 0.8,
            }}
            >
              <div className="services__service__image">
                <img src = {image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">
                {text}
              </p>
              <img src={play} alt="Read More"/>
            </motion.div>
          )
        })
      }

    </div>


  </Section>
    
  
}

const Section = styled.section`
min-height: 100vh;
.services{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service{
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .services__service__title{
        span{
          color: #fff;

        }
      }
      .services__service__description{
        color: #fff;
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
`;

export default Services