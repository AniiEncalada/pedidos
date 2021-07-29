import { RESTAURANT_ACTIONS } from "utils/actionTypes";

const initialState = {
  status: "",
  statusstr: "",
  message: "",
  data: [],
  loading: false,
  updating: false,
};

export const restaurant = (state = initialState, payload) => {
  switch (payload.type) {
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_REQUEST:
      return { ...state, loading: true };
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_SUCCESS:
      return { ...state, loading: false, ...payload.result };
    case RESTAURANT_ACTIONS.GET_RESTAURANTS_FAILURE:
      return { ...state, loading: false, ...payload.error };

    case RESTAURANT_ACTIONS.UPDATE_RESTAURANT_REQUEST:
      return { ...state, updating: true };
    case RESTAURANT_ACTIONS.UPDATE_RESTAURANT_SUCCESS:
      return { ...state, updating: false, ...payload.result };
    case RESTAURANT_ACTIONS.UPDATE_RESTAURANT_FAILURE:
      return { ...state, updating: false, ...payload.error };
    default:
      return state;
  }
};
