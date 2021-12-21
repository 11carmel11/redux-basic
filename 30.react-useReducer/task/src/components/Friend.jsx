import React from "react";

export default function Friend({ friend }) {
  console.log(friend);
  return (
    <div
      style={{
        border: "5px solid black",
        margin: "5px",
        padding: "5px",
        display: "inline-block",
      }}
    >
      <p>name: {friend.name}</p>
      <p>age: {friend.age}</p>
    </div>
  );
}
