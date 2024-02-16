import { instance } from "./instance";

export const improve = (data) => {
    const { input } = data;
    return instance.post("/improve", input);
  };