import React from "react";
import Destination from "./Destination";
import { Container, Row, Col, Image } from "react-bootstrap";

const MostVisitedBar = () => {
    return (
        <>
            <Container className="my-5">
                <h3 style={{textAlign: "left"}} className="mb-5">Најпосетувани дестинации во Македонија</h3>
                <Row className="my-3">
                    <Col className="w-25"> 
                        <Destination imag="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" destination="Скопје"></Destination>
                    </Col>
                    <Col className="w-25">
                        <Destination imag="https://i.imgur.com/Iv1qDid.png" destination="Крушево"></Destination>
                    </Col>
                    <Col className="w-25"> 
                        <Destination imag="https://i.imgur.com/aRfzEFm.jpg" destination="Охрид"></Destination>
                    </Col>
                    <Col className="w-25">
                        <Destination imag="https://scontent.fskp4-1.fna.fbcdn.net/v/t1.6435-9/139339650_2860623610819063_7442736283701492085_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=s8XtKBc6LKoAX-442-c&_nc_ht=scontent.fskp4-1.fna&oh=00_AfC3P9wA3dVZWI3i9_ZFT-W4jWbLEwypw79y7Lt-3DzhyA&oe=64B3BF6C" destination="Маврово"></Destination>
                    </Col>
                </Row>
                <Row>
                    <Col className="w-25"> 
                        <Destination imag="https://netpress.com.mk/wp-content/uploads/2021/03/skopje-voin-na-konj-centar.jpg" destination="Скопје"></Destination>
                    </Col>
                    <Col className="w-25">
                        <Destination imag="https://i.imgur.com/Iv1qDid.png" destination="Крушево"></Destination>
                    </Col>
                    <Col className="w-25"> 
                        <Destination imag="https://i.imgur.com/aRfzEFm.jpg" destination="Охрид"></Destination>
                    </Col>
                    <Col className="w-25">
                        <Destination imag="https://scontent.fskp4-1.fna.fbcdn.net/v/t1.6435-9/139339650_2860623610819063_7442736283701492085_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=s8XtKBc6LKoAX-442-c&_nc_ht=scontent.fskp4-1.fna&oh=00_AfC3P9wA3dVZWI3i9_ZFT-W4jWbLEwypw79y7Lt-3DzhyA&oe=64B3BF6C" destination="Маврово"></Destination>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MostVisitedBar