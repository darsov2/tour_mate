import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RxDot } from "react-icons/rx";
import Line from "../TransportDetails/Line";
import Waypoint from "../TransportDetails/Waypoint";
import FinalPoint from "../TransportDetails/FinalPoint";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom"

const TransportListing = (props) => {
  


  return (
    <>
      <Container
        className="py-4 px-3 my-4"
        style={{
          border: "4px solid lightblue",
          borderRadius: "1em",
          boxShadow: "0 3px 5px lightblue",
          maxWidth: "60%",
        }}
      >
        <Row>
          <Col>
            <Waypoint left="true" city={props.data.from} time={props.data.date}></Waypoint>
            <Waypoint left="true" city={props.data.routes.join(", ")} time={props.data.date} routes="true"></Waypoint>
            <FinalPoint left="true" city={props.data.to} time={props.data.time}></FinalPoint>
          </Col>
          <Col>
            <Container
              fluid
              className="px-0"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <Row className="justify-self-end mr-5 mb-3" style={{ textAlign: "right" }}>
                <Col style={{ textAlign: "right" }}>
                  <h6 className="my-auto">Многу добро</h6>
                </Col>
                <Col>
                  <span className="my-auto"
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
              <Row className="w-50 justify-self-end">
                <Container
                  className="justify-self-end"
                  style={{ textAlign: "right" }}
                >
                  <Row>
                    <h4>{props.data.price}$</h4>
                  </Row>
                  <Row className="w-100">
                    <Link to="/details/transport" state={ {data: props.data} }>
                    <Button
                      className="m-2"
                      size="md"
                      style={{ backgroundColor: "#159895" }}
                    >
                      <MdOutlineLocalOffer size={"1.5em"}></MdOutlineLocalOffer>{" "}
                      Кон понудата
                    </Button>
                    </Link>
                  </Row>
                </Container>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TransportListing;
