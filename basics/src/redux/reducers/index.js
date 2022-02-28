import { combineReducers } from "redux";
import addToCartReducer from "./cart";
import takeFromShopReducer from "./shoplist";

export const rootReducer = combineReducers({
  addToCartReducer,
  takeFromShopReducer,
});
