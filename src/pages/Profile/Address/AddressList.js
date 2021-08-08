import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddresses } from "store/actions/auth.action";
import { AddressItem } from "./AddressItem";

export const AddressList = () => {
  const { data } = useSelector((state) => state.address);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAddresses());
  }, [dispatch]);

  return (
    <div className="row">
      {data.length === 0 ? (
        <div className="col">No hay ninguna dirección registrada</div>
      ) : (
        data.map((address, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <AddressItem address={address} index={index} />
          </div>
        ))
      )}
    </div>
  );
};
