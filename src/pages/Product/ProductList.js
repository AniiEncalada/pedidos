import { Table } from "components/Table";
import { tableConstant } from "pages/Product/tableConstant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "store/actions/product.action";

export const ProductList = () => {
  const { data } = useSelector((state) => state.product);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleEdit = (item) => {};
  return <Table cols={tableConstant(handleEdit)} data={data} hoverable />;
};
