import React from "react";
import { Container, Row, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import AddHotelForm from "../Forms/AddHotelForm";
import AddRoomForm from "../Forms/AddRoomForm";
import AddRestaurantForm from "../Forms/AddRestaurantForm";
import AddTransportForm from "../Forms/AddTransportForm";
import AddItemMenuForm from "../Forms/AddItemMenuForm";
import AddRoomAvailablityForm from "../Forms/AddRoomAvailablityForm";
import AddTableAvailablityForm from "../Forms/AddTableAvailabilityForm";

const AddAvailability = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
      e.preventDefault();
      setShow(true);

    };


    return(<>
        <Container onClick={handleShow}>
        <h5>Додади<br/>расположливост</h5>
                  <div className="d-flex justify-content-center align-content-center"><AiOutlinePlusCircle size={50} color="#159895"></AiOutlinePlusCircle></div>
                  
        </Container>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#159895" }}>
            {props.type === "hotel" && "Додавање на хотел"}
            {props.type === "room" && "Додавање на расположливост за соба"} 
            {props.type === "restaurant" && "Додавање на ресторант"}
            {props.type === "transport" && "Додавање на транспорт"}
            {props.type === "menu" && "Додавање на ставка во мени"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.type === "hotel" && <AddHotelForm/>}
            {props.type === "room" && <AddRoomAvailablityForm hotelRoomId={props.hotelRoomId}/>}
            {props.type === "table" && <AddTableAvailablityForm table={props.table}/>}
            {props.type === "restaurant" && <AddRestaurantForm/>}
            {props.type === "transport" && <AddTransportForm/>}
            {props.type === "menu" && <AddItemMenuForm/>}
        </Modal.Body>
      </Modal>
    </>)
}

export default AddAvailability;