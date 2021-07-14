import React from "react";

const Button = ({ className, children, disabled, onClick }) => (
  <button onClick={onClick} disabled={disabled}>{children}</button>
);

export default Button;
