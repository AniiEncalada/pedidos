import { CATEGORY_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
};

export const category = (state = initialState, payload) => {
  switch (payload.type) {
    case CATEGORY_ACTIONS.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_ACTIONS.GET_CATEGORIES_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case CATEGORY_ACTIONS.GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, ...payload.error };

    default:
      return state;
  }
};
