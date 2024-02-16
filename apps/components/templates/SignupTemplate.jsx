import SignupForm from "../organisms/SignupForm";

import Link from "next/link";
const SignupTemplate = () => {
  return (
    <>
      <main className="flex  justify-center items-center">
        <div className="w-[1500px] mt-[5%] flex justify-center items-center">
          <div className=" p-10 ">
            <SignupForm />
            <Link href="/login" className="text-lg">
              이미 계정이 있으신가요?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupTemplate;
