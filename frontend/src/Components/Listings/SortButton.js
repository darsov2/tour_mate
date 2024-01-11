import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { BsSortUp } from "react-icons/bs"

const SortButton = () => {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" size="lg">
          <span className="ikona my-1"><BsSortUp/></span>
              <span className="ikona mx-3">Сортирај</span>
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Цена растечки</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Цена опаѓачки</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Име растечки</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Име опаѓачки</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}


  export default SortButton;