import { sample_data_one } from "../../test-data/samples";
import { getMinMax } from "../../utils/getSetsPrices";

const initialState: RInventoryStore = {
  rootInventory: sample_data_one,
  visibleInventory: sample_data_one,
  filters: {},
  minPrice: 0,
  maxPrice: 1,
};

export const inventoryReducer = (
  state = initialState,
  action: RAction<RInventoryTypes>
): RInventoryStore => {
  switch (action.type) {
    case "ADD_FILTER":
      if (!action.payload) {
        return state;
      }

      let toBeVisible: Auto[] = state.rootInventory;

      const toBeFiltered: filters = {
        ...state.filters,
        ...action.payload,
      };

      for (const key in toBeFiltered) {
        if (Object.prototype.hasOwnProperty.call(toBeFiltered, key)) {
          toBeVisible = toBeVisible.filter((auto) => {
            if (typeof toBeFiltered[key] === "string") {
              return auto[key] === toBeFiltered[key];
            }
            return true;
          });
        }
      }

      const minMax = getMinMax(toBeVisible);

      return {
        ...state,
        visibleInventory: toBeVisible,
        filters: toBeFiltered,
        maxPrice: minMax[1],
        minPrice: minMax[0],
      };
    default:
      return state;
  }
};
