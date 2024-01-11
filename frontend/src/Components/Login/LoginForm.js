import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { AiFillLock } from "react-icons/ai";
import useFormData from "../Hooks/useFormData";
import useLogin from "../Hooks/User/useLogin";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { formData, onFormChange, onCheckBoxChange, setFormData } = useFormData(
    {
      email: "",
      password: "",
    }
  );

  const { login } = useLogin();

  return (
    <Container
      className="rounded-5 m-5 my-auto mx-auto py-5 px-5"
      style={{ backgroundColor: "#ffffff" }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Е-адреса</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={onFormChange}
            value={formData.email}
          />
          <Form.Text className="text-muted">
            Вашите податоци никогаш нема да бидат споделени.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Лозинка</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={onFormChange}
            value={formData.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to={"/register"} style={{textDecoration: "none"}}>
          <Form.Text className="text-muted" style={{color: "#159895!important"}} >
            Регистритрај се
          </Form.Text>
        </Link>
        <Form.Group className="my-1">
          <Button
            type="submit"
            style={{ backgroundColor: "#159895" }}
            size="md"
            onClick={(e) => {
              e.preventDefault();
              console.log(formData);
              login(formData)
            }}
          >
            <span className="ikona my-1">
              <AiFillLock />
            </span>
            <span className="ikona mx-3">Најави се</span>
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default LoginForm;
