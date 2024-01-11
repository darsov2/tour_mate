import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { GiConfirmed } from "react-icons/gi"
import useCreateBusiness from "../Hooks/Business/useCreateBusiness";
import useFormData from "../Hooks/useFormData";

const RegisterBusinessForm = (props) => {

  const { createBusiness } = useCreateBusiness();

  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData({
    name: "",
    address: "",
    edbs: "",
    odgovornoLice: "",
    phone: "",
    approved: false
  });

    return (<>
              <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="businessName">
            <Form.Label>Име на фирмата</Form.Label>
            <Form.Control 
            type="text"
            value={formData.name}
            onChange={onFormChange}
            name="name"
            placeholder="Внесете го името на фирмата" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="businessAddress">
            <Form.Label>Адреса на фирмата</Form.Label>
            <Form.Control 
            type="text" 
            value={formData.address}
            onChange={onFormChange}
            name="address"
            placeholder="Внесете ја адресата на фирмата" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="businessIDN">
            <Form.Label>Единствен даночен број</Form.Label>
            <Form.Control 
            type="text" 
            value={formData.edbs}
            onChange={onFormChange}
            name="edbs"
            placeholder="Внесете ЕДБС" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="businessDirector">
            <Form.Label>Одговорно лице</Form.Label>
            <Form.Control 
            type="text" 
            value={formData.odgovornoLice}
            onChange={onFormChange}
            name="odgovornoLice"
            placeholder="Внесете одговорно лице" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="businessPhone">
            <Form.Label>Контакт телефон</Form.Label>
            <Form.Control 
            type="text" 
            value={formData.phone}
            onChange={onFormChange}
            name="phone"
            placeholder="Внесете контакт телефон" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="businessEULA">
            <Form.Check type="checkbox" label="Се согласувам со правилата и условите за користење"/>
          </Form.Group>
          <Form.Group className="my-1 justify-content-center">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
              onClick={(e) => {
                e.preventDefault();
                console.log(formData);
                const dataToSend = {
                  ...formData,
                  userId: 1
                }
                createBusiness(formData);
                props.edit(1)
                props.hide()
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

export default RegisterBusinessForm;