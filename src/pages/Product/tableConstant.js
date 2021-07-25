import React from "react";

export const tableConstant = (handleEdit) => {
  return [
    {
      title: "Nombre",
      render: (rowData) => <span>{rowData.name_category}</span>,
    },
    {
      title: "Color",
      render: (rowData) => <span>{rowData.color_category}</span>,
    },
  ];
};
