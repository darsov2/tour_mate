import React from "react";
import Route from "./Route";
import { Col, Container, Row } from "react-bootstrap";

const MostPopularRoutesCont = () => {
    return(
        <>
            <Container className="my-5">
                <h3 style={{textAlign: "left"}} className="mb-5">Најпребарувани рути</h3>    
                <Row className="my-3">
                    <Col>
                        <Route destination1="Скопје" destination2="Битола" imag1="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" imag2="https://i.imgur.com/MKEXLI5.png"/>
                    </Col>
                    <Col>
                        <Route destination1="Скопје" destination2="Тетово" imag1="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" imag2="https://www.kovz.gov.mk/articleImage.img/2022/07/06/_B2C3197-min.jpg"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Route destination1="Скопје" destination2="Велес" imag1="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" imag2="https://i.imgur.com/UmcAwJS.png"/>
                    </Col>
                    <Col>
                        <Route destination1="Скопје" destination2="Охрид" imag1="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" imag2="https://i.imgur.com/aRfzEFm.jpg"/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MostPopularRoutesCont