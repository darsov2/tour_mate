import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { AiOutlineSave, AiOutlineKey } from "react-icons/ai";
import ChangePasswordForm from "../Forms/ChangePasswordForm";

const DataForm = (props) => {


  const [show, setShow] = useState(false);

  const handleClose = () =>  setShow(false);
  const handleShow = (e) => { 
    e.preventDefault();
    setShow(true);
  }

  return (
    <>
      <Container
        className="w-75 rounded-5 m-5 my-auto mx-auto py-5 px-5"
        style={{ backgroundColor: "#159895", color: "white" }}
      >
        <h2 className="mb-5" style={{ color: "white" }}>
          Податоци за корисникот
        </h2>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Име</Form.Label>
              <Form.Control type="text" value={props.data["name"]} />
            </Form.Group>

            <Form.Group as={Col} controlId="surname">
              <Form.Label>Презиме</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={props.data["surname"]}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Датум на раѓање</Form.Label>
              <Form.Control type="date" value={props.data["dateOfBirth"]} />
            </Form.Group>

            <Form.Group as={Col} controlId="surname">
              <Form.Label>Држава</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={props.data["country"]}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Адреса</Form.Label>
            <Form.Control type="text" value={props.data["address"]} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>Град</Form.Label>
              <Form.Control type="text" value={props.data["city"]} />
            </Form.Group>

            <Form.Group as={Col} controlId="zip">
              <Form.Label>Поштенски број</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={props.data["zip"]}
              />
            </Form.Group>
          </Row>

          <Row className="mb-5">
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={props.data["email"]} />
            </Form.Group>

            <Form.Group as={Col} controlId="mobile">
              <Form.Label>Телефонски број</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={props.data["mobile"]}
              />
            </Form.Group>
          </Row>

          <Row>
            <Col style={{textAlign: "right"}}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#159895",
                  border: "2px solid white",
                }}
                size="md"
              >
                <span className="ikona my-1" color="white">
                  <AiOutlineSave style={{ color: "white" }} />
                </span>
                <span className="ikona mx-3">Зачувај промени</span>
              </Button>
            </Col>
            <Col style={{textAlign: "left"}}>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#159895",
                  border: "2px solid white",
                }}
                size="md"
                onClick={handleShow}
              >
                <span className="ikona my-1" color="white">
                  <AiOutlineKey style={{ color: "white" }} />
                </span>
                <span className="ikona mx-3">Промени лозинка</span>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color: "#159895"}}>Промена на лозинка</Modal.Title>
        </Modal.Header>
        <Modal.Body><ChangePasswordForm></ChangePasswordForm></Modal.Body>
      </Modal>
    </>
  );
};

export default DataForm;
