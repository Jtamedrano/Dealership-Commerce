import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter, InventoryView, Search } from "../parts/Shop";

interface Props {}

const ShopLayout = (props: Props) => {
  const state = useSelector(
    (state: RStore) => state.inventory.filters.condition
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!state) {
      dispatch({
        type: "ADD_FILTER",
        payload: { condition: ["new", "used", "salvaged"] },
      });
    }
  }, []);

  const getStateName = () => {
    if (!!state && state[0].length > 1) {
      return "All";
    }

    return state;
  };

  return (
    <div className="shop">
      <title>Shop {getStateName()} Vehicles - Auto Dealer</title>
      {state && <h1>{getStateName()} Vehicles</h1>}
      <Search className="shop__search" />
      <div className="shop__main">
        <Filter />
        <div>
          <InventoryView />
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
