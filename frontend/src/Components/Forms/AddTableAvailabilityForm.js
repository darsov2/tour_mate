import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useFormData from "../Hooks/useFormData";
import useCreateTableAvailability from "../Hooks/Restaurant/useCreateTableAvailability";

const AddTableAvailablityForm = (props) => {
  const { createTableAvailability } = useCreateTableAvailability();
  console.log(props.hotelRoomId);
  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
    {
      numTables: "",
      hourFrom: new Date().getTime(),
      hourTo: new Date().getTime(),
      restaurantTable: props.table,
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
            <Form.Label>Време од</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Внесете го времето на доаѓање"
              value={formData.hourFrom}
              onChange={onFormChange}
              name="hourFrom"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomAvailabilityTo">
            <Form.Label>Време до</Form.Label>
            <Form.Control
              type="datetime-local"
              placeholder="Внесете го времето на напуштање"
              value={formData.hourTo}
              onChange={onFormChange}
              name="hourTo"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomAvailabilityNumRooms">
            <Form.Label>Број на маси</Form.Label>
            <Form.Control type="num" placeholder="Внесете го бројот на особи"
            value={formData.numTables}
            onChange={onFormChange}
            name="numTables"
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="button"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={() => {
                createTableAvailability(formData, props.table.tableId)
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
export default AddTableAvailablityForm;
