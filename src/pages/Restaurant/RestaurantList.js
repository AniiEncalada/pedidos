import { Table } from "components/Table";
import { tableConstant } from "./tableConstant";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantList = () => {
  const { data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch();
  }, [dispatch]);

  const handleEdit = (item) => {};
  return <Table cols={tableConstant(handleEdit)} data={data} hoverable />;
};
