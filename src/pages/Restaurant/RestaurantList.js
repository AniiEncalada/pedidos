import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tableConstant } from "./tableConstant";
import { Table } from "components/Table";
import { getRestaurants } from "store/actions/resturant.action";

export const RestaurantList = () => {
  const { data } = useSelector((state) => state.restaurant);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const handleEdit = (item) => {};

  return <Table cols={tableConstant(handleEdit)} data={data} hoverable />;
};
