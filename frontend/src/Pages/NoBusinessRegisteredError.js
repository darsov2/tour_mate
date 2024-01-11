import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "../Components/Layout/Navbar/Navigation";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { IoBusinessSharp } from "react-icons/io5";
import RegisterBusinessForm from "../Components/Forms/RegisterBusinessForm";
import useGet from "../Components/Hooks/useGet";
import { useNavigate } from "react-router-dom";

const NoBusinessRegisteredError = (props) => {
  const [show, setShow] = useState(false);
  const [changed, setChanged] = useState(0);
  const {data, isLoading} = useGet("/username")
  const userId = localStorage.getItem("userId")
  const [registered, setRegistered] = useState(false);
  let checked = false;
  const navigator = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };
  
  const { data: firma, isLoading: firmaIsLoading, getData: getFirmi} = useGet("/business/" + userId + "/unapproved", changed)
  

  useEffect(() => {
    
    console.log(firma)
    setRegistered(() => {
      return firma !== null && firma.length > 0
    })
    
  }, [firmaIsLoading])

  // useEffect(() => {
    
  //   setRegistered(() => {
  //     console.log(data)
  //     return data !== null && data
  //   })
    
  // }, [isLoading])


  console.log(data)

  !isLoading && !data && navigator("/login")
  !firmaIsLoading && firma && firma.length > 0 && firma[0].approved && navigator("/resources/hotel")
  

  return (
    <>
      <Navigation></Navigation>
      {!registered && (
        <Container>
          <Row className="mt-5 mb-3">
            <Col>
              <h3 style={{ color: "#159895" }}>
                За да менаџирате со Вашите ресурси мора да имате регистрирано
                фирма одобрена од администраторот!
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                type="button"
                onClick={handleShow}
                style={{
                  backgroundColor: "#159895",
                  border: "2px solid white",
                }}
                size="lg"
              >
                <span className="ikona my-1" color="white">
                  <IoBusinessSharp style={{ color: "white" }} />
                </span>
                <span className="ikona mx-3">Регистрирај фирма</span>
              </Button>
            </Col>
          </Row>
        </Container>
      )}
      {registered && (
        <>
          <Container>
            <Row className="mt-5">
              <Col className="mb-5">
                <h3 className="mb-5" style={{ color: "#159895" }}>
                  {" "}
                  За да менаџирате со Вашите ресурси мора да имате регистрирано
                  фирма одобрена од администраторот!
                </h3>
                <h4 style={{ color: "#159895" }}>
                  Тековни неодобрени регистрации
                </h4>
              </Col>
            </Row>
            <Row>
              <Container className="w-75">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Ред. бр.</th>
                      <th scope="col">Име на фирма</th>
                      <th scope="col">Адреса</th>
                      <th scope="col">Даночен број</th>
                      <th scope="col">Одговорно лице</th>
                    </tr>
                  </thead>
                  <tbody>
                    {!firmaIsLoading && firma.map((f, i) => { return <tr key={f.businessId}>
                      <th scope="row">{i + 1}</th>
                      <td>{f.name}</td>
                      <td>{f.address}</td>
                      <td>{f.edbs}</td>
                      <td>{f.user.name + " " + f.user.surname}</td>
                    </tr>})}
                  </tbody>
                </table>
              </Container>
            </Row>
          </Container>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#159895" }}>
            Регистрација на фирма
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <RegisterBusinessForm hide={handleClose} edit={setChanged}></RegisterBusinessForm>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NoBusinessRegisteredError;
