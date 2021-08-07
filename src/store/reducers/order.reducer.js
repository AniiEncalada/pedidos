import { ORDER_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
  saving: false,
  updating: false,
  deleting: false,
};

export const order = (state = initialState, payload) => {
  switch (payload.type) {
    case ORDER_ACTIONS.GET_ORDERS_REQUEST:
      return { ...state, loading: true };
    case ORDER_ACTIONS.GET_ORDERS_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case ORDER_ACTIONS.GET_ORDERS_FAILURE:
      return { ...state, loading: false, ...payload.error };

    case ORDER_ACTIONS.SAVE_ORDER_REQUEST:
      return { ...state, saving: true };
    case ORDER_ACTIONS.SAVE_ORDER_SUCCESS:
      return { ...state, saving: false };
    case ORDER_ACTIONS.SAVE_ORDER_FAILURE:
      return { ...state, saving: false };

    case ORDER_ACTIONS.UPDATE_ORDER_REQUEST:
      return { ...state, updating: true };
    case ORDER_ACTIONS.UPDATE_ORDER_SUCCESS:
      return { ...state, updating: false };
    case ORDER_ACTIONS.UPDATE_ORDER_FAILURE:
      return { ...state, updating: false };

    case ORDER_ACTIONS.TOGGLE_ORDER_REQUEST:
      return { ...state, deleting: true };
    case ORDER_ACTIONS.TOGGLE_ORDER_SUCCESS:
      return { ...state, deleting: false };
    case ORDER_ACTIONS.TOGGLE_ORDER_FAILURE:
      return { ...state, deleting: false };
    default:
      return state;
  }
};
