import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { allReducers } from "./reducers";

const store = createStore(allReducers, applyMiddleware(thunk));

const ReduxProvider: React.FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export { ReduxProvider };
