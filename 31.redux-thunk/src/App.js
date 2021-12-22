import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Select from "./components/Select";
import Ticket from "./components/Ticket";
// import Loader from "./components/Loader";
import weatherReducer from "./reducers/weatherReducer";

const store = createStore(weatherReducer, {}, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Select />
      <Ticket />
    </Provider>
  );
}
