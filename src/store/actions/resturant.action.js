import { restaurantService } from "store/services/restaurant.service";
import { RESTAURANT_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";

export const getRestaurants = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await restaurantService.getRestaurants();
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
