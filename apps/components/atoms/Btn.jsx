import Button from "@mui/material/Button";

const Btn = ({ onClick, type, children, variant, className, ...props }) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        variant={variant}
        className={className}
      >
        {children}
      </Button>
    </>
  );
};

export default Btn;
