const initialState = [
  { name: "banana", price: 5, amount: 0 },
  { name: "apple", price: 3, amount: 0 },
  { name: "tomato", price: 2.5, amount: 0 },
  { name: "cucumber", price: 4, amount: 0 },
];

const addToCartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return state.map((item) => {
        if (item.name === payload.name) item.amount++;
        return item;
      });
    default:
      return state;
  }
};
export default addToCartReducer;
