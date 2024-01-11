import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useFormData from "../Hooks/useFormData";

const HotelEditForm = (props) => {
  console.log(props.hotel);

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
    {...props.hotel}
  );

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
              placeholder="Внесете го името на сместувањето"
              name="hotelName"
              value={formData.hotelName}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Внесете опис на сместувањето"
              name="hotelDescripiton"
              value={formData.hotelDescripiton}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelAddress">
            <Form.Label>Локација</Form.Label>
            <Form.Control
              type="text"
              placeholder="Внесете ја адресата на сместувањето"
              name="hotelLocation"
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
              checked={formData.parking}
              onChange={onCheckBoxChange}
            />
            <Form.Check
              type="checkbox"
              label="Pet friendly"
              name="petFriendly"
              checked={formData.petFriendly}
              onChange={onCheckBoxChange}
            />
            <Form.Check
              type="checkbox"
              label="Интернет"
              name="internetAvailable"
              checked={formData.internetAvailable}
              onChange={onCheckBoxChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="hotelPhone">
            <Form.Label>Контакт телефон</Form.Label>
            <Form.Control type="text" placeholder="Внесете контакт телефон" />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
            >
              <span className="ikona my-1">
                <GiConfirmed />
              </span>
              <span className="ikona mx-3">Зачувај промени</span>
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default HotelEditForm;
