import axios from "axios";
import { getFormData } from "utils/functions";
import { API_PEDIDOS } from "../../utils/constants";

const type = 2;

const getOrders = (filter) => axios.post(`${API_PEDIDOS}/order/list/${filter}`);

const saveOrder = (dataOrder) =>
  axios.post(`${API_PEDIDOS}/order/save/${type}`, getFormData(dataOrder));

const updateOrder = (id, dataOrder) =>
  axios.post(
    `${API_PEDIDOS}/order/update/${type}/${id}`,
    getFormData(dataOrder)
  );

const toggleOrder = (id) =>
  axios.post(`${API_PEDIDOS}/order/down/${type}/${id}`);

export const orderService = {
  getOrders,
  saveOrder,
  updateOrder,
  toggleOrder,
};
