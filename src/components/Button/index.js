import React from "react";

export const Button = ({onClick, children, className, ...restProps }) => {
  return (
    <button onClick={onClick} className={`${className} common-button`} {...restProps}>
      {children}
    </button>
  );
};
