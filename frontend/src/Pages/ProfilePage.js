import React from "react";
import { useState } from "react";
import { Col, Container, Row, Image, Button, Modal } from "react-bootstrap";
import Navigation from "../Components/Layout/Navbar/Navigation";
import { MdBusinessCenter } from "react-icons/md";
import DataForm from "../Components/ProfilePage/DataForm";
import LoginForm from "../Components/Login/LoginForm";
import ChangePasswordForm from "../Components/Forms/ChangePasswordForm";
import useGet from "../Components/Hooks/useGet";

const ProfilePage = () => {

  const { data, setData, isLoading, getData } = useGet("/principal");

  
    const profileData = {
        "name": "Марко",
        "surname": "Марковски",
        "address": "ул. Раскрсница бр. 10",
        "dateOfBirth": "2002-01-01",
        "country": "Никогаш Северна само МАКЕДОНИЈА",
        "zip": "1000",
        "city": "Скопје",
        "email": "user@mail.com",
        "mobile": "075/500-000"
    }


  return (
    <>
      <Navigation />
{      !isLoading && <Container>
        <Row className="mb-5">
          <h2 style={{ color: "#159895", textAlign: "left" }}>Мојот профил</h2>
        </Row>
        <Row className="mb-5">
          <Col>
            <Row className="d-flex mb-3">
              <Col className="d-flex justify-content-center" style={{maxWidth: "30%"}}>
                <Image
                  src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  style={{
                    height: "5em",
                    borderRadius: "50%",
                    maxWidth: "100%",
                  }}
                  className="m-auto"
                ></Image>
              </Col>
              <Col className="d-flex justify-content-center">
                <Container className="pt-2" style={{ textAlign: "left" }}>
                  <h4>{data.name + " " + data.surname}</h4>
                  <h5>{data.email}</h5>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col style={{textAlign: "right"}}>
            <Button
              type="button"
              style={{ backgroundColor: "#159895", border: "2px solid white" }}
              size="lg"
              href="/resources"
            >
              <span className="ikona my-1" color="white">
                <MdBusinessCenter style={{ color: "white" }} />
              </span>
              <span className="ikona mx-3">Мои ресурси</span>
            </Button>
          </Col>
        </Row>
        <Row className="mb-5">
            {!isLoading && <DataForm data={data}></DataForm>}
        </Row>
      </Container>}
    </>
  );
};

export default ProfilePage;
