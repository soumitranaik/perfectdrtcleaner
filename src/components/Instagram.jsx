import React from 'react';
import styled from 'styled-components';

const Instagram = () => {
  return (
    <Section><iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/239348' frameborder='0' width='100%' height='1000'></iframe>
    </Section>
  )
}
const Section = styled.section` 
padding: 6rem 6rem 2rem 6rem;
background-color: #031d27;
`;
export default Instagram