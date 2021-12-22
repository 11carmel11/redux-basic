import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledComp = styled.main`
  box-shadow: 0px 0px 50px 4px #8f8f8f;
  border-radius: 30px;
  margin: 50px 150px;
  height: 80vh;
`;

function calcTime(offset) {
  return new Date(new Date().getTime() + offset * 1000)
    .toUTCString()
    .replace(/ GMT$/, "");
}

export default function Ticket() {
  const {
    name,
    main,
    weather: [{ main: mainDes, description }],
    timezone,
  } = useSelector((state) => state.weatherReducer);

  const date = calcTime(timezone);

  return (
    <StyledComp>
      <section id="animation">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
      <section id="information">
        <h2>{name}</h2>
        <b>
          last updated: {date} ({name} time)
        </b>
        <br /> <br />
        <h4>
          {main?.temp}🗑, feels like {main?.feels_like}
        </h4>
        <p>
          <b>{mainDes}</b>: {description}
        </p>
      </section>
    </StyledComp>
  );
}
