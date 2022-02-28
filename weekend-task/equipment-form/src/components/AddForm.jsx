import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import listContext from "../contexts/list/context";

export default function AddFrom({ closeHandler }) {
  const { dispatch } = useContext(listContext);

  const [name, setName] = useState("");
  const [fullQuantity, setFullQuantity] = useState(0);
  const [currentAmount, setCurrentAmount] = useState(0);

  const changeName = ({ target: { value } }) => {
    setName(value);
  };

  const changeFullAmount = ({ target: { value } }) => {
    setFullQuantity(Number(value));
    setCurrentAmount(Number(value));
  };

  const changeCurrentAmount = ({ target: { value } }) => {
    setCurrentAmount(Number(value));
  };

  const submit = () => {
    if (!name || !fullQuantity) return;
    dispatch({
      type: "SUBMIT_ITEM",
      payload: { name, fullQuantity, currentAmount },
    });
    setName("");
    setFullQuantity(0);
    setCurrentAmount(0);
    closeHandler();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="name-add">
        <Form.Label>Enter item's name</Form.Label>
        <br />
        <Form.Control
          type="text"
          placeholder="Item's name"
          value={name}
          onChange={changeName}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="full-quantity-add">
        <Form.Label>Enter Item's full quantity</Form.Label>
        <br />
        <Form.Control
          placeholder="Full quantity"
          type="number"
          min="0"
          value={fullQuantity}
          onChange={changeFullAmount}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="currentAmount">
        <Form.Label>Enter current amount</Form.Label>
        <br />
        <Form.Control
          placeholder="Current amount"
          type="number"
          min="0"
          max={fullQuantity}
          value={currentAmount}
          onChange={changeCurrentAmount}
        />
      </Form.Group>

      <Button variant="primary" type="button" onClick={submit}>
        Submit item
      </Button>
      <span> {"            "}</span>
      <Button variant="secondary" onClick={closeHandler}>
        Close
      </Button>
    </Form>
  );
}
