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
import AddTableForm from "../Forms/AddTableForm";

const AddNew = (props) => {

    const [show, setShow] = useState(false || props.show);
    const [size, setSize] = useState("md");
    console.log(props.show)

    const handleClose = () => {
      setSize("md");
      setShow(false);
    }

    const handleShow = (e) => {
      e.preventDefault();
      setShow(true);

    };

    const setSizeXl = () => {
        setSize("xl")
    }


    return(<>
        <Container onClick={handleShow}>
            <Row>
                <h1><AiOutlinePlusCircle size={80} color="#159895"></AiOutlinePlusCircle></h1>
            </Row>
            <Row>
                <h3 style={{color: "#159895"}}>Додади нов</h3>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} size={size}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#159895" }}>
            {props.type === "hotel" && "Додавање на хотел"}
            {props.type === "room" && "Додавање на соба"} 
            {props.type === "restaurant" && "Додавање на ресторант"}
            {props.type === "transport" && "Додавање на транспорт"}
            {props.type === "menu" && "Додавање на ставка во мени"}
            {props.type === "route" && "Додавање на рута"}
            {props.type === "table" && "Додавање на маси"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.type === "hotel" && <AddHotelForm refresh={props.refresh}/>}
            {props.type === "room" && <AddRoomForm refresh={props.refresh} hotelId={props.Id}/>}
            {props.type === "restaurant" && <AddRestaurantForm edit="false" refresh={props.refresh}/>}
            {props.type === "transport" && <AddTransportForm refresh={props.refresh}/>}
            {props.type === "menu" && <AddItemMenuForm Id={props.Id} refresh={props.refresh}/>}
            {props.type === "route" && <AddTripForm transportId={props.transport.transportID} setSize={setSizeXl} refresh={props.refresh}/>}
            {props.type === "table" && <AddTableForm restaurantId={props.Id} refresh={props.refresh}/>}
        </Modal.Body>
      </Modal>
    </>)
}

export default AddNew;