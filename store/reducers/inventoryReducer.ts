import { sample_data_one } from "../../test-data/samples";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { wordSorterAid } from "../../utils/wordSort";

const or = (test: number, a: number, b: number) => test === a || test === b;

const initialState = {
  rootInventory: sample_data_one,
  list: sample_data_one,
  filters: {},
  sort_option: 0,
};

export const inventoryRed = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    init: () => {
      return {
        ...initialState,
      };
    },
    sort: (state, action: PayloadAction<number>) => {
      let newList: IAuto[] = [];
      if (or(action.payload, 1, 2)) {
        newList = state.list.sort((a, b) => {
          if (action.payload === 1) {
            return a.year - b.year;
          } else {
            return b.year - a.year;
          }
        });
        state.rootInventory = newList;
        state.sort_option = action.payload;
      } else if (or(action.payload, 3, 4)) {
        newList = state.list.sort((a, b) => {
          if (action.payload === 3) {
            return wordSorterAid(a.body, b.body);
          } else {
            return wordSorterAid(b.body, a.body);
          }
        });
        state.rootInventory = newList;
        state.sort_option = action.payload;
      } else if (or(action.payload, 5, 6)) {
        newList = state.list.sort((a, b) => {
          if (action.payload === 5) {
            return wordSorterAid(a.color, b.color);
          } else {
            return wordSorterAid(b.color, a.color);
          }
        });
        state.rootInventory = newList;
        state.sort_option = action.payload;
      } else if (or(action.payload, 7, 8)) {
        newList = state.list.sort((a, b) => {
          if (action.payload === 7) {
            return a.odo - b.odo;
          } else {
            return b.odo - a.odo;
          }
        });
        state.rootInventory = newList;
        state.sort_option = action.payload;
      } else if (or(action.payload, 9, 10)) {
        newList = state.list.sort((a, b) => {
          if (action.payload === 9) {
            return a.msrp - b.msrp;
          } else {
            return b.msrp - a.msrp;
          }
        });
        state.rootInventory = newList;
        state.sort_option = action.payload;
      } else {
        return state;
      }
    },
  },
});

export const { init, sort } = inventoryRed.actions;
export default inventoryRed.reducer;
