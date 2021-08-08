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

    case AUTH_ACTIONS.GET_ADDRESSES_REQUEST:
      return { ...state, address: { ...state.address, loading: true } };
    case AUTH_ACTIONS.GET_ADDRESSES_SUCCESS:
      return {
        ...state,
        address: { ...state.address, loading: false, ...payload.result },
      };
    case AUTH_ACTIONS.GET_ADDRESSES_FAILURE:
      return {
        ...state,
        address: { ...state.address, loading: false, ...payload.error },
      };

    case AUTH_ACTIONS.SAVE_ADDRESS_REQUEST:
      return { ...state, address: { ...state.address, saving: true } };
    case AUTH_ACTIONS.SAVE_ADDRESS_SUCCESS:
      return { ...state, address: { ...state.address, saving: false } };
    case AUTH_ACTIONS.SAVE_ADDRESS_FAILURE:
      return { ...state, address: { ...state.address, saving: false } };

    default:
      return state;
  }
};

const initialStateAddress = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
  saving: false,
};

export const address = (state = initialStateAddress, payload) => {
  switch (payload.type) {
    case AUTH_ACTIONS.GET_ADDRESSES_REQUEST:
      return { ...state, loading: true };
    case AUTH_ACTIONS.GET_ADDRESSES_SUCCESS:
      return {
        ...state,
        loading: false,
        ...payload.result,
      };
    case AUTH_ACTIONS.GET_ADDRESSES_FAILURE:
      return {
        ...state,
        loading: false,
        ...payload.error,
      };

    case AUTH_ACTIONS.SAVE_ADDRESS_REQUEST:
      return { ...state, saving: true };
    case AUTH_ACTIONS.SAVE_ADDRESS_SUCCESS:
      return { ...state, saving: false };
    case AUTH_ACTIONS.SAVE_ADDRESS_FAILURE:
      return { ...state, saving: false };

    default:
      return state;
  }
};
