import React, {useState} from 'react';
import loadnore from "assets/loadmore.png";
import styled from 'styled-components';
import { useScroll } from 'components/useScroll';
import { testimonialsAnimation } from 'animation';
import { motion } from 'framer-motion';


function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const testimonials = [{
    designation: "HOTEL OWNER",
    name: "Anil",
    review: "This dry cleaning service exceeded my expectations. They delivered impeccable results with my delicate garments, removing tough stains and preserving fabric quality. Timely and professional, I highly recommend their laundry expertise."
  },
  {
    designation: "STUDENT",
    name: "Mark",
    review: "I'm extremely satisfied with the laundry dry cleaning service. They treated my clothes with care, and the attention to detail was impressive. Fresh, clean, and right on time!"
  },
  {
    designation: "BUSINESS MAN",
    name: "Javed",
    review: "This dry cleaning service is a game-changer. They've consistently restored my clothes to like-new condition, and their friendly staff makes the process hassle-free. My wardrobe has never looked better!"
  },
];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div className="testimonials" 
         variants={testimonialsAnimation}
         animate={controls}
         transition={{delay: 0.3,
         type:"tween",
         duration: 0.8
         }}
        >
          {testimonials.map(({designation, name, review},index) => {
            return(
              <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key="index">
                <div className="image">
                  <div className="circle2">
                    <img src={loadnore} alt="Loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">
                    {designation}
                  </span>
                  <h3 className='title'>{name}</h3>
                </div>
                <p className="description">
                  {review}
                </p>
              </div>
            );
          })}
        </motion.div>
        <div className="controls">
          <button className={selected === 0 ? "active" : ""} 
          onClick={() => {setSelected(0)}}></button>
          <button className={selected === 1 ? "active" : ""} 
          onClick={() => {setSelected(1)}}></button>
          <button className={selected === 2 ? "active" : ""} 
          onClick={() => {setSelected(2)}}></button>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;
.container{
  min-height: 100vh;
  background-color: #272727;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .testimonials{
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: 30%;
    .testimonial{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .description{
        text-align: center;
      }
      .title-container{
        text-align: center;
      }
      .image{
        position: relative;
        .circle2{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: #8860e6b0;
        }
      }
    }
    .hidden{
      display: none;
    }
    color: #fff;
    .designation{
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button{
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: #fff;
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active{
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
      
    }
  }
}
@media screen and (min-width: 280px) and  (max-width: 1080px){
.background{
  display: none;
}
.container{
  padding: 4rem 0;
  .testimonials{
    width: 80%;
    .testimonial{
      .description{
        height: 18rem;
      }
    }
  }
}
}
`;


export default Testimonials