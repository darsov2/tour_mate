import React from "react";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AiFillLock } from "react-icons/ai"

const ChangePasswordForm = () => {

    const [hidePassword, setHidePassword] = useState(true);
    const type = hidePassword ? "password" : "text";
    const toggleHide = () => {
        setHidePassword(!hidePassword)
    }
    

  return (
    <>
      <Container
        className="rounded-5 m-5 my-auto mx-auto py-2 px-5"
        style={{ backgroundColor: "#ffffff" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="currentPassword">
            <Form.Label>Постоечка лозинка</Form.Label>
            <Form.Control type="password" placeholder="Внесете ја постоечката лозинка..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="newPasswrod">
            <Form.Label>Нова лозинка</Form.Label>
            <Form.Control type={type} placeholder="Внесете ја новата лозинка..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="newPasswrod">
            <Form.Label>Повторена нова лозинка</Form.Label>
            <Form.Control type={type} placeholder="Внесете ја новата лозинка повторно..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Прикажи лозинки" onChange={toggleHide} />
          </Form.Group>
          <Form.Group className="my-1">
            <Button
              type="submit"
              style={{ backgroundColor: "#159895" }}
              size="md"
            >
              <span className="ikona my-1">
                <AiFillLock />
              </span>
              <span className="ikona mx-3">Зачувај промена</span>
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ChangePasswordForm;
