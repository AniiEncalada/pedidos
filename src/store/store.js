import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers/index";

const loggerMiddleware = createLogger();
let middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleware = [...middleware, loggerMiddleware];
}

export const store = createStore(reducer, applyMiddleware(...middleware));
