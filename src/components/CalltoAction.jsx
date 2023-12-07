import React from 'react';
import '../assets/cta.css'

const CalltoAction = () => {
  return (
    <section class="section-cta cta-whatsapp">
      <div class="cta-container">
        <div class="cta-desc-content">
          <h1 class="cta-title">
            Connect with Us
            <br /> on Whatsapp
          </h1>
          <p class="cta-desc">
          Stay connected effortlessly! <br />Reach out on WhatsApp for quick and <br />friendly assistance. 
          </p>
          <i class="cta-icon fa fa-whatsapp"></i>
        </div>
        <div class="cta-btn-content">
          <a class="cta-btn" href="https://api.whatsapp.com/send?phone=9899416600" target='_blank'>
            <i class="fa fa-whatsapp"></i> +91 98994 16600
          </a>
          <small class="cta-label">available 24 x 7</small>
        </div>
      </div>
    </section>
  );
}

export default CalltoAction