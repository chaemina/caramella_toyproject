import React, { forwardRef } from "react";
import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f0f9ff",
      backgroundColor: "#FFFFF",
    },
    secondary: {
      main: "#60a5fa",
    },
  },
  components: {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.errorRequired": {
            color: "#FF8C00",
          },
          "&.helperTextSize": {
            fontSize: "0.8rem",
          },
        },
      },
    },
  },
});

export const InputBox = forwardRef((props, ref) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    control: props.control,
    rules: props.rules,
  });

  return (
    <ThemeProvider theme={theme}>
      <TextField
        onChange={(e) => {
          onChange(e);
          props.triggerValidation?.(props.name);
        }}
        onBlur={onBlur}
        value={value}
        inputRef={ref}
        label={props.label}
        id={props.id}
        type={props.type}
        variant={props.variant}
        name={props.name}
        multiline={props.multiline}
        rows={props.rows}
        color="secondary"
        error={invalid}
        helperText={error ? error.message : null}
        sx={{
          width: "100%",
          marginTop: 3,
          marginBottom: 2,
          ...(props.variant === "filled" && {
            "& .MuiFilledInput-root": {
              backgroundColor: `rgba(4, 4, 180, 0.05)`, //BLUE with opacity
              "&.Mui-focused": {
                backgroundColor: theme.palette.primary.backgroundColor,
              },
            },
          }),
          ...(props.variant === "outlined" && {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: theme.palette.primary.main,
              },
              "&:hover fieldset": {
                borderColor: theme.palette.secondary.main,
              },
            },
          }),
        }}
      />
    </ThemeProvider>
  );
});

export default InputBox;
