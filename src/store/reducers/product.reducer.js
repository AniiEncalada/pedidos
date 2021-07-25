import { PRODUCT_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
};

export const product = (state = initialState, payload) => {
  switch (payload.type) {
    case PRODUCT_ACTIONS.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ACTIONS.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case PRODUCT_ACTIONS.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, ...payload.error };
    default:
      return state;
  }
};
