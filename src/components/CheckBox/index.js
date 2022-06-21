import React from "react";

export const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      name,
      children,
      label = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        
          <input
            className={`${inputClassName}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        
        {children}
      </>
    );
  }
);
