import React from "react";
import Navigation from '../Components/Layout/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomeCarousel from '../Components/Layout/CarouselHome/Carousel';
import { Card, Container } from 'react-bootstrap';
import TabComponent from '../Components/Tab/Tab';
import Offers from '../Components/Layout/Offers/Offers';
import MostVisitedBar from '../Components/MostVisited/MostVisitedBar';
import MostPopularRoutesCont from '../Components/MostPopularRoutes/MostPopularRoutesCont';
import BecomeAHost from "../Components/BecomeAHost/BecomeAHost"

const HomePage = () => {

    document.body.style.backgroundColor="white"

  return (
    <>
      <Navigation mt="0"/>
      <Container fluid="lg" className="rounded-pill">
        <HomeCarousel className="rounded-pill" />
        <Container
          style={{
            maxWidth: "80%",
            marginTop: "-5%",
            zIndex: "10000000",
            position: "relative",
          }}
          className="rounded-5"
          fluid
        >
          <TabComponent className="rounded-5 shadow"></TabComponent>
        </Container>
      </Container>
      <Container className="mt-5 mb-5">
        <Offers></Offers>
      </Container>
      <Container className="my-5">
        <MostVisitedBar></MostVisitedBar>
      </Container>
      <Container>
        <MostPopularRoutesCont></MostPopularRoutesCont>
      </Container>
      <Container className="my-5">
        <BecomeAHost></BecomeAHost>
      </Container>
    </>
  );
};

export default HomePage;
