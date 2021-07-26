import { AUTH_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: {},
  loggingIn: false,
  loggedIn: true,
};

export const auth = (state = initialState, payload) => {
  switch (payload.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return { ...state, loggingIn: false, loggedIn: true, ...payload.result };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return { ...state, loggingIn: false, ...payload.error };
    default:
      return state;
  }
};
