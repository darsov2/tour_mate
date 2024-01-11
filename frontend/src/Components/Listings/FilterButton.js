import React from "react";
import { Col, Form, InputGroup, NavDropdown, Row, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { BiFilterAlt } from "react-icons/bi";

const FilterButton = () => {
  return (
    <Dropdown autoClose="outside">
      <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
        <span className="ikona my-1">
          <BiFilterAlt />
        </span>
        <span className="ikona mx-3">Филтри</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>
          <NavDropdown
            id="filter-room-type"
            title="Тип на соба"
            menuVariant="light"
            drop="start"
            autoClose="outside"
          >
            <NavDropdown.Item>
              <Form.Check type="checkbox" id={`check-room`} label="Соба" />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Form.Check
                type="checkbox"
                id={`check-apartment    `}
                label="Апартман"
              />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Form.Check type="checkbox" id={`default-check`} label="Стан" />
            </NavDropdown.Item>
          </NavDropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavDropdown
            id="filter-room-type"
            title="Број на ѕвезди"
            menuVariant="light"
            drop="start"
            autoClose="outside"
          >
            <NavDropdown.Item>
              <Form.Check type="checkbox" id={`check-stars-1`} label="1" />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Form.Check type="checkbox" id={`check-stars-2`} label="2" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Form.Check type="checkbox" id={`check-stars-3`} label="3" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Form.Check type="checkbox" id={`check-stars-4`} label="4" />
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              <Form.Check type="checkbox" id={`check-stars-5`} label="5" />
            </NavDropdown.Item>
          </NavDropdown>
        </Dropdown.Item>
        <Dropdown.Item>
          <NavDropdown
            id="filter-price-range"
            title="Ценовен ранг"
            menuVariant="light"
            drop="start"
            autoClose="outside"
          >
            <NavDropdown.Item>
              <Row className="gx-3">
                <Col className="mb-3">
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Од"
                    id="price-from"
                  ></Form.Control>
                </Col>
                <Col>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="До"
                    id="price-to"
                  ></Form.Control>
                </Col>
                <Col>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#159895" }}
                  size="sm"
                  className="w-100"
                >
                  <span className="ikona mx-3">ОК</span>
                </Button>
                </Col>
              </Row>
            </NavDropdown.Item>
          </NavDropdown>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-1">
          <Form.Check type="checkbox" id={`default-check`} label="Паркинг" />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <Form.Check
            type="checkbox"
            id={`default-check`}
            label="Pet friendly"
          />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <Form.Check type="checkbox" id={`default-check`} label="Кујна" />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <Form.Check type="checkbox" id={`default-check`} label="Интернет" />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <Form.Check type="checkbox" id={`default-check`} label="Тераса" />
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <Form.Check
            type="checkbox"
            id={`default-check`}
            label="Климатизирано"
          />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterButton;
