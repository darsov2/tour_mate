import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi"
import useCreateTable from "../Hooks/Restaurant/useCreateTable";
import useFormData from "../Hooks/useFormData";

const AddTableForm = (props) => {

  const { createTable } = useCreateTable();

  console.log("OD FORMATA")
  console.log(props.data)

  const dummy = {
    numberOfSeats: ""
  }

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
      props.data ? props.data : dummy
  );

    return (<>
              <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="numPeople">
            <Form.Label>Број на луѓе</Form.Label>
            <Form.Control 
            type="number"
            value={formData.noSeats}
            onChange={onFormChange}
            name={'noSeats'}
            placeholder="Внесете го бројот на луѓе" />
          </Form.Group>

          {/*<Form.Group className="mb-3" controlId="tableStartingTime">*/}
          {/*  <Form.Label>Време на резервација</Form.Label>*/}
          {/*  <Form.Control */}
          {/*  type="time"*/}
          {/*  value={formData.startTime}*/}
          {/*  onChange={onFormChange} */}
          {/*  placeholder="Внесете времето на резервацијата" />*/}
          {/*</Form.Group>*/}

          {/*<Form.Group className="mb-3" controlId="tableTimeReservation">*/}
          {/*  <Form.Label>Времетраење на резервација</Form.Label>*/}
          {/*  <Form.Control */}
          {/*  type="time"*/}
          {/*  value={formData.endTime}*/}
          {/*  onChange={onFormChange} */}
          {/*  placeholder="Внесете го времетраењето на резервацијата" />*/}
          {/*</Form.Group>*/}

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={(e) => {
                e.preventDefault();
                console.log(formData);
                createTable(props.restaurantId, formData, props.refresh);
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
    </>)
}

export default AddTableForm;