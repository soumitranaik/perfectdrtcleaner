import React from 'react'
import '../assets/headerstyles.css';
import logo from '../assets/logo.png'
import { BsArrowBarDown, BsArrowDown, BsChevronDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { buttonVariants } from 'animation';
import { FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
  return (
    <div class="container-fluid " style={{ padding: "15px 0" }}>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark p-0">
          <a href="/" class="navbar-brand">
            <img src={logo} className="logoimg" />
          </a>
          <button
            type="button"
            class="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <GiHamburgerMenu color="#000" />
          </button>
          <div class="collapse navbar-collapse" shadow id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
              >
                About
              </Link>
             
              
              

              <div class="nav-item dropdown">
                <Link to="#" className={`nav-link ${
                    location.pathname==="/drycleaning" || location.pathname==="/washing" || location.pathname==="/ironing"
                    ? "active" : ""
                }`} data-bs-toggle="dropdown">
                  Services <BsChevronDown />
                </Link>
                <div class="dropdown-menu mt-2">
                <Link
                to="/drycleaning"
                className={`nav-item nav-link ${
                  location.pathname === "/drycleaning" ? "active" : ""
                }`}
              >
                Dry Cleaning
              </Link> <Link
                to="/washing"
                className={`nav-item nav-link ${
                  location.pathname === "/washing" ? "active" : ""
                }`}
              >
                Washing
              </Link> <Link
                to="/ironing"
                className={`nav-item nav-link ${
                  location.pathname === "/ironing" ? "active" : ""
                }`}
              >
                Ironing
              </Link>
                  
                </div>
              </div>
              <Link
                to="/contact"
                className={`nav-item nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
              {/*<motion.button
                class="up"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                style={{padding: '5px 10px', border:'none', color:'#fff'}}
              >
                {" "}
                Schedule a Free Pick-Up
  </motion.button>*/}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header