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
import { MdColorize, MdWash } from 'react-icons/md';
import { BsSuitClub, BsSuitHeart, BsWallet, BsWind } from 'react-icons/bs';
import { GiClothes, GiDelicatePerfume, GiDress, GiFurShirt, GiLifeJacket, GiPerfumeBottle, GiPoloShirt, GiShinyPurse, GiShirt, GiSkirt, GiSuits, GiWashingMachine, GiWingedShield } from 'react-icons/gi';
import Aboutdrycleaning from 'components/Aboutdrycleaning';
import CalltoAction from 'components/CalltoAction';
import Aboutwashing from 'components/Aboutwashing';
import { buttonVariants } from 'animation';



function Washing() {
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
                Washing
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

      <div class="container-fluid services-boxes py-5">
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
                Unmatched Laundry Expertise Personalized for Your Clothes
              </h1>
              <p class="mb-4">
                Embark on a journey of unparalleled care for your attire through
                our specialized washing services. Leveraging advanced
                technologies and expert techniques, we guarantee meticulous
                cleaning that revitalizes your clothes. Whether it's everyday
                wear or special garments, our commitment to precision ensures
                your wardrobe receives the utmost attention and care. Choose our
                washing services for a transformative experience, where
                cutting-edge methods meet dedicated expertise, leaving a lasting
                impression on the freshness and longevity of your clothing.
                <br />
                <br />
              </p>
              <motion.a
                class="up"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                style={{ color: "#fff", marginTop: "6rem" }}
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
                          <MdColorize
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Color Protection Technology</h5>
                        <p>
                          Our gentle yet
                          powerful washing process ensures that your colorful
                          garments maintain their brilliance, looking as vivid
                          as the day you bought them.
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
                        <h5 class="mb-3">Gentle Stain Removal</h5>
                        <p>
                         From everyday spills to stubborn stains, we
                          take special care to treat each mark effectively,
                          leaving your clothes spotless without compromising the
                          integrity of the fabric.
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
                          <GiDress
                            style={{ fontSize: "64px", color: "#f8f8f8" }}
                          />
                        </div>
                        <h5 class="mb-3">Fabric-Specific Treatment</h5>
                        <p>
                         Whether it's delicate cotton,
                          high-performance activewear, or luxurious linens, our
                          laundry experts apply specialized treatments to ensure
                          each fabric gets the attention it deserves, resulting
                          in garments that feel fresh and soft.
                        </p>
                        <a class="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                      <div class="service-item shadow-lg d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon btn-square">
                          <GiDelicatePerfume
                            style={{
                              fontSize: "64px",
                              color: "#f8f8f8",
                              marginBottom: "10px",
                            }}
                          />
                        </div>
                        <h5 class="mb-3">Fragrance Infusion</h5>
                        <p>
                          We go beyond just cleaning; our washing
                          services include a touch of delightful fragrance,
                          leaving your clothes not only impeccably clean but
                          also smelling wonderfully fresh, making every wear a
                          pleasant experience.
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
      <Aboutwashing />
      <div class="container-fluid py-5" style={{ backgroundColor: "#f8f8f8" }}>
        <div class="container py-5">
          <div
            class="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div
              class="btn btn-sm border rounded-pill px-3 mb-3"
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
                      What techniques do you use for washing garments?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      We employ state-of-the-art washing techniques, including
                      gentle agitation and precise water temperature control, to
                      ensure the optimal cleanliness and preservation of your
                      garments.
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
                      Is your laundry service suitable for all types of fabrics?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Yes, our laundry service caters to a wide range of
                      fabrics, from delicate silks to everyday cotton. We
                      customize our approach based on the specific care needs of
                      each fabric.
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
                      How do you handle garments with embellishments or
                      decorations?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Our laundry process is gentle and ensures the safety of
                      embellished garments. We take extra care to protect
                      decorations during the cleaning process.
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
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can I trust your laundry service with valuable or
                      sentimental items?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionFAQ1"
                  >
                    <div class="accordion-body">
                      Absolutely. Our experienced team understands the
                      importance of sentimental and valuable items. We take
                      every precaution to ensure the safe and meticulous
                      cleaning of such garments.
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
                      What sets your laundry service apart from at-home washing?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Our laundry service combines cutting-edge technology with
                      expert craftsmanship, providing thorough and meticulous
                      cleaning that surpasses the capabilities of home washing
                      machines.
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
                      Do you offer any eco-friendly laundry options?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Yes, we are committed to sustainability. Ask about our
                      eco-friendly laundry options, including detergent choices
                      and water-saving techniques.
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
                      How can I manage laundry expenses on a strict budget?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Visit our store for budget-friendly solutions! Prioritize
                      essentials, bundle services, and explore discounts to
                      maintain a stylish wardrobe without breaking the bank.
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
                      Can I schedule a pickup and delivery for my laundry?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionFAQ2"
                  >
                    <div class="accordion-body">
                      Yes, we offer convenient pickup and delivery services.
                      Schedule a time that suits you, and our team will ensure
                      your laundry is collected and returned to your doorstep.
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

export default Washing;