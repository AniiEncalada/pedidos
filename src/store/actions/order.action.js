import { orderService } from "store/services/order.service";
import { ORDER_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";

export const getOrders = (filter) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await orderService.getOrders(filter);
    dispatch(success(data));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: ORDER_ACTIONS.GET_ORDERS_REQUEST };
  }
  function success(result) {
    return { type: ORDER_ACTIONS.GET_ORDERS_SUCCESS, result };
  }
  function failure(error) {
    return { type: ORDER_ACTIONS.GET_ORDERS_FAILURE, error };
  }
};

//Save order
export const saveOrder = (dataProduct) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await orderService.saveOrder(dataProduct);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getOrders());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: ORDER_ACTIONS.SAVE_ORDER_REQUEST };
  }
  function success(result) {
    return { type: ORDER_ACTIONS.SAVE_ORDER_SUCCESS, result };
  }
  function failure(error) {
    return { type: ORDER_ACTIONS.SAVE_ORDER_FAILURE, error };
  }
};

//Update order
export const updateOrder = (id, dataOrder) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await orderService.updateOrder(id, dataOrder);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getOrders());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: ORDER_ACTIONS.UPDATE_ORDER_REQUEST };
  }
  function success(result) {
    return { type: ORDER_ACTIONS.UPDATE_ORDER_SUCCESS, result };
  }
  function failure(error) {
    return { type: ORDER_ACTIONS.UPDATE_ORDER_FAILURE, error };
  }
};

//Toggle order
export const toggleOrder = (id, filter) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await orderService.toggleOrder(id);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getOrders(filter));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: ORDER_ACTIONS.TOGGLE_ORDER_REQUEST };
  }
  function success(result) {
    return { type: ORDER_ACTIONS.TOGGLE_ORDER_SUCCESS, result };
  }
  function failure(error) {
    return { type: ORDER_ACTIONS.TOGGLE_ORDER_FAILURE, error };
  }
};
