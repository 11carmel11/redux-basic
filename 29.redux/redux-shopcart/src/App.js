import React from "react";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import Cart from "./components/Cart";
// import { Counter } from "./features/counter/Counter";
// <Counter />;

const products = [
  { name: "banana", price: 5, amount: 8 },
  { name: "apple", price: 3, amount: 12 },
  { name: "tomato", price: 2.5, amount: 9 },
  { name: "cucumber", price: 4, amount: 10 },
];

const cart = [
  { name: "banana", price: 5, amount: 2 },
  { name: "apple", price: 3, amount: 0 },
  { name: "tomato", price: 2.5, amount: 1 },
  { name: "cucumber", price: 4, amount: 5 },
];

function App() {
  return (
    <>
      <Header />
      <ShopList products={products} />
      <Cart cart={cart} />
    </>
  );
}

export default App;
