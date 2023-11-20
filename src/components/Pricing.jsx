import React, {Fragment} from 'react';
import styled from 'styled-components';
import Title from './Title';

function Pricing() {
  const plans = [
    {
      name: "Dry Cleaning",
      price: 30,
    },
    {
      name: "Washing",
      price: 20,
    },
    {
      name: "Ironing",
      price: 25,
    },
  ];

  const data =[
    {
      value: "Formals & Bridal Laundry",
      type: "Basic",
    },
    {
      value: "Jackects & Leather Items",
      type: "Basic",
    },
    {
      value: "Uniform Laundry & Ironing",
      type: "Basic",
    },
    {
      value: "Soft Toys",
      type: "Pro",
    },
    {
      value: "Sofa Cleaning",
      type: "Pro",
    },
    {
      value: "Carpet Cleaning",
      type: "Pro",
    },
    {
      value: "Event Laundry",
      type: "Expert",
    },
    {
      value: "Wedding Laundry",
      type: "Expert",
    },
    {
      value: "Hotel Laundry",
      type: "Expert",
    },
  ]
  return (
    <Section>
      <Title value="pricing"/>
      <div className="background">
        <img src="" alt="background" className='bg1'/>
        <img src="" alt="background" className='bg2'/>
      </div>
      <div className="pricing__title">
        <p>Find your pricing plan</p>
        <h2>Finding the right Laundry in your city could be time consuming...</h2>
      </div>
      <div className="pricing">
        {plans.map(({name, price}, index) => {
          return (
            <div className="pricing__plan" key={index}> 
              <div className="pricing__plan__name">
                <h2>{name}</h2>
                <div className="pricing__plan__name__price">
                  <span>$</span>
                  <p>{price}</p>
                </div>
              </div>
              <div className="pricing__plan__content">
                <ul className={`pricing__plan__content__features ${name}`}></ul>
                {data.map(({value, type}, index2) => {
                  return(
                    <Fragment key={index2}>

                    </Fragment>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

const Section = styled.section`

`;
export default Pricing