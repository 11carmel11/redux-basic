import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { Table } from "react-bootstrap";
import Item from "./Item";
import itemsContext from "../contexts/list/context";
import infoContext from "../contexts/info/context";

export default function EquipmentList() {
  const { items } = useContext(itemsContext);
  const {
    info: { name, workPlace, date },
  } = useContext(infoContext);
  return (
    <>
      {name && workPlace && date && (
        <h3>hello, {name}! Please fill the form below:</h3>
      )}
      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>item</th>
            <th>full quantity</th>
            <th>current quantity</th>
            <th>missing</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <Item
              key={nanoid()}
              index={i + 1}
              item={item}
              disabled={!(name && workPlace && date)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}
