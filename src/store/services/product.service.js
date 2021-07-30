import axios from "axios";
import { getFormData } from "utils/functions";
import { API_PEDIDOS } from "utils/constants";

const type = 2;

const getProducts = () => axios.post(`${API_PEDIDOS}/product/list/`);

const saveProduct = (dataProduct) =>
  axios.post(`${API_PEDIDOS}/product/save/${type}`, getFormData(dataProduct));

const updateProduct = (id, dataProduct) =>
  axios.post(`${API_PEDIDOS}/product/update/${type}/${id}`, dataProduct);

const deleteProduct = (id) =>
  axios.get(`${API_PEDIDOS}/product/delete/${type}/${id}`);

export const productService = {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
};
