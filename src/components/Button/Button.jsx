import "./Button.css";
import React from "react";

const Button = ({ type = "button", func, DA, name }) => {
  return (
    <button type={type} onClick={func} data-action={DA}>
      <strong>{name}</strong>
    </button>
  );
};

export default Button;

/* const focusInputRef = useRef(null);

  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
 
  }, []); */
