import React from "react";
import {useState} from "react";
import {Col, Container, Row, Image, Modal, Button} from "react-bootstrap";
import LoginForm from "../Login/LoginForm";
import ChangePasswordForm from "../Forms/ChangePasswordForm";
import {AiOutlinePlusCircle} from "react-icons/ai"

const TransportListing = (props) => {

    //const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";
    console.log(props.data)
    console.log(props.data.from)
    return (<>
        <a href="#" style={{textDecoration: "none", color: "black"}}>
            <Container className="py-3 px-1 my-4"
                       style={{
                           border: "4px solid #159895",
                           borderRadius: "1em",
                           boxShadow: "0 3px 5px #159895",
                           maxWidth: "90%",
                       }}>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src="https://samsung.teveotecno.com.ar/wp-content/uploads/2022/07/how-to-create-and-draw-custom-routes-with-google-maps_62d4ad146140d.jpeg"
                            style={{
                                height: "8em",
                                borderRadius: "1em",
                                boxShadow: "0 4px 20px lightblue",
                                maxWidth: "100%",
                            }}
                        ></Image>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center" style={{textAlign: "left"}}>
                        <h2>{props.data.from} - {props.data.to}</h2>
                        {/* <h6>{props.data.routeCities}</h6> */}
                        <h6>{props.data.routes.map(x => x).join(", ")}</h6>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-content-center">
                        <h5>Цена:</h5>
                        {/* <h4>{props.data.routePrice}</h4> */}
                        <h4>99$</h4>
                    </Col>
                </Row>
            </Container>
        </a>
    </>)
}

export default TransportListing;