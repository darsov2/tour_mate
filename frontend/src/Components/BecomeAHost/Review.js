import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function Review (props) {

    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < 3; i++) {
          stars.push(
            <Col key={i} style={{display: "inline-block"}} className="w-20 px-0">
              <AiFillStar size="2rem" color="#159895" />
            </Col>
          );
        }
        for (let i = 0; i < 5 - 3; i++) {
          stars.push(
            <Col key={i + 3} style={{display: "inline-block"}} className="w-20 px-0">
              <AiOutlineStar size="2rem" color="#159895" />
            </Col>
          );
        }
        return stars;
      }    
    
    return (
        <Container style={{padding: '2em', width: '18em', height: 'auto', backgroundColor: 'lightgray', borderRadius: '1rem', position: "aboslute", top: "-410px", left: "-600px"}}>
            <Row>
                <Col>
                    <Image src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg" width={50} height={50} className="rounded-5"></Image>
                </Col>
                <Col className="my-auto">
                    <span>Ime Prezime</span>
                </Col>
            </Row>
            <Row>
                <span className="my-3 border">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            </Row>
            <Row className="w-100 mx-auto" style={{maxWidth: "100%"}}>
                {generateStars()}
            </Row>
        </Container>
    );
}

export default Review;