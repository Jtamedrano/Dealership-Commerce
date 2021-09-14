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
  // constants
  let toBeVisible: Auto[] = [];
  let toBeHidden: Auto[] = [];
  let available: Auto[] = [];
  let unavailable: Auto[] = [];
  let toBeFiltered: filters = {
    ...state.filters,
    ...action.payload,
  };
  const minMaxPrice = getMinMax(state.rootInventory, "msrp");
  const minMaxYear = getMinMax(state.rootInventory, "year");

  // Utility function for condition filter
  const conditionMatch = (
    auto: Auto,
    test: boolean = true,
    manualTester?: string[]
  ) => {
    if (manualTester) {
      console.log("Manual Tester", manualTester);
      return manualTester.includes(auto.condition) === test;
    }
    if (action.payload?.condition) {
      console.log("conditionMatch from payload", action.payload.condition);
      return action.payload.condition.includes(auto.condition) === test;
    }
    if (state.filters.condition) {
      console.log("conditionMatch from state", state.filters.condition);
      return state.filters.condition.includes(auto.condition) === test;
    }
  };

  // Sorter Function that moves auto's to their respective array slot
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

        const hideNums = (index: number): void => {
          if (element[index] !== undefined && auto[key] < element[index]) {
            toBeHidden.push(auto);
            return;
          }
        };

        if (typeof auto[key] === "number") {
          hideNums(0);
          hideNums(1);
        }
      }
    }
    toBeVisible.push(auto);
  };

  const sortAvailableAutos = () => {
    for (let i = 0; i < available.length; i++) {
      compareAuto(available[i]);
    }
  };

  const getSelectables = (select: keyof Auto) =>
    new CounterList(listByKeyName(toBeVisible, select));

  // Main routing for action type
  if (action.type === "CHANGE_FILTER_VIEW") {
    if (!action.payload) {
      return state;
    }

    toBeFiltered = { condition: action.payload.views };

    available = state.rootInventory.filter((auto) =>
      conditionMatch(auto, true, action.payload.views)
    );
    unavailable = state.rootInventory.filter((auto) =>
      conditionMatch(auto, false, action.payload.views)
    );

    sortAvailableAutos();

    const selectableMakes = getSelectables("make");

    return {
      ...state,
      visibleInventory: toBeVisible,
      filters: { ...toBeFiltered, make: selectableMakes.keys("item") },
      maxPrice: minMaxPrice[1],
      minPrice: minMaxPrice[0],
      maxYear: minMaxYear[1],
      minYear: minMaxYear[0],
      makes: {
        selected: selectableMakes.list,
        notSelected: listByKeyName(toBeHidden, "make"),
        unavailable: listByKeyName(unavailable, "make"),
      },
      models: {
        selected: listByKeyName(toBeVisible, "model"),
        notSelected: listByKeyName(toBeHidden, "model"),
      },
    };
  } else if (action.type === "ADD_FILTER") {
    if (!action.payload) {
      return state;
    }

    available = state.rootInventory.filter((auto) =>
      conditionMatch(auto, true)
    );
    unavailable = state.rootInventory.filter((auto) =>
      conditionMatch(auto, false)
    );

    sortAvailableAutos();

    const selectableMakes = getSelectables("make");

    return {
      ...state,
      visibleInventory: toBeVisible,
      filters: { ...toBeFiltered, make: selectableMakes.keys("item") },
      maxPrice: minMaxPrice[1],
      minPrice: minMaxPrice[0],
      maxYear: minMaxYear[1],
      minYear: minMaxYear[0],
      makes: {
        selected: selectableMakes.list,
        notSelected: listByKeyName(toBeHidden, "make"),
        unavailable: listByKeyName(unavailable, "make"),
      },
      models: {
        selected: listByKeyName(toBeVisible, "model"),
        notSelected: listByKeyName(toBeHidden, "model"),
      },
    };
  } else {
    return state;
  }
};
