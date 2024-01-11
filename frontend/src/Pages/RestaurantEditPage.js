import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Navigation from "../Components/Layout/Navbar/Navigation";
import ResourcesTab from "../Components/Resources/ResourcesTab";
import HotelEditTab from "../Components/HotelEdit/HotelEditTab";
import RestaurantEditTab from "../Components/RestaurantEdit/RestaurantEditTab";
import useGet from "../Components/Hooks/useGet";
import { useParams, useSearchParams } from "react-router-dom";

const RestaurantEditPage = () => {

  const params = useParams();
  const link = "/restaurant/" + params.restaurantId;
  //const [changed, setChanged] = useState(0)
  const { data, setData, isLoading, getData, setChanged } = useGet(link, "");

  return (
    <>
      <Navigation />
      {!isLoading && <Container>
        <Row className="mb-5">
          <h2 style={{ color: "#159895", textAlign: "left" }}>Мои ресурси</h2>
        </Row>
        <Row className="mb-5">
          <Col>
            <Row className="d-flex mb-3">
              <Col
                className="d-flex justify-content-center"
                style={{ maxWidth: "30%" }}
              >
                <Image
                  src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                  style={{
                    height: "5em",
                    borderRadius: "50%",
                    maxWidth: "100%",
                  }}
                  className="m-auto"
                ></Image>
              </Col>
              <Col className="d-flex justify-content-center">
                <Container className="pt-2" style={{ textAlign: "left" }}>
                  <h4>{data.restaurantName}</h4>
                  <h5>{data.restaurantLocation}</h5>
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
            <RestaurantEditTab refresh={setChanged} displayMenu={data} edit="true"/>
        </Row>
      </Container>}
    </>
  );
};

export default RestaurantEditPage;
