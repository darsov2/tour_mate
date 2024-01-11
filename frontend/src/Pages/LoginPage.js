import React from "react";
import LoginForm from "../Components/Login/LoginForm";
import { Container } from "react-bootstrap";
import Navigation from "../Components/Layout/Navbar/Navigation";

const LoginPage = () => {
  document.body.style.backgroundColor = "#159895";
  document.body.style.marginTop = "auto";
  document.body.style.marginBottom = "auto";
  return (
    <>
      {" "}
      <Container fluid className="px-0">
        <Navigation />
      </Container>
      <Container className="mt-5">
        <Container style={{ width: "40%" }}>
          <LoginForm></LoginForm>
        </Container>
      </Container>
    </>
  );
};

export default LoginPage;
