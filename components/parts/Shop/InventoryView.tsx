import React, { useState } from "react";
import { useSelector } from "react-redux";
import InventoryCard from "./InventoryCard";

interface Props {}

const InventoryView = (props: Props) => {
  const data = useSelector((store: RStore) => store.inventory.visibleInventory);

  return (
    <>
      {/* Card */}
      {data.map((auto, i) => {
        return <InventoryCard key={`inventory-card-${i + 1}`} auto={auto} />;
      })}
      {/* Pagination */}
    </>
  );
};

export default InventoryView;
