import { combineReducers } from "@reduxjs/toolkit";
import inventoryReducer from "./inventoryReducer";

const allReducers = combineReducers({ inventory: inventoryReducer });

export { allReducers };
