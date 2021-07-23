import { authService } from "store/services/auth.service";
import { AUTH_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";
import { ACCESS_TOKEN } from "utils/constants";
import { history } from "utils/history";

export const login = (formData) => async (dispatch) => {
  try {
    dispatch(request());
    const { _id, token } = JSON.parse(ACCESS_TOKEN);
    console.log(ACCESS_TOKEN);
    const { data } = await authService.login({
      ...formData,
      verify: _id,
      token,
    });
    alerts.success(data.message);
    history.push("/perfil");
    dispatch(success(data));
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
