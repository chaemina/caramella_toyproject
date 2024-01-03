import { instance } from "./instance";

// export const login = (data) => {
//   const { email, password } = data;
//   return instance.post("/users/login", {
//     email,
//     password,
//   });
// };

// mock api
// export const login = (data) => {
//   axios
//     .post("/login")
//     .then((res) => {
//       const { data, status } = res;
//       console.log(data);
//       console.log(status);
//     })
//     .catch((error) => console.log(error));
// };

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/auth/login", {
    email,
    password,
  });
};
