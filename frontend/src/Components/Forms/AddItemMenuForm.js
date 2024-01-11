import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi";
import useFormData from "../Hooks/useFormData";
import useCreateMenu from "../Hooks/Restaurant/useCreateMenu"

const AddItemMenuForm = (props) => {
  const { createMenu } = useCreateMenu();

  const edit = props.menu
  const dummy =     {
    name: "",
    ingredients: "",
    price: 0,
  }

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
    // {
    //   name: "",
    //   ingredients: "",
    //   price: 0,
    // }
    edit ? props.menu : dummy
  );

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="itemName">
            <Form.Label>Име на ставката</Form.Label>
            <Form.Control
              type="text"
              placeholder="Внесете го името на ставката "
              value={formData.name}
              onChange={onFormChange}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemIngrediеnts">
            <Form.Label>Состојки на ставката</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Внесете ги состојките на ставката"
              value={formData.ingredients}
              onChange={onFormChange}
              name="ingredients"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="itemPrice">
            <Form.Label>Цена на ставка</Form.Label>
            <Form.Control
              type="number"
              placeholder="Внесете ја цената на ставката"
              value={formData.price}
              onChange={onFormChange}
              name="price"
              max={999}
            />
          </Form.Group>

          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={(e) => {
                e.preventDefault();
                createMenu(props.Id, formData)
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

export default AddItemMenuForm;
