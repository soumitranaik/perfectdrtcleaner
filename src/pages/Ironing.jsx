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
import { FaAddressCard, FaBlackTie, FaHatCowboy, FaHatCowboySide, FaSteam, FaTshirt } from 'react-icons/fa';
import { MdIron, MdWash } from 'react-icons/md';
import { BsCheck2Circle, BsDroplet, BsSpeedometer, BsSteam, BsSuitClub, BsSuitHeart, BsWallet } from 'react-icons/bs';
import { GiClothes, GiFurShirt, GiLifeJacket, GiPoloShirt, GiShinyPurse, GiShirt, GiSkirt, GiSteamBlast, GiSuits, GiWashingMachine, GiWingedShield } from 'react-icons/gi';
import Aboutdrycleaning from 'components/Aboutdrycleaning';
import CalltoAction from 'components/CalltoAction';
import AboutIroning from 'components/Aboutironing';
import { buttonVariants } from 'animation';




function IroningServices() {
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
                Ironing
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
              <h1 class="mb-4">Ironing Services Crafted for Your Attire</h1>
              <p class="mb-4">
                Embark on a journey of unparalleled garment care with our
                cutting-edge ironing services. Immerse yourself in the epitome
                of precision and quality as our advanced technology and skilled
                professionals work harmoniously to breathe new life into your
                clothing. Entrust us with your attire, and witness the seamless
                integration of technology and expertise, ensuring your clothes
                emerge crisp, polished, and rejuvenated. Elevate your wardrobe
                with our ironing services, offering a lasting touch of
                sophistication and care.<br/><br/>
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
                          <MdIron
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Steam Pressing Excellence</h5>
                        <p>
                          Experience the removal of wrinkles and creases as
                          garments undergo the gentle touch of steam, leaving
                          them immaculately smooth and ready to make a lasting
                          impression
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <BsDroplet
                            style={{ fontSize: "64px", color: "#f8f8f8" }}
                          />
                        </div>
                        <h5 class="mb-3">Eco-Friendly Ironing</h5>
                        <p>
                          Embrace eco-conscious garment care with our
                          eco-friendly ironing services. Our commitment to
                          sustainability ensures your clothes receive top-notch
                          care while minimizing environmental impact
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
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
                          <BsCheck2Circle
                            style={{ fontSize: "64px", color: "#f8f8f8" }}
                          />
                        </div>
                        <h5 class="mb-3">Quality Assurance</h5>
                        <p>
                          Each garment undergoes a thorough inspection to ensure
                          it meets our high standards, leaving you with
                          perfectly pressed clothes that speak volumes of our
                          commitment to excellence.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <BsSpeedometer
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Fast Turnaround Time</h5>
                        <p>
                        We understand the
                          value of time, and our efficient processes ensure your
                          garments are ready promptly, so you can always be
                          dressed for success.
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
      <AboutIroning />
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
                      How does professional ironing enhance garment appearance?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                    Professional ironing ensures a polished look, eliminating wrinkles and creases, so your clothes appear neat and well-maintained.
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
                     What fabrics benefit most from professional ironing services?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                    Professional ironing is suitable for various fabrics, including cotton, linen, and delicate materials, enhancing their appearance and longevity.
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
                      Is your professional ironing safe for embellished or decorated garments?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                    Yes, our ironing process is gentle and suitable for embellished garments. We take extra care to protect decorations during the ironing process.
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
                      What's the turnaround time?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                    Turnaround times vary depending on the item and service. We strive to provide prompt service, and our team can provide specific timelines based on your needs.
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
                      Can I trust your ironing services with valuable or sentimental items?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                    Absolutely. Our experienced team understands the importance of sentimental and valuable items. We take every precaution to ensure the safe and meticulous ironing of such garments.
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
                      Do you offer specialized ironing for suits and formal wear?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                    Yes, our meticulous ironing approach maintains the integrity of suit fabrics, ensuring they retain their shape, color, and sophistication.
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
                      How can I manage ironing expenses on a strict budget?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                    Visit our store for budget-friendly solutions! Prioritize essentials, bundle services, and explore DIY options. We're here to help you maintain a stylish wardrobe without breaking the bank.
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
                      Why choose professional ironing over home ironing methods?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                    Professional ironing ensures consistent quality, utilizing advanced techniques and equipment for superior results. It saves you time and effort, providing a convenient solution for well-maintained clothes.
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

export default IroningServices;