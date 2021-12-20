export default function Cart({ cart, checkoutHandler }) {
  let counter = 0;
  return (
    <>
      ____________________________________________________
      <h3>your cart:</h3>
      {cart.map((item) => {
        const { price, name, amount } = item;
        counter += price * amount;
        if (!amount) return <></>;
        return (
          <p>
            {name} - $ {price} x {amount}
          </p>
        );
      })}
      {!counter && <p>please add items to cart</p>}
      <b>Total price: $ {counter}</b>
      <br />
      <button
        id="checkout-btn"
        type="button"
        onClick={checkoutHandler}
        disabled={!counter}
      >
        checkout
      </button>
    </>
  );
}
