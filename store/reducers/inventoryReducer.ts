import { Filter } from "../../components/parts/Shop";
import { sample_data_one } from "../../test-data/samples";
import { CounterList } from "../../utils/Counter";
import { getMinMax } from "../../utils/getMinMax";
import { listByKeyName } from "../../utils/listByKeyName";

const initialState: RInventoryStore = {
  rootInventory: sample_data_one,
  visibleInventory: sample_data_one,
  filters: {},
  minPrice: undefined,
  maxPrice: undefined,
  minYear: undefined,
  maxYear: undefined,
  makes: {
    selected: [],
    notSelected: [],
    unavailable: [],
  },
  models: {
    selected: [],
    notSelected: [],
  },
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

      let toBeVisible: Auto[] = [];
      let toBeHidden: Auto[] = [];

      const unavailable = state.rootInventory.filter((auto) => {
        if (state.filters.condition) {
          return !state.filters.condition.includes(auto.condition);
        } else if (action.payload.condition) {
          return !action.payload.condition.includes(auto.condition);
        }
      });
      const available = state.rootInventory.filter((auto) => {
        if (state.filters.condition) {
          return state.filters.condition.includes(auto.condition);
        } else if (action.payload.condition) {
          return action.payload.condition.includes(auto.condition);
        }
      });

      const toBeFiltered: filters = {
        ...state.filters,
        ...action.payload,
      };

      const compareAuto = (auto: Auto): void => {
        for (const key in toBeFiltered) {
          if (Object.prototype.hasOwnProperty.call(toBeFiltered, key)) {
            const element = toBeFiltered[key];
            if (typeof auto[key] === "string") {
              const item = auto[key] as never;
              if (!element.includes(item)) {
                toBeHidden.push(auto);
                return;
              }
            }

            if (typeof auto[key] === "number") {
              if (element[0] !== undefined && auto[key] < element[0]) {
                toBeHidden.push(auto);
                return;
              }
              if (element[1] !== undefined && auto[key] > element[1]) {
                toBeHidden.push(auto);
                return;
              }
            }
          }
        }
        toBeVisible.push(auto);
      };

      for (let i = 0; i < available.length; i++) {
        const auto = available[i];
        compareAuto(auto);
      }

      const getSelectableMakes = new CounterList(
        listByKeyName(toBeVisible, "make")
      );

      const minMaxPrice = getMinMax(state.rootInventory, "msrp");
      const minMaxYear = getMinMax(state.rootInventory, "year");

      console.log("inventoryReducer", unavailable);

      return {
        ...state,
        visibleInventory: toBeVisible,
        filters: { ...toBeFiltered, make: getSelectableMakes.keys("item") },
        maxPrice: minMaxPrice[1],
        minPrice: minMaxPrice[0],
        maxYear: minMaxYear[1],
        minYear: minMaxYear[0],
        makes: {
          selected: getSelectableMakes.list,
          notSelected: listByKeyName(toBeHidden, "make"),
          unavailable: listByKeyName(unavailable, "make"),
        },
        models: {
          selected: listByKeyName(toBeVisible, "model"),
          notSelected: listByKeyName(toBeHidden, "model"),
        },
      };
    default:
      return state;
  }
};
