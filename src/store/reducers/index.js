import { combineReducers } from "redux";
import { AUTH_ACTIONS } from "utils/actionTypes";

import { auth } from "./auth.reducer";
import { product } from "./product.reducer";
import { restaurant } from "./restaurant.reducer";
import { category } from "./category.reducer";

const appReducer = combineReducers({ auth, product, restaurant, category });

const reducer = (state, action) => {
  if (action.type === AUTH_ACTIONS.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducer;
