import { connect } from "react-redux";
import Product from "./Product";

function ShopList({ addToCart, products }) {
  return (
    <div id="shop-list">
      <p>Products:</p>
      {products.map((product) => (
        <Product key={product.name} item={product} addHandler={addToCart} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.takeFromShopReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (type) => dispatch({ type: "ADD", payload: { name: type } }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
