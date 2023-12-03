import React from 'react';
import styled from 'styled-components';

const Reviews = () => {
  return (
    <Section id="reviews">
      <iframe
        src="https://7e04e7f3d4374d1195bbd86785c90cac.elf.site"
        width="100%"
        height="350"
        frameborder="0"
      ></iframe>
    </Section>
  );
}

const Section = styled.section` 
background-color: #000;
padding: 10rem 0;
`;

export default Reviews