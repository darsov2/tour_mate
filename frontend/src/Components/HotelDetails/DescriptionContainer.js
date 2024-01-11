import React from "react";
import { Container } from "react-bootstrap";

const DescriptionContainer = (props) => {
  const type = props.type == "hotel" ? "сместувањето" : props.type == "restaurant" ? "ресторанот" : "превозот";

    return <>
        <Container
        className="py-3 px-4 my-4 h-100"
        style={{
          border: "4px solid #1A5F7A",
          borderRadius: "1em",
          boxShadow: "0 3px 5px #1A5F7A",
          maxHeight: "90%"
        }}
      >
            <h3 className="mb-3" style={{textAlign: "left", color: "#159895"}}>Опис на {type}</h3>
            <p style={{textAlign: "left", fontSize: "1.2em"}}>
            {props.data}
            </p>
        </Container>
    </>
}

export default DescriptionContainer