import React from "react";
import { Container, Col, Row, Image, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import { FaTaxi, FaHotel } from "react-icons/fa";
import { MdOutlineStickyNote2 } from "react-icons/md";
import AddNew from "../Resources/AddNew";
import { BiData } from "react-icons/bi";
import AddTransportForm from "../Forms/AddTransportForm";
import TransportListing from "./TransportListing";
import useGet from "../Hooks/useGet";

function TransportEditTab(props) {
  const [activeTab, setActiveTab] = useState("/hotel");
  const link = "/transport/" + props.displayRoute.transportID + "/available";
  console.log(props.displayRoute)
  const [changed, setChanged] = useState(0)
  const { data, setData, isLoading, getData } = useGet(link, changed);


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
              <span className="ikona">Рути</span>
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
            {props.displayRoute && props.displayRoute.availableRoutes.map((route) => {
              return <TransportListing data={route}/>
            })}  
            <AddNew type="route" transport={props.displayRoute} refresh={props.refresh}/>
          </Tab.Pane>
          <Tab.Pane eventKey="/restaurant">
            <AddNew type="restaurant"/>
          </Tab.Pane>
          <Tab.Pane eventKey="/transport">
            <AddTransportForm transport={props.displayRoute} refresh={props.refresh}/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default TransportEditTab;
