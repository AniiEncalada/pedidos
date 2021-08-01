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

//Save product
export const saveProduct = (dataProduct) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await productService.saveProduct(dataProduct);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getProducts());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: PRODUCT_ACTIONS.SAVE_PRODUCT_REQUEST };
  }
  function success(result) {
    return { type: PRODUCT_ACTIONS.SAVE_PRODUCT_SUCCESS, result };
  }
  function failure(error) {
    return { type: PRODUCT_ACTIONS.SAVE_PRODUCT_FAILURE, error };
  }
};

//Update product
export const updateProduct = (id, dataProduct) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await productService.updateProduct(id, dataProduct);
    dispatch(success(data));
    alerts.success(data.message);
    dispatch(getProducts());
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: PRODUCT_ACTIONS.UPDATE_PRODUCT_REQUEST };
  }
  function success(result) {
    return { type: PRODUCT_ACTIONS.UPDATE_PRODUCT_SUCCESS, result };
  }
  function failure(error) {
    return { type: PRODUCT_ACTIONS.UPDATE_PRODUCT_FAILURE, error };
  }
};

//Delete product
export const deleteProduct = (id, dataProduct) => async (dispatch) => {
  try {
    dispatch(request());
    const { data } = await productService.deleteProduct(id, dataProduct);
    dispatch(success(data));
    alerts.success(data.message);
  } catch (error) {
    alerts.warning(error.message);
    dispatch(failure(error));
  }

  function request() {
    return { type: PRODUCT_ACTIONS.DELETE_PRODUCT_REQUEST };
  }
  function success(result) {
    return { type: PRODUCT_ACTIONS.DELETE_PRODUCT_SUCCESS, result };
  }
  function failure(error) {
    return { type: PRODUCT_ACTIONS.DELETE_PRODUCT_FAILURE, error };
  }
};
