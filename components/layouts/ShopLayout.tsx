import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { Filter, InventoryView, Search } from "../parts/Shop";
import ViewSelector from "../parts/Shop/ViewSelector";

interface Props {}

const ShopLayout = (props: Props) => {
  return (
    <div className="shop">
      <div className="shop__header">{/* <ViewSelector /> */}</div>
      <Search className="shop__search" />
      <div className="shop__main">
        {/* <Filter /> */}
        <div>
          <InventoryView />
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
