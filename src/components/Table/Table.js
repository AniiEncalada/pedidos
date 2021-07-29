import React from "react";
import classNames from "classnames";

export const Table = ({ cols, data, bordered, hoverable, ...rest }) => {
  const tableClass = classNames("table", {
    "table-bordered": bordered,
    "table-hoverable": hoverable,
  });
  return (
    <div className="table-responsive">
      <table className={tableClass} {...rest}>
        <thead>
          <tr>
            {cols.map((item, index) => (
              <th key={index}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {cols.map((col, key) => (
                <td key={key} className="align-middle">
                  {col.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
