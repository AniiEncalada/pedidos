import axios from "axios";
import { getFormData } from "utils/functions";
import { API_PEDIDOS } from "utils/constants";

const type = 2;

const getProducts = (filter) =>
  axios.post(`${API_PEDIDOS}/product/list/${filter}`);

const saveProduct = (dataProduct) =>
  axios.post(`${API_PEDIDOS}/product/save/${type}`, getFormData(dataProduct));

const updateProduct = (id, dataProduct) =>
  axios.post(
    `${API_PEDIDOS}/product/update/${type}/${id}`,
    getFormData(dataProduct)
  );

const toggleProduct = (id) =>
  axios.post(`${API_PEDIDOS}/product/down/${type}/${id}`);

export const productService = {
  getProducts,
  saveProduct,
  updateProduct,
  toggleProduct,
};
