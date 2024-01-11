import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";

const MenuItem = () => {
    return (<>
    
    <a href="#" style={{textDecoration: "none", color:"black"}}>
        <Container className="py-3 px-1 my-4"
        style={{
          border: "4px solid #159895",
          borderRadius: "1em",
          boxShadow: "0 3px 5px #159895",
          maxWidth: "90%"
        }}>
            <Row>
                <Col className="d-flex justify-content-center mb-3">
                    <Image
                    src="https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg"
                    style={{
                        height: "7em",
                        borderRadius: "1em",
                        boxShadow: "0 4px 20px lightblue",
                        maxWidth: "100%",
                    }}
                    ></Image>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column justify-content-center " style={{textAlign: "center"}}>
                    <h4>Име</h4>
                    <h6>Свинско, Телешко, прасечко, ребра, чорба, тикви, компирМанЏа</h6>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex flex-column justify-content-center align-content-center" >
                  
                  <h5>Цена: 99.99$</h5>
                </Col>
            </Row>
        </Container>
        </a>

    </>)
}

export default MenuItem;