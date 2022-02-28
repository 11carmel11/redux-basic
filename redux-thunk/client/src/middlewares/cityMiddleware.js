import * as Weather from "../helpers/getWeather";
import { objectLogger } from "../UTILS.ts";

const getCityWeather = (cityName) => {
  return async (dispatch) => {
    try {
      const weather = await Weather.get(cityName);
      dispatch({ type: "SET_WEATHER", weather });
    } catch (error) {
      objectLogger(error);
    }
  };
};

export default getCityWeather;
