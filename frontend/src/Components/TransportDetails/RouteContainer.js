import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RxDot } from "react-icons/rx"
import Line from "./Line";
import Waypoint from "./Waypoint";
import FinalPoint from "./FinalPoint";

const RouteContainer = (props) => {
  console.log("VO KONTEJNERO")
  console.log(props.data)
  return (
    <>
      <Container
        className="py-3 px-4 my-4"
        style={{
          border: "4px solid #159895",
          borderRadius: "1em",
          boxShadow: "0 3px 5px #159895",
          maxWidth: "60%",
        }}
      >
        <Waypoint city={props.data.from} time={props.data.date}></Waypoint>
        {props.data.routes && props.data.routes.map((route, i) => {
          return <Waypoint city={route} time={props.data.times[i]}></Waypoint>
        })}
        <FinalPoint city={props.data.to} time={props.data.time}></FinalPoint>
      </Container>
    </>
  );
};

export default RouteContainer;
