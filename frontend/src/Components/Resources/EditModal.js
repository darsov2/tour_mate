import React from "react";
import { Container, Row, Modal } from "react-bootstrap";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import AddHotelForm from "../Forms/AddHotelForm";
import AddRoomForm from "../Forms/AddRoomForm";
import AddRestaurantForm from "../Forms/AddRestaurantForm";
import AddTransportForm from "../Forms/AddTransportForm";
import AddItemMenuForm from "../Forms/AddItemMenuForm";
import AddTripForm from "../Forms/AddTripForm";
import EditTableForm from "../Forms/EditTableForm";
import EditRoomForm from "../Forms/EditRoomForm";

const EditModal = (props) => {




    return(<>
        <Modal show={props.show} onHide={props.handleClose} size={'lg'}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#159895" }}>
            {props.type === "hotel" && "Додавање на хотел"}
            {props.type === "room" && "Додавање на соба"} 
            {props.type === "restaurant" && "Додавање на ресторант"}
            {props.type === "transport" && "Додавање на транспорт"}
            {props.type === "menu" && "Додавање на ставка во мени"}
            {props.type === "route" && "Додавање на рута"}
            {props.type === "table" && "Промена на маса"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.type === "hotel" && <AddHotelForm/>}
            {props.type === "room" && <EditRoomForm refresh={props.refresh} room={props.room}/>}
            {props.type === "restaurant" && <AddRestaurantForm edit="false" refresh={props.refresh}/>}
            {props.type === "transport" && <AddTransportForm/>}
            {props.type === "menu" && <AddItemMenuForm Id={props.Id} refresh={props.refresh} menu={props.menu}/>}
            {props.type === "route" && <AddTripForm/>}
            {props.type === "table" && <EditTableForm table={props.table}/>}
        </Modal.Body>
      </Modal>
    </>)
}

export default EditModal;