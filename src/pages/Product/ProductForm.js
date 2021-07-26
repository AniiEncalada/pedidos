import { Input, Select } from "components/Input";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export const ProductForm = () => {
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data) => {};

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input name="name_product" placeholder="Nombre/denominación" />
          </div>
          <div className="col-md-6">
            <Input name="cost_product" placeholder="Costo" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input name="measure_product" placeholder="Medida del producto" />
          </div>
          <div className="col-md-6">
            <Input
              name="stok_product"
              placeholder="Cantidad de unidades disponibles"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input name="tags" placeholder="Etiquetas" />
          </div>
          <div className="col-md-6">
            <Input
              name="short_promotional_text_product"
              placeholder="Lema del producto"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="description_product"
              placeholder="Descripción del producto"
            />
          </div>
          <div className="col-md-6">
            <Input
              name="nutritional_value_product"
              placeholder="Valor nutricional del producto"
            />
          </div>
        </div>
        <Select name="category" options={["data", "datita"]} />
      </form>
    </FormProvider>
  );
};
