import { Container } from "react-bootstrap";

function ListCard(props) {
  return <Container className="my-5">{props.children}</Container>;
}

export default ListCard;