import { categoryService } from "store/services/category.service";
import { CATEGORY_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";

export const getCategories = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await categoryService.getCategories();
    dispatch(success(data));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: CATEGORY_ACTIONS.GET_CATEGORIES_REQUEST };
  }
  function success(result) {
    return { type: CATEGORY_ACTIONS.GET_CATEGORIES_SUCCESS, result };
  }
  function failure(error) {
    return { type: CATEGORY_ACTIONS.GET_CATEGORIES_FAILURE, error };
  }
};
