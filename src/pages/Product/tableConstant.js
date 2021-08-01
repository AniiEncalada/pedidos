import { ActionButton } from "components/Button";
import React from "react";
import { API_PEDIDOS } from "utils/constants";

export const tableConstant = (handleEdit, handleRemove) => {
  return [
    {
      title: "",
      render: (rowData) => (
        <div className="image-table">
          <img
            className="rounded img-fluid"
            src={`${API_PEDIDOS}${rowData.image_product}`}
            alt={rowData.name_product}
          />
        </div>
      ),
    },
    {
      title: "Nombre",
      render: (rowData) => (
        <p>
          <span className="d-block">{rowData.name_product}</span>
          <span
            className={`badge badge-${
              rowData.active_product ? "success" : "danger"
            }`}
          >
            {rowData.active_product ? "Activo" : "Inactivo"}
          </span>
        </p>
      ),
    },
    {
      title: "Costo",
      render: (rowData) => (
        <span className="text-success">
          ${parseFloat(rowData.cost_product).toFixed(2)}
        </span>
      ),
    },
    {
      title: "Cantidad de unidades",
      render: (rowData) => <span>{rowData.stok_product}</span>,
    },
    {
      title: "Medida",
      render: (rowData) => <span>{rowData.measure_product}</span>,
    },
    {
      title: "Categoría",
      render: (rowData) => <span>{rowData.category}</span>,
    },
    {
      title: "Acciones",
      render: (rowData) => (
        <div className="btn-table">
          <ActionButton icon>
            <i className="fas fa-eye" />
          </ActionButton>
          <ActionButton
            icon
            onClick={() => {
              handleEdit(rowData);
            }}
          >
            <i className="fas fa-edit" />
          </ActionButton>
          <ActionButton
            icon
            onClick={() => {
              handleRemove(rowData._id);
            }}
          >
            <i className="fas fa-trash" />
          </ActionButton>
        </div>
      ),
    },
  ];
};
