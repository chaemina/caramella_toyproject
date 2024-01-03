import React, { forwardRef } from "react";
import Button from "@mui/material/Button";

const Btn = forwardRef(
  ({ onClick, type, children, variant, className, disabled, href }, ref) => {
    return (
      <>
        <Button
          disabled={disabled}
          ref={ref}
          onClick={onClick}
          type={type}
          variant={variant}
          className={className}
          {...(typeof href === "string" && { href })} // href 값이 문자열인 경우에만
        >
          {children}
        </Button>
      </>
    );
  }
);

export default Btn;
