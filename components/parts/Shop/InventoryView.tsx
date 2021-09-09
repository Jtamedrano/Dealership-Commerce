import React, { useState } from "react";
import { sample_data_one } from "../../../test-data/samples";
import InventoryCard from "./InventoryCard";

interface Props {}

const InventoryView = (props: Props) => {
  const [data] = useState(sample_data_one);

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
