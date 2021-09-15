import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter, InventoryView, Search } from "../parts/Shop";
import ViewSelector from "../parts/Shop/ViewSelector";

interface Props {}

const ShopLayout = (props: Props) => {
  const state = useSelector((state: RStore) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) {
      dispatch({
        type: "ADD_FILTER",
        payload: { condition: ["new", "used", "salvaged"] },
      });
    }
  }, []);

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
