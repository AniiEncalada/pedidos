import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

const getCategories = () => axios.post(`${API_PEDIDOS}/category/list`);

export const categoryService = { getCategories };
