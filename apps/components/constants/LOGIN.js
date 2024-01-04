const LOGIN = Object.freeze([
  {
    name: "email",
    label: "Email",
    type: "text",
    placeholder: "email address",
    variant: "filled",
    rules: {
      required: "이메일을 입력하세요.",
      pattern: {
        // value: /^[a-zA-Z0-9._-]{2,4}$/,
        message: "이메일 형식으로 입력하세요.",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "password",
    variant: "filled",
    rules: {
      required: "비밀번호를 입력하세요.",
      pattern: {
        // value:
        //   /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~`<>,./?;:'"\[\]{}\\()|_-])\S{8,16}$/,
        message: "비밀번호는 영어,숫자,특수문자를 포함한 8-16자여야 합니다.",
      },
    },
  },
]);

export default LOGIN;
