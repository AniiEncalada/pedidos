import { ActionButton } from "components/Button";
import { Input, Select } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveProduct, updateProduct } from "store/actions/product.action";
import { API_PEDIDOS } from "utils/constants";
import { productSchema } from "utils/validations";

export const ProductForm = ({ product = {}, setIsShowing }) => {
  const resolver = useYupValidationResolver(productSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const optionsCategory = useSelector((state) =>
    state.category.data.map((item) => ({
      value: item._id,
      label: item.name_category,
    }))
  );

  const optionsRestaurant = useSelector((state) =>
    state.restaurant.data.map((item) => ({
      value: item._id,
      label: item.name_shop,
    }))
  );

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.image_product[0]) data.image_product = data.image_product[0];
    else data.image_product = product.image_product;

    data.tags_input = `,${data.tags_input}`;

    product._id
      ? dispatch(updateProduct(product._id, data))
      : dispatch(saveProduct(data));
    setIsShowing(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <Input
              name="name_product"
              placeholder="Nombre/denominación"
              defaultValue={product.name_product}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="cost_product"
              placeholder="Costo"
              defaultValue={product.cost_product}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="measure_product"
              placeholder="Medida del producto"
              defaultValue={product.measure_product}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="stok_product"
              placeholder="Cantidad de unidades disponibles"
              defaultValue={product.stok_product}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Select
              name="category"
              placeholder="Seleccione una categoría"
              options={optionsCategory}
              defaultValue={product.category || ""}
            />
          </div>
          <div className="col-md-6">
            <Select
              name="shop"
              placeholder="Seleccione un restaurant"
              options={optionsRestaurant}
              defaultValue={product.shop || ""}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Input
              name="description_product"
              placeholder="Descripción del producto"
              defaultValue={product.description_product}
            />
          </div>
          <div className="col-md-6">
            <Input
              name="nutritional_value_product"
              placeholder="Valor nutricional del producto"
              defaultValue={product.nutritional_value_product}
            />
          </div>
        </div>

        <Input
          name="short_promotional_text_product"
          placeholder="Lema del producto"
          defaultValue={product.short_promotional_text_product}
        />

        <Input
          name="tags_input"
          placeholder="Etiquetas"
          defaultValue={product.tags && product.tags.toString()}
          helpText="Ingrese las etiquetas que desee separadas de una coma."
        />

        <Input
          type="hidden"
          name="required_image_product"
          defaultValue={!product.image_product}
          readOnly
        />

        {product.image_product ? (
          <div className="row">
            <div className="col-md-4 image-form">
              <img
                className="rounded img-fluid"
                src={`${API_PEDIDOS}${product.image_product}`}
                alt={product.name_product}
              />
            </div>
            <div className="col-md-8">
              <Input
                type="file"
                name="image_product"
                className="pick_image"
                label="Imágen del producto"
                accept="image/*"
              />
            </div>
          </div>
        ) : (
          <Input
            type="file"
            name="image_product"
            className="pick_image"
            label="Imágen del producto"
            accept="image/*"
          />
        )}

        <ActionButton>Guardar Cambios</ActionButton>
      </form>
    </FormProvider>
  );
};
