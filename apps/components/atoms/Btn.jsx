import Button from "@mui/material/Button";

const Btn = ({
  onClick,
  type,
  children,
  variant,
  className,
  href,
  ...props
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        type={type}
        variant={variant}
        className={className}
        href={href}
      >
        {children}
      </Button>
    </>
  );
};

export default Btn;
