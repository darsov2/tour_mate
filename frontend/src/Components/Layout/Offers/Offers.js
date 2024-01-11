import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

function Offers() {
  return (
    <>
        <Container fluid="md" className='my-5'>
            <Row>
                <Col>
                    <a href='#' className='img-link'>
                        <Container>
                            <div style={{position: "relative"}}>
                                    <Image
                                        className="d-block w-100 rounded-5 mb-5"
                                        style={{height: "53.2vh"}}
                                        src="https://archello.com/thumbs/images/2020/08/09/comelite-architecture-structure-and-interior-design-contemporary-luxury-apartment-design-apartments-archello.1596935634.5614.jpg?fit=crop&w=414&h=518"
                                        alt="Second slide"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (last value) as needed
                                        }}
                                        className="rounded-5"
                                    />
                            </div>
                            <h4 style={{marginTop: "-25%", color: "white", zIndex: "99999", position: "relative"}}>
                                Апартмани
                            </h4>
                        </Container>
                    </a>
                </Col>
                <Col>
                    <a href='#' className='img-link'>
                        <Container className='mb-5'>
                            <div style={{position: "relative"}}>
                                <Image
                                    className="d-block w-100 rounded-5 mb-5"
                                    style={{height: "25vh"}}
                                    src="https://i.ibb.co/V9vHbBT/303065972-497838965514102-2603054556040313705-n.jpg"
                                    alt="Second slide"
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (last value) as needed
                                    }}
                                    className="rounded-5"
                                />
                            </div>
                            <h4 style={{marginTop: "-25%", color: "white", zIndex: "99999", position: "relative"}}>
                                Традиционална кујна
                            </h4>
                        </Container>
                        </a>
                    <a href='#' className='img-link'>
                        <Container>
                            <div style={{position: "relative"}}>
                                    <Image
                                        className="d-block w-100 rounded-5 mb-5"
                                        style={{height: "25vh"}}
                                        src="https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg"
                                        alt="Second slide"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (last value) as needed
                                        }}
                                        className="rounded-5"
                                    />
                                </div>
                            <h4 style={{marginTop: "-25%", color: "white", zIndex: "99999", position: "relative"}}>
                                Интернационална кујна
                            </h4>
                        </Container>
                    </a>
                </Col>
                <Col>
                    <a href='#' className='img-link'>
                        <Container>
                            <div style={{position: "relative"}}>
                                    <Image
                                        className="d-block w-100 rounded-5 mb-5"
                                        style={{height: "53.2vh"}}
                                        src="https://img.freepik.com/premium-photo/vertical-warm-toned-portrait-white-labrador-dog-lying-bed-cozy-home-interior-lit-by-sunlight-copy-space_236854-29020.jpg?w=2000"
                                        alt="Second slide"
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity (last value) as needed
                                        }}
                                        className="rounded-5"
                                    />
                            </div>
                            <h4 style={{marginTop: "-25%", color: "white", zIndex: "99999", position: "relative"}}>
                                Pet friendly
                            </h4>
                        </Container>
                    </a>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Offers;
