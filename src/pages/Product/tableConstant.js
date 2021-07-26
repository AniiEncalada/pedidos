import React from "react";

export const tableConstant = (handleEdit) => {
  return [
    {
      title: "Nombre",
      render: (rowData) => <span>{rowData.name_product}</span>,
    },
    {
      title: "Costo",
      render: (rowData) => <span>{rowData.cost_product}</span>,
    },
    {
      title: "Cantidad de unidades",
      render: (rowData) => <span>{rowData.stok_product}</span>,
    },
    {
      title: "Categoría",
      render: (rowData) => <span>{rowData.category}</span>,
    },
    {
      title: "Acciones",
      render: (rowData) => <span></span>,
    },
  ];
};
