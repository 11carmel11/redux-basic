import React from "react";
import EquipmentList from "./components/EquipmentList";
import Info from "./components/Info";
import InfoState from "./contexts/info/State";
import ItemsState from "./contexts/list/State";

export default function App() {
  return (
    <>
      <div>
        <InfoState>
          <Info />
          <br />
          <ItemsState>
            <EquipmentList />
          </ItemsState>
        </InfoState>
      </div>
    </>
  );
}
