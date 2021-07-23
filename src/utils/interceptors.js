import axios from "axios";
import { AUTH } from "./constants";

export const interceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Basic ${Buffer.from(AUTH).toString(
        "base64"
      )}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
  axios.interceptors.response.use((response) => {
    const { data } = response;
    if (data.status === "warning") {
      return Promise.reject(data);
    }
    console.log(response);
    return response;
  });
};
