import React from 'react';
import '../assets/offer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSofa } from 'react-icons/gi';
import carpet from '../assets/carpet.jpg';
import saree from '../assets/saree.jpg';
import groom from '../assets/groom.jpg';
import suits from '../assets/suits.jpg';
import stainfree from '../assets/stain-free.jpg';
import portfolio2 from '../assets/portfolio2.jpg';


const Offer = () => {
    const offerItems = [
        {
          icon: portfolio2,
          title: 'Darning or Mending',
          description: 'Extend the life of your favorite garments with our expert darning and mending services.',
        },
        {
          icon: stainfree,
          title: 'Starching',
          description: 'Achieve a crisp and polished look with our professional starching service.',
        },
        {
          icon: saree,
          title: 'Saree Calendering',
          description: 'Preserve the timeless elegance of your sarees through our meticulous calendering process',
        },
        {
          icon: groom,
          title: 'Wedding Dress Cleaning',
          description: 'Ensure your wedding dress stays as beautiful as your special day with our premium  service',
        },
        {
          icon: suits,
          title: 'Designer Wear Cleaning',
          description: 'Trust us to care for your designer wear, preserving their quality and uniqueness.',
        },
        {
          icon: carpet,
          title: 'Carpet & Sofa Cleaning',
          description: 'Revitalize your home by giving your carpets and sofas a fresh and thorough cleaning',
        },
      ];
    
      return (
        <section className="offersection we-offer-area text-center bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h2 style={{fontSize:'3rem', color:'#031d27'}}>Other <span>Services</span></h2>
                  <h4>Our range of flexible services</h4>
                </div>
              </div>
            </div>
            <div className="row our-offer-items less-carousel">
              {offerItems.map((item, index) => (
                <div key={index} className="col-md-4 col-sm-6 equal-height" style={{marginBottom:'6rem'}}>
                    <img src={item.icon} style={{width:'100%', height:'300px'}} />
                  <div className="o-item">
                    
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };


export default Offer