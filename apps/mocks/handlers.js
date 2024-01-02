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

    // if (!authorizationHeader) {
    //   return res(
    //     ctx.status(403),
    //     ctx.json({
    //       errorMessage: "Not authenticated",
    //     })
    //   );
    // }
    const response = { user };

    return res(
      ctx.status(201),
      // ctx.set("Set-Cookie", `mySecret=${token}`),
      ctx.json({
        message: "Login successful",
        data: response,
        status: 200,
      }),
      ctx.set(headers)
    );
  }),
];
