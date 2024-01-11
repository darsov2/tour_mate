import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { HiMagnifyingGlass } from "react-icons/hi2"

function TabFormTransport() {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="text"
              placeholder="Од:"
              id="floatingFrom"
            ></Form.Control>
            <label htmlFor="floatingFrom">Од:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="text"
              placeholder="До:"
              id="floatingTo"
            ></Form.Control>
            <label htmlFor="floatingTo">До:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="date"
              placeholder="Датум:"
              id="floatingDate"
            ></Form.Control>
            <label htmlFor="floatingDate">Датум:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="number"
              placeholder="Број на патници:"
              id="floatingPassengers"
            ></Form.Control>
            <label htmlFor="floatingPassengers">Број на патници:</label>
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

export default TabFormTransport;
