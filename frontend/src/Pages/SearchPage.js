import React from "react";
import Navigation from '../Components/Layout/Navbar/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import HomeCarousel from '../Components/Layout/CarouselHome/Carousel';
import { Card, Container, Nav, Row, Col } from 'react-bootstrap';
import TabComponent from '../Components/Tab/Tab';
import Offers from '../Components/Layout/Offers/Offers';
import MostVisitedBar from '../Components/MostVisited/MostVisitedBar';
import MostPopularRoutesCont from '../Components/MostPopularRoutes/MostPopularRoutesCont';
import BecomeAHost from "../Components/BecomeAHost/BecomeAHost"
import HotelLisitng from "../Components/Listings/HotelListing"
import SearchCriterias from "../Components/SearchCriterias/SearchCriteriasBar";
import SortButton from "../Components/Listings/SortButton";
import FilterButton from "../Components/Listings/FilterButton";
import TransportListing from "../Components/Listings/TransportListing";
import useGet from "../Components/Hooks/useGet";
import { useParams } from "react-router-dom";


const SearchPage = (props) => {

    const params = useParams();
    console.log(params)


    document.body.style.backgroundColor = "white"
    var hotelData = {
        "hotelName": "Име на сместувањето",
        "hotelLocation": "Скопје, Македонија",
        "hotelCaption": "Краток опис",
        "hotelDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        "hotelPrice": 504.99,
        "hotelRating": 9.1

    }
    
    let link = props.type === "transport" ? `/transport/search?from=${params.from}&to=${params.to}&date=${params.date}` : props.type === "hotel" ? `/hotel/search?hotelLocation=${params.hotelLocation}&dateFrom=${params.dateFrom}&dateTo=${params.dateTo}&numBeds=${params.numBeds}` : ""
    console.log(link)
    const { data, isLoading, getData, setData } = useGet(link);
    !isLoading && console.log(data)
    return (
        <>
            <Navigation></Navigation>
            <SearchCriterias criterias={useParams()}></SearchCriterias>
            <Container className="d-flex justify-content-end gx-5" style={{maxWidth: "60%"}}>
                <Row>
                    <Col>
                        <FilterButton></FilterButton>
                    </Col>
                    <Col>
                        <SortButton></SortButton>
                    </Col>
                </Row>
            </Container>
            {props.type === "hotel" && !isLoading && data && <Container fluid>
                {data.map(hotel => {
                    return <HotelLisitng from={params.dateFrom} to={params.dateTo} data={hotel}/>
                })}
                </Container>}
            {props.type === "transport" && !isLoading && data && <Container fluid>
                {data.map(transport => {
                    return <TransportListing data={transport}/>
                })}
            </Container>}
        </>
    )
}

export default SearchPage;