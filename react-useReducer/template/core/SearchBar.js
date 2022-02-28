import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import mainContext from "../contexts/main-context";
import { listOfBook } from "../db/listOfBooks";
export default function SearchBar() {
  const { list, dispatch } = useContext(mainContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    initialData();
  }, [filter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    dispatch({ type: "FILTER_LIST", title: e.target.value });
  };

  const initialData = () => {
    if (filter.length === 0)
      dispatch({ type: "INITIAL_DATA", data: [...listOfBook] });
  };

  return (
    <Container style={{ margin: "0 auto", width: "50%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => {
              handleChange(e);
            }}
            value={filter}
            type="text"
            placeholder="Enter book name"
          />
        </Form.Group>
        {/* <Button variant="primary" type="submit">
          Submit
        </Button> */}
      </Form>
    </Container>
  );
}
