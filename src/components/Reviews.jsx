import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { buttonVariants } from 'animation';

const Reviews = () => {
  return (
    <Section id="reviews">
      {/*<iframe
        src="https://widget.taggbox.com/146658"
        style={{ width: "100%", height: "600px", border: "none" }}
  ></iframe>*/}
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/239510"
        frameborder="0"
        width="100%"
        height="400"
      ></iframe>
      <div className="review-button">
        <motion.a
          class="up"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          style={{ color: "#fff", marginTop: "6rem" }}
          target="_blank"
          href="https://www.google.com/search?sca_esv=589119146&cs=1&output=search&q=Perfect+Dry+Cleaner+(The+Drycleaning+Store)&ludocid=12761858259640099176&lsig=AB86z5VhVe0ZUS5NcbF01VP-zFH7&kgs=7ea4cbdcb7ac7b4a&shndl=-1&shem=lsp&source=sh/x/kp/local/m1/1#lrd=0x390d04b07d2b04d3:0xb11b3a78cfbba168,1,,,,"
        >
          All Reviews
        </motion.a>
      </div>
    </Section>
  );
}

const Section = styled.section` 
background-color: #031d27;
padding: 10rem 10rem;
@media screen and (min-width: 280px) and  (max-width: 1080px){
  
    padding: 8rem 2rem;
  
}
.review-button{
  display: flex;
  align-items: center;
  justify-content: center;
}
.tb_see_more_btn {
  display: none;
}
`;

export default Reviews