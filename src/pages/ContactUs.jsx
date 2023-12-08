import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import { useScroll } from 'components/useScroll';
import { contactAnimation } from 'animation';
import { motion } from 'framer-motion';
import CalltoAction from 'components/CalltoAction';

const ContactUs = () => {
  const [element, controls] = useScroll();
  return (
    <><div class="container-fluid pt-5 bg-primary hero-header">
    <div class="container pt-5">
      <div class="row g-5 pt-5">
        <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
          <h1
            class="display-4 text-white mb-4 animated slideInRight"
            style={{ fontWeight: "600", textTransform: "uppercase" }}
          >
            Contact Us
          </h1>
          {/*<nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center justify-content-lg-start mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                class="breadcrumb-item text-white active"
                aria-current="page"
              >
                Our Services
              </li>
            </ol>
</nav>*/}
        </div>
        <div class="col-lg-6 align-self-end text-center text-lg-end">
          <img
            class="img-fluid"
            src="img/hero-img.png"
            alt=""
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  </div>
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
          
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
          <p style={{color:'#00c0de', fontWeight:'600'}}>Stay in Touch</p>
          <h2>
            Quick Contact
          </h2>
            <p>If you have any questions simply use the following details</p>
            <p>
            Our friendly team is here to help. Reach out to us easily through our contact page. We look forward to hearing from you!
            </p>
            <div>
              <p>
              <strong>Address:</strong> No 13/ 8, DDA Shopping Centre,
Chhoti Subji Mandi, Janakpuri,
New Delhi, Delhi 110058
              </p>
              <p>
              <strong>Email:</strong> hello@gmail.com
              </p>
              <p>
              <strong>Phone:</strong> +91 98994 16600
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
      <CalltoAction />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224109.00931036752!2d77.02636465782854!3d28.638654090002596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04b07d2b04d3%3A0xb11b3a78cfbba168!2sPerfect%20Dry%20Cleaner%20(The%20Drycleaning%20Store)!5e0!3m2!1sen!2sin!4v1702048335853!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0, marginBottom:'0', paddingBottom:'0'}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    
    </Section>
    </>
  )
}

const Section = styled.section`
min-height: 100vh;
.contact{
  color: var(--primary-color);
  margin-right: 18rem;
  margin-left: 18rem;
  height: 100vh;
  display: flex;
  align-items: center;
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
      margin-top: 4rem;
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
  height: auto;
  margin: 4rem 1rem;
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


export default ContactUs;