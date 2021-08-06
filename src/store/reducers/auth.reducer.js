import { AUTH_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: {
    address: [],
    active_person: false,
    _id: "",
    first_name_person: "",
    last_name_person: "",
    gender_person: "",
    type_dni_person: "",
    dni_person: "",
    birthdate_person: "",
    type_person: "",
    account: {
      action: [],
      can_change_password: false,
      change_password_count: 0,
      active_account: false,
      _id: "",
      email_account: "",
      password_account: "",
      updated_account: "",
      created_account: "",
      __v: 0,
    },
    photo_person: "",
    updated_person: "",
    created_person: "",
    __v: 0,
  },
  loggingIn: !!localStorage.getItem("user"),
  loggedIn: false,
};

export const auth = (state = initialState, payload) => {
  switch (payload.type) {
    case AUTH_ACTIONS.LOGIN_REQUEST:
      return { ...state, loggingIn: true };
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        ...payload.result,
        data: {
          ...state.data,
          ...payload.result.data,
          account: {
            ...state.data.account,
            ...payload.result.data.account,
          },
        },
      };
    case AUTH_ACTIONS.LOGIN_FAILURE:
      return { ...state, loggingIn: false, ...payload.error };

    case AUTH_ACTIONS.LOGOUT:
      return { ...state, loggingIn: false, loggedIn: false };

    default:
      return state;
  }
};
