import React from "react";
import AddModal from "./components/AddModal";
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
          <ItemsState>
            <EquipmentList />
            <AddModal />
          </ItemsState>
        </InfoState>
      </div>
    </>
  );
}
