import React from "react";
import { ActionButton } from "components/Button";

export const tableConstant = (handleToggle) => {
  return [
    {
      title: "Estado",
      render: (rowData) => (
        <span className={`badge badge-secondary`}>{rowData.estado}</span>
      ),
    },
    {
      title: "Tienda",
      render: (rowData) => <span>{rowData.shop}</span>,
    },
    {
      title: "Productos",
      render: (rowData) => <span>{rowData.order.length} Productos</span>,
    },
    {
      title: "Valor Total",
      render: (rowData) => (
        <span className="text-success">
          ${parseFloat(rowData.valor_total).toFixed(2)}
        </span>
      ),
    },
    {
      title: "Dirección",
      render: (rowData) => (
        <p>
          <span className="d-block">{rowData.address_shop?.principal_st}</span>
          <span className="text-muted">
            {rowData.address_shop?.secondary_st}
          </span>
        </p>
      ),
    },
    {
      title: "Acciones",
      render: (rowData) => (
        <div className="btn-table">
          {/* <ActionButton icon>
            <i className="fas fa-eye" />
          </ActionButton> */}

          <ActionButton
            icon
            onClick={() => {
              handleToggle(rowData._id);
            }}
          >
            <i className="fas fa-toggle-on" />
          </ActionButton>
        </div>
      ),
    },
  ];
};
