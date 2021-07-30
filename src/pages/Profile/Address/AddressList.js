import React from "react";
import { AddressItem } from "./AddressItem";

const addresses = [];

export const AddressList = () => {
  return (
    <div className="row">
      {addresses.map((address, index) => (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
          <AddressItem address={address} index={index} />
        </div>
      ))}
    </div>
  );
};
