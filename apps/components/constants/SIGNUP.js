const SIGNUP = Object.freeze([
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Name",
    variant: "filled",
    rules: {
      required: "The input box must not be empty.",
      pattern: {
        value: /^(?![!@#$%^&*()\-_+=]).{0,50}$/,
        message:
          "The name must be in characters only and must be no more than 50 characters.",
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
      required: "The input box must not be empty.",
      pattern: {
        value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
        message:
          "Phone number should be in the format 000-0000-0000 and only contain numbers.",
      },
    },
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    variant: "filled",
    rules: {
      required: "The input box must not be empty.",
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: "You must keep the format of the e-mail.",
      },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    variant: "filled",
    rules: {
      required: "The input box must not be empty.",
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~`<>,./?;:'"\[\]{}\\()|_-])\S{8,16}$/,
        message:
          "Password must be within 8-16, including all English case, numbers, and special characters.",
      },
    },
  },
  {
    name: "passwordcheck",
    label: "Password Check",
    type: "password",
    variant: "filled",
    rules: {
      required: "The input box must not be empty.",
    },
  },
]);

export default SIGNUP;
