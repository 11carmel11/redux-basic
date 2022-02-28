import React from "react";
import { nanoid } from "nanoid";
import Friend from "./Friend";
import friendsContext from "../contexts/friends/context";
import { useContext } from "react";
import { Table } from "react-bootstrap";

export default function FriendsList() {
  const { friends } = useContext(friendsContext);
  return (
    <Table striped bordered hover size="sm" variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>age</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>
        {friends.map((friend, i) => (
          <Friend key={nanoid()} friend={friend} index={i} />
        ))}
      </tbody>
    </Table>
  );
}
