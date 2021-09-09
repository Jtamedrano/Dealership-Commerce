import React from "react";
import { useSelector } from "react-redux";
import { Filter, InventoryView, Search } from "../parts/Shop";

interface Props {}

const ShopLayout = (props: Props) => {
  const state = useSelector(
    (state: RStore) => state.inventory.filters.condition
  );
  return (
    <div className="shop">
      {state && <h2>{state} Vehicles</h2>}
      <Search className="shop__search" />
      <div className="shop__main">
        {/* filter */}
        <Filter />
        <div>
          <InventoryView />
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
