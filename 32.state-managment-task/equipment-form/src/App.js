import React from "react";
import Info from "./components/Info";
import InfoState from "./contexts/info/State";

export default function App() {
  return (
    <>
      <div>
        <InfoState>
          <Info />
        </InfoState>
      </div>
    </>
  );
}
