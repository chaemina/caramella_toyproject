"use client";

import React, { useState } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { InputBox } from "../atoms/InputBox";
import { emailcheck, signup, emailcode, authextend } from "../../apis/user";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
import Btn from "../atoms/Btn";
import useTimer from "../hooks/useTimer";
import Timer from "../atoms/Timer";
import BasicDatePicker from "../atoms/BasicDatePicker";
import useInputError from "../hooks/useInputError";

const Signup = ({ inputProps }) => {
  const router = useRouter();
  const methods = useForm();
  const { watch, control, handleSubmit, setError, clearErrors } = methods;
  const name = watch("name");
  const phone = watch("phone");
  const email = watch("email");
  const password = watch("password");
  const passwordCheck = watch("passwordcheck");
  const birth = watch("birth");
  const [isdisabled, setdisabled] = useState(false);
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(null);
  const { handleInputError } = useInputError(setError);

  // 1. 이메일 인증 요청  -> 이메일 담아서 POST 요청 & count down 하기
  // 2. 인증 시간 연장 요청 -> count down 값 늘리기
  // 3. 이메일 인증 요청 시간 초과 시 -> 에러 코드에 따라 에러 처리
  // 4. 이메일 코드 입력
  // 성공 시 -> 버튼 disabled
  // 실패 시 -> 에러 코드에 따라 에러 처리

  // 이메일 인증 버튼
  const handleEmailCheck = async (data) => {
    try {
      const response = await emailcheck({
        type: "create",
        email: email,
      });
      if (response?.status === 201) {
        // 인증 요청 성공 했을 때만
        setdisabled(false);
        const fadeEls = document.querySelectorAll(".MuiStack-root.fade-in");
        fadeEls.forEach((fadeEl, index) => {
          fadeEl.style.display = "flex";
        });
        useTimer((newTimer) => setTimer(newTimer));
      } else {
        handleInputError(
          "email",
          "이메일 인증 중 오류가 발생했습니다. 다시 시도하세요."
        );
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        handleInputError("email", "이메일 입력 후 다시 시도하세요.");
      } else {
        console.log("error");
      }
      // 인증 요청 실패 시 토스트로 에러 처리
    }
  };

  // 연장 버튼
  const handleRestart = async (data) => {
    try {
      const response = await authextend({
        type: "create",
        email: email,
      });
      if (response?.status === 201) {
        // 연장 요청 성공 시
        useTimer((newTimer) => setTimer(newTimer));
      } else {
        handleInputError(
          "email",
          "연장 요청에 실패하였습니다. 다시 시도하세요."
        );
      }
    } catch (error) {
      // 연장 요청 실패 시 토스트로 에러 처리
      if (error?.response?.status === 400) {
        handleInputError(
          "email",
          "연장 요청에 실패하였습니다. 다시 시도하세요."
        );
      } else {
        console.log("error");
      }
    }
  };

  // 이메일 코드 확인 버튼
  const handleConfirm = async (data) => {
    try {
      const response = await emailcode({
        type: "create",
        email: email,
        code: code,
      });
      if (response?.status === 201) {
        console.log("성공");
        setdisabled(true);
        setTimer(null);
      } else {
        console.log("실패");
      }
    } catch (error) {
      if (error?.response?.status === 400) {
        console.log("인증 코드가 올바르지 않습니다. 다시 입력해주세요.");
      }
    }
  };

  // 인증 시간 만료 시
  const handleTimerExpire = () => {
    console.warn("Timer expired!");
    setdisabled(true);
  };

  const handlePasswordConfirm = () => {
    if (password && passwordCheck) {
      if (password !== passwordCheck) {
        handleInputError(
          "passwordcheck",
          "비밀번호가 일치하지 않습니다. 입력한 비밀번호로 다시 시도해주세요."
        );
        return false;
      } else {
        clearErrors("passwordcheck");
        return true;
      }
    }
    return false;
  };

  // 회원가입 요청
  const onSubmit = async () => {
    try {
      const passwordIsValid = await handlePasswordConfirm(password);

      if (passwordIsValid) {
        let birthDate = null;
        if (birth && birth.$d) {
          birthDate = birth.format("YYYY-MM-DD");
        }

        const response = await signup({
          email: email,
          password: password,
          phone: phone,
          birth: birthDate,
          name: name,
        });

        if (response?.status === 201) {
          console.log("login success");
          router.push("/");
          // 회원가입 성공 토스트
        } else {
          // 회원가입 실패
          handleInputError(
            "email",
            "회원가입 중 오류가 발생했습니다. 다시 시도하세요."
          );
          handleInputError(
            "password",
            "회원가입 중 오류가 발생했습니다. 다시 시도하세요."
          );
        }
      } else {
      }
    } catch (error) {
      // 에러 코드 처리
      if (error?.response?.status === 401) {
        handleInputError(
          "email",
          "이메일이 인증되지 않았습니다. 인증 후 다시 시도하세요."
        );
      } else if (error?.response?.status === 409) {
        handleInputError(
          "email",
          "사용 중인 이메일입니다. 다른 이메일로 시도하세요."
        );
      } else if (error?.response?.status === 400) {
        handleInputError(
          "email",
          "회원 가입 중 오류가 발생했습니다. 다시 시도하세요."
        );
      } else {
        handleInputError(
          "email",
          "회원가입 중 오류가 발생했습니다. 다시 시도하세요."
        );
        handleInputError(
          "password",
          "회원가입 중 오류가 발생했습니다. 다시 시도하세요."
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
            className={inputField.className}
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
          <Stack direction="row" spacing={2} className="fade-in mt-5 w-full">
            <input
              className="h-[2rem] mt-2 max-w-[10rem]"
              placeholder="인증 코드를 입력하세요."
              onChange={(e) => {
                setCode(e.target.value);
              }}
            ></input>
            <Timer
              className="text-m mt-2 w-[2rem]"
              timer={timer}
              onExpire={handleTimerExpire}
            />
            <Btn
              variant="contained"
              className="w-[2rem] h-[2rem] bg-blue-400"
              onClick={handleRestart}
              disabled={isdisabled}
            >
              연장
            </Btn>
            <Btn
              variant="contained"
              className="w-[2rem] h-[2rem] bg-blue-400"
              onClick={handleConfirm}
              disabled={isdisabled}
            >
              확인
            </Btn>
          </Stack>
          {inputProps
            .filter((inputField) => inputField.name !== "email")
            .map(renderController)}
          <Controller
            name="birth"
            control={methods.control}
            render={(field) => (
              <BasicDatePicker
                {...field}
                control={methods.control}
                name="birth"
                value={birth}
              />
            )}
          />
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
