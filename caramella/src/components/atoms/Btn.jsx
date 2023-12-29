import React from "react";
import Button from "@mui/material/Button";

const Btn = ({ children, variant, onClick }) => {
  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {children}
      </Button>
    </>
  );
};

export default Btn;
