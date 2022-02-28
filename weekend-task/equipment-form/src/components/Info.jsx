import React, { useEffect, useContext, useState } from "react";
import { Form } from "react-bootstrap";
import infoContext from "../contexts/info/context";
import { dateString } from "../snippets.ts";

export default function Info() {
  const { dispatch } = useContext(infoContext);
  const [name, setName] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(dateString());
  }, []);

  const changeName = ({ target: { value } }) => {
    setName(value);
  };

  const changeWorkPlace = ({ target: { value } }) => {
    setWorkPlace(value);
  };

  const changeDate = ({ target: { value } }) => {
    setDate(value);
  };

  const submit = ({ target: { id } }) => {
    const type = `SUBMIT_${id.toUpperCase()}`;
    // eslint-disable-next-line no-eval
    const payload = eval(id);

    dispatch({ type, payload });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Enter your full name</Form.Label>
        <br />
        <Form.Control
          type="text"
          placeholder="Full name"
          value={name}
          onChange={changeName}
          onBlur={submit}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="workPlace">
        <Form.Label>Enter your work place</Form.Label>
        <br />
        <Form.Control
          placeholder="Work Place"
          type="text"
          value={workPlace}
          onChange={changeWorkPlace}
          onBlur={submit}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Enter Date</Form.Label>
        <br />
        <Form.Control
          placeholder="Work Place"
          type="date"
          value={date}
          onChange={changeDate}
          onBlur={submit}
        />
      </Form.Group>
    </Form>
  );
}
