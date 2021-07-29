import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const getRestaurants = () => axios.post(`${API_PEDIDOS}/shop/list`);

export const restaurantService = { getRestaurants };
