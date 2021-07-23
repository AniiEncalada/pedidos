import { combineReducers } from "redux";
import { auth } from "./auth.reducer";

const appReducer = combineReducers({ auth });

const reducer = (state, action) => {
  if (action.type === "logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default reducer;
