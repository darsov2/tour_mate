import React, { useTransition } from "react";
import { Container, Col, Row, Image, Nav, Tab } from "react-bootstrap";
import { useState } from "react";
import { FaTaxi, FaHotel } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import AddNew from "./AddNew";
import ResourceListing from "./ResourceListing";
import { Link } from "react-router-dom";
import useGet from "../Hooks/useGet";

function ResourcesTab(props) {
  const [activeTab, setActiveTab] = useState(props.tab);
  // const [changed, setChanged] = useState(0);
  const userId = localStorage.getItem("userId");
  const { data, setData, isLoading, getData, setChanged } = useGet(`${props.tab}/user/${userId}`);

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
    console.log(props.refresh);
    props.refresh(eventKey);
    console.log("refresh" + eventKey);
  };

  !isLoading && console.log(data);
  console.log(props.tab);

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
            <Nav.Link href="/resources/hotel" className="text-left rounded-5">
              <span className="ikona">
                <FaHotel
                  color="#159895"
                  style={{ lineHeight: "100em" }}
                  size={"1.5em"}
                  className="mx-3"
                />
              </span>
              <span className="ikona">Сместувања</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item">
            <Nav.Link href="/resources/restaurant">
              <span className="ikona">
                <MdRestaurant color="#159895" size={"1.5em"} className="mx-3" />
              </span>
              <span className="ikona">Ресторани</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="tab_item rounded-5">
            <Nav.Link
              href="/resources/transport"
              className="text-left rounded-5"
            >
              <span className="ikona">
                <FaTaxi color="#159895" size={"1.5em"} className="mx-3" />
              </span>
              <span className="ikona">Превоз</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content className="py-5 px-3 border rounded-bottom-5 bg-light">
          <Tab.Pane eventKey="/hotel" key="hotelPane">
            {props.tab == "/hotel" && !isLoading && data != null &&
              data.map((hotel) => {
                return (
                  <Link key={hotel.hotelId} to={"/resources/hotel/" + hotel.hotelId}>
                    <ResourceListing
                      key={hotel.hotelId}
                      id={hotel.hotelId}
                      type="hotel"
                      data={hotel}
                    />
                  </Link>
                );
              })}
            <AddNew type="hotel" refresh={setChanged} />
          </Tab.Pane>
          <Tab.Pane eventKey="/restaurant" key="restaurantPane">
            {props.tab == "/restaurant" && !isLoading && data != null &&
              data.map((restaurant) => {
                console.log("mapiranje " + restaurant)
                return (
                  <Link key={restaurant.restaurantId} to={"/resources/restaurant/" + restaurant.restaurantID}>
                    <ResourceListing
                      key={restaurant.restaurantId}
                      type="restaurant"
                      data={restaurant}
                    />
                  </Link>
                );
              })}
            <AddNew type="restaurant" refresh={setChanged}/>
          </Tab.Pane>
          <Tab.Pane eventKey="/transport" key="transportPane">
            {props.tab == "/transport" && !isLoading && data.length > 0 &&
              data.map((transport) => {
                return (
                  <ResourceListing
                    key={transport.transportId}
                    id={transport.transportId}
                    type="transport"
                    data={transport}
                  />
                );
              })}
            <AddNew type="transport" refresh={setChanged}/>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}

export default ResourcesTab;
