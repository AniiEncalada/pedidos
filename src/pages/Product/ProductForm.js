import { ActionButton } from "components/Button";
import { Input, Select } from "components/Input";
import { useYupValidationResolver } from "hooks/useYupValidationResolver";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "store/actions/category.action";
import { saveProduct } from "store/actions/product.action";
import { productSchema } from "utils/validations";

export const ProductForm = () => {
  const resolver = useYupValidationResolver(productSchema);
  const methods = useForm({ resolver });
  const { handleSubmit } = methods;

  const { data: userData } = useSelector((state) => state.auth);
  const options = useSelector((state) =>
    state.category.data.map((item) => ({
      value: item._id,
      label: item.name_category,
    }))
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onSubmit = (data) => {
    data.shop = userData._id;
    data.image_product = data.image_product[0];
    dispatch(saveProduct(data));
  };

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
            <Select
              name="category"
              placeholder="Seleccione una categoría"
              options={options}
            />
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

        <Input name="tags_input" placeholder="Etiquetas" />

        <Input
          type="file"
          name="image_product"
          className="pick_image"
          label="Imágen del producto"
          accept="image/*"
        />

        <ActionButton>Guardar Cambios</ActionButton>
      </form>
    </FormProvider>
  );
};
