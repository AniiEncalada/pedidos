export const API_PEDIDOS = process.env.REACT_APP_API_PEDIDOS;
export const ACCESS_TOKEN = localStorage.getItem("access-token");
export const AUTH = process.env.REACT_APP_AUTH || "";

export const VALIDATIONS = {
  BASE_SIZE: 1024,
  SUPPORTED_IMAGE_FORMATS: [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ],
};
