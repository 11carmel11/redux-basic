import React, { useEffect, useReducer } from "react";
import friendsContext from "./context";
import { friendsReducer } from "../../reducers/friends";
import { sendAction } from "../../helpers/sendAction";

export default function FriendsState({ children }) {
  const [friends, dispatch] = useReducer(friendsReducer, []);

  useEffect(() => {
    dispatch(sendAction(1));
  }, []);

  return (
    <friendsContext.Provider value={{ friends, dispatch }}>
      {children}
    </friendsContext.Provider>
  );
}
