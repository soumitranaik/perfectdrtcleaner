import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { skillsAnimation } from 'animation';
import { motion } from 'framer-motion';

function Skills() {
  const [element, controls] = useScroll();
  const skillsData = [
    {
      name:"Dry Cleaning",
      amount: 50,
    },
    {
      name:"Washing",
      amount: 30,
    },
    {
      name:"Ironing",
      amount: 40,
    },
    {
      name:"Carpet Cleaning",
      amount: 60,
    },
    {
      name:"Sofa Cleaning",
      amount: 90,
    },
  ];
  return (
    <Section id="skills" ref={element}>
      <Title value="skills"/>
      <div className="skills__title">
        <p>Our Skills</p>
        <h2>Check our Packages</h2>
      </div>
      <div className="skills">
        <div className="skills__bars">
          {
            skillsData.map(({name, amount}) => {
              return(
                <motion.div className="skills__bars__bar" key={name}
                variants={skillsAnimation}
                animate={controls}
                transition={{delay: 0.03,
                type: "tween",
                duration: 0.8,
            }}
                >
                  <div className="container">
                    <progress value={amount} max="100"/>
                    <span>{name}</span>
                  </div>
                  <h3>{amount}%</h3>
                </motion.div>
              )
            })
          }
        </div>
        <div className="skills__content">
          <p className="title">
            Dry Cleaning Services & Products
          </p>
          <p className="description">
          Our Expertise: From delicate fabrics to tough stains, our laundry professionals are equipped with the skills to handle it all. Experience exceptional garment care and stain removal mastery with us
          </p>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
height: 140vh;
background-color: var(--secondary-color);
.sideTitle{
  h1{
    color: #fff;
    font-size: 9rem;
    z-index: 2;
  }
  .skills__title{
    padding: 6rem 10rem;
      p{
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);

      }
      h2{
        color: #fff;
        font-size: 2rem;
      }
  }
}
.skills{
  display: flex;
  padding: 0 5rem 0 20rem;
  gap: 10rem;
  &__title{
    padding: 6rem 10rem;
      p{
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: var(--primary-color);
      } 
      h2{
        color: #fff;
        font-size: 2rem;
      }  
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #fff;
    z-index: 2;
  }
  &__bars{
    transform: rotate(-90deg);
    width: max-content;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    &__bar{
      display: flex;
      flex-direction: row-reverse;
      gap: 1rem;
      .container{
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        span{
          text-transform: uppercase;
          letter-spacing: 0.2rem;
          color: var(--primary-color)
        }
        progress{
          width: 30rem;
          appearance: none;
          -webkit-appearance: none;
          &::-webkit-progress-bar{
            height: 3rem;
            background-color: #000;
            border-radius: 20px;
          }
   
        }
      }
      h3{
        transform: rotate(90deg);
        color: #fff;
        font-size: 2rem;
      }
    }
  }
  &__content{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #fff;
    z-index: 2;
  }
}
@media screen and (min-width: 280px) and  (max-width: 1080px){
overflow-x: hidden;
padding: 2rem 0;
.background{
  display: none;
}
.skills__title{
  padding: 2rem;
  text-align: center;
  h2{
    font-size: 1.5rem;
  }
}
.skills{
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &__bars{
    padding: 0.2rem;
    gap: 0rem;
    align-items: center;
    justify-content: center;
    &__bar{
      .container{
        gap: 1rem;
        .progress{
          width: 12rem;
          height: 0.5rem;
          &::-webkit-progress-bar{
            height: 0.1rem;
            background-color: #f3f3f3;
            border-radius: 20px;
          }
        }
      }
      h3{
        font-size: 1rem;
      }
    }
    &__content{
      padding: 0 2rem;
    }
  }
}
}
`;
export default Skills;