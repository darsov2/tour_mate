import React from "react";
import { Container, Col, Row, Image, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import { FaTaxi, FaHotel } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import AddNew from "../Resources/AddNew";
import { BiData } from "react-icons/bi"
import RoomListing from "./RoomListing";
import HotelEditForm from "./HotelEditForm";
import AddHotelForm from "../Forms/AddHotelForm";
import EditModal from "../Resources/EditModal";

function HotelEditTab(props) {
  const [activeTab, setActiveTab] = useState("/hotel");
  const [modalData, setModalData] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    //e.preventDefault();
    setShow(true);

  };

  const showModal = (modalData) => {
    setModalData(modalData);
    handleShow();
  }
  console.log(props.displayRoom)

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <Container className="rounded-5">
      <Tab.Container
        activeKey={activeTab}
        onSelect={handleSelect}
        className="bg-dark rounded-5"
      >
        <Nav
          fill
          variant="tabs"
          className="bg-body rounded-top-5"
          activeKey="/hotel"
          id="tab_item"
        >
          <Nav.Item className="tab_item rounded-5">
            <Nav.Link eventKey="/hotel" className="text-left rounded-5">
              <span className="ikona">
                <FaHotel
                  color="#159895"
                  style={{ lineHeight: "100em" }}
                  size={"1.5em"}
                  className="mx-3"
                />
              </span>
              <span className="ikona">Соби</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item">
            <Nav.Link eventKey="/restaurant">
              <span className="ikona">
                <MdOutlineStickyNote2 color="#159895" size={"1.5em"} className="mx-3" />
              </span>
              <span className="ikona">Резервации</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item rounded-5">
            <Nav.Link eventKey="/transport" className="text-left rounded-5">
              <span className="ikona">
                <BiData color="#159895" size={"1.5em"} className="mx-3" />
              </span>
              <span className="ikona">Општи податоци</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="py-5 px-3 border rounded-bottom-5 bg-light">
          <Tab.Pane eventKey="/hotel">
          {props.displayRoom.hotelRooms.map((room) => {
              return <RoomListing key={room.hotelRoomId} data={room} showModal={showModal}/>
            })}
            <EditModal show={show} handleClose={handleClose} type="room" room={modalData}></EditModal>
            <AddNew Id={props.displayRoom.hotelId} refresh={props.refresh} type="room"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/restaurant">
            <AddNew type="restaurant"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/transport">
            <AddHotelForm refresh={props.refresh} hotel={props.displayRoom}/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default HotelEditTab;
