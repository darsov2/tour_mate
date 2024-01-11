import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaMagnet } from "react-icons/fa"
import { HiMagnifyingGlass } from "react-icons/hi2"
import useFormData from "../Hooks/useFormData";

function TabFormHotel() {

  const { formData, onFormChange, setFormData } = useFormData({
    hotelLocation: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    numBeds: undefined
  })

  return (
    <Form className='rounded-5' >
      <Row>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="text"
              placeholder="Каде ќе патувате?:"
              id="location"
              name="hotelLocation"
              value={formData.hotelLocation}
              onChange={onFormChange}
            ></Form.Control>
            <label htmlFor="location">Локација:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="date"
              placeholder="Датум на пристигнување:"
              id="dateFrom"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={onFormChange}
            ></Form.Control>
            <label htmlFor="dateFrom">Датум на пристигнување:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="date"
              placeholder="Датум на заминување:"
              id="dateTo"
              name="dateTo"
              value={formData.dateTo}
              onChange={onFormChange}
            ></Form.Control>
            <label htmlFor="dateTo">Датум на заминување:</label>
          </Form.Floating>
        </Col>
        <Col>
          <Form.Floating className="mb-3">
            <Form.Control
              size="md"
              type="number"
              placeholder="Број на гости:"
              id="floatingPassengers"
              name="numBeds"
              value={formData.numBeds}
              onChange={onFormChange}
            ></Form.Control>
            <label htmlFor="floatingPassengers">Број на гости:</label>
          </Form.Floating>

          <Form.Group className="my-1">
            <Button type="submit" style={{backgroundColor: "#159895"}} size="lg" 
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `/search/hotel/${formData.hotelLocation}/${formData.dateFrom}/${formData.dateTo}/${formData.numBeds}`
            }}>
              <span className="ikona my-1"><HiMagnifyingGlass/></span>
              <span className="ikona mx-3">Пребарај</span>
            </Button>
          </Form.Group>
        </Col>

      </Row>
    </Form>
  );
}

export default TabFormHotel;
