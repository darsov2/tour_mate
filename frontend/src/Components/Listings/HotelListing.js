import {Col, Container, Image, Row, Button} from "react-bootstrap";
import {BsFillPersonFill} from "react-icons/bs";
import {MdOutlineLocalOffer} from "react-icons/md";
import {Link} from "react-router-dom";

function HotelListing(props) {
    console.log(props)
    return (
        <>
            <Container
                className="py-3 px-1 my-4"
                style={{
                    border: "4px solid lightblue",
                    borderRadius: "1em",
                    boxShadow: "0 3px 5px lightblue",
                    maxWidth: "60%",
                }}
            >
                <Row className="mx-1 my-1" style={{textAlign: "left"}}>
                    <Col className="d-flex justify-content-center">
                        <Image
                            src="https://www.imgacademy.com/sites/default/files/legacyhotel.jpg"
                            style={{
                                height: "15em",
                                borderRadius: "1em",
                                boxShadow: "0 4px 20px lightblue",
                                maxWidth: "100%",
                            }}
                        ></Image>
                    </Col>
                    <Col>
                        <Row>
                            <h3>{props.data.hotelName}</h3>
                        </Row>
                        <Row>
                            <h8>{props.data.hotelLocation}, Македонија</h8>
                        </Row>
                        <Row className="mt-3 ml-2">
                            <Col className="md-4">
                                <h4 style={{fontWeight: "bold"}}></h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-5">
                                {/* <h5>{props.data.hotelCaption}</h5> */}
                                <h5>Краток опис</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6>{props.data.hotelDescripiton}</h6>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Container
                            fluid
                            className="px-0"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                                height: "100%",
                            }}
                        >
                            <Row className="justify-self-end" style={{textAlign: "right"}}>
                                <Col style={{textAlign: "right"}}>
                                    <h6>Многу добро</h6>
                                </Col>
                                <Col>
                  <span
                      style={{
                          backgroundColor: "#159895",
                          padding: "0.75em",
                          fontWeight: "bold",
                          fontSize: "1.25rem",
                          borderRadius: "0.75em",
                          color: "white",
                      }}
                  >
                    {/* {props.data.hotelRating} */}
                      9.1
                  </span>
                                </Col>
                            </Row>
                            <Row className="w-75 justify-self-end">
                                <Container
                                    className="justify-self-end"
                                    style={{textAlign: "right"}}
                                >
                                    <Row>
                                        <h4>{props.data.totalPrice}$</h4>
                                    </Row>
                                    <Row className="w-100">
                                        <Link
                                            to="/details/hotel"
                                            state={{data: props.data, from: props.from, to: props.to}}
                                            className="w-100"
                                        >
                                            <Button
                                                className="m-2"
                                                size="md"
                                                style={{backgroundColor: "#159895"}}
                                                onClick={() => {
                                                }}
                                            >
                                                <MdOutlineLocalOffer size={"1.5em"}></MdOutlineLocalOffer>{" "}
                                                Кон понудата
                                            </Button>
                                        </Link>
                                    </Row>
                                </Container>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HotelListing;
