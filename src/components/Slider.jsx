import React, { useState } from 'react';
import '../assets/sliderStyles.css';
import {FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import slide3 from '../assets/laundry.jpg' 
import slide2 from '../assets/groom.jpg' 
import slide1 from '../assets/delivery.jpg' 
import slide4 from '../assets/suits.jpg' 
import slide5 from '../assets/pressing.jpg' 
import slide6 from '../assets/stain-free.jpg' 

const Slider = () => {
  const [items, setItems] = useState([
    { id: 1, image: slide1, title:'Convenient At-Home Laundry', text:'Bid farewell to laundry hassles! Our convenient laundry services bring professional care to your doorstep. Schedule a pickup for top-notch treatment, from stain removal to precise folding, all done in the comfort of your home.' },
    { id: 2, image: slide2, title:'Premium Fabric Care', text:'Experience top-tier fabric care with our dry cleaning services. Trust us to handle your delicate fabrics with expertise, leaving your clothes feeling and looking brand new.' },
    { id: 3, image: slide3, title:'Eco-Friendly Cleaning', text: 'Join us in a commitment to a greener future. Our eco-friendly dry cleaning prioritizes tough stain removal while being gentle on the environment. From biodegradable detergents to energy-efficient processes, we offer sustainable options for a cleaner wardrobe and planet.' },
    { id: 4, image: slide4, title:'Fabric-Specific Expertise', text: "Not all fabrics are equal, and neither is our cleaning approach. Our experts specialize in various fabrics, from delicate silk to robust denim. Trust us to provide tailored care, preserving your wardrobe's style and durability."  },
    { id: 5, image: slide5, title:'Affordable Price', text:'Experience premium dry cleaning at an affordable price. Our transparent pricing ensures you get top-notch services without breaking the bank. Enjoy the luxury of expert fabric care and meticulous attention to detail, all at a cost that suits your budget.' },
    { id: 6, image: slide6, title:'Stain-Free Confidence', text: 'Say goodbye to stubborn stains with our specialized stain removal services. Our expert team employs advanced techniques to eliminate even the toughest blemishes, ensuring your clothes regain their pristine condition and you can wear them with confidence.'  }
  ]);

  const handleNextClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  const handlePrevClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  return (
    <div>
      <div id="slide">
        {items.map((item) => (
          <div key={item.id} className="item" style={{ backgroundImage: `url(${item.image})`}}>
            <div className="content">
              <div className="name">{item.title}</div>
              <div className="des">{item.text}</div>
              <button>See more</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <FaChevronLeft />
        </button>
        <button id="next" onClick={handleNextClick}>
        <FaChevronRight />
        </button>
      </div>
    </div>
  )
};

export default Slider;
