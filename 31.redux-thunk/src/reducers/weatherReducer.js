const initial = {
  coord: {
    lon: -0.1257,
    lat: 51.5085,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 3.84,
    feels_like: 3.84,
    temp_min: 1.86,
    temp_max: 5.25,
    pressure: 1019,
    humidity: 83,
  },
  visibility: 10000,
  wind: {
    speed: 0.45,
    deg: 106,
    gust: 1.34,
  },
  clouds: {
    all: 100,
  },
  dt: 1640176570,
  sys: {
    type: 2,
    id: 2019646,
    country: "GB",
    sunrise: 1640160263,
    sunset: 1640188429,
  },
  timezone: 0,
  id: 2643743,
  name: "London",
  cod: 200,
};

export const weatherReducer = (state = initial, action) => {
  const { type, weather } = action;
  switch (type) {
    case "SET_WEATHER":
      return weather;

    default:
      return state;
  }
};
