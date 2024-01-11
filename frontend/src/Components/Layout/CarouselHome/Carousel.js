import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400 rounded-5"
          src="https://www.kovz.gov.mk/articleImage.img/2022/08/05/JPG_010_-_Jovan_Kaneo_church_in_Ohrid__panorama-min.jpg"
          alt="First slide"
          style={{height:"50vh"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-5"
          src="https://macedonia-timeless.com/wp-content/uploads/2018/08/dojran-ezero.jpg"
          alt="Second slide"
          style={{height:"50vh"}}
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-5"
          src="https://i.imgur.com/NFlxbqY.jpg"
          alt="Third slide"
          style={{height:"50vh"}}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;