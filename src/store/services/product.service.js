import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const type = 2;
const getProducts = () => axios.post(`${API_PEDIDOS}/product/list/`);

const saveRestaurant = (dataProduct) =>
  axios.post(`${API_PEDIDOS}/product/register`, dataProduct);

const updateRestaurant = (id, dataProduct) =>
  axios.post(`${API_PEDIDOS}/product/update/${type}/${id}`, dataProduct);

const deleteRestaurant = (id) =>
  axios.get(`${API_PEDIDOS}/product/delete/${type}/${id}`);

export const productService = {
  getProducts,
  saveRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
