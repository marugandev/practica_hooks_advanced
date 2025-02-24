import "./Button.css";
import React from "react";

const Button = ({ type = "button", func, DA, name }) => {
  return (
    <button type={type} onClick={func} data-action={DA}>
      {name}
    </button>
  );
};

export default Button;
