import React, { useRef, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { changePage } from "../../../store/reducers/inventoryReducer";
import InventoryCard from "./InventoryCard";

interface Props {}

const InventoryView = (props: Props) => {
  const data = useSelector(({ inventory }: RootState) => inventory);

  const dispatch = useDispatch<AppDispatch>();

  const items = [];
  for (let i = 0; i <= data.rootInventory.length / (3 * 8); i++) {
    items.push(
      <Pagination.Item
        key={i + 1}
        active={i + 1 === data.inventory_page}
        onClick={() => {
          dispatch(changePage(i + 1));
        }}
      >
        {i + 1}
      </Pagination.Item>
    );
  }

  return (
    <>
      {/* Card */}
      <div className="grid grid-flow-row grid-cols-3 auto-rows-auto gap-3 mb-4">
        {data.rootInventory
          .filter((_, i) => {
            return (
              i < 24 * data.inventory_page && i >= data.inventory_page * 24 - 24
            );
          })
          .map((auto, i) => {
            return (
              <InventoryCard key={`inventory-card-${i + 1}`} auto={auto} />
            );
          })}
      </div>
      {/* Pagination */}
      <Pagination className="flex justify-end">{items}</Pagination>
    </>
  );
};

export default InventoryView;
