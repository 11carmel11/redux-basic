import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainComp = styled.main`
  box-shadow: 0px 0px 50px 4px #8f8f8f;
  border-radius: 30px;
  margin: 50px 200px;
  height: 80vh;
  background-color: ${(props) =>
    props.temp >= 25
      ? "crimson"
      : props.temp >= 10
      ? "darkturquoise"
      : props.temp >= 0
      ? "lightblue"
      : "cornflowerblue"};
`;

const InfoComp = styled.section`
  text-align: center;
  font-family: cursive;
  margin-bottom: 2px;
  height: 30vh;
`;

const ImgComp = styled.img`
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  height: 50vh;
  width: 100%;
`;

export default function Ticket() {
  const {
    name,
    main: { temp, feels_like },
    weather: [{ main: mainDes, description }],
    timezone,
  } = useSelector((state) => state.weatherReducer);

  const calcTime = (offset) => {
    return new Date(new Date().getTime() + offset * 1000)
      .toUTCString()
      .replace(/ GMT$/, "");
  };

  const date = calcTime(timezone);

  const src = {
    "Tel Aviv": "https://media.timeout.com/images/105434111/750/422/image.jpg",
    London:
      "https://media.ticmate.com//resources/ticmate_live/upload_go/9e062c852a50939e-LondonEyeMobile4.jpg",
    Bangkok:
      "https://lp-cms-production.imgix.net/2021-06/shutterstockRF_793581025.jpg",
    Paris: "https://www.voyagesdereve.ch/upload/images/Paris-Tour-Eiffel.jpg",
    Dubai: "https://www.neosair.it/content/images/pagine/dubai.jpg",
    Barcelona:
      "https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.18169-9/1170863_869449566486106_4872375352864736802_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=e3f864&_nc_ohc=wgC9VA6SIuoAX-tBkMJ&_nc_ht=scontent.ftlv2-1.fna&oh=00_AT_qGSmp4_agR1UfHQRVGhAhDivVmJiKOVV6k2uVhIBpcA&oe=61E7DF9B",
    "New York":
      "https://media.architecturaldigest.com/photos/5cc35bea39b7d6ac4b1b2675/GettyImages-960609922.jpg",
  };

  return (
    <MainComp temp={Number(temp)}>
      <section id="animation">
        <ImgComp src={src[name]} alt={name + "city"} />
      </section>
      <InfoComp id="information">
        <h2>{name}</h2>
        <b>
          last updated: {date} ({name} time)
        </b>
        <br /> <br />
        <h4>
          {temp}°C, feels like {feels_like}°C
        </h4>
        <p>
          <b>{mainDes}</b>: {description}
        </p>
      </InfoComp>
    </MainComp>
  );
}
