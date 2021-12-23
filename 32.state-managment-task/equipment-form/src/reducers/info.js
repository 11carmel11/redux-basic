import { dateString } from "../snippets.ts";

const initialState = {
  name: "",
  workPlace: "",
  date: dateString(),
};

const infoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INIT":
      return initialState;

    case "SUBMIT_NAME":
      return { ...state, name: payload };

    case "SUBMIT_WORKPLACE":
      return { ...state, workPlace: payload };

    case "SUBMIT_DATE":
      return { ...state, date: payload };

    default:
      return state;
  }
};

export default infoReducer;
