import { ActionButton } from "components/Button";
import React from "react";
import { API_PEDIDOS } from "utils/constants";

export const tableConstant = (handleEdit) => {
  return [
    {
      title: "",
      render: (rowData) => (
        <div className="image-table">
          <img
            className="rounded img-fluid"
            src={`${API_PEDIDOS}${rowData.image_shop}`}
            alt={rowData.name_shop}
          />
        </div>
      ),
    },
    {
      title: "Nombre",
      render: (rowData) => (
        <p>
          <span className="d-block">{rowData.name_shop}</span>
          <span
            className={`badge badge-${
              rowData.active_shop ? "success" : "danger"
            }`}
          >
            {rowData.active_shop ? "Activa" : "Inactiva"}
          </span>
        </p>
      ),
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
        <p>
          <span className="d-block">{rowData.address_shop.principal_st}</span>
          <span className="text-muted">
            {rowData.address_shop.secondary_st}
          </span>
        </p>
      ),
    },
    {
      title: "Acciones",
      render: (rowData) => (
        <div className="btn-table">
          <ActionButton icon>
            <i className="fas fa-eye" />
          </ActionButton>
          <ActionButton icon>
            <i className="fas fa-edit" />
          </ActionButton>
          <ActionButton icon>
            <i className="fas fa-trash" />
          </ActionButton>
        </div>
      ),
    },
  ];
};
