import React, { useEffect, useReducer } from "react";
import infoContext from "./context";
import infoReducer from "../../reducers/info";

export default function InfoState({ children }) {
  const [info, dispatch] = useReducer(infoReducer, {});

  useEffect(() => {
    dispatch({ type: "INIT" });
  }, []);

  return (
    <infoContext.Provider value={{ info, dispatch }}>
      {children}
    </infoContext.Provider>
  );
}
