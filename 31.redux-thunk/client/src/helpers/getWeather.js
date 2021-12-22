import axios from "axios";

const KEY = "cc2bec0ba8981e85c20172b52e4fea79";
const BASE_API = "https://api.openweathermap.org/data/2.5/weather";

/**
 * @param city city name to check its weather
 * @returns weather object
 */
export const get = async (city) => {
  const { data } = await axios.get(
    `${BASE_API}?q=${city}&units=metric&appid=${KEY}`
  );

  return data;
};
