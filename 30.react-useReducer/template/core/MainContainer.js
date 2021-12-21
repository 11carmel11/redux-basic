import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import MainState from "../contexts/mainState";
import ListBooks from "./ListBooks";
export default function MainContainer() {
  return (
    <div>
      <MainState>
        <NavBar />
        <SearchBar />
        <ListBooks />
      </MainState>
    </div>
  );
}
