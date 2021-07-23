import axios from "axios";
import { API_PEDIDOS } from "../../utils/constants";

export const getToken = async () => {
  try {
    const { data } = await axios.get(`${API_PEDIDOS}/users/token`);
    localStorage.setItem("access-token", JSON.stringify(data.data));
  } catch (error) {
    console.error(error);
  }
};

const login = (data) => axios.post(`${API_PEDIDOS}/users/login`, data);

export const authService = {
  login,
};
