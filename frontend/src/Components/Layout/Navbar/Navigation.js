import { Button } from "react-bootstrap";
import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGet from "../../Hooks/useGet";
import axios from "../../../axios.js";
//import logo from 'assets/images/logo.png';
//src="https://upload.wikimedia.org/wikipedia/commons/0/08/Vergina_Sun_-_Golden_Larnax.png"

function Navigation(props) {
  const navigator = useNavigate();

  const { data, setData, isLoading, getData } = useGet("/username");
  
  return (
    <>
      <Navbar
        bg="white"
        variant="white"
        expand="md"
        className={props.mt == "0" ? "px-5 m-4" : ""}
      >
        <Container>
          <Navbar.Brand href="#home">
            <span className="ikona">
              <Image
                id="background-img"
                src="https://i.ibb.co/BwtmZqX/logo.png"
                width={60}
                height={60}
              ></Image>
            </span>
            <span className="mx-3 ikona">
              <span className="svetlo">Tour</span>
              <span className="temno">Mate</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto" navbarScroll>
              <Nav.Link className="m-2" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="m-2" href="#features">
                Features
              </Nav.Link>
              <Nav.Link className="m-2" href="#pricing">
                Pricing
              </Nav.Link>
              {!isLoading && !data && (
                <Button
                  className="m-2"
                  size="md"
                  style={{ backgroundColor: "#159895" }}
                  onClick={() => {
                    navigator("/login");
                  }}
                >
                  <BsFillPersonFill size={"1.5em"}></BsFillPersonFill> Најави се
                </Button>
              )}
              {!isLoading && data && (
                <>
                  <Nav.Link className="m-2" href="/profile">
                    {data}
                  </Nav.Link>
                  <Button
                    className="m-2"
                    size="md"
                    style={{ backgroundColor: "#159895" }}
                    onClick={async () => {
                      await axios.get("/logout")
                      .then((res) => {
                        console.log(res)
                      })
                      .catch((err) => {
                        console.log(err)
                        window.location.href="/login"
                      })
                    }}
                  >
                    <BsFillPersonFill size={"1.5em"}></BsFillPersonFill> 
                    Одјави се
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;
