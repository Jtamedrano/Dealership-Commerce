/**
 * Action Creators for Inventory Reducer
 */

import { Dispatch } from "redux";
import { RInventoryActionTypes } from "../../constants";
import { sample_data_one } from "../../test-data/samples";
import { AutoList } from "../reducers/AutoList";

const inventoryActions: {
  initInventory: (list: AutoList) => RAction<RInventoryActionTypes>;
} = {
  initInventory: (list: AutoList) => ({
    type: RInventoryActionTypes.INIT_INVENTORY,
    payload: list,
  }),
};

export const runInit = () => (dispatch: Dispatch) => {
  dispatch(inventoryActions.initInventory(new AutoList(sample_data_one)));
};
