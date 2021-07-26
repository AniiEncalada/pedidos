import { authService } from "store/services/auth.service";
import { AUTH_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";
import { ACCESS_TOKEN } from "utils/constants";
import { history } from "utils/history";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(request());
    const { _id, token } = JSON.parse(ACCESS_TOKEN);
    const { data } = await authService.login({
      ...formData,
      verify: _id,
      token,
    });
    dispatch(success(data));
    history.push("/perfil");
    alerts.success(data.message);
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
