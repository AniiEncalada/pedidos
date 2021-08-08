import * as yup from "yup";
import { VALIDATIONS } from "utils/constants";

/* eslint-disable no-template-curly-in-string */
yup.setLocale({
  mixed: {
    required: "El campo es requerido.",
    notType: "El valor no es válido.",
  },
  string: {
    min: "Escriba al menos ${min} caracter(es).",
    max: "Escriba no más de ${max} caracter(es).",
    email: "El correo ingresado no es válido.",
  },
  number: {
    min: "El valor ingresado debe ser mayor o igual a ${min}.",
    max: "El valor ingresado debe ser menor o igual a ${max}.",
    integer: "El valor ingresado debe ser un número entero.",
  },
  date: {
    min: "La fecha indicada ya ha pasado.",
    max: "El valor indicado no puede exceder la fecha ${max}.",
  },
});

yup.addMethod(yup.mixed, "requiredFile", function () {
  return this.test(
    "requiredFile",
    "El archivo es requerido.",
    (value) => !!value[0]
  );
});

yup.addMethod(yup.mixed, "fileSize", function (size) {
  const limitSize = VALIDATIONS.BASE_SIZE * size;
  return this.test(
    "fileSize",
    `El archivo no debe sobrepasar los ${
      size >= VALIDATIONS.BASE_SIZE ? size / 1024 + "MB" : size + "kB"
    }.`,
    (value) => (!value[0] ? true : value[0].size <= limitSize)
  );
});

yup.addMethod(yup.mixed, "fileType", function (types) {
  return this.test(
    "fileType",
    `El archivo solo debe ser de tipo: ${types.toString()}.`,
    (value) => (!value[0] ? true : types.includes(value[0].type))
  );
});

export const loginSchema = yup.object({
  email: yup.string().required().email().trim(),
  password: yup.string().required(),
});

export const addressSchema = yup.object({
  name_address: yup.string().required().trim(),
  country_address: yup.string().required().trim(),
  province_address: yup.string().required().trim(),
  canton_address: yup.string().required().trim(),
  city_address: yup.string().required().trim(),
  main_street_address: yup.string().required().trim(),
  secondary_street_address: yup.string().trim(),
  parish_address: yup.string().trim(),
  house_number_address: yup.string().trim(),
  reference_address: yup.string().trim(),
  latitude_address: yup.string().trim(),
  longitude_address: yup.string().trim(),
});

export const productSchema = yup.object({
  name_product: yup.string().required().trim(),
  cost_product: yup.number().required().min(0),
  measure_product: yup.string().required().trim(),
  stok_product: yup.number().required().min(0),
  category: yup.string().required().trim(),
  tags_input: yup.string().required().trim(),
  short_promotional_text_product: yup.string().trim(),
  description_product: yup.string().trim(),
  nutritional_value_product: yup.string().trim(),
  required_image_product: yup.boolean(),
  image_product: yup.mixed().when("required_image_product", {
    is: true,
    then: yup
      .mixed()
      .requiredFile()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
    otherwise: yup
      .mixed()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
  }),
});

export const restaurantSchema = yup.object({
  name_shop: yup.string().required().trim(),
  phone_shop: yup.string().required().trim(),
  email_shop: yup.string().required().email().trim(),
  country_address: yup.string().required().trim(),
  province_address: yup.string().required().trim(),
  canton_address: yup.string().required().trim(),
  city_address: yup.string().required().trim(),
  main_street_address: yup.string().required().trim(),
  secondary_street_address: yup.string().trim(),
  promotional_text_shop: yup.string().trim(),
  catchword_shop: yup.string().trim(),
  bank_shop: yup.string().trim(),
  bank_account_shop: yup.string().trim(),
  bank_account_owner_shop: yup.string().trim(),
  required_image_shop: yup.boolean(),
  image_profile_shop: yup
    .mixed()
    .fileSize(1024)
    .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
  image_shop: yup.mixed().when("required_image_shop", {
    is: true,
    then: yup
      .mixed()
      .requiredFile()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
    otherwise: yup
      .mixed()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
  }),
});

export const orderSchema = yup.object({
  name_shop: yup.string().required().trim(),
  phone_shop: yup.string().required().trim(),
  email_shop: yup.string().required().email().trim(),
  country_address: yup.string().required().trim(),
  province_address: yup.string().required().trim(),
  canton_address: yup.string().required().trim(),
  city_address: yup.string().required().trim(),
  main_street_address: yup.string().required().trim(),
  secondary_street_address: yup.string().trim(),
  promotional_text_shop: yup.string().trim(),
  catchword_shop: yup.string().trim(),
  bank_shop: yup.string().trim(),
  bank_account_shop: yup.string().trim(),
  bank_account_owner_shop: yup.string().trim(),
  required_image_shop: yup.boolean(),
  image_profile_shop: yup
    .mixed()
    .fileSize(1024)
    .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
  image_shop: yup.mixed().when("required_image_shop", {
    is: true,
    then: yup
      .mixed()
      .requiredFile()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
    otherwise: yup
      .mixed()
      .fileSize(1024)
      .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
  }),
});
