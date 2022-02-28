import styled from "styled-components";

const StyledComp = styled.div`
  border: 3px solid black;
  border-radius: 20px;
  margin: 3px;
  text-align: center;
  color: white;
  font-family: cursive;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

const StyledBtn = styled.button`
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export default function Product({ item, addHandler }) {
  const { name, amount, price } = item;
  let color;
  switch (name) {
    case "tomato":
      color = "brown";
      break;
    case "apple":
      color = "red";
      break;
    case "banana":
      color = "gold";
      break;
    case "cucumber":
      color = "chartreuse";
      break;

    default:
      color = "cadetblue";
      break;
  }
  return (
    <StyledComp color={color} id={name}>
      ______
      <p>
        {name} - $ {price} x {amount}
      </p>
      <StyledBtn
        type="button"
        id="add-btn"
        disabled={!amount}
        onClick={() => {
          addHandler(name);
        }}
      >
        add to cart
      </StyledBtn>
    </StyledComp>
  );
}
