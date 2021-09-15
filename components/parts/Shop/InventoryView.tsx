import React, { useRef, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import InventoryCard from "./InventoryCard";

interface Props {}

const InventoryView = (props: Props) => {
  const data = useSelector((store: RStore) => store.inventory.rootInventory);
  let [active, setActive] = useState(1);
  const items = [];
  for (let i = 1; i <= data.length / (3 * 5); i++) {
    items.push(
      <Pagination.Item
        key={i}
        active={i === active}
        onClick={() => {
          setActive(i);
        }}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <>
      {/* Card */}
      <div className="grid grid-flow-row grid-cols-3 auto-rows-auto gap-3">
        {data.map((auto, i) => {
          return <InventoryCard key={`inventory-card-${i + 1}`} auto={auto} />;
        })}
      </div>
      {/* Pagination */}
      <Pagination>{items}</Pagination>
    </>
  );
};

export default InventoryView;
