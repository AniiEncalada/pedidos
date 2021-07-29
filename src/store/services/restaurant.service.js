import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const type = 2;
const getRestaurants = () => axios.post(`${API_PEDIDOS}/shop/list`);

const updateRestaurant = (id, dataRestaurant) =>
  axios.post(`${API_PEDIDOS}/shop/update/${type}/${id}`, dataRestaurant);

export const restaurantService = { getRestaurants, updateRestaurant };
