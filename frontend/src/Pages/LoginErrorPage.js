import React, { useEffect } from "react";
import { useState } from "react";
import Navigation from "../Components/Layout/Navbar/Navigation";
import { Row, Col, Container, Button, Modal } from "react-bootstrap";
import { IoBusinessSharp } from "react-icons/io5";
import RegisterBusinessForm from "../Components/Forms/RegisterBusinessForm";
import useGet from "../Components/Hooks/useGet";
import { useNavigate } from "react-router-dom";

const NoBusinessRegisteredError = (props) => {
    const [show, setShow] = useState(false);
    const [changed, setChanged] = useState(0);
    const {data, isLoading} = useGet("/username")
    const userId = localStorage.getItem("userId")
    const [registered, setRegistered] = useState(false);
    let checked = false;
    const navigator = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        e.preventDefault();
        setShow(true);
    };


    return (
        <>
            <Navigation></Navigation>
                <Container>
                    <Row className="mt-5 mb-3">
                        <Col>
                            <h3 style={{ color: "#159895" }}>
                                Немате доволни привилегии или бараниот ресурс не е достапен!
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button
                                type="button"
                                href={"/home"}
                                style={{
                                    backgroundColor: "#159895",
                                    border: "2px solid white",
                                }}
                                size="lg"
                            >
                <span className="ikona my-1" color="white">
                  <IoBusinessSharp style={{ color: "white" }} />
                </span>
                                <span className="ikona mx-3">Кон почетната страница</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
        </>
    );
};

export default NoBusinessRegisteredError;
