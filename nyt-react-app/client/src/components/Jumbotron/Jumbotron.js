import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className="jumbotron text-center text-light bg-secondary">
    {children}
  </div>;

export default Jumbotron;