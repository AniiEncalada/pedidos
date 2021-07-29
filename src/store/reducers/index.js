import { combineReducers } from "redux";

import { auth } from "./auth.reducer";
import { product } from "./product.reducer";
import { restaurant } from "./restaurant.reducer";

const appReducer = combineReducers({ auth, product, restaurant });

const reducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducer;
