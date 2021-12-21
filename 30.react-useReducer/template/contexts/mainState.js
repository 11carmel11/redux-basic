import React, { useReducer } from "react";
import mainContext from "./main-context";
import { mainReducer } from "../reducers/mainReducer";
import { listOfBook } from "../db/listOfBooks";
const MainState = (props) => {
  const [list, dispatch] = useReducer(mainReducer, [...listOfBook]);

  return (
    <mainContext.Provider
      value={{
        list,
        dispatch,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
