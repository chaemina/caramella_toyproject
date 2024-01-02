"use client";

import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { InputBox } from "../atoms/InputBox";
import { login } from "../../apis/user";
import useLogin from "../hooks/useLogin";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import Btn from "../atoms/Btn";

const Signup = ({ inputProps }) => {
  const { loginUser } = useLogin();
  const router = useRouter();
  const methods = useForm();
  const { watch, control, handleSubmit, setError } = methods;
  const name = watch("name");
  const phone = watch("phone");
  const email = watch("email");
  const password = watch("password");
  const passwordcheck = watch("passwordcheck");

  const onSubmit = async (data) => {
    try {
      const response = await login({
        userId: email,
        password: password,
      });
      console.log(response);

      if (response?.status === 201) {
        loginUser(response);
        console.log("login success");
        router.push("/");
      } else {
        // 로그인 실패
        setError(
          "email",
          {
            message: "로그인 중 오류가 발생했습니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          "password",
          {
            message: "로그인 중 오류가 발생했습니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
        );
        console.error("log in failed", error);
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        setError(
          "password",
          {
            message: "비밀번호가 일치하지 않습니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
        );
        console.error("log in failed", error);
      } else if (error?.response?.status === 401) {
        setError(
          "email",
          {
            message: "존재하지 않는 id입니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
        );
        console.error("log in failed", error);
      } else {
        setError(
          "email",
          {
            message: "로그인 중 오류가 발생했습니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
        );
        setError(
          "password",
          {
            message: "로그인 중 오류가 발생했습니다. 다시 시도하세요.",
          },
          {
            shouldFocus: true,
          }
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
            SIGN UP
          </Btn>
        </form>
      </FormProvider>
    </main>
  );
};

export default Signup;