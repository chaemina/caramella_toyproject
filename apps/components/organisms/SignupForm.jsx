"use client";

import Title from "../atoms/Title";
import SIGNUP from "../constants/SIGNUP";
import Signup from "../molecules/Signup";

const SignupForm = ({ className }) => {
  return (
    <>
      <div className={`justify-center flex flex-col ${className}`}>
        <Title>Sign Up</Title>
        <div className="mt-4 max-w-[45em] flex flex-col justify-center items-center">
          <Signup inputProps={SIGNUP} />
        </div>
      </div>
    </>
  );
};

export default SignupForm;
