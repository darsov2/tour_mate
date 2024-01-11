import React from "react";
import { Container, Col, Row, Image, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import { FaTaxi, FaHotel } from "react-icons/fa";
import { MdOutlineStickyNote2, MdOutlineTableBar } from "react-icons/md";
import AddNew from "../Resources/AddNew";
import { BiData } from "react-icons/bi";
import AddRestaurantForm from "../Forms/AddRestaurantForm";
import MenuListing from "./MenuListing";
import TableListing from "./TableListing";
import EditModal from "../Resources/EditModal";

function RestaurantEditTab(props) {
  

  const [activeTab, setActiveTab] = useState("/hotel");
  const [modalData, setModalData] = useState("")
  const [changed, setChanged] = useState(0)

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

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  console.log(props.displayMenu.restaurantID)
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
              <span className="ikona">Мени</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item rounded-5">
            <Nav.Link eventKey="/masi" className="text-left rounded-5">
              <span className="ikona">
                <MdOutlineTableBar
                  color="#159895"
                  style={{ lineHeight: "100em" }}
                  size={"1.5em"}
                  className="mx-3"
                />
              </span>
              <span className="ikona">Маси</span>
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
          {props.displayMenu.menus.map((menu) => {
              return <MenuListing key={menu.menuId} data={menu} showModal={showModal}/>
            })}
            {activeTab === '/hotel' && <EditModal show={show} handleClose={handleClose} type="menu" menu={modalData}></EditModal>}
            <AddNew Id={props.displayMenu.restaurantID} refresh={props.refresh} type="menu"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/masi">
           {props.displayMenu.tables.map((table) => {
              return <TableListing key={table.tableId} showModal={showModal} data={table}/>
            })}
            {activeTab === '/masi' && <EditModal show={show} handleClose={handleClose} refresh={props.refresh} type="table"
                        table={modalData}></EditModal>}
            <AddNew Id={props.displayMenu.restaurantID} refresh={props.refresh} type="table"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/restaurant">
            <AddNew type="restaurant"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/transport">
            <AddRestaurantForm refresh={props.refresh} restaurant={props.displayMenu}/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default RestaurantEditTab;
