import { productService } from "store/services/product.service";
import { PRODUCT_ACTIONS } from "utils/actionTypes";
import { alerts } from "utils/alerts";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await productService.getProducts();
    dispatch(success(data));
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: PRODUCT_ACTIONS.GET_PRODUCTS_REQUEST };
  }
  function success(result) {
    return { type: PRODUCT_ACTIONS.GET_PRODUCTS_SUCCESS, result };
  }
  function failure(error) {
    return { type: PRODUCT_ACTIONS.GET_PRODUCTS_FAILURE, error };
  }
};
