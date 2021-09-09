import { sample_data_one } from "../../test-data/samples";

const initialState: RInventoryStore = {
  rootInventory: sample_data_one,
  visibleInventory: sample_data_one,
  filters: {},
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

      console.log(toBeFiltered);
      for (const key in toBeFiltered) {
        if (Object.prototype.hasOwnProperty.call(toBeFiltered, key)) {
          toBeVisible = toBeVisible.filter((auto) => {
            if (typeof toBeFiltered[key] === "string") {
              console.log("filter method", key, auto[key], toBeFiltered[key]);
              return auto[key] === toBeFiltered[key];
            }
            return true;
          });
        }
      }
      return { ...state, visibleInventory: toBeVisible, filters: toBeFiltered };
    default:
      return state;
  }
};
