import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
import Navigation from "../Components/Layout/Navbar/Navigation";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import DescriptionContainer from "../Components/HotelDetails/DescriptionContainer";
import ReviewsCarousel from "../Components/HotelDetails/ReviewsCarousel";
import RoomsTable from "../Components/HotelDetails/RoomsTable";
import ContactBar from "../Components/HotelDetails/ContactBar";
import RouteContainer from "../Components/TransportDetails/RouteContainer";
import { useLocation } from "react-router-dom";

const TransportDetailsPage = (props) => {
  document.body.style.backgroundColor = "white";

  const [index, setIndex] = useState(0);

  const location = useLocation();
  const { data } = location.state;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navigation />
      <Container className="my-3">
        <Row className="d-flex justify-content-between">
          <Col style={{textAlign: "left"}}>
            <span><h2 style={{color: "#159895"}}>{data.from} - {data.to}</h2><h5 style={{color: "#159895"}}>({data.routes.join(", ")})</h5></span>
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
            <RouteContainer data={data}></RouteContainer>
        </Row>
        <hr></hr>
        <Row>
            <Col>
               <h3>Цена</h3>     
            </Col>
            <Col>
                <h3>{data.price}$</h3>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col className="d-flex flex-column justify-content-center">
               <h3>Возач</h3>     
            </Col>
            <Col className="d-flex flex-column justify-content-center">
            <Container className="d-flex flex-row justify-content-center mb-3" style={{paddingLeft: "28%"}}>
              <Col className="d-flex flex-column justify-content-center" style={{maxWidth: "30%"}}>
                <Image
                  src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  style={{
                    height: "4em",
                    borderRadius: "50%",
                    maxWidth: "100%",
                  }}
                  className="m-auto"
                ></Image>
              </Col>
              <Col className="d-flex flex-column justify-content-center">
                <Container className="pt-2" style={{ textAlign: "left" }}>
                  <h4>{data.transport.owner.name} {data.transport.owner.surname.substring(0, 1)}.</h4>
                </Container>
              </Col>
            </Container>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col>
               <h3>Возило</h3>     
            </Col>
            <Col>
                <h3>{data.transport.carBrand + " " + data.transport.carType}</h3>
            </Col>
        </Row>
        <hr></hr>
        <Row>
            <Col className="d-flex flex-column justify-content-center">
                <h3>Број на патници</h3>
            </Col>
            <Col md="auto" className="d-flex flex-column justify-content-center"> 
            <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
            </Col>
            <Col >   
            <Button className="m-2" size="lg" style={{backgroundColor: "#159895"}}>Резервирај</Button>
            </Col>
        </Row>
        <Row><ContactBar></ContactBar></Row>
      </Container>
    </>
  );
};

export default TransportDetailsPage;
