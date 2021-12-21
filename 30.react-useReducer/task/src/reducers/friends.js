// "INITIAL_STATE" - will initial the state with the default list from the db.
// "ADD_FRIEND" - will add a friend to the list with a given name a given age and a random id.
// "REMOVE_FRIEND" - will remove a friend from the list by his/her id.
// "UPDATE_FRIEND" - will update a friend's name/age from the list by his/her id.

// import {objectLogger, zip} from "../../../../../snippets";
import db from "../DB/db";

export const friendsReducer = (state = [], action) => {
  const { type, payload } = action;
  const indexOfFriend = state.indexOf(payload);
  switch (type) {
    case "INITIAL_STATE":
      return db;

    case "ADD_FRIEND":
      return [...state, payload];

    case "REMOVE_FRIEND":
      const copyOfState = [...state];
      copyOfState.splice(indexOfFriend, 1);
      return copyOfState;

    case "UPDATE_FRIEND":
      state[indexOfFriend] = payload;
      return state;

    default:
      return state;
  }
};
