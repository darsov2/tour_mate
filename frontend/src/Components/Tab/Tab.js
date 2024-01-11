import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import TabFormHotel from "./TabFormHotel";
import TabFormRestaurant from "./TabFormRestaurant";
import TabFormTransport from "./TabFormTransport";
import { FaHotel, FaTaxi } from 'react-icons/fa'
import { MdRestaurant } from "react-icons/md"

function TabComponent() {
  const [activeTab, setActiveTab] = useState("/hotel");

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  

  return (
    <Container className='rounded-5'>
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
            <Nav.Link href="/hotel" className="text-left rounded-5">
              <span className="ikona"><FaHotel color="#159895" style={{lineHeight: "100em"}} size={"1.5em"} className="mx-3"/></span>
              <span className="ikona">Сместување</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item">
            <Nav.Link eventKey="/restaurant">
              <span className="ikona"><MdRestaurant color="#159895" size={"1.5em"} className="mx-3"/></span><
                span className="ikona">Ресторан</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item rounded-5">
            <Nav.Link eventKey="/transport" className="text-left rounded-5"><span className="ikona"><FaTaxi color="#159895" size={"1.5em"} className="mx-3"/></span>
            <span className="ikona">Превоз</span>
          </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="py-5 px-3 border rounded-bottom-5 bg-light">
          <Tab.Pane eventKey="/hotel">
            <TabFormHotel/>
          </Tab.Pane>
          <Tab.Pane eventKey="/restaurant">
            <TabFormRestaurant/>
          </Tab.Pane>
          <Tab.Pane eventKey="/transport">
            <TabFormTransport/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default TabComponent;
