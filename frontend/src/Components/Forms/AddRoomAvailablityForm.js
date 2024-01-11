import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useCreateRoomAvailiability from "../Hooks/Hotel/useCreateRoomAvailability";
import useFormData from "../Hooks/useFormData";

const AddRoomAvailablityForm = (props) => {
  
  const { createRoomAvailability } = useCreateRoomAvailiability(props.hotelRoomId);
  console.log(props.hotelRoomId)
  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
    {
      dateFrom: Date.now(),
      dateTo: Date.now(),
      numberOfBeds: 0,
    }
  );

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="roomAvailabilityFrom">
            <Form.Label>Датом од</Form.Label>
            <Form.Control
              type="date"
              placeholder="Внесете го датумот на сместување"
              value={formData.dateFrom}
              onChange={onFormChange}
              name="dateFrom"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomAvailabilityTo">
            <Form.Label>Датум до</Form.Label>
            <Form.Control
              type="date"
              placeholder="Внесете го датумот на напуштање"
              name="dateTo"
              value={formData.dateTo}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomAvailabilityNumRooms">
            <Form.Label>Број на соби</Form.Label>
            <Form.Control
              type="num"
              placeholder="Внесете го бројот на соби"
              value={formData.numberOfBeds}
              onChange={onFormChange}
              name="numberOfBeds"
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="button"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={() => {
                createRoomAvailability(formData, props.hotelRoomId)
              }}
            >
              <span className="ikona my-1">
                <GiConfirmed />
              </span>
              <span className="ikona mx-3">Поднеси апликација</span>
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};
export default AddRoomAvailablityForm;
