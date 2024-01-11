import React from "react";
import { useState } from "react";
import { Col, Container, Row, Image, Modal, Button } from "react-bootstrap";
import LoginForm from "../Login/LoginForm";
import ChangePasswordForm from "../Forms/ChangePasswordForm";
import { AiOutlinePlusCircle } from "react-icons/ai"
import EditModal from "../Resources/EditModal";

const MenuListing = (props) => {

    const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";
    console.log(props.data)
    return(<>
    <a href="#" onClick={(e) => {e.preventDefault(); props.showModal(props.data);
    console.log("kliknav")} } style={{textDecoration: "none", color:"black"}}>
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
                    src="https://www.tasteofhome.com/wp-content/uploads/2019/01/medium-rare-steak-shutterstock_706040446.jpg"
                    style={{
                        height: "8em",
                        borderRadius: "1em",
                        boxShadow: "0 4px 20px lightblue",
                        maxWidth: "100%",
                    }}
                    ></Image>
                </Col>
                <Col className="d-flex flex-column justify-content-center" style={{textAlign: "left"}}>
                    <h2>{props.data.name}</h2>
                    <h6>{props.data.ingredients}</h6>
                </Col>
                
                <Col className="d-flex flex-column justify-content-center align-content-center">
                  <h5>Цена:</h5>
                  <h4>{props.data.price}$</h4>
                </Col>
            </Row>
        </Container>
        </a>
    </>)
}

export default MenuListing;