import { connect } from "react-redux";

function Cart({ cart, checkoutHandler }) {
  let counter = 0;
  return (
    <>
      ____________________________________________________
      <h3>your cart:</h3>
      {cart.map((item) => {
        const { price, name, amount } = item;
        counter += price * amount;

        return !!amount ? (
          <p key={name + "-cart"}>
            {name} - $ {price} x {amount}
          </p>
        ) : null;
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

const mapStateToProps = (state) => ({
  cart: state.addToCartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (type) => dispatch({ type: "ADD", payload: { name: type } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
