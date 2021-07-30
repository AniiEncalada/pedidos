import { ActionButton } from "components/Button";
import { Input, Select } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "store/actions/category.action";
import { saveProduct, updateProduct } from "store/actions/product.action";
import { getRestaurants } from "store/actions/resturant.action";
import { API_PEDIDOS } from "utils/constants";
import { productSchema } from "utils/validations";

export const ProductForm = ({ product = {} }) => {
  const resolver = useYupValidationResolver(productSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const optionsCategory = useSelector((state) =>
    state.category.data.map((item) => ({
      value: item._id,
      label: item.name_category,
    }))
  );

  const optionsRestarant = useSelector((state) =>
    state.restaurant.data.map((item) => ({
      value: item._id,
      label: item.name_shop,
    }))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getRestaurants());
  }, [dispatch]);

  const onSubmit = (data) => {
    data.image_product = data.image_product[0];
    product._id
      ? dispatch(updateProduct(product._id, data))
      : dispatch(saveProduct(data));
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
              defaultValue={product.category}
              options={optionsCategory}
            />
          </div>
          <div className="col-md-6">
            <Select
              name="shop"
              placeholder="Seleccione un restaurant"
              defaultValue={product.shop}
              options={optionsRestarant}
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
                name="new_image_product"
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
