import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import Loader from "./components/Loader";
import Ticket from "./components/Ticket";
import getCityWeather from "./middlewares/cityMiddleware";
import { weatherReducer } from "./reducers/weatherReducer";

const store = createStore(weatherReducer, applyMiddleware(getCityWeather));

export default function App() {
  return (
    <Provider store={store}>
      <Ticket />
    </Provider>
  );
}
