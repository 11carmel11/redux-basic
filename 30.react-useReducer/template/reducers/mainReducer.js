// No Side Effects
export const mainReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_DATA":
      return [...action.data];
    case "FILTER_LIST":
      let stateAfterFilter = state.filter(function (item) {
        return item.title.includes(action.title);
      });
      return [...stateAfterFilter];
    case "UPDATE_LIST":
      let updatedState = state.map((item) => {
        if (item.id === action.id) return { ...item, title: action.title };
        return item;
      });
      return [...updatedState];
    default:
      return [...state];
  }
};
