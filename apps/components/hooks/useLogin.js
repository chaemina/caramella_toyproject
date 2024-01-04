"use client";

const useLogin = () => {
  const loginUser = (response) => {
    window.localStorage.setItem("token", response.headers["authorization"]);
  };
  const logoutUser = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("MSW_COOKIE_STORE");
    document.cookie =
      "refreshToken=cookie1234; expires=Sat, 01 Jan 1972 00:00:00 GMT";
    window.location.reload();
  };

  return { loginUser, logoutUser };
};

export default useLogin;
