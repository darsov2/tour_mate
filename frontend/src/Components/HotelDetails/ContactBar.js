import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { RiContactsFill } from "react-icons/ri"

const ContactBar = () => {
    return (<>
                <Container
        className="py-3 px-4 my-4 h-100"
        style={{
          backgroundColor: "#159895",
          borderRadius: "1em"
        }}
      >
            <Row>
                <Col className="d-flex flex-column justify-content-center m-auto p-auto" style={{color: "white"}}>
                    <h4 style={{marginBottom: "0"}}>Имате прашања? Контактирајте со сопственикот.</h4>
                </Col>
                <Col style={{textAlign: "right"}}>
                    <Button type="submit" style={{backgroundColor: "#159895", border: "2px solid white"}} size="md">
                        <span className="ikona my-1" color="white"><RiContactsFill style={{color: "white"}}/></span>
                        <span className="ikona mx-3">Контакт</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    </>)
}

export default ContactBar;