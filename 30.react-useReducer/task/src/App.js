import React from "react";
import AddForm from "./components/AddFrom";
import FriendsList from "./components/FriendsList";
import FriendsState from "./contexts/friends/state";

export default function app() {
  return (
    <>
      <FriendsState>
        <AddForm />
        <FriendsList />
      </FriendsState>
    </>
  );
}
