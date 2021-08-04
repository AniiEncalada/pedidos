import axios from "axios";
import { getFormData } from "utils/functions";
import { API_PEDIDOS } from "../../utils/constants";

const type = 2;

const getRestaurants = (filter) =>
  axios.post(`${API_PEDIDOS}/shop/list/${filter}`);

const saveRestaurant = (dataRestaurant) =>
  axios.post(`${API_PEDIDOS}/shop/save/${type}`, getFormData(dataRestaurant));

const updateRestaurant = (id, dataRestaurant) =>
  axios.post(
    `${API_PEDIDOS}/shop/update/${type}/${id}`,
    getFormData(dataRestaurant)
  );

const toggleRestaurant = (id) =>
  axios.post(`${API_PEDIDOS}/shop/down/${type}/${id}`);

export const restaurantService = {
  getRestaurants,
  saveRestaurant,
  updateRestaurant,
  toggleRestaurant,
};
