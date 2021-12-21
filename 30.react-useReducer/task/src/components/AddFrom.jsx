import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import friendsContext from "../contexts/friends/context";
import { sendAction } from "../helpers/sendAction";

export default function AddForm() {
  const { dispatch } = useContext(friendsContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState(1);

  const addFriend = () => {
    dispatch(sendAction(2, { name, age }));
    setName("");
    setAge(1);
  };

  const changeHandle = (event) => {
    const {
      target: { id, value },
    } = event;

    switch (id) {
      case "name":
        setName(value);
        break;

      case "age":
        setAge(Number(value));
        break;

      default:
        break;
    }
  };

  return (
    <section>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={changeHandle}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter age"
            onChange={changeHandle}
            value={age}
            min="1"
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={addFriend}>
          Submit
        </Button>
      </Form>
      <br />
      <br />
    </section>
  );
}
