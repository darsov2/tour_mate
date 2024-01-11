import React from "react";
import { useState } from "react";
import { Col, Container, Row, Image, Modal, Button } from "react-bootstrap";
import LoginForm from "../Login/LoginForm";
import ChangePasswordForm from "../Forms/ChangePasswordForm";
import { AiOutlinePlusCircle } from "react-icons/ai"
import AddAvailability from "../Resources/AddAvailability";

const TableListing = (props) => {

    const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";
    console.log(props.data)
    return(<>
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
                        console.log(props.data)
                        props.showModal(props.data)
                    }}
                    src="https://cdnimg.webstaurantstore.com/uploads/seo_category/2019/5/table-dining-sets.jpg"
                    style={{
                        height: "8em",
                        borderRadius: "1em",
                        boxShadow: "0 4px 20px lightblue",
                        maxWidth: "100%",
                    }}
                    ></Image>
                </Col>
                <Col className="d-flex flex-column justify-content-center" style={{textAlign: "left"}}>
                    <h2>Маса</h2>
                    <h2>Број на луѓе {props.data.noSeats}</h2>
                </Col>
                
                <Col className="d-flex flex-column justify-content-center align-content-center">
                  <AddAvailability type="table" table={props.data}/>
                </Col>

            </Row>
        </Container>
    </>)
}

export default TableListing;