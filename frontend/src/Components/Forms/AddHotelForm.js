import React from "react";
import { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useCreateHotel from "../Hooks/Hotel/useCreateHotel.js";
import axios from "axios";
import useFormData from "../Hooks/useFormData.js";

const AddHotelForm = (props) => {
  const { createHotel } = useCreateHotel();

  console.log(props.hotel)

  const dummy = {
    hotelName: "",
    hotelLocation: "",
    petFriendly: false,
    parking: false,
    internetAvailable: false,
    hotelDescripiton: "",
    hotelEDBS: "",
  }

  const edit = props.hotel != null

  console.log(edit)

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(edit ? props.hotel : dummy);


  const { addHotel } = useCreateHotel();

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="hotelName">
            <Form.Label>Име на сместувањето</Form.Label>
            <Form.Control
              type="text"
              name="hotelName"
              placeholder="Внесете го името на сместувањето"
              value={formData.hotelName}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control
              as="textarea"
              name="hotelDescripiton"
              placeholder="Внесете опис на сместувањето"
              value={formData.hotelDescripiton}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelAddress">
            <Form.Label>Локација</Form.Label>
            <Form.Control
              type="text"
              name="hotelLocation"
              placeholder="Внесете ја адресата на сместувањето"
              value={formData.hotelLocation}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelFilters">
            <Form.Label>Филтри</Form.Label>
            <Form.Check
              type="checkbox"
              label="Паркинг"
              name="parking"
              value={formData.parking}
              onChange={onCheckBoxChange}
            />
            <Form.Check
              type="checkbox"
              label="Pet friendly"
              name="petFriendly"
              value={formData.petFriendly}
              onChange={onCheckBoxChange}
            />
            <Form.Check
              type="checkbox"
              name="internetAvailable"
              label="Интернет"
              value={formData.internetAvailable}
              onChange={onCheckBoxChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelPhone">
            <Form.Label>Контакт телефон</Form.Label>
            <Form.Control
              type="text"
              name="hotelEDBS"
              placeholder="Внесете контакт телефон"
              value={formData.hotelEDBS}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={(e) => {
                e.preventDefault();
                console.log(formData);
                createHotel(formData, edit);
                props.refresh((prevState) => {
                  return prevState + 1;
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

export default AddHotelForm;