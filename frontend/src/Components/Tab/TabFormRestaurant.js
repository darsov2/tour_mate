import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { HiMagnifyingGlass } from "react-icons/hi2"

const timeOfArrival = () => {
  let times = [];

  for (let i = 0; i <= 23; i++) {
    for (let j = 0; j <= 45; j += 15) {
      let hour = i.toString().padStart(2, "0");
      let minutes = j.toString().padStart(2, "0");
      times.push(`${hour}:${minutes}`);
    }
  }

  return times;
};

function TabFormRestaurant() {
  const a = timeOfArrival();

  return (
    <Form>
      <Row>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Место:"
              id="location"
            ></Form.Control>
            <label htmlFor="location">Место:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="date"
              placeholder="Датум:"
              id="dateFrom"
            ></Form.Control>
            <label htmlFor="dateFrom">Датум:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Select size="md">
              <option>Изберете време:</option>
              {a.map((x) => {
                return <option key={x}>{x}</option>;
              })}
            </Form.Select>
            <label htmlFor="hour">Час:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="number"
              placeholder="Број на гости:"
              id="floatingPassengers"
            ></Form.Control>
            <label htmlFor="floatingPassengers">Број на гости:</label>
          </Form.Floating>
          <Form.Group className="my-1">
            <Button type="submit" style={{backgroundColor: "#159895"}} size="lg">
              <span className="ikona my-1"><HiMagnifyingGlass/></span>
              <span className="ikona mx-3">Пребарај</span>
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default TabFormRestaurant;
