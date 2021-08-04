import { PRODUCT_ACTIONS } from "utils/actionTypes";

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

export const product = (state = initialState, payload) => {
  switch (payload.type) {
    case PRODUCT_ACTIONS.GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ACTIONS.GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case PRODUCT_ACTIONS.GET_PRODUCTS_FAILURE:
      return { ...state, loading: false, ...payload.error };

    case PRODUCT_ACTIONS.SAVE_PRODUCT_REQUEST:
      return { ...state, saving: true };
    case PRODUCT_ACTIONS.SAVE_PRODUCT_SUCCESS:
      return { ...state, saving: false };
    case PRODUCT_ACTIONS.SAVE_PRODUCT_FAILURE:
      return { ...state, saving: false };

    case PRODUCT_ACTIONS.UPDATE_PRODUCT_REQUEST:
      return { ...state, updating: true };
    case PRODUCT_ACTIONS.UPDATE_PRODUCT_SUCCESS:
      return { ...state, updating: false };
    case PRODUCT_ACTIONS.UPDATE_PRODUCT_FAILURE:
      return { ...state, updating: false };

    case PRODUCT_ACTIONS.TOGGLE_PRODUCT_REQUEST:
      return { ...state, deleting: true };
    case PRODUCT_ACTIONS.TOGGLE_PRODUCT_SUCCESS:
      return { ...state, deleting: false };
    case PRODUCT_ACTIONS.TOGGLE_PRODUCT_FAILURE:
      return { ...state, deleting: false };
    default:
      return state;
  }
};
