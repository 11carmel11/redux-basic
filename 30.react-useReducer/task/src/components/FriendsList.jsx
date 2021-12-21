import React from "react";
import Friend from "./Friend";
import friendsContext from "../contexts/friends/context";
import { useContext } from "react";

export default function FriendsList() {
  const { friends } = useContext(friendsContext);
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} />
      ))}
    </div>
  );
}
