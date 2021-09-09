import { combineReducers } from "redux";
import { inventoryReducer } from "./inventoryReducer";

const allReducers = combineReducers({ inventory: inventoryReducer });

export { allReducers };
