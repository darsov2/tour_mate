import { useState } from "react";
import React from "react";
import { Container, Form, Button, FormControl, FormLabel, Row, Col, InputGroup } from "react-bootstrap";
import { AiFillLock, AiOutlineMail, AiOutlinePhone, AiOutlineKey } from "react-icons/ai"
import useFormData from "../Hooks/useFormData";
import useCreateHotel from "../Hooks/Hotel/useCreateHotel";
import useCreateUser from "../Hooks/User/useCreateUser";


const RegistrationForm = () => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        event.preventDefault();
        createUser(formData)
    
        setValidated(true);
      };

    const { createUser } = useCreateUser();

    const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData({
      name: "",
      surname: "",
      email: "",
      password: "",
      birthDate: Date.now(),
      address: "",
      contact: "111",
    });

    return (
        <Container className="rounded-5 m-5 my-auto mx-auto py-5 px-5" style={{backgroundColor: "#ffffff"}}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Име</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Име"
                name="name"
                value={formData.name}
                onChange={onFormChange}
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Име е задолжително
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Презиме</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Презиме"
                name="surname"
                value={formData.surname}
                onChange={onFormChange}
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Презиме е задолжително
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Датум на раѓање</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                    size="md"
                    type="date"
                    placeholder="Датум"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={onFormChange}
                    required
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Датум на раѓање е задолжителен
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Држава</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Држава"
                
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Држава е задолжително
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Град</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Град"
                
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Град е задолжителен
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Поштенски код</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Поштенски код"
                
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Поштенски код е задолжителен
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Адреса</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Адреса"
                name="address"
                value={formData.address}
                onChange={onFormChange}
              />
              <Form.Control.Feedback>Во ред!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Адреса е задолжително
                </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Е-маил</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><span className="ikona "><AiOutlineMail/></span></InputGroup.Text>
                <Form.Control
                type="email"
                placeholder="Е-маил"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={formData.email}
                onChange={onFormChange}
                required
                />
                <Form.Control.Feedback type="invalid">
                Е-маил е задолжителен
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Телефон</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><span className="ikona "><AiOutlinePhone/></span></InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Телефон"
                aria-describedby="inputGroupPrepend"
                name="contact"
                value={formData.contact}
                onChange={onFormChange}
                />
            </InputGroup>
            </Form.Group>
          </Row>
          <hr></hr>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Лозинка</Form.Label>
            <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><span className="ikona "><AiOutlineKey/></span></InputGroup.Text>
                <Form.Control
                type="text"
                placeholder="Лозинка"
                aria-describedby="inputGroupPrepend"
                name="password"
                value={formData.password}
                onChange={onFormChange}
                required
                />
                <Form.Control.Feedback type="invalid">
                Лозинката мора да содржи најмалку 8 карактери, една голема буква, еден број и еден специјален знак
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
            <Form.Label>Повторена лозинка</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><span className="ikona "><AiOutlineKey/></span></InputGroup.Text>
                <Form.Control
                type="password"
                placeholder="Лозинка"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Лозинките не се совпаѓаат
                </Form.Control.Feedback>
            </InputGroup>
            </Form.Group>
          </Row>
          <hr></hr>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Се согласувам со правилата и условите за користење"
              feedback="Мора да се согласите пред да продолжите"
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit" style={{backgroundColor: "#159895"}} size="md">
              <span className="ikona mx-3">Регистрирај се</span>
            </Button>
        </Form>
        </Container>
      );    
};

export default RegistrationForm;
