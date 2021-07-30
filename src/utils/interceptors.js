import axios from "axios";
import { ACCESS_TOKEN, AUTH } from "./constants";

export const interceptors = () => {
  axios.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Basic ${Buffer.from(AUTH).toString(
        "base64"
      )}`;

      if (config.method === "post" || config.method === "put") {
        if (!config.data) config.data = {};
        const accessToken = JSON.parse(ACCESS_TOKEN);
        if (config.data instanceof FormData) {
          config.headers["Content-Type"] = "multipart/form-data";
          config.data.append("token", accessToken.token);
          config.data.append("verify", accessToken._id);
          config.data.append("type_query", 2);
        } else {
          config.data.token = accessToken.token;
          config.data.verify = accessToken._id;
          config.data.type_query = 2;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use((response) => {
    const { data } = response;
    if (data.status === "warning") {
      return Promise.reject(data);
    }
    console.log("[RESPONSE]", response);
    return response;
  });
};
