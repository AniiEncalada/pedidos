import React from "react";
import { AddressItem } from "./AddressItem";

const addresses = [
  {
    main_street: "Incididunt eiusmod minim dolor magna.",
    secondary_street: "Consectetur et Lorem",
    house_number: "200-88",
    phone: "0987648972",
    reference: "Voluptate ullamco amet",
  },
  {
    main_street: "Incididunt eiusmod minim dolor magna.",
    secondary_street: "Consectetur et Lorem",
    house_number: "200-88",
    phone: "0987648972",
    reference: "Voluptate ullamco amet",
  },
  {
    main_street: "Incididunt eiusmod minim dolor magna.",
    secondary_street: "Consectetur et Lorem",
    house_number: "200-88",
    phone: "0987648972",
    reference: "Voluptate ullamco amet",
  },
  {
    main_street: "Incididunt eiusmod minim dolor magna.",
    secondary_street: "Consectetur et Lorem",
    house_number: "200-88",
    phone: "0987648972",
    reference: "Voluptate ullamco amet",
  },
];

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
