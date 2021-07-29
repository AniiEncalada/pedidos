import { RESTAURANT_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
};

export const restaurant = (state = initialState, payload) => {
  switch (payload.type) {
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_REQUEST:
      return { ...state, loading: true };
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_FAILURE:
      return { ...state, loading: false, ...payload.error };
    default:
      return state;
  }
};
