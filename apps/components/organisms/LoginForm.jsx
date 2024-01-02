"use client";

import Title from "../atoms/Title";
import LOGIN from "../constants/LOGIN";
import Login from "../molecules/Login";

const LoginForm = ({ className }) => {
  return (
    <>
      <div className={`justify-center flex flex-col ${className}`}>
        <Title>Log In</Title>
        <div className="mt-4 max-w-[45em] flex flex-col justify-center items-center">
          <Login inputProps={LOGIN} />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
