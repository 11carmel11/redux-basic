import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledComp = styled.main`
  box-shadow: 0px 0px 50px 4px #8f8f8f;
  border-radius: 30px;
  margin: 50px 150px;
  height: 80vh;
`;

function calcTime(offset) {
  const d = new Date();

  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  const nd = new Date(utc + 1000 * offset);

  return nd.toLocaleString();
}

export default function Ticket() {
  const stats = useSelector((state) => state);
  const [date, setDate] = useState(calcTime(stats.timezone));
  console.log(stats.timezone);

  setInterval(() => {
    setDate(calcTime(stats.timezone));
  }, 1000);

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
        <br />
        <br />
        <br />
      </section>
      <section id="information">
        <h2>{stats.name}</h2>
        <p>{date}</p>
        <h4>
          {stats.main.temp}🗑, feels like {stats.main.feels_like}
        </h4>
        <p>
          <b>{stats.weather[0].main}</b>: {stats.weather[0].description}
        </p>
      </section>
    </StyledComp>
  );
}
