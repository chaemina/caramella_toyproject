"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.png";
import Dropdown from "../atoms/Dropdown";
import Divider from "@mui/material/Divider";
import Btn from "./Btn";
import { MdAccountCircle } from "react-icons/md";

const Header = () => {
  const auth = localStorage.getItem("token");

  return (
    <div className="w-full h-[100px] fixed bg-gray-50 top-0 z-9">
      <div className="flex w-[90%] h-full items-center justify-between pl-6 pr-6">
        <Link href="/">
          <Image src={Logo} href="/" width={200} height={30} alt="logo"></Image>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Dropdown
              items={[
                { name: "네이버 웍스 기능 요청", path: "/combine/works" },
                { name: "신규 팀원 계정 생성", path: "/path2" },
              ]}
            >
              통합 지원
            </Dropdown>
          </li>
          <li>
            <Dropdown
              items={[
                { name: "서버 자원 할당 요청", path: "/path1" },
                { name: "DB 자원 할당 요청", path: "/path2" },
                { name: "SW 사용 / 도입 요청", path: "/path3" },
                { name: "기타 자원 할당 요청", path: "/path3" },
              ]}
            >
              자원 관리
            </Dropdown>
          </li>
          <li>
            <Dropdown
              items={[
                { name: "서버 접근 권한 신규/ 변경 요청", path: "/path1" },
              ]}
            >
              권한 관리
            </Dropdown>
          </li>
          <li>
            <Dropdown
              items={[
                { name: "요청 또는 인스던트 제출", path: "/path1" },
                { name: "질문하기", path: "/path2" },
              ]}
            >
              질문
            </Dropdown>
          </li>
          <Divider orientation="vertical" variant="middle" flexItem />
          <li>
            {/* token 여부에 따라 로그인 버튼 || 계정 아이콘 */}
            {auth ? (
              <Dropdown
                items={[
                  { name: "마이 페이지", path: "/path1" },
                  { name: "로그아웃", path: "/logout" },
                ]}
              >
                <MdAccountCircle size="32" />
              </Dropdown>
            ) : (
              <Btn href="/login" variant="outlined" className="w-[6em] h-[3em]">
                LogIn
              </Btn>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
