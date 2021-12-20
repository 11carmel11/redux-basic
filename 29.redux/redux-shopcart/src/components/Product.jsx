export default function Product({ item, addHandler }) {
  const { name, amount, price } = item;
  return (
    <div id={name}>
      ______
      <p>
        {name} - $ {price} x {amount}
      </p>
      <button
        type="button"
        id="add-btn"
        onClick={() => {
          addHandler(name);
        }}
      >
        add to cart
      </button>
    </div>
  );
}
