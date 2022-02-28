const initialState = [
  { name: "banana", price: 5, amount: 15 },
  { name: "apple", price: 3, amount: 15 },
  { name: "tomato", price: 2.5, amount: 15 },
  { name: "cucumber", price: 4, amount: 15 },
];

const takeFromShopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return state.map((item) => {
        if (item.name === payload.name) item.amount--;
        return item;
      });
    default:
      return state;
  }
};
export default takeFromShopReducer;
