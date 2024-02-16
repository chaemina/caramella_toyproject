"use client"

import Btn from "../atoms/Btn";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { improve } from "~/apis/post";
import { useRouter } from "next/navigation";


const Improve = () => {
    const router = useRouter();
    const [input, setInput] = useState("");

 
    const onSubmit = async (e) => {

        if(localStorage.getItem("token") !== null) {

        try {
          const response = await improve({
            input: input,
          });

          console.log(input);

          // token이랑 같이 보내야함 로그인 한 사용자만 보낼 수 있게

          if (response?.status === 200) {
            console.log("success");
            console.log(response)
            alert("의견이 전송 되었습니다.")
            setInput("")
            router.push("/")
          } else {
            console.log("fail");
          }
        } catch (error) {
          console.error(error);
        }

    } else {
        alert("로그인 후 이용 가능합니다.")
        router.push("/login");
        }
      };


    return (
        <>
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="text-xl font-black m-4">개선사항을 보내주세요!</div>
            <p>세부적인 요청 사항은 질문 - 요청 또는 인시던트 제출을 이용해주세요.</p>
            <TextField
              id="input"
              label="feedback"
              multiline
              rows={4}
              fullWidth
              value={input} 
              placeholder="간단한 개선 사항을 입력해주세요."
              onChange={(e) => setInput(e.target.value)}
            />
            <Btn
              onClick={onSubmit}
              type="submit"
              className="w-full mt-10 h-[4em] bg-blue-400"
            >
              보내기
            </Btn>
        </div>
        </>
    )
}

export default Improve;
