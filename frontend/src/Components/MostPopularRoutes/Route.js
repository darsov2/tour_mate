import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { TbArrowsExchange } from "react-icons/tb"

const Route = (props) => {
    return (
        <>
            <Container className="border py-2 rounded-3" style={{borderColor: "#1A5F7A", borderWidth: "3px"}}>
                <Row>
                    <Col>
                        <Image
                            src={props.imag1}
                            className="thumbnail rounded"
                            width={75}
                            height={75}
                        />
                    </Col>
                    <Col>
                        <h5 className="w-25">{props.destination1}</h5>
                    </Col>
                    <Col className="my-auto">
                        <TbArrowsExchange size="3rem" color="#159895"></TbArrowsExchange>
                    </Col>
                    <Col clas>
                        <h5 className="w-25">{props.destination2}</h5>
                    </Col>
                    <Col>
                        <Image
                            src={props.imag2}
                            className="thumbnail rounded"
                            width={75}
                            height={75}
                        />
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}

export default Route;