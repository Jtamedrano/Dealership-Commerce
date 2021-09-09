import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from "./reducers";

const store = createStore(allReducers);

const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxProvider };
