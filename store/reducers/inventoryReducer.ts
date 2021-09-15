import { sample_data_one } from "../../test-data/samples";
import { RInventoryActionTypes } from "../../constants";
import { CounterList } from "../../utils/Counter";
import { getMinMax } from "../../utils/getMinMax";
import { listByKeyName } from "../../utils/listByKeyName";
import { AutoList } from "./AutoList";

const sample_list = new AutoList(sample_data_one);
const initialState: RInventoryStore = {
  rootInventory: sample_list.getAvailable(),
  filters: {},
};

export const inventoryReducer = (
  state = initialState,
  action: RAction<RInventoryActionTypes>
): RInventoryStore => {
  // Main routing for action type
  switch (action.type) {
    case RInventoryActionTypes.INIT_INVENTORY:
      return { ...state, rootInventory: action.payload.getAvailable() };
    default:
      return state;
  }
};
