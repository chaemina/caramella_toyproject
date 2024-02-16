import { rest } from "msw";

export const handlers = [
  //login
  rest.post("/auth/login", async (req, res, ctx) => {
    // req에 접근해서 user와 일치 확인

    const user = {
      email: "chaemina@caramella.kr",
      password: "password1234!",
    };
    const accessToken = "Bearer accessToken";

    const headers = {
      Authorization: accessToken,
    };
    const response = { user };

    return res(
      ctx.status(200),
      ctx.cookie("refreshToken", "cookie1234"),
      ctx.json({
        message: "Login successful",
        data: response,
        status: 200,
      }),
      ctx.set(headers)
    );
  }),

  // 회원가입
  rest.post("/auth/signup", async (req, res, ctx) => {
    // req에 접근해서 user와 일치 확인

    const user = {
      email: "chaemina@caramella.kr",
      password: "password1234!",
      phone: "010-0000-0000",
      name: "채민아",
      birth: "2002-06-07",
    };

    const response = { user };

    return res(
      ctx.status(201),
      ctx.json({
        message: "signup successful",
        data: response,
        status: 200,
      })
    );
  }),



// 개선사항 
  rest.post("/improve", async (req, res, ctx) => {

    const data = {
      input : "간단한 개선 사항을 남겨주세요."
    };

    const response = { data };

    return res(
      ctx.status(200),
      ctx.json({
        message: "successful",
        data: response,
        status: 200,
      }),
    );
  }),


];
