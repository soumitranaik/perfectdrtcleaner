import React from 'react';
import styled from 'styled-components';
import play from '../assets/play.png';
import { useScroll } from 'components/useScroll';
import { servicesAnimation } from 'animation';
import { motion } from 'framer-motion';
import  banner  from '../assets/coloured.jpg'
import { useEffect } from 'react';
import AnimatedPage from 'components/AnimatedPage';
import '../assets/innerstyles.css';
import {} from 'react-icons'
import { FaAddressCard, FaBlackTie, FaCheck, FaGoogle, FaHatCowboy, FaHatCowboySide, FaSmile, FaSteam, FaTshirt } from 'react-icons/fa';
import { MdIron, MdWash } from 'react-icons/md';
import { BsCheck2Circle, BsDroplet, BsEmojiSmile, BsEmojiSmileFill, BsGoogle, BsSpeedometer, BsStars, BsSteam, BsSuitClub, BsSuitHeart, BsWallet } from 'react-icons/bs';
import { GiClothes, GiDiamondsSmile, GiFurShirt, GiLifeJacket, GiPoloShirt, GiSharpSmile, GiShinyPurse, GiShirt, GiSkirt, GiSteamBlast, GiSuits, GiWashingMachine, GiWingedShield } from 'react-icons/gi';
import Aboutdrycleaning from 'components/Aboutdrycleaning';
import CalltoAction from 'components/CalltoAction';
import AboutIroning from 'components/Aboutironing';
import { buttonVariants } from 'animation';
import AboutUs from 'components/AboutUs';
import shop from '../assets/shop4.jpg'




function About() {
  /*const [element, controls] = useScroll();*/

  const iconStyle = {
    fontSize: "64px",
    color: "blue", // Set the default color
  };

  const iconVariants = {
    hover: {
      color: "red", // Set the color on hover
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  
  return (
    <>
      <div class="container-fluid pt-5  hero-header">
        <div class="container pt-5">
          <div class="row g-5 pt-5">
            <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1
                class="display-4 text-white mb-4 animated slideInRight"
                style={{ fontWeight: "600", textTransform: "uppercase" }}
              >
                About Us
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

      <AboutUs />
      <div class="container-fluid about-features feature pt-8" style={{paddingTop:'8rem', paddingBottom:'8rem'}}>
        <div class="container pt-5">
          <div class="row g-5">
            <div
              class="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div class="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 class="text-white mb-4">
                We're Best Dry Cleaning and Laundry Provider in Delhi
              </h1>
              <p class="text-light mb-4">
                Exemplary garment care in the heart of Delhi. Elevate your
                wardrobe with our premier dry cleaning and laundry services,
                setting the standard for excellence in fabric care and
                cleanliness.
              </p>
              <div class="d-flex align-items-center text-white mb-3">
                <BsCheck2Circle style={{ fontSize: "32px" }} />
                <span>
                  {" "}
                  &nbsp;We prioritize quality assurance to deliver impeccable
                  garment care.
                </span>
              </div>
              <div class="d-flex align-items-center text-white mb-3">
                <BsCheck2Circle style={{ fontSize: "32px" }} />
                <span>
                  {" "}
                  &nbsp;Trust 40+ years of experience for impeccable garment
                  care.
                </span>
              </div>
              <div class="d-flex align-items-center text-white mb-3">
                <BsCheck2Circle style={{ fontSize: "32px" }} />
                <span>
                  {" "}
                  &nbsp;Affordable pricing tailored to your budget, ensuring
                  value in every service.
                </span>
              </div>
              <div class="row g-4 pt-3">
                <div class="col-sm-6">
                  <div
                    class="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <BsEmojiSmileFill
                      style={{ color: "#fff", fontSize: "64px" }}
                    />
                    <div class="ms-3">
                      <h2 class="text-white mb-0" data-toggle="counter-up">
                        1000+
                      </h2>
                      <p class="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div
                    class="d-flex rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <BsGoogle style={{ color: "#fff", fontSize: "64px" }} />
                    <div class="ms-3">
                      <h2 class="text-white mb-0" data-toggle="counter-up">
                        300+{" "}
                      </h2>
                      <p class="text-white mb-0">5 Star Google Ratings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 align-self-center text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img class="img-fluid" src={shop} alt="" />
            </div>
          </div>
        </div>
      </div>
     

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
    </>
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

export default About;