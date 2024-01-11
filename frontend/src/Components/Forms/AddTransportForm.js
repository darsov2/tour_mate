import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useCreateTransport from "../Hooks/Transport/useCreateTransport";
import useFormData from "../Hooks/useFormData";

const AddTransportForm = (props) => {
  const { createTransport } = useCreateTransport();

  const dummy = {
      transportName: "",
      carBrand: "",
      carType: false,
      carManufacturedYear: 1900,
      noPassengers: 0,
      noBags: 0,
      EMBG: "111",
      carPlate: "",
  }

  const edit = props.transport != null

  console.log(edit)

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(edit ? props.transport : dummy);

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="transportName">
            <Form.Label>Име на транспорт</Form.Label>
            <Form.Control
              type="text"
              placeholder="Внесете го името на транспортот"
              name="transportName"
              value={formData.transportName}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="transportYear">
            <Form.Label>Година на возило</Form.Label>
            <Form.Control
              type="number"
              placeholder="Внесете ја годината на возилото"
              name="carManufacturedYear"
              value={formData.carManufacturedYear}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="transportType">
            <Form.Label>Тип на возило</Form.Label>
            <Form.Control
              type="text"
              placeholder="Внесете го типот на возило"
              name="carType"
              value={formData.carType}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="transportRegistration">
            <Form.Label>Регистрација</Form.Label>
            <Form.Control
              type="text"
              placeholder="Внесете ја регистрацијата"
              name="carPlate"
              value={formData.carPlate}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numPassengers">
            <Form.Label>Број на патници</Form.Label>
            <Form.Control
              type="number"
              placeholder="Внесете го бројот на патници"
              name="noPassengers"
              value={formData.noPassengers}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numLuggage">
            <Form.Label>Број на торби</Form.Label>
            <Form.Control
              type="number"
              placeholder="Внесете го бројот на торби"
              name="noBags"
              value={formData.noBags}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="button"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={() => {
                console.log(formData);
                createTransport(formData, edit);
                props.refresh((prev) => {
                  return prev + 1;
                })
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

export default AddTransportForm;
