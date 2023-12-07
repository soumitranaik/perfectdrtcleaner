import React from 'react';
import styled from 'styled-components';

const Reviews = () => {
  return (
    <Section id="reviews">
      <iframe
      title='review'
        src="https://7e04e7f3d4374d1195bbd86785c90cac.elf.site"
        width="100%"
        height="350"
        frameborder="0"
      ></iframe>
    </Section>
  );
}

const Section = styled.section` 
background-color: #031d27;
padding: 10rem 0;
@media screen and (min-width: 280px) and  (max-width: 1080px){
  
    padding: 8rem 2rem;
  
}

`;

export default Reviews