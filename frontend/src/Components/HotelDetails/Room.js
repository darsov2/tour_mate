import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { LuFan } from "react-icons/lu";
import { TbToolsKitchen2 } from "react-icons/tb"
import { MdBalcony } from "react-icons/md"

const Room = (props) => {
  return (
    <>
      <Container style={{ width: "100%" }}>
        <Row className="g-0">
          <Col
            className="d-flex justify-content-center"
            style={{ maxWidth: "40%" }}
          >
            <Image
              src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=2000"
              style={{
                height: "10em",
                borderRadius: "1em",
                boxShadow: "0 4px 20px lightblue",
                maxWidth: "100%",
              }}
              className="m-auto"
            ></Image>
          </Col>
          <Col>
            <Container className="m-auto">
              <Row>
                <h5 style={{ textAlign: "left" }}>
                  {props.data.hotelRoomName}
                </h5>
              </Row>
              <Row>
                {props.data.airCondition && <Col className="col-auto">
                  <Container className="py-1 px-1">
                    <Row className="d-flex flex-row">
                      <Col className="m-0 w-25 py-1">
                        <LuFan
                          className="my-0 "
                          color="#159895"
                          size={25}
                        ></LuFan>
                      </Col>
                      <Col className="w-75 d-flex p-0">
                        <h6 style={{ fontSize: "10px" }} className="m-auto">
                          Климатизирано
                        </h6>
                      </Col>
                    </Row>
                  </Container>
                </Col>}
                {props.data.kitchenAvailable && <Col className="col-auto">
                  <Container
                    className="py-1 px-1">
                                          <Row className="d-flex flex-row">
                        <Col className="m-0 w-25 py-1">
                        <TbToolsKitchen2 className="my-0 " color="#159895" size={25}></TbToolsKitchen2>
                        </Col>
                        <Col className="w-75 d-flex p-0" >
                        <h6 style={{fontSize: "10px"}} className="m-auto">Кујна</h6>
                        </Col>
                      </Row>
                  </Container>
                </Col>}
                {props.data.balcony && <Col className="col-auto">
                <Container
                    className="py-1 px-1">
                                          <Row className="d-flex flex-row">
                        <Col className="m-0 w-25 py-1">
                        <MdBalcony className= "my-0 " color="#159895" size={25}></MdBalcony>
                        </Col>
                        <Col className="w-75 d-flex p-0" >
                        <h6 style={{fontSize: "10px"}} className="m-auto">Тераса</h6>
                        </Col>
                      </Row>
                  </Container>
                </Col>}
              </Row>
              <Row>
                <p style={{ textAlign: "left", textDecoration: "none" }}>
                  {props.data.hotelRoomDescription}
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Room;
