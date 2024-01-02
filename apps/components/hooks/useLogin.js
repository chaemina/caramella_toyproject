// jotai 쓸지 말지..
const useLogin = () => {
  const loginUser = (response) => {
    window.localStorage.setItem("token", response?.headers?.authorization);
  };
  const logoutUser = () => {
    window.localStorage.removeItem("token");

    window.reload();
  };

  return { loginUser, logoutUser };
};

export default useLogin;
