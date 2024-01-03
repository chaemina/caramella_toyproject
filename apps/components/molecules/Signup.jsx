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

  const handleEmailCheck = () => {
    return console.log("email check");
  };

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

  const renderController = (inputField) => {
    return (
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
            error={fieldState.invalid}
            helperText={fieldState.invalid ? fieldState.error.message : ""}
            triggerValidation={methods.trigger}
          />
        )}
      />
    );
  };

  // 1. 이메일 인증 요청  -> 이메일 담아서 POST 요청 & count down 하기
  // 2. 인증 시간 연장 요청 -> count down 값 늘리기
  // 3. 이메일 인증 요청 시간 초과 시 -> 에러 코드에 따라 에러 처리
  // 4. 이메일 코드 입력
  // 성공 시 -> 버튼 disabled
  // 실패 시 -> 에러 코드에 따라 에러 처리

  return (
    <main className="w-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5} direction="row" className="mt-5 w-full">
            {inputProps
              .filter((props) => props.name === "email")
              .map(renderController)}

            <Btn
              variant="outlined"
              className="w-[10em] mt-10 h-[4em] bg-blue-400"
              onClick={handleEmailCheck}
            >
              이메일 인증
            </Btn>
          </Stack>
          {inputProps
            .filter((inputField) => inputField.name !== "email")
            .map(renderController)}
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
