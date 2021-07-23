import { authService } from "store/services/auth.service";
import { AUTH_ACTIONS } from "utils/actionTypes";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await authService(formData);
    dispatch(success(data));
  } catch (error) {
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
