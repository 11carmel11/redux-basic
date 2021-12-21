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
  const { dispatch } = useContext(friendsContext);

  const removeFriend = () => {
    dispatch(sendAction(3, friend));
  };
  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>{friend.name}</td>
        <td>{friend.age}</td>
        <td>
          <StyledComp type="button" onClick={removeFriend}>
            🗑
          </StyledComp>
        </td>
      </tr>
    </tbody>
  );
}
