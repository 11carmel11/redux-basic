import React, { useContext } from "react";
import styled from "styled-components";
import friendsContext from "../contexts/friends/context";
import { sendAction } from "../helpers/sendAction";

const StyledComp = styled.button`
  border: none;
  background-color: unset;
  cursor: pointer;
  display: inline-block;
`;

export default function Friend({ friend, index }) {
  const { dispatch, friends } = useContext(friendsContext);

  const indexInList = friends.indexOf(friend);

  const removeFriend = () => {
    dispatch(sendAction(3, friend));
  };

  const setEditable = (e) => {
    e.preventDefault();
    e.target.contentEditable = true;
    e.target.focus();
  };

  const blurHandler = (e) => {
    e.target.contentEditable = false;
    const { id, innerText } = e.target;
    dispatch(
      sendAction(4, { index: indexInList }, { ...friend, [id]: innerText })
    );
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td id="name" onDoubleClick={setEditable} onBlur={blurHandler}>
        {friend.name}
      </td>
      <td id="age" onDoubleClick={setEditable} onBlur={blurHandler}>
        {friend.age}
      </td>
      <td>
        <StyledComp type="button" onClick={removeFriend}>
          🗑
        </StyledComp>
      </td>
    </tr>
  );
}
