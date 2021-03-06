import React, { useEffect, useState } from "react";

export default function Item({
  index,
  disabled,
  item: { name, fullQuantity, currentAmount },
}) {
  const [current, setCurrent] = useState(0);

  let currentInput;

  useEffect(() => {
    setCurrent(currentAmount || fullQuantity);
  }, [currentAmount, fullQuantity]);

  return (
    <tr>
      <td>{index}</td>
      <td>{name}</td>
      <td>{fullQuantity}</td>
      <td>
        <input
          ref={(node) => (currentInput = node)}
          type="number"
          min="0"
          max={fullQuantity}
          value={current}
          id="current-amount"
          onChange={() => {
            setCurrent(currentInput.value);
          }}
          disabled={typeof currentAmount === "number" || disabled}
        />
      </td>
      <td>{fullQuantity - current}</td>
    </tr>
  );
}
