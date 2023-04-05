// import React from "react";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import beach from "../image/beach.jpg"
import woo from "../image/woo.jpg"
import  women123 from "../image/woman12.jpg"

const Carousels = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div div className='carousel-content'>
     <Carousel activeIndex={index} onSelect={handleSelect}>
              
      <Carousel.Item>
        <img
          className="d-block w-100"
           src={women123}
          alt="First slide"
          style={{aspectRatio:"16/9"}}
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={woo}
          alt="Second slide"
          style={{aspectRatio:"16/9"}}
        />

      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={beach}
          style={{aspectRatio:"16/9"}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>


    </div>
  );
};

export default Carousels;
