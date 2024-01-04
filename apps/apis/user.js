import { instance } from "./instance";

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/auth/login", {
    email,
    password,
  });
};

export const signup = (data) => {
  const { email, phone, name, birth, password } = data;
  return instance.post("/auth/signup", {
    email,
    password,
    phone,
    name,
    birth,
  });
};

export const emailcheck = (data) => {
  const { type, email } = data;
  return instance.post("/auth/email", {
    type,
    email,
  });
};

export const emailcode = (data) => {
  const { type, email, code } = data;
  return instance.post("/auth/verify", {
    type,
    email,
    code,
  });
};

export const authextend = (data) => {
  const { type, email } = data;
  return instance.post("/auth/extend", {
    type,
    email,
  });
};

export const duplicatecheck = (data) => {
  const { email } = data;
  return instance.post("/auth/check", {
    email,
  });
};
