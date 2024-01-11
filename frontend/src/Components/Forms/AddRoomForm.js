import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi"
import useCreateHotelRoom from "../Hooks/Hotel/useCreateHotelRoom.js";
import axios from "axios";
import useFormData from "../Hooks/useFormData";


const AddRoomForm = (props) => {
  const { createHotelRoom } = useCreateHotelRoom(props.hotelId);
  const edit = props.room
  const dummy = {
    hotelRoomDescription: "",
    hotelRoomName: "",
    numBeds: "",
    price: "",
    kitchenAvailable: false,
    airConditioning: false,
    balcony: false,
  }

  console.log(edit)

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
// {
//
//     hotelRoomDescription: "",
//     hotelRoomName: "",
//     numBeds: "",
//     price: "",
//     kitchenAvailable: false,
//     airConditioning: false,
//     balcony: false,
// }
    edit ? props.room : dummy
  );

    return (<>
              <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="roomName">
            <Form.Label>Име на соба</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Внесете го името на собата"
            value={formData.hotelRoomName}
            name="hotelRoomName"
            onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="numBeds">
            <Form.Label>Број на кревети</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Внесете го бројот на кревети" 
            value={formData.numBeds}
            name="numBeds"
            onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control 
            as="textarea" 
            placeholder="Внесете опис на собата" 
            name="hotelRoomDescription"
            value={formData.hotelRoomDescription}
            onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomPrice">
            <Form.Label>Цена од ноќ</Form.Label>
            <Form.Control 
            type="number" 
            placeholder="Внесете ја цената од ноќ" 
            value={formData.price}
            name="price"
            onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="roomFilters">
            <Form.Label>Филтри</Form.Label>
            <Form.Check 
            type="checkbox" 
            label="Кујна"
            name="kitchenAvailable"
            checked={formData.kitchenAvailable}
            onChange={onCheckBoxChange}
            />
            <Form.Check 
            type="checkbox" 
            label="Клима"
            checked={formData.airConditioning}
            name="airConditioning"
            onChange={onCheckBoxChange}
            />
            <Form.Check 
            type="checkbox" 
            label="Тераса"
            name="balcony"
            checked={formData.balcony}
            onChange={onCheckBoxChange}
            />

          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={() => {
                console.log(formData);
                createHotelRoom(formData);
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

export default AddRoomForm;