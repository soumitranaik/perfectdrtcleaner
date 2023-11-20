import React from 'react';
import styled from 'styled-components';
import { useScroll } from 'components/useScroll';
import { videoAnimation } from 'animation';
import { motion } from 'framer-motion';

function Video() {
  const [element, controls] = useScroll();
  return (
    <Section ref={element}>
      <motion.div className="background"
        variants={videoAnimation}
        animate={controls}
        transition={{delay: 0.3,
        type:"tween",
        duration: 0.8
        }}
      >
        <div className="video">
        <iframe width="960" height="515" src="https://www.youtube.com/embed/Vyor8kv9YiI?si=9i58u5DXGNctH29f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </motion.div>
      
    </Section>
  )
}

const Section = styled.section`
background-color: #2fb8ed;
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
position: relative;
.video{
  z-index: 10;
}
@media screen and (min-width: 280px) and  (max-width: 1080px){
height: 100%;
padding: 6rem 2rem;
.video{
  iframe{
    width: 80vw;
    height: 10rem;
  }
}
}
`;

export default Video