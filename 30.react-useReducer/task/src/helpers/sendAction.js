/**
 * 1-init
 * 2-add
 * 3-remove
 * 4-update
 */
export const sendAction = (type, payload = {}) => {
  switch (type) {
    case 1:
      return { type: "INITIAL_STATE", payload };

    case 2:
      return { type: "ADD_FRIEND", payload };

    case 3:
      return { type: "REMOVE_FRIEND", payload };

    case 4:
      return { type: "UPDATE_FRIEND", payload };

    default:
      throw new Error("unknown type");
  }
};
