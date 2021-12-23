import fullEquipmentList from "../DB/db";

const itemsReducer = (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case "INIT":
      return fullEquipmentList;

    default:
      return state;
  }
};

export default itemsReducer;
