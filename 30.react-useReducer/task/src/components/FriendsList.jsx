import React from "react";
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
      {friends.map((friend, i) => (
        <Friend key={i + friend.name} friend={friend} index={i} />
      ))}
    </Table>
  );
}

/**
 * <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
 */
