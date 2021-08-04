import { restaurantService } from "store/services/restaurant.service";
import { RESTAURANT_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";

export const getRestaurants = (filter) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await restaurantService.getRestaurants(filter);
    dispatch(success(data));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: RESTAURANT_ACTIONS.GET_RESTAURANTS_REQUEST };
  }
  function success(result) {
    return { type: RESTAURANT_ACTIONS.GET_RESTAURANTS_SUCCESS, result };
  }
  function failure(error) {
    return { type: RESTAURANT_ACTIONS.GET_RESTAURANTS_FAILURE, error };
  }
};

//Save restaurant
export const saveRestaurant = (dataProduct) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await restaurantService.saveRestaurant(dataProduct);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getRestaurants());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: RESTAURANT_ACTIONS.SAVE_RESTAURANT_REQUEST };
  }
  function success(result) {
    return { type: RESTAURANT_ACTIONS.SAVE_RESTAURANT_SUCCESS, result };
  }
  function failure(error) {
    return { type: RESTAURANT_ACTIONS.SAVE_RESTAURANT_FAILURE, error };
  }
};

//Update restaurant
export const updateRestaurant = (id, dataRestaurant) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await restaurantService.updateRestaurant(
      id,
      dataRestaurant
    );
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getRestaurants());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: RESTAURANT_ACTIONS.UPDATE_RESTAURANT_REQUEST };
  }
  function success(result) {
    return { type: RESTAURANT_ACTIONS.UPDATE_RESTAURANT_SUCCESS, result };
  }
  function failure(error) {
    return { type: RESTAURANT_ACTIONS.UPDATE_RESTAURANT_FAILURE, error };
  }
};

//Toggle restaurant
export const toggleRestaurant = (id, filter) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await restaurantService.toggleRestaurant(id);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getRestaurants(filter));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: RESTAURANT_ACTIONS.TOGGLE_RESTAURANT_REQUEST };
  }
  function success(result) {
    return { type: RESTAURANT_ACTIONS.TOGGLE_RESTAURANT_SUCCESS, result };
  }
  function failure(error) {
    return { type: RESTAURANT_ACTIONS.TOGGLE_RESTAURANT_FAILURE, error };
  }
};
