import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import useFormData from "../Hooks/useFormData";

const SearchCriterias = (props) => {

  const { formData, onFormChange, onCheckBoxChange, setFormData} = useFormData(props.criterias)
  console.log("KRITERIUMI")
  console.log(formData)

  return (
    <>
      <Container
        className="p-1 pb-0 mb-5 mt-3 rounded-2"
        style={{ backgroundColor: "#002B5B", width: "65%"}}
      >
        <Form className="rounded-5">
          <Row className="gx-1">
            <Col>
              <Form.Floating className="mb-3">
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="Каде ќе патувате?:"
                  id="location"
                  name="hotelLocation"
                  onChange={onFormChange}
                  value={formData.hotelLocation}
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
                  onChange={onFormChange}
                  value={formData.dateFrom}
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
                  onChange={onFormChange}
                  value={formData.dateTo}
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
                  onChange={onFormChange}
                  value={formData.numBeds}
                ></Form.Control>
                <label htmlFor="floatingPassengers">Број на гости:</label>
              </Form.Floating>
            </Col>
            <Col>
              <Form.Group className="my-1">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#159895" }}
                  size="lg"
                  className="w-100"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = `/search/hotel/${formData.hotelLocation}/${formData.dateFrom}/${formData.dateTo}/${formData.numBeds}`
                  }}
                >
                  <span className="ikona mx-3">Пребарај</span>
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SearchCriterias;
