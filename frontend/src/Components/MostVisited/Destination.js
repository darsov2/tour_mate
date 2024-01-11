import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";

const Destination = (props) => {
    return (
        <>
            <Container className="border py-2 rounded-3" style={{borderColor: "#1A5F7A", borderWidth: "3px"}}>
                <Row>
                    <Col>
                        <Image
                            src={props.imag}
                            className="thumbnail rounded"
                            width={75}
                            height={75}
                        />
                    </Col>
                    <Col>
                        <h5 className="w-25">{props.destination}</h5>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Destination;