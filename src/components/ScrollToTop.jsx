import React from 'react';
import styled from 'styled-components';
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react';

function ScrollToTop() {

  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset >100 ? setVisible(true) : setVisible(false);
  })
  return (
    <Div>
      <a id='scrolltot' href="https://api.whatsapp.com/send?phone=9899416600" className={`${visible ? "block" : "none"}`}>
      <FaWhatsapp /> 
      </a>
        
    </Div>
  )
}

const Div = styled.div`
max-width: 100vh;
.none{
  opacity: 0;
  visibility: hidden;
}
#scrolltot{
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #25D366 ;
  padding: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: 0.4s ease-in-out;
  svg{
    color: #fff;
    font-size: 1.3rem;
  }
}
`;

export default ScrollToTop