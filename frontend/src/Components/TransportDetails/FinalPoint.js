import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RxDotFilled } from "react-icons/rx"
import Line from "./Line";

const FinalPoint = (props) => {
  console.log(props.left)
  const style = props.left === "true" ? {textAlign: "left"} : {}
  console.log(style)

  const getTimeAsString = (dateString) => {
    const date = new Date(dateString)
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }

  return (
    <>
      <Row>
        {props.left === "true" && <Col className="d-flex flex-column justify-content-center col-auto" style={{paddingLeft: "2.6rem"}}>
            <h5 className="m-auto">{getTimeAsString(props.time)}</h5>
        </Col>  }
        <Col md="auto">
          <RxDotFilled size={"4rem"} color="#159895"></RxDotFilled>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <h3 className="my-auto" style={style}>{props.city}</h3>
        </Col>
        {props.left !== "true" && <Col className="d-flex flex-column justify-content-center">
            <h5>{getTimeAsString(props.time)}</h5>
        </Col>  }
      </Row>
      <Row> 
      </Row>
    </>
  );
};

export default FinalPoint;