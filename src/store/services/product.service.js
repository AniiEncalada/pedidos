import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const getProducts = () => axios.post(`${API_PEDIDOS}/product/list/`);

export const productService = { getProducts };
