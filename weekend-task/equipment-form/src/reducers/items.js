import fullEquipmentList from "../DB/db";

const itemsReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case "INIT":
      return fullEquipmentList;

    case "SUBMIT_ITEM":
      return [...state, payload];

    default:
      return state;
  }
};

export default itemsReducer;
