"use client";

import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { InputBox } from "../atoms/InputBox";
import { login } from "../../apis/user";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/navigation";
import useInputError from "../hooks/useInputError";
import Stack from "@mui/material/Stack";
import Btn from "../atoms/Btn";

const Login = ({ inputProps }) => {
  const { loginUser } = useLogin();
  const router = useRouter();
  const methods = useForm();
  const { watch, control, handleSubmit, setError } = methods;
  const email = watch("email");
  const password = watch("password");
  const { handleInputError } = useInputError(setError);

  const onSubmit = async (data) => {
    try {
      const response = await login({
        email: email,
        password: password,
      });

      console.log(response.headers["authorization"]);
      console.log(data);

      if (response?.status === 200) {
        // loginUser(response); // token storage에 저장하는 hook 작성
        loginUser(response);
        console.log("login success");
        router.push("/");
      } else {
        // 로그인 실패
        handleInputError(
          "email",
          "로그인 중 오류가 발생했습니다. 다시 시도하세요."
        );
        handleInputError(
          "password",
          "로그인 중 오류가 발생했습니다. 다시 시도하세요."
        );
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        handleInputError(
          "password",
          "비밀번호가 일치하지 않습니다. 다시 시도하세요."
        );
      } else if (error?.response?.status === 401) {
        handleInputError("email", "존재하지 않는 id 입니다. 다시 시도하세요.");
      } else {
        handleInputError(
          "email",
          "로그인 중 오류가 발생했습니다. 다시 시도하세요."
        );
        handleInputError(
          "password",
          "로그인 중 오류가 발생했습니다. 다시 시도하세요."
        );
      }
    }
  };
  return (
    <main className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputProps.map((inputField) => (
            <Controller
              name={inputField.name}
              key={inputField.name}
              control={methods.control}
              defaultValue=""
              rules={inputField.rules}
              render={({ field, fieldState }) => (
                <InputBox
                  {...field}
                  id={inputField.name}
                  label={inputField.label}
                  variant={inputField.variant}
                  type={inputField.type}
                  placeholder={inputField.placeholder}
                />
              )}
            />
          ))}
          <Btn
            type="submit"
            variant="contained"
            className="w-full mt-10 h-[4em] bg-blue-400"
          >
            LogIn
          </Btn>
          <Stack spacing={2} direction="row" className="mt-5 w-full">
            <Btn
              variant="contained"
              className="w-1/2 bg-blue-400 h-[4em]"
              href="/signup"
            >
              Sign up
            </Btn>
            <Btn variant="contained" href className="w-1/2 bg-blue-400 h-[4em]">
              ID/PW 찾기
            </Btn>
          </Stack>
        </form>
      </FormProvider>
    </main>
  );
};

export default Login;
