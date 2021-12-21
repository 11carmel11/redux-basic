import React, { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { nanoid } from "nanoid";

export default function ListBooks() {
  const { list } = useContext(mainContext);

  return (
    <Container>
      <ListGroup>
        {list.map((item) => (
          <ListGroup.Item key={nanoid()}>{item.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
