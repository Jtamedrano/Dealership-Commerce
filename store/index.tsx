import React from "react";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { allReducers } from "./reducers";

const store = configureStore({ reducer: allReducers });

const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxProvider };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
