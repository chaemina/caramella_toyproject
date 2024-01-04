import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Toast({
  open,
  handleClose,
  handleOk,
  message,
  severity,
  children,
  autoHideDuration,
  sx,
}) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration || 5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        sx={
          sx || {
            width: "100%",
          }
        }
        action={<>{children}</>}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}
