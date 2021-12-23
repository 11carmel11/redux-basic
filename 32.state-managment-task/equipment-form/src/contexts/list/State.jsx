import React, { useEffect, useReducer } from "react";
import itemsContext from "./context";
import itemsReducer from "../../reducers/items";

export default function ItemsState({ children }) {
  const [items, dispatch] = useReducer(itemsReducer, []);

  useEffect(() => {
    dispatch({ type: "INIT" });
  }, []);

  return (
    <itemsContext.Provider value={{ items, dispatch }}>
      {children}
    </itemsContext.Provider>
  );
}
