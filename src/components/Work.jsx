import React from 'react';
import '../assets/workstyles.css'
import { FaClock, FaPhone, FaShirtsinbulk, FaSmile, FaTshirt } from 'react-icons/fa';
import { MdWash } from 'react-icons/md';

const Work = () => {
  return (
    <ul className="process">
    <li className="process__item">
      <span className="process__number">1</span>
      <span className="process__title"><FaPhone /><br />Make A Call</span>
      <span className="process__subtitle">Connect with us to discuss your needs and requirements.</span>
    </li>

    <li className="process__item">
      <span className="process__number">2</span>
      <span className="process__title"><FaClock /><br />Fix Your Time</span>
      <span className="process__subtitle">Schedule a convenient time for our services to fit your schedule.</span>
    </li>

    <li className="process__item">
      <span className="process__number">3</span>
      <span className="process__title"><FaTshirt /><br />Thorough Cleaning</span>
      <span className="process__subtitle">Our expert team diligently performs the cleaning services for you.</span>
    </li>

    <li className="process__item">
      <span className="process__number">4</span>
      <span className="process__title"><FaSmile /><br />Enjoy Freshness</span>
      <span className="process__subtitle"> Enjoy the cleanliness and freshness our services bring to your space.</span>
    </li>
  </ul>
  );
}

export default Work