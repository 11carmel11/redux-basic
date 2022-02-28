import React, { useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import getCityWeather from "../middlewares/cityMiddleware";

export default function Select() {
  const dispatch = useDispatch();

  const setCity = ({ target: { id } }) => {
    dispatch(getCityWeather(id));
  };

  useEffect(() => {
    setCity({ target: { id: "London" } });
  });

  return (
    <DropdownButton id="dropdown-basic-button" title="Choose city">
      <Dropdown.Item onClick={setCity} id="London">
        London
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="Tel-Aviv">
        Tel Aviv
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="Paris">
        Paris
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="Dubai">
        Dubai
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="Barcelona">
        Barcelona
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="New%20York">
        New York
      </Dropdown.Item>
      <Dropdown.Item onClick={setCity} id="Bangkok">
        Bangkok
      </Dropdown.Item>
    </DropdownButton>
  );
}
