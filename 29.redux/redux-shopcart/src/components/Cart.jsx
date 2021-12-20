import { connect } from "react-redux";
import styled from "styled-components";

const StyledComp = styled.div`
  text-align: center;
  display: inline-block;
  position: relative;
  background-color: aquamarine;
  border-radius: 20px;
  font: icon;
  margin-top: 10px;
  border-bottom: outset;
  display: grid;
`;

const StyledBtn = styled.button`
  border: none;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 30px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "unset" : "cadetblue")};
`;

function Cart({ cart, checkout }) {
  let counter = 0;
  return (
    <StyledComp id="cart">
      ____________________________________________________________
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
      <StyledBtn
        id="checkout-btn"
        type="button"
        onClick={checkout}
        disabled={!counter}
      >
        checkout
      </StyledBtn>
    </StyledComp>
  );
}

const mapStateToProps = (state) => ({
  cart: state.addToCartReducer,
});

const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch({ type: "CHECKOUT" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
