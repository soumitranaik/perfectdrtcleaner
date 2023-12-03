import React, { useState, useEffect } from 'react';
import logo from "assets/logo.png";
import { styled } from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"
import { useScroll } from 'components/useScroll';
import { navAnimation } from 'animation';
import { motion } from 'framer-motion';


function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();

  return (
    <Nav ref={element}
    variants={navAnimation}
    transition={{delay: 0.1}}
    animate={controls}
    state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a href="#" className='brand'>
          <img className="logoimg" src={logo} alt='logo'/>
        </a>
        <div className="toggle">
          {
            isNavOpen ? ( 
              <MdClose onClick={() => setIsNavOpen(false)} />
            ) : (
              <GiHamburgerMenu
              onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
              }} />
            )
          }

        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/drycleaning">Services</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </Nav>
  )
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  align-items: center;
  color: #fff;
 /* padding-top: 1rem;
  padding-bottom: 1rem;*/
  .brand__container{
    margin: 0 2rem;
    .toggle{
      display: none;
    }
  }
  .links{
    ul
    {
        list-style-type: none;
        display: flex;
        gap: 3rem;
        .active{
          border-bottom: 0.2rem solid var(--secondary-color);
        }
        li{
          a{
            color: rgb(15,15,15);
            text-decoration: none;
            font-weight: 400;
            font-size: 0.9rem;
            text-transform: uppercase;
          }
        }
    }
  }
  .logoimg{
    width: 100px;
    height: auto;
  }
  @media screen and (min-width: 280px) and  (max-width: 1080px){
    margin: 0;
    position: relative;
    .brand__container{ 
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .toggle{
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show{
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links{
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
      ul{
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`

export default Navbar