import { sample_data_one } from "../../test-data/samples";
import { getMinMax } from "../../utils/getMinMax";

const initialState: RInventoryStore = {
  rootInventory: sample_data_one,
  visibleInventory: sample_data_one,
  filters: {},
  minPrice: undefined,
  maxPrice: undefined,
  minYear: undefined,
  maxYear: undefined,
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
            if (typeof auto[key] === "string") {
              return auto[key] === toBeFiltered[key];
            } else if (typeof auto[key] === "number") {
              console.log(
                key,
                auto[key],
                toBeFiltered[key][0],
                toBeFiltered[key][1]
              );
              return (
                auto[key] >= toBeFiltered[key][0] &&
                auto[key] <= toBeFiltered[key][1]
              );
            }
            return true;
          });
        }
      }

      const minMaxPrice = getMinMax(state.rootInventory, "msrp");
      const minMaxYear = getMinMax(state.rootInventory, "year");

      return {
        ...state,
        visibleInventory: toBeVisible,
        filters: toBeFiltered,
        maxPrice: minMaxPrice[1],
        minPrice: minMaxPrice[0],
        maxYear: minMaxYear[1],
        minYear: minMaxYear[0],
      };
    default:
      return state;
  }
};
