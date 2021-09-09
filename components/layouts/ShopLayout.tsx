import React from "react";
import { Filter, InventoryView, Search } from "../parts/Shop";

interface Props {}

const ShopLayout = (props: Props) => {
  return (
    <div className="shop">
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
