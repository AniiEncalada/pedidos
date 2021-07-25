import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const getProduct = () => axios.get(`${API_PEDIDOS}/product/list/`);

export const productService = { getProduct };
