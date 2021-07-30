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
  image_product: yup
    .mixed()
    .requiredFile()
    .fileSize(1024)
    .fileType(VALIDATIONS.SUPPORTED_IMAGE_FORMATS),
});
