import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useCreateRestaurant from "../Hooks/Restaurant/useCreateRestaurant";
import useFormData from "../Hooks/useFormData";
import useGet from "../Hooks/useGet";

const AddRestaurantForm = (props) => {

  const { createRestaurant } = useCreateRestaurant();
  var dummy = {
    restaurantName: "",
    restaurantLocation: "",
    cousineType: "",
    restaurantDescription: "",
    restaurantEdbs: "111",
  }

  const edit = props.restaurant != null

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(edit ? props.restaurant : dummy);

  console.log(formData)

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="restaurantName">
            <Form.Label>Име на ресторант</Form.Label>
            <Form.Control
              type="text"
              name="restaurantName"
              placeholder="Внесете го името на ресторантот"
              value={formData.restaurantName}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="restaurantLocation">
            <Form.Label>Локација на ресторант</Form.Label>
            <Form.Control
              type="text"
              name="restaurantLocation"
              placeholder="Внесете ја локацијата на ресторантот"
              value={formData.restaurantLocation}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="restaurantDescription">
            <Form.Label>Опис</Form.Label>
            <Form.Control
              as="textarea"
              name="restaurantDescription"
              placeholder="Внесете опис на ресторантот"
              value={formData.restaurantDescription}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="restaurantCuisine">
            <Form.Label>Тип кујна</Form.Label>
            <Form.Control
              type="text"
              name="cousineType"
              placeholder="Внесете го типот на кујна"
              value={formData.cousineType}
              onChange={onFormChange}
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={(e) => {
                e.preventDefault()
                createRestaurant(formData, edit);
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

export default AddRestaurantForm;
