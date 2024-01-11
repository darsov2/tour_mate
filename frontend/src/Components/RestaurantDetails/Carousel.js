import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Menu from './Menu';
import { Row } from 'react-bootstrap';

function MenuCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <hr className='m-3'></hr>
            <Row className='d-flex justify-content-center align-items-center'><h2>Мени</h2></Row>
            <hr className='m-2'></hr>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Menu></Menu>
                </Carousel.Item>
                <Carousel.Item>
                    <Menu></Menu>
                </Carousel.Item>
                <Carousel.Item>
                    <Menu></Menu>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default MenuCarousel;