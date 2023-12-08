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
import { FaAddressCard, FaBlackTie, FaHatCowboy, FaHatCowboySide, FaTshirt } from 'react-icons/fa';
import { MdWash } from 'react-icons/md';
import { BsSuitClub, BsSuitHeart, BsWallet } from 'react-icons/bs';
import { GiClothes, GiFurShirt, GiLifeJacket, GiPoloShirt, GiShinyPurse, GiShirt, GiSkirt, GiSuits, GiWashingMachine, GiWingedShield } from 'react-icons/gi';
import Aboutdrycleaning from 'components/Aboutdrycleaning';
import CalltoAction from 'components/CalltoAction';
import { buttonVariants } from 'animation';




function DrycleaningServices() {
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
      <div class="container-fluid pt-5 bg-primary hero-header">
        <div class="container pt-5">
          <div class="row g-5 pt-5">
            <div class="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <h1
                class="display-4 text-white mb-4 animated slideInRight"
                style={{ fontWeight: "600", textTransform: "uppercase" }}
              >
                Dry Cleaning
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

      <div class="container-fluid services-boxes py-10">
        <div class="container py-5">
          <div class="row g-5 align-items-center">
            <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div
                class="btn btn-sm border rounded-pill px-3 mb-3"
                style={{ color: "#00c0de" }}
              >
                Our Services
              </div>
              <h1 class="mb-4">
                Exceptional Dry Cleaning Solutions Tailored for Your Garments
              </h1>
              <p class="mb-4">
                Discover the pinnacle of care for your wardrobe with our
                specialized dry cleaning services. Our advanced AI-driven
                solutions ensure precision and quality, leaving your clothes
                impeccably clean and refreshed. Trust us with your garments, and
                experience the perfect blend of technology and expertise for a
                lasting impact on your wardrobe<br /><br />
              </p>
              <motion.a
                class="up"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                style={{color:'#fff', marginTop:'6rem' }}
                href="https://api.whatsapp.com/send?phone=9899416600"
              >
                Book Now
              </motion.a>
            </div>
            <div class="col-lg-7">
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="row g-4">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div>
                          <MdWash
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Delicate Fabric Care</h5>
                        <p>
                          Gentle yet effective, we to cater to delicate fabrics,
                          ensuring they receive the utmost care and attention,
                          leaving them looking and feeling as good as new.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <GiWashingMachine
                            style={{ fontSize: "64px", color: "#f8f8f8" }}
                          />
                        </div>
                        <h5 class="mb-3">Stain Removal Expertise</h5>
                        <p>
                          Our dry cleaning specialists are equipped with
                          advanced stain removal techniques, targeting even the
                          toughest marks to restore your garments to their
                          pristine condition.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="https://api.whatsapp.com/send?phone=9899416600">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 pt-md-4">
                  <div class="row g-4">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <FaBlackTie
                            style={{ fontSize: "64px", color: "#f8f8f8" }}
                          />
                        </div>
                        <h5 class="mb-3">Specialized Suit Cleaning</h5>
                        <p>
                          Our meticulous approach maintains the integrity of
                          suit fabrics, ensuring they retain their shape, color,
                          and sophistication.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <FaHatCowboySide
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Luxury Item Revitalization</h5>
                        <p>
                          Our dry cleaning experts employ a meticulous process
                          to rejuvenate and revitalize, preserving the elegance
                          and quality of your high-end garments.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutdrycleaning />
      <div class="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
        <div class="container py-5">
          <div
            class="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div
              class="btn btn-sm border rounded-pill  px-3 mb-3"
              style={{ color: "#00c0de" }}
            >
              Popular FAQs
            </div>
            <h1 class="mb-4">Frequently Asked Questions</h1>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="accordion" id="accordionFAQ1">
                <div class="accordion-item wow fadeIn" data-wow-delay="0.1s">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      How does dry cleaning differ from traditional laundry?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Dry cleaning uses a solvent instead of water to clean
                      clothes. It's ideal for delicate fabrics and garments with
                      intricate details.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.2s">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Are all fabrics suitable for dry cleaning?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Dry cleaning is suitable for a wide range of fabrics,
                      including silk, wool, and delicate synthetics. However,
                      some fabrics may have specific care instructions.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.3s">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How often should I dry clean my clothes?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      The frequency depends on factors like garment type, wear,
                      and stains. Generally, items like suits and special
                      occasion wear benefit from occasional dry cleaning.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.4s">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      Can you remove all types of stains?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Our experts use advanced stain removal techniques, but
                      success depends on the stain type, fabric, and how quickly
                      it's treated. Some stubborn stains may require special
                      attention.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="accordion" id="accordionFAQ2">
                <div class="accordion-item wow fadeIn" data-wow-delay="0.5s">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Is dry cleaning safe for embellished or decorated
                      garments?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Yes, our dry cleaning process is gentle and suitable for
                      embellished garments. We take extra care to protect
                      decorations during the cleaning process.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.6s">
                  <h2 class="accordion-header" id="headingSix">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      What's the turnaround time for dry cleaning services?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Turnaround times vary depending on the item and service.
                      We strive to provide prompt service, and our team can
                      provide specific timelines based on your needs.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.7s">
                  <h2 class="accordion-header" id="headingSeven">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Can I trust your dry cleaning services with valuable or
                      sentimental items?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Absolutely. Our experienced team understands the
                      importance of sentimental and valuable items. We take
                      every precaution to ensure the safe and meticulous
                      cleaning of such garments.
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeIn" data-wow-delay="0.8s">
                  <h2 class="accordion-header" id="headingEight">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      How can I manage dry cleaning expenses on a strict budget?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Visit our store for budget-friendly solutions! Prioritize
                      essentials, bundle services, and explore DIY options.
                      We're here to help you maintain a stylish wardrobe without
                      breaking the bank.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CalltoAction />
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

export default DrycleaningServices;