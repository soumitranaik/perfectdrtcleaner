import React, { useState, useEffect } from 'react';
import logo from "assets/logo.png";
import { styled } from 'styled-components';
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdMenu } from "react-icons/md"
import { useScroll } from 'components/useScroll';
import { navAnimation } from 'animation';
import { motion } from 'framer-motion';
import { FaHamburger, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import Marquee from "react-fast-marquee";


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  console.log(isNavOpen)
  return (
    <Nav
      ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      
     
      <div className="brand__container">
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
        <a href="#" className="brand">
          <img className="logoimg" src={logo} alt="logo" />aaa
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <MdMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
            <ul className="submenu">
              <li>
                <a href="/drycleaning">Dry Cleaning</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/">Portfolio</a>
          </li>

          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=9899416600">
              <FaWhatsapp style={{ color: "green", fontSize: "24px" }} />
            </a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  align-items: center;
  color: #fff;
  padding-top: 1rem;
  padding-bottom: 1rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        border-bottom: 0.2rem solid var(--secondary-color);
      }
      li {
        a {
          color: rgb(15, 15, 15);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9rem;
          text-transform: uppercase;
        }
      }
      li:hover .submenu {
        display: block;
      }
    }
  }
  .submenu {
    display: none;
    position: absolute;
    top: 70%;
    /*left: 0;*/
    background-color: #fff; /* Adjust as needed */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adjust as needed */
    border: 1px solid #000;
    padding: 10px;
    z-index: 99999;
  }
  .logoimg {
    width: 250px;
    height: auto;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .toggle {
        /* padding-right: 1rem;*/
        display: block;
        z-index: 1;
        color: #000;
        font-size: 2rem;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar