import React from "react";

export const tableConstant = (handleEdit) => {
  return [
    {
      title: "Nombre",
      render: (rowData) => <span>{rowData.name_shop}</span>,
    },
    {
      title: "Número de contacto",
      render: (rowData) => <span>{rowData.phone_shop}</span>,
    },
    {
      title: "Correo electrónico",
      render: (rowData) => <span>{rowData.email_shop}</span>,
    },
    {
      title: "Dirección",
      render: (rowData) => (
        <span>
          {rowData.principal_st} y {rowData.secondary_st}
        </span>
      ),
    },
    {
      title: "Acciones",
      render: (rowData) => <span></span>,
    },
  ];
};
