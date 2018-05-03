import { compose, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers";

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, enhancer);

export default store;
