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
import Menu from "../Components/RestaurantDetails/Menu";
import MenuCarousel from "../Components/RestaurantDetails/Carousel";

const RestaurantDetailsPage = (props) => {
  document.body.style.backgroundColor = "white";

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navigation />
      <Container className="my-3">
        <Row className="d-flex justify-content-between">
          <Col style={{textAlign: "left"}}>
            <h2 style={{color: "#159895"}}>Име на ресторант</h2>
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
                  placeholder="Датум на резервација:"
                  id="date"
                ></Form.Control>
                <label htmlFor="dateFrom">Датум на резерација:</label>
              </Form.Floating>
            </Row>
            <Row>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="time"
                  placeholder="Време на пристигање:"
                  id="time"
                ></Form.Control>
                <label htmlFor="time">Време на пристигање:</label>
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
                      src="https://emagazin.mk/wp-content/uploads/2022/03/Karos_Photography-7795.jpg"
                      alt="First slide"
                      style={{ height: "50vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-5"
                      src="https://emagazin.mk/wp-content/uploads/2022/03/Karos_Photography-7871.jpg"
                      alt="Second slide"
                      style={{ height: "50vh" }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100 rounded-5"
                      src="https://lh5.googleusercontent.com/p/AF1QipMQAwahuuJCJ2rDUYNrhnwiX1070adTsM6LmzV5=w480-h300-k-n"
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
          <Col className="col-md-8"><DescriptionContainer type="restaurant"></DescriptionContainer></Col>
          <Col className="col-md-4"><ReviewsCarousel></ReviewsCarousel></Col>
        </Row>
        <Row className="mb-3"><MenuCarousel></MenuCarousel></Row>
        <Row><ContactBar></ContactBar></Row>
      </Container>
    </>
  );
};

export default RestaurantDetailsPage;
