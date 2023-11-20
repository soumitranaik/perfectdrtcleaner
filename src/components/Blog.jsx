import React from 'react';
import styled from 'styled-components';
import play from "assets/play.png";
import home from "assets/home.jpg";
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { blogsAnimation } from 'animation';
import { motion } from 'framer-motion';
import drycleaning from '../assets/drycleaning-banner.jpg'

const Blog = () => {
  const [element, controls] = useScroll();
  const transition = {duration: 3, ease: [0.43, 0.13, 0.23, 0.96 ]}
  const blogsdata = [
    {
      title: "Laundry Room",
      type: "GUIDE",
      description: "Transform your laundry room into a streamlined and efficient space with our comprehensive guide to laundry room organization. Discover practical tips, storage solutions, and design inspirations that will help you conquer the clutter and make laundry day a breeze. From sorting bins to clever shelving, we've got your laundry room transformation covered",
      simage: drycleaning
    },
    {
      title: "Green Laundry",
      type: "Eco-Friendly Practices",
      description: "Join us on a journey towards a more sustainable laundry routine. Explore eco-friendly detergent options, energy-saving washing techniques, and the benefits of air-drying. Learn how making small changes in your laundry habits can have a big impact on the environment and your wallet, all while keeping your clothes looking great.",
      simage: drycleaning
    },
    {
      title: "Stain Removal 101",
      type: "Tackling Laundry Stains",
      description: "Say goodbye to stubborn stains with our comprehensive stain removal guide. We break down the science behind common stains and provide step-by-step instructions for removing them. Whether it's red wine on your favorite shirt or grass stains on your kid's jeans, we've got the solutions to keep your clothes looking pristine.",
      simage: drycleaning
    }
  ]
  return (
    <Section id="blog" ref={element}>
      <Title value="Blogs" />
      <motion.div className="blogs" exit={{opacity: 0}} transition={transition}>
        {blogsdata.map(({title, type, description, simage}) => {
          return(
            <motion.div className="blog" 
            /*key={title}
              variants={blogsAnimation}
              animate={controls}
              transition={{delay: 0.3,
              type:"tween",
              duration: 0.8
              }}*/
            >
              <div className="image" style={{backgroundImage: `url(${simage})`}}></div>
                <div className="title">
                  <h3><a href='/drycleaning'>{title}</a></h3>
                </div>
                <span className='type'>{type}</span>
              <motion.div className="description">
                <p>
                  {description}
                </p>
              </motion.div>
              <div className="more">
                <motion.img whileHover={{scale: 1.1}} src={play} alt="Play"/>
                <span>Read More</span>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
position: relative;
.blogs{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 5rem 15rem;
  .blog{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .image{
      height: 15rem;
      /*background: url(${home}) no-repeat center center;*/
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .title{
      h3{
        color: var(--secondary-color);
        font-size: 1.5rem;
        text-transform: uppercase;
      }
      a{
        color: var(--secondary-color);
        text-decoration: none;
      }
    }
    .type{
      color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
    }
   
    .more{
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
@media screen and (min-width: 280px) and  (max-width: 1080px){
margin: 2rem 0;
.blogs {
  padding: 0 2rem;
  grid-template-columns: 1fr;
  margin: 0 1rem;
}
}
`;


export default Blog