import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RxDot } from "react-icons/rx"
import Line from "./Line";

const Waypoint = (props) => {
  console.log(props.left)
  const style = props.left === "true" ? {textAlign: "left"} : {}
  console.log(style)

  const getTimeAsString = (dateString) => {
    const date = new Date(dateString)
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  return (
    <>
      <Row className="d-flex flex-row gap-0">
      {props.left === "true" && <Col className="d-flex flex-column justify-content-center col-auto" style={{paddingLeft: "2.6rem"}}>
            <h5 style={{color: props.routes === "true" ? "white" : "" }} className="m-auto">{getTimeAsString(props.time)}</h5>
        </Col>}
        <Col md="auto">
          <RxDot size={"4rem"} color="#159895"></RxDot>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <h3 className="my-auto" style={{...style, fontSize: props.routes === "true" ? "1.3rem" : "", color: props.routes === "true" ? "#708090	" : ""}}>{props.city}</h3>
        </Col>
      {props.left !== "true" && <Col className="d-flex flex-column justify-content-center">
            <h5>{getTimeAsString(props.time)}</h5>
        </Col>}
      </Row>
      <Row>
      <Line left={props.left}> </Line>
      </Row>
    </>
  );
};

export default Waypoint;
