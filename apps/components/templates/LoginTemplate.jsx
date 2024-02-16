import LoginForm from "../organisms/LoginForm";
import Image from "next/image";
import Logo from "../../assets/images/logo.png";
import Link from "next/link";
const LoginTemplate = () => {
  return (
    <>
      <main className="flex  justify-center items-center">
        <div className="w-[1500px] mt-[5%] flex justify-center items-center">
          <div className="w-1/2 p-10 ">
            <div className="flex flex-col">
              <Image src={Logo} width={350} height={50} alt="logo"></Image>
              <p className="text-3xl">Caramella Intranet ✨</p>
              <p className="text-lg">
                카라멜라 인트라넷을 이용하기 위해서는 아이디와 비밀번호가
                필요합니다. 카라멜라 인트라넷은 카라멜라 직원만 이용이
                가능합니다.
              </p>
              <Link href="https://caramella.kr/" className="text-lg">
                카라멜라 바로가기
              </Link>
              <Link href="/" className="text-lg mt-2">
                메인 페이지로 돌아가기
              </Link>
            </div>
          </div>
          <LoginForm className="w-1/2 p-10" />
        </div>
      </main>
    </>
  );
};

export default LoginTemplate;
