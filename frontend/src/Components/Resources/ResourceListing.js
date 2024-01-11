import React from "react";
import { useState } from "react";
import { Col, Container, Row, Image, Modal, Button } from "react-bootstrap";
import LoginForm from "../Login/LoginForm";
import ChangePasswordForm from "../Forms/ChangePasswordForm";

const ResourceListing = (props) => {
  
    console.log("props " + props.id)
  

    const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";
    const name = props.type == "hotel" ? props.data.hotelName : props.type == "restaurant" ? props.data.restaurantName : props.data.transportName
    const id = props.type == "hotel" ? props.data.hotelId : props.type == "restaurant" ? props.data.resturantId : props.data.transportID
    return(<> 
    <a href={`${props.type}/${id}`} style={{textDecoration: "none", color:"black"}}>
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
                    src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
                    style={{
                        height: "8em",
                        borderRadius: "1em",
                        boxShadow: "0 4px 20px lightblue",
                        maxWidth: "100%",
                    }}
                    ></Image>
                </Col>
                <Col >
                    <h2 style={{textAlign: "left"}}>{name}</h2>
                    {props.type === "hotel" && (<>
                      <h5 style={{textAlign: "left"}}>{props.data.hotelLocation}</h5>
                      <h5 style={{textAlign: "left"}}>{props.data.hotelEmail}</h5>
                    </>)}
                    {props.type === "restaurant" && (<>
                      <h5 style={{textAlign: "left"}}>{props.data.restaurantLocation}</h5>
                      <h5 style={{textAlign: "left"}}>{props.data.cousineType} кујна</h5>
                    </>)}
                    {props.type === "transport" && (<>
                      <h5 style={{textAlign: "left"}}>{props.data.carBrand}</h5>
                      <h5 style={{textAlign: "left"}}>{props.data.carPlate}</h5>
                    </>)}
                </Col>
                <Col className="d-flex justify-content-center align-content-center" >
                  <span
                    style={{
                      backgroundColor: "#159895",
                      padding: "0.75em",
                      fontWeight: "bold",
                      fontSize: "1.8rem",
                      borderRadius: "0.75em",
                      color: "white",
                      margin: "auto"
                    }}
                  >
                    9.1
                  </span>
                </Col>
            </Row>
        </Container>
        </a>
    </>)
}

export default ResourceListing;