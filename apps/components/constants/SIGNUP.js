const SIGNUP = Object.freeze([
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
    variant: "filled",
    rules: {
      required: "이름을 입력하세요.",
      pattern: {
        value: /^(?![!@#$%^&*()\-_+=]).{0,50}$/,
        message: "이름은 50자 이내여야 합니다.",
      },
    },
  },
  {
    name: "phone",
    label: "TEL",
    type: "tel",
    placeholder: "phone number",
    variant: "filled",
    rules: {
      required: "전화번호를 입력하세요.",
      pattern: {
        value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
        message: "전화번호는 000-0000-0000 형식으로 입력하세요.",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    variant: "filled",
    rules: {
      required: "이메일 주소를 입력하세요.",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "이메일 형식으로 입력하세요.",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    variant: "filled",
    rules: {
      required: "비밀번호를 입력하세요.",
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~`<>,./?;:'"\[\]{}\\()|_-])\S{8,16}$/,
        message:
          "비밀번호는 영어 대소문자, 특수문자, 숫자를 모두 포함한 8-16자 문자여야 합니다.",
      },
    },
  },
  {
    name: "passwordcheck",
    label: "Password Check",
    type: "password",
    variant: "filled",
    rules: {
      required: "비밀번호를 확인해주세요.",
    },
  },
]);

export default SIGNUP;
