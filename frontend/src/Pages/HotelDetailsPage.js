import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import { Container, Row, Col, Form } from "react-bootstrap";
import Navigation from "../Components/Layout/Navbar/Navigation";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import DescriptionContainer from "../Components/HotelDetails/DescriptionContainer";
import ReviewsCarousel from "../Components/HotelDetails/ReviewsCarousel";
import RoomsTable from "../Components/HotelDetails/RoomsTable";
import ContactBar from "../Components/HotelDetails/ContactBar";
import { useLocation } from "react-router-dom";

const HotelDetailsPage = (props) => {
  document.body.style.backgroundColor = "white";

  const [index, setIndex] = useState(0);

  const location = useLocation();
  const { data, from, to } = location.state;
  console.log(location)
  console.log("DETAILS ")
  console.log(data)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navigation />
      <Container className="my-3">
        <Row className="d-flex justify-content-between">
          <Col style={{textAlign: "left"}}>
            <h2 style={{color: "#159895"}}>{data.hotelName}</h2>
          </Col>
          <Col>
            <Container>
              <Row className="mb-4">
                <Col style={{textAlign: "right"}}>
                  <span
                    style={{
                      backgroundColor: "#159895",
                      padding: "0.75em",
                      fontWeight: "bold",
                      fontSize: "1.25rem",
                      borderRadius: "0.75em",
                      color: "white",
                    }}
                  >
                    9.1
                  </span>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col
            className="p-3 rounded-4"
            sm={3}
            style={{ backgroundColor: "#002B5B" }}
          >
            <Row>
              <h3 className="mb-5 mt-3" style={{color: "white"}}>Критериуми од пребарувањето</h3>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Каде ќе патувате?:"
                  id="location"
                ></Form.Control>
                <label htmlFor="location">Локација:</label>
              </Form.Floating>
            </Row>
            <Row>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="date"
                  placeholder="Датум на пристигнување:"
                  id="dateFrom"
                ></Form.Control>
                <label htmlFor="dateFrom">Датум на пристигнување:</label>
              </Form.Floating>
            </Row>
            <Row>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="date"
                  placeholder="Датум на заминување:"
                  id="dateTo"
                ></Form.Control>
                <label htmlFor="dateTo">Датум на заминување:</label>
              </Form.Floating>
            </Row>
            <Row>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="number"
                  placeholder="Број на гости:"
                  id="floatingPassengers"
                ></Form.Control>
                <label htmlFor="floatingPassengers">Број на гости:</label>
              </Form.Floating>
            </Row>
          </Col>
          <Col>
            <Container>
              <Row>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 h-400 rounded-5"
                      src="https://www.kovz.gov.mk/articleImage.img/2022/08/05/JPG_010_-_Jovan_Kaneo_church_in_Ohrid__panorama-min.jpg"
                      alt="First slide"
                      style={{ height: "50vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-5"
                      src="https://macedonia-timeless.com/wp-content/uploads/2018/08/dojran-ezero.jpg"
                      alt="Second slide"
                      style={{ height: "50vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-5"
                      src="https://i.imgur.com/NFlxbqY.jpg"
                      alt="Third slide"
                      style={{ height: "50vh" }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Row>
              <Row>
                <Container></Container>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="col-md-8"><DescriptionContainer data={data.hotelDescripiton} type="hotel"></DescriptionContainer></Col>
          <Col className="col-md-4"><ReviewsCarousel></ReviewsCarousel></Col>
        </Row>
        <Row className="mb-3"><RoomsTable from={from} to={to} data={data.hotelRooms}></RoomsTable></Row>
        <Row><ContactBar></ContactBar></Row>
      </Container>
    </>
  );
};

export default HotelDetailsPage;
