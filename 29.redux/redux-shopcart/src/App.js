import React from "react";
import Header from "./components/Header";
import ShopList from "./components/ShopList";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <ShopList />
      <Cart checkoutHandler={() => {}} />
    </>
  );
}

export default App;
