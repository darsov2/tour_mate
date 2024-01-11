import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Review from "../BecomeAHost/Review";
import { useState } from "react";
import { Container } from "react-bootstrap";

const ReviewsCarousel = () => {
    document.body.style.backgroundColor = "white";

    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (<>
                    <Container
        className="py-3 px-1 my-4">
                <Carousel className="w-100" activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                  <Review></Review>
                  </Carousel.Item>
                  <Carousel.Item>
                  <Review></Review>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Review></Review>
                  </Carousel.Item>
                </Carousel>
        </Container>
    </>)
}

export default ReviewsCarousel;