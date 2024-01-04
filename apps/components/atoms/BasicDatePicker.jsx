import React, { forwardRef } from "react";
import { useController } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material";
import dayjs from "dayjs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#60a5fa",
    },
  },
});

const maxDate = dayjs("2024-01-01");

const BasicDatePicker = forwardRef((props, ref) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { invalid, error },
  } = useController({
    name: props.name,
    control: props.control,
    rules: { required: "생년월일을 입력해주세요." },
  });

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onBlur={onBlur}
          value={value || null}
          inputRef={ref}
          label="Birth"
          id="birthDate"
          name={props.name}
          format="YYYY-MM-DD"
          maxDate={maxDate}
          slotProps={{
            textField: {
              variant: "outlined",
              error: invalid,
              helperText: error ? error.message : "",
            },
          }}
          onChange={(data) => {
            onChange(data);
          }}
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
});

export default BasicDatePicker;
