import React from "react";
import {useState} from "react";
import {Col, Container, Row, Image, Modal, Button} from "react-bootstrap";
import LoginForm from "../Login/LoginForm";
import ChangePasswordForm from "../Forms/ChangePasswordForm";
import {AiOutlinePlusCircle} from "react-icons/ai"
import AddAvailability from "../Resources/AddAvailability";


const RoomListing = (props) => {

    const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";
    return (
        <>
            <Container className="py-3 px-1 my-4"
                       style={{
                           border: "4px solid #159895",
                           borderRadius: "1em",
                           boxShadow: "0 3px 5px #159895",
                           maxWidth: "90%",
                       }}>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image onClick={(e) => {
                            e.preventDefault();
                            props.showModal(props.data);
                            console.log("kliknav")
                        }}
                            src="https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?w=200"
                            style={{
                                height: "8em",
                                borderRadius: "1em",
                                boxShadow: "0 4px 20px lightblue",
                                maxWidth: "100%",
                            }}
                        ></Image>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center" style={{textAlign: "left"}}>
                        <h2>{props.data.hotelRoomName}</h2>
                        <h2>Цена по ноќ: {props.data.price}</h2>
                    </Col>

                    <Col className="d-flex flex-column justify-content-center align-content-center">
                        <AddAvailability type="room" hotelRoomId={props.data.hotelRoomId} />
                    </Col>
                </Row>
            </Container>
    </>)
}

export default RoomListing;