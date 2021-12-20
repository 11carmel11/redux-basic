import styled from "styled-components";

const StyledComp = styled.div`
  background-color: black;
  text-align: center;
  color: white;
  font-family: system-ui;
`;

export default function Header() {
  return (
    <StyledComp>
      <header>
        <h1>Shop-list. Select your items:</h1>
        _____________________________________________________________________________
      </header>
    </StyledComp>
  );
}
