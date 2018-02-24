import React from "react";

export const Select = ({ children }) => {
  return (
    <select className="form-control">
        {children}
    </select>
  );
};