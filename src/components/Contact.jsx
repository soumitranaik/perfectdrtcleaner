import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import { useScroll } from 'components/useScroll';
import { contactAnimation } from 'animation';
import { motion } from 'framer-motion';

const Contact = () => {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <Title value="Contact" />
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{delay: 0.3,
      type:"tween",
      duration: 0.8
      }}
      >
        <div className="contact__title">
          <p>Stay in Touch</p>
          <h2>
            Quick Contact
          </h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <p>If you have any questions simply use the following details</p>
            <p>
            Our friendly team is here to help. Reach out to us easily through our contact page. We look forward to hearing from you!
            </p>
            <div>
              <p>
              <strong>Address:</strong> 33 street, New Delhi
              </p>
              <p>
              <strong>Email:</strong> hello@gmail.com
              </p>
              <p>
              <strong>Phone:</strong> 9883383838
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <textarea placeholder='message' />
            <button>Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
.contact{
  color: var(--primary-color);
  margin: 0 18rem;
  &__title{
    margin: 6rem 0 2rem 0;
    p{
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      color: var(--primary-color);
    }
    h2{
      color: var(--secondary-color);
      font-size: 2rem;

    }
  }
  &__data{
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4{
        font-size: 1.5rem;
      }
      p{
        letter-spacing: 0.1rem;
        text-align: justify;
        margin-top: 20px;

      }
      div{
        p{
          strong{
            text-transform: uppercase;
          }
        }
      }
    }
    &__form{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input, textarea{
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        width: 100%;
        color: var(--secondary-color);
        letter-spacing: 0.2rem;
        padding-bottom: 0.7rem;
        &:focus{
          outline: none;
        }
        &::placeholder{
          color: var(--secondary-color);
          letter-spacing: 0.4rem;
        }
      }
      textarea{
        width: 100%;
        height: 50%;
        resize: none;
      }
      button{
        width: 100%;
        background-color:transparent;
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: var(--secondary-color);
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover{
          background-color: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and  (max-width: 1080px){
.contact{
  margin: 1rem;
  padding: 0 1rem;
  &__title{
    margin: 0;
    text-align: center;
    p{
      font-size:0.8rem;

    }
    h2{
      font-size: 1.3rem;
    }
  }
  &__data{
    grid-template-columns: 1fr;
    margin: 0;
    p{
      text-align: left;
    }
    &__form{
      button{
        height: 6rem;
      }
    }
  }
}
}
`;


export default Contact