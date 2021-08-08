import { authService } from "store/services/auth.service";
import { AUTH_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";
import { history } from "utils/history";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await authService.login(formData);
    localStorage.setItem("user", JSON.stringify(data.data));
    dispatch(success(data));
    alerts.success(data.message);
    history.push("/perfil");
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: AUTH_ACTIONS.LOGIN_REQUEST };
  }
  function success(result) {
    return { type: AUTH_ACTIONS.LOGIN_SUCCESS, result };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.LOGIN_FAILURE, error };
  }
};

export const currentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) throw new Error("No hay datos de alguna sesión.");
    dispatch(success({ data: user }));
  } catch (error) {
    dispatch(failure(error));
  }

  function success(result) {
    return { type: AUTH_ACTIONS.LOGIN_SUCCESS, result };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.LOGIN_FAILURE, error };
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({
    type: AUTH_ACTIONS.LOGOUT,
  });
};

export const getAddresses = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await authService.getAddresses();
    dispatch(success(data));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: AUTH_ACTIONS.GET_ADDRESSES_REQUEST };
  }
  function success(result) {
    return { type: AUTH_ACTIONS.GET_ADDRESSES_SUCCESS, result };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.GET_ADDRESSES_FAILURE, error };
  }
};

export const saveAddress = (dataForm) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await authService.saveAddress(dataForm);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getAddresses());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: AUTH_ACTIONS.SAVE_ADDRESS_REQUEST };
  }
  function success(result) {
    return { type: AUTH_ACTIONS.SAVE_ADDRESS_SUCCESS, result };
  }
  function failure(error) {
    return { type: AUTH_ACTIONS.SAVE_ADDRESS_FAILURE, error };
  }
};
